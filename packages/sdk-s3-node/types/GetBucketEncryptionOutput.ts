import {_UnmarshalledServerSideEncryptionConfiguration} from './_ServerSideEncryptionConfiguration';
import * as __aws_types from '@aws/types';

/**
 * GetBucketEncryptionOutput shape
 */
export interface GetBucketEncryptionOutput {
    /**
     * _ServerSideEncryptionConfiguration shape
     */
    ServerSideEncryptionConfiguration?: _UnmarshalledServerSideEncryptionConfiguration;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_types.ResponseMetadata;
}
