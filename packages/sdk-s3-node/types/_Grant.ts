import {_Grantee, _UnmarshalledGrantee} from './_Grantee';

/**
 * _Grant shape
 */
export interface _Grant {
    /**
     * _Grantee shape
     */
    Grantee?: _Grantee;

    /**
     * _Permission shape
     */
    Permission?: 'FULL_CONTROL'|'WRITE'|'WRITE_ACP'|'READ'|'READ_ACP'|string;
}

export interface _UnmarshalledGrant extends _Grant {
    /**
     * _Grantee shape
     */
    Grantee?: _UnmarshalledGrantee;
}