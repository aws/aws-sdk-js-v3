/**
 * _Part shape
 */
export interface _Part {
    /**
     * Part number identifying the part. This is a positive integer between 1 and 10,000.
     */
    PartNumber?: number;

    /**
     * Date and time at which the part was uploaded.
     */
    LastModified?: Date|string|number;

    /**
     * Entity tag returned when the part was uploaded.
     */
    ETag?: string;

    /**
     * Size of the uploaded part data.
     */
    Size?: number;
}

export interface _UnmarshalledPart extends _Part {
    /**
     * Date and time at which the part was uploaded.
     */
    LastModified?: Date;
}