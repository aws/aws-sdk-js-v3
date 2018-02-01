/**
 * Container for information regarding encryption based configuration for replicas.
 */
export interface _EncryptionConfiguration {
    /**
     * The id of the KMS key used to encrypt the replica object.
     */
    ReplicaKmsKeyID?: string;
}

export type _UnmarshalledEncryptionConfiguration = _EncryptionConfiguration;