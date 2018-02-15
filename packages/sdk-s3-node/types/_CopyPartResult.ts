/**
 * _CopyPartResult shape
 */
export interface _CopyPartResult {
    /**
     * _ETag shape
     */
    ETag?: string;

    /**
     * _LastModified shape
     */
    LastModified?: Date|string|number;
}

export interface _UnmarshalledCopyPartResult extends _CopyPartResult {
    /**
     * _LastModified shape
     */
    LastModified?: Date;
}