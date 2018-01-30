import {_InventoryEncryption, _UnmarshalledInventoryEncryption} from './_InventoryEncryption';

/**
 * _InventoryS3BucketDestination shape
 */
export interface _InventoryS3BucketDestination {
    /**
     * The ID of the account that owns the destination bucket.
     */
    AccountId?: string;

    /**
     * The Amazon resource name (ARN) of the bucket where inventory results will be published.
     */
    Bucket: string;

    /**
     * Specifies the output format of the inventory results.
     */
    Format: 'CSV'|'ORC'|string;

    /**
     * The prefix that is prepended to all inventory results.
     */
    Prefix?: string;

    /**
     * Contains the type of server-side encryption used to encrypt the inventory results.
     */
    Encryption?: _InventoryEncryption;
}

export interface _UnmarshalledInventoryS3BucketDestination extends _InventoryS3BucketDestination {
    /**
     * Contains the type of server-side encryption used to encrypt the inventory results.
     */
    Encryption?: _UnmarshalledInventoryEncryption;
}