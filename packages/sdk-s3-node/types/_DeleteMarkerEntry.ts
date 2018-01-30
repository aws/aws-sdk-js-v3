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
}

export interface _UnmarshalledDeleteMarkerEntry extends _DeleteMarkerEntry {
    /**
     * _Owner shape
     */
    Owner?: _UnmarshalledOwner;

    /**
     * Date and time the object was last modified.
     */
    LastModified?: Date;
}