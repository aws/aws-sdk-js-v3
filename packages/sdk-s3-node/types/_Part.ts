/**
 * _Part shape
 */
export interface _Part {
    /**
     * _PartNumber shape
     */
    PartNumber?: number;

    /**
     * _LastModified shape
     */
    LastModified?: Date|string|number;

    /**
     * _ETag shape
     */
    ETag?: string;

    /**
     * _Size shape
     */
    Size?: number;
}

export interface _UnmarshalledPart extends _Part {
    /**
     * _LastModified shape
     */
    LastModified?: Date;
}