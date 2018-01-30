import {_InventoryS3BucketDestination, _UnmarshalledInventoryS3BucketDestination} from './_InventoryS3BucketDestination';

/**
 * _InventoryDestination shape
 */
export interface _InventoryDestination {
    /**
     * Contains the bucket name, file format, bucket owner (optional), and prefix (optional) where inventory results are published.
     */
    S3BucketDestination: _InventoryS3BucketDestination;
}

export interface _UnmarshalledInventoryDestination extends _InventoryDestination {
    /**
     * Contains the bucket name, file format, bucket owner (optional), and prefix (optional) where inventory results are published.
     */
    S3BucketDestination: _UnmarshalledInventoryS3BucketDestination;
}