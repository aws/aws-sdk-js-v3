/**
 * Describes the server-side encryption that will be applied to the restore results.
 */
export interface _Encryption {
    /**
     * The server-side encryption algorithm used when storing job results in Amazon S3 (e.g., AES256, aws:kms).
     */
    EncryptionType: 'AES256'|'aws:kms'|string;

    /**
     * If the encryption type is aws:kms, this optional value specifies the AWS KMS key ID to use for encryption of job results.
     */
    KMSKeyId?: string;

    /**
     * If the encryption type is aws:kms, this optional value can be used to specify the encryption context for the restore results.
     */
    KMSContext?: string;
}

export type _UnmarshalledEncryption = _Encryption;