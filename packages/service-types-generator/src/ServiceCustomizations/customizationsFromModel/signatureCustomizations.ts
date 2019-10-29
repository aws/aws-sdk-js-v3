import { IMPORTS } from "../../internalImports";
import { packageNameToVariable } from "../../packageNameToVariable";
import {
  credentials,
  region,
  sha256,
  optionalCredentials
} from "./standardConfigurationProperties";
import { staticOrProvider } from "./staticOrProvider";
import {
  ConfigurationDefinition,
  ConfigurationPropertyDefinition,
  CustomizationDefinition,
  ServiceCustomizationDefinition,
  TreeModel,
  RuntimeTarget,
  MiddlewareCustomizationDefinition,
  TreeModelOperation
} from "@aws-sdk/build-types";
import { ServiceMetadata, SupportedSignatureVersion } from "@aws-sdk/types";
import { streamType } from "../../streamType";

interface AuthTypeMap {
  client: SupportedSignatureVersion;
  commands: {
    [commandName: string]: SupportedSignatureVersion;
  };
}

export function signatureCustomizations(
  model: TreeModel,
  runtime: RuntimeTarget
): ServiceCustomizationDefinition {
  const authTypeMap = authTypeMapFromModel(model);

  if (
    authTypeMap.client === "none" &&
    Object.keys(authTypeMap.commands).length === 0
  ) {
    return { client: [], commands: {} };
  }

  return {
    client: clientCustomizationsForAuthType(
      authTypeMap.client,
      model.metadata,
      runtime
    ).concat({
      type: "Configuration",
      configuration: {
        // Any client that might ever need credentials should have
        // a default credential provider loaded at client construction.
        // Otherwise, each operation would create and memoize a new
        // credential provider, leading to heavy IMDS traffic.
        // FIXME: This should probably be addressed by memoizing
        // default credential providers
        credentials:
          authTypeMap.client === "none" ? optionalCredentials : credentials,
        signingName: signingNameProperty(model.metadata),
        signer: signerProperty(model.metadata),
        sha256
      }
    }),
    commands: Object.keys(authTypeMap.commands).reduce(
      (commandCustomizations, commandName) => {
        return {
          ...commandCustomizations,
          [commandName]: commandCustomizationsForAuthType(
            authTypeMap.client,
            authTypeMap.commands[commandName],
            model.metadata,
            commandName,
            runtime
          )
        };
      },
      {}
    )
  };
}

/**
 * @internal
 */
function authTypeMapFromModel({
  metadata: { signatureVersion },
  operations
}: TreeModel): AuthTypeMap {
  const authtypes = new Set<SupportedSignatureVersion>([signatureVersion]);
  const authTypeMap = Object.keys(operations).reduce(
    (authMap, operationName) => {
      const { authtype } = operations[operationName];
      if (authtype) {
        authtypes.add(authtype);
        authMap.commands[operationName] = authtype;
      }
      return authMap;
    },
    { client: signatureVersion, commands: {} } as AuthTypeMap
  );

  // Ensure the client's auth type is always the least stringent used in the
  // model, even if the model was not authored in this way. For example, a
  // service using v4 auth with one unauthenticated operation would usually
  // define the client signatureVersion as 'v4' and add an authtype trait of
  // 'none' to the unauthenticated operation. For the purposes of code
  // generation, however, we want the client to only require the lowest common
  // denominator of signature dependencies, so the model is reinterpreted as
  // having a signatureVersion of 'none', and an authtype of 'v4' is added to
  // all operations EXCEPT the unauthenticated one. This allows users loading
  // only the unauthenticated command to tree-shake out all signature-related
  // dependencies.
  const lcdAuthType = [...authtypes]
    .sort((a, b) => authTypeWeight(b) - authTypeWeight(a))
    .pop() as SupportedSignatureVersion;

  if (lcdAuthType !== signatureVersion) {
    authTypeMap.client = lcdAuthType;
    for (const operationName of Object.keys(operations)) {
      if (!(operationName in authTypeMap.commands)) {
        authTypeMap.commands[operationName] = signatureVersion;
      } else if (authTypeMap.commands[operationName] === lcdAuthType) {
        delete authTypeMap.commands[operationName];
      }
    }
  }

  return authTypeMap;
}

/**
 * @internal
 */
function authTypeWeight(authtype: SupportedSignatureVersion): number {
  switch (authtype) {
    case "none":
      return 0;
    case "s3":
    case "s3v4":
    case "v4":
      return 1;
    case "v4-unsigned-body":
      return 2;
  }
}

