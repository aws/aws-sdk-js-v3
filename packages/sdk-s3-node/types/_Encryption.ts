/**
 * _Encryption shape
 */
export interface _Encryption {
    /**
     * _ServerSideEncryption shape
     */
    EncryptionType: 'AES256'|'aws:kms'|string;

    /**
     * _SSEKMSKeyId shape
     */
    KMSKeyId?: string;

    /**
     * _KMSContext shape
     */
    KMSContext?: string;
}

export type _UnmarshalledEncryption = _Encryption;