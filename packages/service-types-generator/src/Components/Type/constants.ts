import {Import} from "../Import";

const MD_PROP_ALIAS = '__ResponseMetadata__';

export const SVC_EXP_ALIAS = '__ServiceException__';

export const SERVICE_EXCEPTION_METADATA_IMPORT = new Import(
    '@aws/types',
    `ResponseMetadata as ${MD_PROP_ALIAS}`,
    `ServiceException as ${SVC_EXP_ALIAS}`
)

export const METADATA_PROPERTY_IMPORT = new Import(
    '@aws/types',
    `ResponseMetadata as ${MD_PROP_ALIAS}`
);

export const OUTPUT_TYPES_IMPORT = new Import(
    '@aws/types',
    `ResponseMetadata as ${MD_PROP_ALIAS}`
);

export const OUTPUT_METADATA_PROPERTY =
`/**
 * Metadata about the response received, including the HTTP status code, HTTP
 * headers, and any request identifiers recognized by the SDK.
 */
$metadata: ${MD_PROP_ALIAS};`;

const SIGNAL_PROP_ALIAS = '__AbortSignal__';

const HTTP_OPTIONS_ALIAS = '__HttpOptions__';

export const INPUT_TYPES_IMPORT_NODE = new Import(
    '@aws/types',
    `AbortSignal as ${SIGNAL_PROP_ALIAS}`,
    `NodeHttpOptions as ${HTTP_OPTIONS_ALIAS}`
);

export const INPUT_TYPES_IMPORT_BROWSER = new Import(
    '@aws/types',
    `AbortSignal as ${SIGNAL_PROP_ALIAS}`,
    `BrowserHttpOptions as ${HTTP_OPTIONS_ALIAS}`
);

export const INPUT_TYPES_IMPORT_UNIVERSAL = new Import(
    '@aws/types',
    `AbortSignal as ${SIGNAL_PROP_ALIAS}`,
    `HttpOptions as ${HTTP_OPTIONS_ALIAS}`
);

export const INPUT_RETRIES_PROPERTY =
`/**
 * The maximum number of times this operation should be retried. If set, this
 * value will override the \`maxRetries\` configuration set on the client for
 * this command.
 */
$maxRetries?: number;`;

export const INPUT_SIGNAL_PROPERTY =
`/**
 * An object that may be queried to determine if the underlying operation
 * has been aborted.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
 */
$abortSignal?: ${SIGNAL_PROP_ALIAS}`;

export const INPUT_HTTP_OPTIONS_PROPERTY =
`/**
 * Per-request HTTP configuration options. If set, any options specified will
 * override the corresponding HTTP option set on the client for this command.
 */
$httpOptions?: ${HTTP_OPTIONS_ALIAS}`;

export const INPUT_CONTROL_PROPERTIES = [
    INPUT_RETRIES_PROPERTY,
    INPUT_SIGNAL_PROPERTY,
    INPUT_HTTP_OPTIONS_PROPERTY,
];
