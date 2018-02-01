import {_Owner, _UnmarshalledOwner} from './_Owner';

/**
 * _ObjectVersion shape
 */
export interface _ObjectVersion {
    /**
     * _ETag shape
     */
    ETag?: string;

    /**
     * Size in bytes of the object.
     */
    Size?: number;

    /**
     * The class of storage used to store the object.
     */
    StorageClass?: 'STANDARD'|string;

    /**
     * The object key.
     */
    Key?: string;

    /**
     * Version ID of an object.
     */
    VersionId?: string;

    /**
     * Specifies whether the object is (true) or is not (false) the latest version of an object.
     */
    IsLatest?: boolean;

    /**
     * Date and time the object was last modified.
     */
    LastModified?: Date|string|number;

    /**
     * _Owner shape
     */
    Owner?: _Owner;
}

export interface _UnmarshalledObjectVersion extends _ObjectVersion {
    /**
     * Date and time the object was last modified.
     */
    LastModified?: Date;

    /**
     * _Owner shape
     */
    Owner?: _UnmarshalledOwner;
}