import {_Grantee, _UnmarshalledGrantee} from './_Grantee';

/**
 * _TargetGrant shape
 */
export interface _TargetGrant {
    /**
     * _Grantee shape
     */
    Grantee?: _Grantee;

    /**
     * Logging permissions assigned to the Grantee for the bucket.
     */
    Permission?: 'FULL_CONTROL'|'READ'|'WRITE'|string;
}

export interface _UnmarshalledTargetGrant extends _TargetGrant {
    /**
     * _Grantee shape
     */
    Grantee?: _UnmarshalledGrantee;
}