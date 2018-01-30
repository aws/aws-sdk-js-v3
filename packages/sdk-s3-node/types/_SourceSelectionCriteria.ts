import {_SseKmsEncryptedObjects, _UnmarshalledSseKmsEncryptedObjects} from './_SseKmsEncryptedObjects';

/**
 * Container for filters that define which source objects should be replicated.
 */
export interface _SourceSelectionCriteria {
    /**
     * Container for filter information of selection of KMS Encrypted S3 objects.
     */
    SseKmsEncryptedObjects?: _SseKmsEncryptedObjects;
}

export interface _UnmarshalledSourceSelectionCriteria extends _SourceSelectionCriteria {
    /**
     * Container for filter information of selection of KMS Encrypted S3 objects.
     */
    SseKmsEncryptedObjects?: _UnmarshalledSseKmsEncryptedObjects;
}