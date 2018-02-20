import {_InventoryS3BucketDestination, _UnmarshalledInventoryS3BucketDestination} from './_InventoryS3BucketDestination';

/**
 * _InventoryDestination shape
 */
export interface _InventoryDestination {
    /**
     * _InventoryS3BucketDestination shape
     */
    S3BucketDestination: _InventoryS3BucketDestination;
}

export interface _UnmarshalledInventoryDestination extends _InventoryDestination {
    /**
     * _InventoryS3BucketDestination shape
     */
    S3BucketDestination: _UnmarshalledInventoryS3BucketDestination;
}