import { Import } from "../Import";
import { SyntheticParameterCustomizationDefinition } from "@aws-sdk/build-types";
import { IMPORTS } from "../../internalImports";
import { packageNameToVariable } from "../../packageNameToVariable";

export const SERVICE_EXCEPTION_ALIAS = "__ServiceException__";

export const SERVICE_EXCEPTION_METADATA_IMPORT = new Import(
  "@aws-sdk/types",
  `ServiceException as ${SERVICE_EXCEPTION_ALIAS}`
);

export const OUTPUT_METADATA_PROPERTY: SyntheticParameterCustomizationDefinition = {
  type: "SyntheticParameter",
  location: "output",
  typeExpression: `${packageNameToVariable("@aws-sdk/types")}.ResponseMetadata`,
  documentation:
    "Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.",
  name: "$metadata",
  imports: [IMPORTS.types],
  required: true
};

const HTTP_OPTIONS_ALIAS = "__HttpOptions__";

export const INPUT_TYPES_IMPORT_NODE = new Import(
  "@aws-sdk/types",
  `NodeHttpOptions as ${HTTP_OPTIONS_ALIAS}`
);

export const INPUT_TYPES_IMPORT_BROWSER = new Import(
  "@aws-sdk/types",
  `BrowserHttpOptions as ${HTTP_OPTIONS_ALIAS}`
);

export const INPUT_TYPES_IMPORT_UNIVERSAL = new Import(
  "@aws-sdk/types",
  `HttpOptions as ${HTTP_OPTIONS_ALIAS}`
);

export const INPUT_RETRIES_PROPERTY: SyntheticParameterCustomizationDefinition = {
  type: "SyntheticParameter",
  location: "input",
  typeExpression: "number",
  documentation:
    "The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.",
  name: "$maxRetries"
};

export const INPUT_SIGNAL_PROPERTY: SyntheticParameterCustomizationDefinition = {
  type: "SyntheticParameter",
  location: "input",
  typeExpression: `${packageNameToVariable("@aws-sdk/types")}.AbortSignal`,
  documentation: `An object that may be queried to determine if the underlying operation has been aborted.

@see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal`,
  name: "$abortSignal",
  imports: [IMPORTS.types]
};

export const INPUT_HTTP_OPTIONS_PROPERTY: SyntheticParameterCustomizationDefinition = {
  type: "SyntheticParameter",
  location: "input",
  typeExpression: HTTP_OPTIONS_ALIAS,
  documentation:
    "Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.",
  name: "$httpOptions"
};

export const INPUT_CONTROL_PROPERTIES = [
  INPUT_RETRIES_PROPERTY,
  INPUT_SIGNAL_PROPERTY,
  INPUT_HTTP_OPTIONS_PROPERTY
];
