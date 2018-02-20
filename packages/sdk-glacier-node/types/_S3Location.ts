import {_Encryption, _UnmarshalledEncryption} from './_Encryption';
import {_Grant, _UnmarshalledGrant} from './_Grant';

/**
 * <p>Contains information about the location in Amazon S3 where the select job results are stored.</p>
 */
export interface _S3Location {
    /**
     * <p>The name of the bucket where the restore results are stored.</p>
     */
    BucketName?: string;

    /**
     * <p>The prefix that is prepended to the restore results for this request.</p>
     */
    Prefix?: string;

    /**
     * <p>Contains information about the encryption used to store the job results in Amazon S3.</p>
     */
    Encryption?: _Encryption;

    /**
     * <p>The canned ACL to apply to the restore results.</p>
     */
    CannedACL?: 'private'|'public-read'|'public-read-write'|'aws-exec-read'|'authenticated-read'|'bucket-owner-read'|'bucket-owner-full-control'|string;

    /**
     * <p>A list of grants that control access to the staged results.</p>
     */
    AccessControlList?: Array<_Grant>|Iterable<_Grant>;

    /**
     * <p>The tag-set that is applied to the restore results.</p>
     */
    Tagging?: {[key: string]: string}|Iterable<[string, string]>;

    /**
     * <p>A map of metadata to store with the restore results in Amazon S3.</p>
     */
    UserMetadata?: {[key: string]: string}|Iterable<[string, string]>;

    /**
     * <p>The storage class used to store the restore results.</p>
     */
    StorageClass?: 'STANDARD'|'REDUCED_REDUNDANCY'|'STANDARD_IA'|string;
}

export interface _UnmarshalledS3Location extends _S3Location {
    /**
     * <p>Contains information about the encryption used to store the job results in Amazon S3.</p>
     */
    Encryption?: _UnmarshalledEncryption;

    /**
     * <p>A list of grants that control access to the staged results.</p>
     */
    AccessControlList?: Array<_UnmarshalledGrant>;

    /**
     * <p>The tag-set that is applied to the restore results.</p>
     */
    Tagging?: {[key: string]: string};

    /**
     * <p>A map of metadata to store with the restore results in Amazon S3.</p>
     */
    UserMetadata?: {[key: string]: string};
}