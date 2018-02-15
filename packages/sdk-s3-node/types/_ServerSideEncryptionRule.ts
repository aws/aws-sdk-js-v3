import {_ServerSideEncryptionByDefault, _UnmarshalledServerSideEncryptionByDefault} from './_ServerSideEncryptionByDefault';

/**
 * _ServerSideEncryptionRule shape
 */
export interface _ServerSideEncryptionRule {
    /**
     * _ServerSideEncryptionByDefault shape
     */
    ApplyServerSideEncryptionByDefault?: _ServerSideEncryptionByDefault;
}

export interface _UnmarshalledServerSideEncryptionRule extends _ServerSideEncryptionRule {
    /**
     * _ServerSideEncryptionByDefault shape
     */
    ApplyServerSideEncryptionByDefault?: _UnmarshalledServerSideEncryptionByDefault;
}