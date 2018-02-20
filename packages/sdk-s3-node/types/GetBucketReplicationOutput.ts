import {_UnmarshalledReplicationConfiguration} from './_ReplicationConfiguration';
import * as __aws_types from '@aws/types';

/**
 * GetBucketReplicationOutput shape
 */
export interface GetBucketReplicationOutput {
    /**
     * _ReplicationConfiguration shape
     */
    ReplicationConfiguration?: _UnmarshalledReplicationConfiguration;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_types.ResponseMetadata;
}
