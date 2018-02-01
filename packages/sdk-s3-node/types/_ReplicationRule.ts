import {_SourceSelectionCriteria, _UnmarshalledSourceSelectionCriteria} from './_SourceSelectionCriteria';
import {_Destination, _UnmarshalledDestination} from './_Destination';

/**
 * Container for information about a particular replication rule.
 */
export interface _ReplicationRule {
    /**
     * Unique identifier for the rule. The value cannot be longer than 255 characters.
     */
    ID?: string;

    /**
     * Object keyname prefix identifying one or more objects to which the rule applies. Maximum prefix length can be up to 1,024 characters. Overlapping prefixes are not supported.
     */
    Prefix: string;

    /**
     * The rule is ignored if status is not Enabled.
     */
    Status: 'Enabled'|'Disabled'|string;

    /**
     * Container for filters that define which source objects should be replicated.
     */
    SourceSelectionCriteria?: _SourceSelectionCriteria;

    /**
     * Container for replication destination information.
     */
    Destination: _Destination;
}

export interface _UnmarshalledReplicationRule extends _ReplicationRule {
    /**
     * Container for filters that define which source objects should be replicated.
     */
    SourceSelectionCriteria?: _UnmarshalledSourceSelectionCriteria;

    /**
     * Container for replication destination information.
     */
    Destination: _UnmarshalledDestination;
}