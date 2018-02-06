import * as __aws_types from '@aws/types';

/**
 * DeleteObjectOutput shape
 */
export interface DeleteObjectOutput {
    /**
     * Specifies whether the versioned object that was permanently deleted was (true) or was not (false) a delete marker.
     */
    DeleteMarker?: boolean;

    /**
     * Returns the version ID of the delete marker created as a result of the DELETE operation.
     */
    VersionId?: string;

    /**
     * If present, indicates that the requester was successfully charged for the request.
     */
    RequestCharged?: 'requester'|string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_types.ResponseMetadata;
}
