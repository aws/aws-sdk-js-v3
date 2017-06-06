import {Import} from "../Import";

const MD_PROP_ALIAS = '__ResponseMetadata__';

export const METADATA_PROPERTY_IMPORT = new Import(
    '@aws/types',
    `ResponseMetadata as ${MD_PROP_ALIAS}`
);

export function getOutputMetadataPropertyDefinition(): string {
    return `
/**
 * Metadata about the response received, including the HTTP status code, HTTP
 * headers, and any request identifiers recognized by the SDK.
 */
$metadata: ${MD_PROP_ALIAS};
    `.trim();
}
