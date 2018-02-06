import {_UnmarshalledTag} from './_Tag';
import * as __aws_types from '@aws/types';

/**
 * GetBucketTaggingOutput shape
 */
export interface GetBucketTaggingOutput {
    /**
     * _TagSet shape
     */
    TagSet: Array<_UnmarshalledTag>;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata?: __aws_types.ResponseMetadata;
}
