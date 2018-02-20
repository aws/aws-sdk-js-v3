/**
 * <p>Contains information about the encryption used to store the job results in Amazon S3. </p>
 */
export interface _Encryption {
    /**
     * <p>The server-side encryption algorithm used when storing job results in Amazon S3, for example <code>AES256</code> or <code>aws:kms</code>.</p>
     */
    EncryptionType?: 'aws:kms'|'AES256'|string;

    /**
     * <p>The AWS KMS key ID to use for object encryption. All GET and PUT requests for an object protected by AWS KMS fail if not made by using Secure Sockets Layer (SSL) or Signature Version 4. </p>
     */
    KMSKeyId?: string;

    /**
     * <p>Optional. If the encryption type is <code>aws:kms</code>, you can use this value to specify the encryption context for the restore results.</p>
     */
    KMSContext?: string;
}

export type _UnmarshalledEncryption = _Encryption;