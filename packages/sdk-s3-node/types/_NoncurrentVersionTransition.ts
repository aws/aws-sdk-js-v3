/**
 * _NoncurrentVersionTransition shape
 */
export interface _NoncurrentVersionTransition {
    /**
     * _Days shape
     */
    NoncurrentDays?: number;

    /**
     * _TransitionStorageClass shape
     */
    StorageClass?: 'GLACIER'|'STANDARD_IA'|string;
}

export type _UnmarshalledNoncurrentVersionTransition = _NoncurrentVersionTransition;