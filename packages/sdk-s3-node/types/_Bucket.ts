/**
 * _Bucket shape
 */
export interface _Bucket {
    /**
     * The name of the bucket.
     */
    Name?: string;

    /**
     * Date the bucket was created.
     */
    CreationDate?: Date|string|number;
}

export interface _UnmarshalledBucket extends _Bucket {
    /**
     * Date the bucket was created.
     */
    CreationDate?: Date;
}