import {_InventoryDestination, _UnmarshalledInventoryDestination} from './_InventoryDestination';
import {_InventoryFilter, _UnmarshalledInventoryFilter} from './_InventoryFilter';
import {_InventorySchedule, _UnmarshalledInventorySchedule} from './_InventorySchedule';

/**
 * _InventoryConfiguration shape
 */
export interface _InventoryConfiguration {
    /**
     * Contains information about where to publish the inventory results.
     */
    Destination: _InventoryDestination;

    /**
     * Specifies whether the inventory is enabled or disabled.
     */
    IsEnabled: boolean;

    /**
     * Specifies an inventory filter. The inventory only includes objects that meet the filter's criteria.
     */
    Filter?: _InventoryFilter;

    /**
     * The ID used to identify the inventory configuration.
     */
    Id: string;

    /**
     * Specifies which object version(s) to included in the inventory results.
     */
    IncludedObjectVersions: 'All'|'Current'|string;

    /**
     * Contains the optional fields that are included in the inventory results.
     */
    OptionalFields?: Array<'Size'|'LastModifiedDate'|'StorageClass'|'ETag'|'IsMultipartUploaded'|'ReplicationStatus'|'EncryptionStatus'|string>|Iterable<'Size'|'LastModifiedDate'|'StorageClass'|'ETag'|'IsMultipartUploaded'|'ReplicationStatus'|'EncryptionStatus'|string>;

    /**
     * Specifies the schedule for generating inventory results.
     */
    Schedule: _InventorySchedule;
}

export interface _UnmarshalledInventoryConfiguration extends _InventoryConfiguration {
    /**
     * Contains information about where to publish the inventory results.
     */
    Destination: _UnmarshalledInventoryDestination;

    /**
     * Specifies an inventory filter. The inventory only includes objects that meet the filter's criteria.
     */
    Filter?: _UnmarshalledInventoryFilter;

    /**
     * Contains the optional fields that are included in the inventory results.
     */
    OptionalFields?: Array<'Size'|'LastModifiedDate'|'StorageClass'|'ETag'|'IsMultipartUploaded'|'ReplicationStatus'|'EncryptionStatus'|string>;

    /**
     * Specifies the schedule for generating inventory results.
     */
    Schedule: _UnmarshalledInventorySchedule;
}