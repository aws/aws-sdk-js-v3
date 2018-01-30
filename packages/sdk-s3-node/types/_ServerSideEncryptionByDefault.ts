/**
 * Describes the default server-side encryption to apply to new objects in the bucket. If Put Object request does not specify any server-side encryption, this default encryption will be applied.
 */
export interface _ServerSideEncryptionByDefault {
    /**
     * Server-side encryption algorithm to use for the default encryption.
     */
    SSEAlgorithm: 'AES256'|'aws:kms'|string;

    /**
     * KMS master key ID to use for the default encryption. This parameter is allowed if SSEAlgorithm is aws:kms.
     */
    KMSMasterKeyID?: string;
}

export type _UnmarshalledServerSideEncryptionByDefault = _ServerSideEncryptionByDefault;