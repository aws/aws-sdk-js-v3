/**
 * _Transition shape
 */
export interface _Transition {
    /**
     * Indicates at what date the object is to be moved or deleted. Should be in GMT ISO 8601 Format.
     */
    Date?: Date|string|number;

    /**
     * Indicates the lifetime, in days, of the objects that are subject to the rule. The value must be a non-zero positive integer.
     */
    Days?: number;

    /**
     * The class of storage used to store the object.
     */
    StorageClass?: 'GLACIER'|'STANDARD_IA'|string;
}

export interface _UnmarshalledTransition extends _Transition {
    /**
     * Indicates at what date the object is to be moved or deleted. Should be in GMT ISO 8601 Format.
     */
    Date?: Date;
}