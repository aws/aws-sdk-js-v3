/**
 * Specifies the days since the initiation of an Incomplete Multipart Upload that Lifecycle will wait before permanently removing all parts of the upload.
 */
export interface _AbortIncompleteMultipartUpload {
    /**
     * Indicates the number of days that must pass since initiation for Lifecycle to abort an Incomplete Multipart Upload.
     */
    DaysAfterInitiation?: number;
}

export type _UnmarshalledAbortIncompleteMultipartUpload = _AbortIncompleteMultipartUpload;