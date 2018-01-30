/**
 * _CopyPartResult shape
 */
export interface _CopyPartResult {
    /**
     * Entity tag of the object.
     */
    ETag?: string;

    /**
     * Date and time at which the object was uploaded.
     */
    LastModified?: Date|string|number;
}

export interface _UnmarshalledCopyPartResult extends _CopyPartResult {
    /**
     * Date and time at which the object was uploaded.
     */
    LastModified?: Date;
}