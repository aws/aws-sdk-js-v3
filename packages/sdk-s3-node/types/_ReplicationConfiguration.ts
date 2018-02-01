import {_ReplicationRule, _UnmarshalledReplicationRule} from './_ReplicationRule';

/**
 * Container for replication rules. You can add as many as 1,000 rules. Total replication configuration size can be up to 2 MB.
 */
export interface _ReplicationConfiguration {
    /**
     * Amazon Resource Name (ARN) of an IAM role for Amazon S3 to assume when replicating the objects.
     */
    Role: string;

    /**
     * Container for information about a particular replication rule. Replication configuration must have at least one rule and can contain up to 1,000 rules.
     */
    Rules: Array<_ReplicationRule>|Iterable<_ReplicationRule>;
}

export interface _UnmarshalledReplicationConfiguration extends _ReplicationConfiguration {
    /**
     * Container for information about a particular replication rule. Replication configuration must have at least one rule and can contain up to 1,000 rules.
     */
    Rules: Array<_UnmarshalledReplicationRule>;
}