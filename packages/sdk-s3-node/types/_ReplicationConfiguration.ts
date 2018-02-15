import {_ReplicationRule, _UnmarshalledReplicationRule} from './_ReplicationRule';

/**
 * _ReplicationConfiguration shape
 */
export interface _ReplicationConfiguration {
    /**
     * _Role shape
     */
    Role: string;

    /**
     * _ReplicationRules shape
     */
    Rules: Array<_ReplicationRule>|Iterable<_ReplicationRule>;
}

export interface _UnmarshalledReplicationConfiguration extends _ReplicationConfiguration {
    /**
     * _ReplicationRules shape
     */
    Rules: Array<_UnmarshalledReplicationRule>;
}