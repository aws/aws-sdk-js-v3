/**
 * _Transition shape
 */
export interface _Transition {
    /**
     * _Date shape
     */
    Date?: Date|string|number;

    /**
     * _Days shape
     */
    Days?: number;

    /**
     * _TransitionStorageClass shape
     */
    StorageClass?: 'GLACIER'|'STANDARD_IA'|string;
}

export interface _UnmarshalledTransition extends _Transition {
    /**
     * _Date shape
     */
    Date?: Date;
}