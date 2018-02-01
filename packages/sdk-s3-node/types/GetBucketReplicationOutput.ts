import {_UnmarshalledReplicationConfiguration} from './_ReplicationConfiguration';
import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * GetBucketReplicationOutput shape
 */
export interface GetBucketReplicationOutput {
    /**
     * Container for replication rules. You can add as many as 1,000 rules. Total replication configuration size can be up to 2 MB.
     */
    ReplicationConfiguration?: _UnmarshalledReplicationConfiguration;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}