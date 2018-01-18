import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * <p>The Amazon Glacier response to your request.</p>
 */
export interface InitiateMultipartUploadOutput {
    /**
     * <p>The relative URI path of the multipart upload ID Amazon Glacier created.</p>
     */
    location?: string;

    /**
     * <p>The ID of the multipart upload. This value is also included as part of the location.</p>
     */
    uploadId?: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}