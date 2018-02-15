import {_InventoryDestination, _UnmarshalledInventoryDestination} from './_InventoryDestination';
import {_InventoryFilter, _UnmarshalledInventoryFilter} from './_InventoryFilter';
import {_InventorySchedule, _UnmarshalledInventorySchedule} from './_InventorySchedule';

/**
 * _InventoryConfiguration shape
 */
export interface _InventoryConfiguration {
    /**
     * _InventoryDestination shape
     */
    Destination: _InventoryDestination;

    /**
     * _IsEnabled shape
     */
    IsEnabled: boolean;

    /**
     * _InventoryFilter shape
     */
    Filter?: _InventoryFilter;

    /**
     * _InventoryId shape
     */
    Id: string;

    /**
     * _InventoryIncludedObjectVersions shape
     */
    IncludedObjectVersions: 'All'|'Current'|string;

    /**
     * _InventoryOptionalFields shape
     */
    OptionalFields?: Array<'Size'|'LastModifiedDate'|'StorageClass'|'ETag'|'IsMultipartUploaded'|'ReplicationStatus'|'EncryptionStatus'|string>|Iterable<'Size'|'LastModifiedDate'|'StorageClass'|'ETag'|'IsMultipartUploaded'|'ReplicationStatus'|'EncryptionStatus'|string>;

    /**
     * _InventorySchedule shape
     */
    Schedule: _InventorySchedule;
}

export interface _UnmarshalledInventoryConfiguration extends _InventoryConfiguration {
    /**
     * _InventoryDestination shape
     */
    Destination: _UnmarshalledInventoryDestination;

    /**
     * _InventoryFilter shape
     */
    Filter?: _UnmarshalledInventoryFilter;

    /**
     * _InventoryOptionalFields shape
     */
    OptionalFields?: Array<'Size'|'LastModifiedDate'|'StorageClass'|'ETag'|'IsMultipartUploaded'|'ReplicationStatus'|'EncryptionStatus'|string>;

    /**
     * _InventorySchedule shape
     */
    Schedule: _UnmarshalledInventorySchedule;
}