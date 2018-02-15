/**
 * _Bucket shape
 */
export interface _Bucket {
    /**
     * _BucketName shape
     */
    Name?: string;

    /**
     * _CreationDate shape
     */
    CreationDate?: Date|string|number;
}

export interface _UnmarshalledBucket extends _Bucket {
    /**
     * _CreationDate shape
     */
    CreationDate?: Date;
}