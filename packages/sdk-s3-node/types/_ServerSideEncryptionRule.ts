import {_ServerSideEncryptionByDefault, _UnmarshalledServerSideEncryptionByDefault} from './_ServerSideEncryptionByDefault';

/**
 * Container for information about a particular server-side encryption configuration rule.
 */
export interface _ServerSideEncryptionRule {
    /**
     * Describes the default server-side encryption to apply to new objects in the bucket. If Put Object request does not specify any server-side encryption, this default encryption will be applied.
     */
    ApplyServerSideEncryptionByDefault?: _ServerSideEncryptionByDefault;
}

export interface _UnmarshalledServerSideEncryptionRule extends _ServerSideEncryptionRule {
    /**
     * Describes the default server-side encryption to apply to new objects in the bucket. If Put Object request does not specify any server-side encryption, this default encryption will be applied.
     */
    ApplyServerSideEncryptionByDefault?: _UnmarshalledServerSideEncryptionByDefault;
}