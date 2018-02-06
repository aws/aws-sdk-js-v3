import {_UnmarshalledServerSideEncryptionConfiguration} from './_ServerSideEncryptionConfiguration';
import * as __aws_types from '@aws/types';

/**
 * GetBucketEncryptionOutput shape
 */
export interface GetBucketEncryptionOutput {
    /**
     * Container for server-side encryption configuration rules. Currently S3 supports one rule only.
     */
    ServerSideEncryptionConfiguration?: _UnmarshalledServerSideEncryptionConfiguration;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_types.ResponseMetadata;
}
