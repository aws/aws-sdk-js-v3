import * as __aws_types from '@aws/types';

/**
 * <p>Contains the Amazon Glacier response to your request.</p> <p>For information about the underlying REST API, see <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/api-archive-post.html">Upload Archive</a>. For conceptual information, see <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/working-with-archives.html">Working with Archives in Amazon Glacier</a>.</p>
 */
export interface UploadArchiveOutput {
    /**
     * <p>The relative URI path of the newly added archive resource.</p>
     */
    location?: string;

    /**
     * <p>The checksum of the archive computed by Amazon Glacier.</p>
     */
    checksum?: string;

    /**
     * <p>The ID of the archive. This value is also included as part of the location.</p>
     */
    archiveId?: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_types.ResponseMetadata;
}
