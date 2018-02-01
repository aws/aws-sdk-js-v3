import {_Owner, _UnmarshalledOwner} from './_Owner';

/**
 * _Object shape
 */
export interface _Object {
    /**
     * _ObjectKey shape
     */
    Key?: string;

    /**
     * _LastModified shape
     */
    LastModified?: Date|string|number;

    /**
     * _ETag shape
     */
    ETag?: string;

    /**
     * _Size shape
     */
    Size?: number;

    /**
     * The class of storage used to store the object.
     */
    StorageClass?: 'STANDARD'|'REDUCED_REDUNDANCY'|'GLACIER'|string;

    /**
     * _Owner shape
     */
    Owner?: _Owner;
}

export interface _UnmarshalledObject extends _Object {
    /**
     * _LastModified shape
     */
    LastModified?: Date;

    /**
     * _Owner shape
     */
    Owner?: _UnmarshalledOwner;
}