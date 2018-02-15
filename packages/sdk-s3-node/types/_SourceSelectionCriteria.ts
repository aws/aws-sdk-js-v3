import {_SseKmsEncryptedObjects, _UnmarshalledSseKmsEncryptedObjects} from './_SseKmsEncryptedObjects';

/**
 * _SourceSelectionCriteria shape
 */
export interface _SourceSelectionCriteria {
    /**
     * _SseKmsEncryptedObjects shape
     */
    SseKmsEncryptedObjects?: _SseKmsEncryptedObjects;
}

export interface _UnmarshalledSourceSelectionCriteria extends _SourceSelectionCriteria {
    /**
     * _SseKmsEncryptedObjects shape
     */
    SseKmsEncryptedObjects?: _UnmarshalledSseKmsEncryptedObjects;
}