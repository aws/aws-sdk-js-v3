import {_Encryption, _UnmarshalledEncryption} from './_Encryption';
import {_Grant, _UnmarshalledGrant} from './_Grant';
import {_Tagging, _UnmarshalledTagging} from './_Tagging';
import {_MetadataEntry, _UnmarshalledMetadataEntry} from './_MetadataEntry';

/**
 * Describes an S3 location that will receive the results of the restore request.
 */
export interface _S3Location {
    /**
     * The name of the bucket where the restore results will be placed.
     */
    BucketName: string;

    /**
     * The prefix that is prepended to the restore results for this request.
     */
    Prefix: string;

    /**
     * Describes the server-side encryption that will be applied to the restore results.
     */
    Encryption?: _Encryption;

    /**
     * The canned ACL to apply to the restore results.
     */
    CannedACL?: 'private'|'public-read'|'public-read-write'|'authenticated-read'|'aws-exec-read'|'bucket-owner-read'|'bucket-owner-full-control'|string;

    /**
     * A list of grants that control access to the staged results.
     */
    AccessControlList?: Array<_Grant>|Iterable<_Grant>;

    /**
     * The tag-set that is applied to the restore results.
     */
    Tagging?: _Tagging;

    /**
     * A list of metadata to store with the restore results in S3.
     */
    UserMetadata?: Array<_MetadataEntry>|Iterable<_MetadataEntry>;

    /**
     * The class of storage used to store the restore results.
     */
    StorageClass?: 'STANDARD'|'REDUCED_REDUNDANCY'|'STANDARD_IA'|string;
}

export interface _UnmarshalledS3Location extends _S3Location {
    /**
     * Describes the server-side encryption that will be applied to the restore results.
     */
    Encryption?: _UnmarshalledEncryption;

    /**
     * A list of grants that control access to the staged results.
     */
    AccessControlList?: Array<_UnmarshalledGrant>;

    /**
     * The tag-set that is applied to the restore results.
     */
    Tagging?: _UnmarshalledTagging;

    /**
     * A list of metadata to store with the restore results in S3.
     */
    UserMetadata?: Array<_UnmarshalledMetadataEntry>;
}