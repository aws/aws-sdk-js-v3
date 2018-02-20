import {_InventoryEncryption, _UnmarshalledInventoryEncryption} from './_InventoryEncryption';

/**
 * _InventoryS3BucketDestination shape
 */
export interface _InventoryS3BucketDestination {
    /**
     * _AccountId shape
     */
    AccountId?: string;

    /**
     * _BucketName shape
     */
    Bucket: string;

    /**
     * _InventoryFormat shape
     */
    Format: 'CSV'|'ORC'|string;

    /**
     * _Prefix shape
     */
    Prefix?: string;

    /**
     * _InventoryEncryption shape
     */
    Encryption?: _InventoryEncryption;
}

export interface _UnmarshalledInventoryS3BucketDestination extends _InventoryS3BucketDestination {
    /**
     * _InventoryEncryption shape
     */
    Encryption?: _UnmarshalledInventoryEncryption;
}