/**
 * @internal
 */
function clientCustomizationsForAuthType(
  authType: SupportedSignatureVersion,
  metadata: ServiceMetadata,
  runtime: RuntimeTarget
): Array<CustomizationDefinition> {
  const customizations: Array<CustomizationDefinition> = [];

  if (authType !== "none") {
    customizations.push({
      type: "Middleware",
      step: "finalize",
      priority: 0,
      tags: "{SIGNATURE: true}",
      configuration: {
        credentials,
        region,
        sha256,
        signingName: signingNameProperty(metadata),
        signer: signerProperty(metadata)
      },
      imports: [IMPORTS["middleware-signing"]],
      expression: `${packageNameToVariable(
        "@aws-sdk/middleware-signing"
      )}.signingMiddleware<InputTypesUnion, OutputTypesUnion, ${streamType(
        runtime
      )}>(this.config.signer)`
    });
  }

  if (authType === "v4-unsigned-body") {
    customizations.push({
      type: "Middleware",
      step: "build",
      priority: 100,
      imports: [IMPORTS["middleware-header-default"]],
      tags: "{UNSIGNED_PAYLOAD: true}",
      expression: `${packageNameToVariable(
        "@aws-sdk/middleware-header-default"
      )}.headerDefault({'X-Amz-Content-Sha256': 'UNSIGNED_PAYLOAD'})`
    });
  }

  return customizations;
}

/**
 * @internal
 */
function commandCustomizationsForAuthType(
  clientAuthType: SupportedSignatureVersion,
  authType: SupportedSignatureVersion,
  metadata: ServiceMetadata,
  commandName: string,
  runtime: RuntimeTarget
): Array<CustomizationDefinition> {
  const customizations: Array<CustomizationDefinition> = [];

  if (authType !== "none" && clientAuthType === "none") {
    customizations.push({
      type: "Middleware",
      step: "finalize",
      priority: 0,
      tags: "{SIGNATURE: true}",
      configuration: {
        credentials,
        region,
        sha256,
        signingName: signingNameProperty(metadata),
        signer: signerProperty(metadata)
      },
      imports: [IMPORTS["middleware-signing"]],
      expression: `${packageNameToVariable(
        "@aws-sdk/middleware-signing"
      )}.signingMiddleware<${commandName}Input, ${commandName}Output, ${streamType(
        runtime
      )}>(configuration.signer)`
    });
  }

  if (authType === "v4-unsigned-body") {
    customizations.push({
      type: "Middleware",
      step: "build",
      priority: 100,
      imports: [IMPORTS["middleware-header-default"]],
      tags: "{UNSIGNED_PAYLOAD: true}",
      expression: `${packageNameToVariable(
        "@aws-sdk/middleware-header-default"
      )}.headerDefault({'X-Amz-Content-Sha256': 'UNSIGNED_PAYLOAD'})`
    });
  }

  return customizations;
}

/**
 * @internal
 */
function signerProperty(
  metadata: ServiceMetadata
): ConfigurationPropertyDefinition {
  const typesPackage = packageNameToVariable("@aws-sdk/types");
  // for sig version not 's3' or 's3v4', the uriEscapePath should be true
  const uriEscapePath = ["s3", "s3v4"].indexOf(metadata.signatureVersion) < 0;

  return {
    type: "unified",
    inputType: `${typesPackage}.RequestSigner`,
    imports: [
      IMPORTS.types,
      IMPORTS["signature-v4"],
      IMPORTS["middleware-signing"]
    ],
    documentation: "The signer to use when signing requests.",
    required: false,
    default: {
      type: "provider",
      expression: `(
    configuration: {
        credentials: ${typesPackage}.Provider<${typesPackage}.Credentials>,
        region: ${typesPackage}.Provider<string>,
        sha256: ${typesPackage}.HashConstructor,
        signingName: string,
    }
) => new ${packageNameToVariable("@aws-sdk/signature-v4")}.SignatureV4({
    credentials: configuration.credentials,
    region: configuration.region,
    service: configuration.signingName,
    sha256: configuration.sha256,
    uriEscapePath: ${uriEscapePath},
})`
    }
  };
}

/**
 * @internal
 */
function signingNameProperty(
  metadata: ServiceMetadata
): ConfigurationPropertyDefinition {
  return {
    type: "unified",
    inputType: "string",
    imports: [IMPORTS.types],
    documentation: "The service name with which to sign requests.",
    required: false,
    default: {
      type: "value",
      expression: `'${metadata.signingName || metadata.endpointPrefix}'`
    }
  };
}
