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
     * _Size shape
     */
    Size?: number;

    /**
     * _ObjectVersionStorageClass shape
     */
    StorageClass?: 'STANDARD'|string;

    /**
     * _ObjectKey shape
     */
    Key?: string;

    /**
     * _ObjectVersionId shape
     */
    VersionId?: string;

    /**
     * _IsLatest shape
     */
    IsLatest?: boolean;

    /**
     * _LastModified shape
     */
    LastModified?: Date|string|number;

    /**
     * _Owner shape
     */
    Owner?: _Owner;
}

export interface _UnmarshalledObjectVersion extends _ObjectVersion {
    /**
     * _LastModified shape
     */
    LastModified?: Date;

    /**
     * _Owner shape
     */
    Owner?: _UnmarshalledOwner;
}