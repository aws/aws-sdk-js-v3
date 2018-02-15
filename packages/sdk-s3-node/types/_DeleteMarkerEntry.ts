import {_Owner, _UnmarshalledOwner} from './_Owner';

/**
 * _DeleteMarkerEntry shape
 */
export interface _DeleteMarkerEntry {
    /**
     * _Owner shape
     */
    Owner?: _Owner;

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
}

export interface _UnmarshalledDeleteMarkerEntry extends _DeleteMarkerEntry {
    /**
     * _Owner shape
     */
    Owner?: _UnmarshalledOwner;

    /**
     * _LastModified shape
     */
    LastModified?: Date;
}