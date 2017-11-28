import {Import} from "../Import";

const MD_PROP_ALIAS = '__ResponseMetadata__';

export const SVC_EXP_ALIAS = '__ServiceException__';

export const READABLE_STREAM = 'ReadableStream';

export const SERVICEEXCEPTION_METADATA_IMPORT = new Import(
    '@aws/types',
    `ResponseMetadata as ${MD_PROP_ALIAS}`,
    `ServiceException as ${SVC_EXP_ALIAS}`
)

export const METADATA_PROPERTY_IMPORT = new Import(
    '@aws/types',
    `ResponseMetadata as ${MD_PROP_ALIAS}`
);

export const OUTPUT_METADATA_PROPERTY = `
/**
 * Metadata about the response received, including the HTTP status code, HTTP
 * headers, and any request identifiers recognized by the SDK.
 */
$metadata: ${MD_PROP_ALIAS};
`.trim();
