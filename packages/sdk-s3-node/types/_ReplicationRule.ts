import {_SourceSelectionCriteria, _UnmarshalledSourceSelectionCriteria} from './_SourceSelectionCriteria';
import {_Destination, _UnmarshalledDestination} from './_Destination';

/**
 * _ReplicationRule shape
 */
export interface _ReplicationRule {
    /**
     * _ID shape
     */
    ID?: string;

    /**
     * _Prefix shape
     */
    Prefix: string;

    /**
     * _ReplicationRuleStatus shape
     */
    Status: 'Enabled'|'Disabled'|string;

    /**
     * _SourceSelectionCriteria shape
     */
    SourceSelectionCriteria?: _SourceSelectionCriteria;

    /**
     * _Destination shape
     */
    Destination: _Destination;
}

export interface _UnmarshalledReplicationRule extends _ReplicationRule {
    /**
     * _SourceSelectionCriteria shape
     */
    SourceSelectionCriteria?: _UnmarshalledSourceSelectionCriteria;

    /**
     * _Destination shape
     */
    Destination: _UnmarshalledDestination;
}