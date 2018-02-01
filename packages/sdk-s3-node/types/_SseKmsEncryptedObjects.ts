/**
 * Container for filter information of selection of KMS Encrypted S3 objects.
 */
export interface _SseKmsEncryptedObjects {
    /**
     * The replication for KMS encrypted S3 objects is disabled if status is not Enabled.
     */
    Status: 'Enabled'|'Disabled'|string;
}

export type _UnmarshalledSseKmsEncryptedObjects = _SseKmsEncryptedObjects;