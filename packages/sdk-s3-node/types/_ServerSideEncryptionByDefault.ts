/**
 * _ServerSideEncryptionByDefault shape
 */
export interface _ServerSideEncryptionByDefault {
    /**
     * _ServerSideEncryption shape
     */
    SSEAlgorithm: 'AES256'|'aws:kms'|string;

    /**
     * _SSEKMSKeyId shape
     */
    KMSMasterKeyID?: string;
}

export type _UnmarshalledServerSideEncryptionByDefault = _ServerSideEncryptionByDefault;