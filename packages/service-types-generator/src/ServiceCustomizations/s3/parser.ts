import {
  ConfigCustomizationDefinition,
  ServiceCustomizationDefinition,
  RuntimeTarget,
  TreeModel
} from "@aws-sdk/build-types";
import { packageNameToVariable } from "../../packageNameToVariable";
import { streamType as getStreamType } from "../../streamType";
import { IMPORTS } from "../../internalImports";

const typesPackage = packageNameToVariable("@aws-sdk/types");

export function parserCustomization(
  model: TreeModel,
  target: RuntimeTarget
): ServiceCustomizationDefinition {
  const streamType = getStreamType(target);
  return {
    client: [
      {
        type: "Configuration",
        configuration: {
          parser: {
            type: "unified",
            imports: [
              IMPORTS["protocol-rest"],
              IMPORTS["xml-body-parser"],
              IMPORTS["s3-error-unmarshaller"],
              IMPORTS.types
            ],
            inputType: `${typesPackage}.ResponseParser<${streamType}>`,
            documentation:
              "The parser to use when converting HTTP responses to SDK output types",
            required: false,
            internal: true,
            default: {
              type: "provider",
              expression: `(
    configuration: {
        base64Decoder: ${typesPackage}.Decoder,
        streamCollector: ${typesPackage}.StreamCollector<${streamType}>,
        utf8Encoder: ${typesPackage}.Encoder
    }
) => new ${packageNameToVariable(
                "@aws-sdk/protocol-rest"
              )}.RestParser<${streamType}>(
    new ${packageNameToVariable("@aws-sdk/xml-body-parser")}.XmlBodyParser(
        configuration.base64Decoder
    ),
    configuration.streamCollector,
    ${packageNameToVariable(
      "@aws-sdk/s3-error-unmarshaller"
    )}.s3ErrorUnmarshaller,
    configuration.utf8Encoder,
    configuration.base64Decoder
)`
            }
          }
        }
      }
    ],
    commands: {}
  };
}
