import {_Encryption, _UnmarshalledEncryption} from './_Encryption';
import {_Grant, _UnmarshalledGrant} from './_Grant';
import {_Tagging, _UnmarshalledTagging} from './_Tagging';
import {_MetadataEntry, _UnmarshalledMetadataEntry} from './_MetadataEntry';

/**
 * _S3Location shape
 */
export interface _S3Location {
    /**
     * _BucketName shape
     */
    BucketName: string;

    /**
     * _LocationPrefix shape
     */
    Prefix: string;

    /**
     * _Encryption shape
     */
    Encryption?: _Encryption;

    /**
     * _ObjectCannedACL shape
     */
    CannedACL?: 'private'|'public-read'|'public-read-write'|'authenticated-read'|'aws-exec-read'|'bucket-owner-read'|'bucket-owner-full-control'|string;

    /**
     * _Grants shape
     */
    AccessControlList?: Array<_Grant>|Iterable<_Grant>;

    /**
     * _Tagging shape
     */
    Tagging?: _Tagging;

    /**
     * _UserMetadata shape
     */
    UserMetadata?: Array<_MetadataEntry>|Iterable<_MetadataEntry>;

    /**
     * _StorageClass shape
     */
    StorageClass?: 'STANDARD'|'REDUCED_REDUNDANCY'|'STANDARD_IA'|string;
}

export interface _UnmarshalledS3Location extends _S3Location {
    /**
     * _Encryption shape
     */
    Encryption?: _UnmarshalledEncryption;

    /**
     * _Grants shape
     */
    AccessControlList?: Array<_UnmarshalledGrant>;

    /**
     * _Tagging shape
     */
    Tagging?: _UnmarshalledTagging;

    /**
     * _UserMetadata shape
     */
    UserMetadata?: Array<_UnmarshalledMetadataEntry>;
}