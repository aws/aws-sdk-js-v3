import { IMPORTS } from "../../internalImports";
import { IndentedSection } from "../../Components/IndentedSection";
import { md5 } from "../customizationsFromModel/standardConfigurationProperties";
import { packageNameToVariable } from "../../packageNameToVariable";
import {
  CustomizationDefinition,
  MiddlewareCustomizationDefinition,
  ServiceCustomizationDefinition,
  SyntheticParameterCustomizationDefinition,
  TreeModel,
  ParameterSuppressionCustomizationDefinition
} from "@aws-sdk/build-types";

type SsecPropertiesConfiguration<Input extends object> = {
  [sourceProperty in keyof Input]?: {
    targetProperty: string;
    hashTargetProperty: string;
  };
};

function ssecMiddleware(
  inputType: string,
  props: SsecPropertiesConfiguration<any>
): MiddlewareCustomizationDefinition {
  return {
    type: "Middleware",
    step: "initialize",
    priority: 0,
    imports: [IMPORTS["ssec-middleware"]],
    expression: `${packageNameToVariable(
      "@aws-sdk/ssec-middleware"
    )}.ssecMiddleware<${inputType}>({
        base64Encoder: configuration.base64Encoder,
        hashConstructor: configuration.md5,
${new IndentedSection(`ssecProperties: ${ssecProperties(props)}`, 2)},
        utf8Decoder: configuration.utf8Decoder,
    })`,
    configuration: { md5 }
  };
}

function ssecProperties(props: SsecPropertiesConfiguration<any>): string {
  const propExpressions = Object.keys(props).map(
    propName =>
      `${propName}: {
    targetProperty: '${(props[propName] as any).targetProperty}',
    hashTargetProperty: '${(props[propName] as any).hashTargetProperty}',
}`
  );

  return `{\n${new IndentedSection(propExpressions.join(",\n"))}\n}`;
}

const keyType = `${packageNameToVariable("@aws-sdk/types")}.SourceData`;

const ssecKeyProperty: SyntheticParameterCustomizationDefinition = {
  type: "SyntheticParameter",
  name: "$serverSideEncryptionKey",
  location: "input",
  typeExpression: keyType,
  documentation:
    "Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This value is used to store the object and then it is discarded; Amazon does not store the encryption key. The key must be appropriate for use with the algorithm specified in the `SSECustomerAlgorithm` parameter"
};

const ssecKeyPropertySuppression: ParameterSuppressionCustomizationDefinition = {
  type: "ParameterSuppression",
  location: "input",
  name: "SSECustomerKey"
};

const ssecKeyHashPropertySuppression: ParameterSuppressionCustomizationDefinition = {
  ...ssecKeyPropertySuppression,
  name: "SSECustomerKeyMD5"
};

const copySourceSsecKeyProperty: SyntheticParameterCustomizationDefinition = {
  ...ssecKeyProperty,
  name: "$copySourceServerSideEncryptionKey",
  documentation:
    "Specifies the customer-provided encryption key for Amazon S3 to use to decrypt the source object. The encryption key provided in this header must be one that was used when the source object was created."
};

const copySourceSsecKeyPropertySuppression: ParameterSuppressionCustomizationDefinition = {
  ...ssecKeyPropertySuppression,
  name: "CopySourceSSECustomerKey"
};

const copySourceSsecKeyHashPropertySuppression: ParameterSuppressionCustomizationDefinition = {
  ...ssecKeyPropertySuppression,
  name: "CopySourceSSECustomerKeyMD5"
};

export function ssecCustomizations(
  model: TreeModel
): ServiceCustomizationDefinition {
  return {
    client: [
      {
        type: "Configuration",
        configuration: { md5 }
      }
    ],
    commands: Object.keys(model.operations).reduce(
      (operationMap, operationName) => {
        const customizations: Array<CustomizationDefinition> = [];
        const {
          input: {
            shape: { members }
          }
        } = model.operations[operationName];
        const ssecProps: SsecPropertiesConfiguration<any> = {};

        if ("SSECustomerKey" in members) {
          ssecProps[ssecKeyProperty.name] = {
            targetProperty: "SSECustomerKey",
            hashTargetProperty: "SSECustomerKeyMD5"
          };
          customizations.push(
            ssecKeyProperty,
            ssecKeyPropertySuppression,
            ssecKeyHashPropertySuppression
          );
        }

        if ("CopySourceSSECustomerKey" in members) {
          ssecProps[copySourceSsecKeyProperty.name] = {
            targetProperty: "CopySourceSSECustomerKey",
            hashTargetProperty: "CopySourceSSECustomerKeyMD5"
          };
          customizations.push(
            copySourceSsecKeyProperty,
            copySourceSsecKeyPropertySuppression,
            copySourceSsecKeyHashPropertySuppression
          );
        }

        if (Object.keys(ssecProps).length > 0) {
          operationMap[operationName] = customizations.concat(
            ssecMiddleware(`${operationName}Input`, ssecProps)
          );
        }

        return operationMap;
      },
      {} as { [operationName: string]: Array<CustomizationDefinition> }
    )
  };
}
