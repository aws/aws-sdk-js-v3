/**
 * _CompletedPart shape
 */
export interface _CompletedPart {
    /**
     * Entity tag returned when the part was uploaded.
     */
    ETag?: string;

    /**
     * Part number that identifies the part. This is a positive integer between 1 and 10,000.
     */
    PartNumber?: number;
}

export type _UnmarshalledCompletedPart = _CompletedPart;