import {Readable} from 'stream';
import * as __aws_types from '@aws/types';

/**
 * GetObjectOutput shape
 */
export interface GetObjectOutput<StreamType = Readable> {
    /**
     * _Body shape
     */
    Body?: StreamType;

    /**
     * _DeleteMarker shape
     */
    DeleteMarker?: boolean;

    /**
     * _AcceptRanges shape
     */
    AcceptRanges?: string;

    /**
     * _Expiration shape
     */
    Expiration?: string;

    /**
     * _Restore shape
     */
    Restore?: string;

    /**
     * _LastModified shape
     */
    LastModified?: Date;

    /**
     * _ContentLength shape
     */
    ContentLength?: number;

    /**
     * _ETag shape
     */
    ETag?: string;

    /**
     * _MissingMeta shape
     */
    MissingMeta?: number;

    /**
     * _ObjectVersionId shape
     */
    VersionId?: string;

    /**
     * _CacheControl shape
     */
    CacheControl?: string;

    /**
     * _ContentDisposition shape
     */
    ContentDisposition?: string;

    /**
     * _ContentEncoding shape
     */
    ContentEncoding?: string;

    /**
     * _ContentLanguage shape
     */
    ContentLanguage?: string;

    /**
     * _ContentRange shape
     */
    ContentRange?: string;

    /**
     * _ContentType shape
     */
    ContentType?: string;

    /**
     * _Expires shape
     */
    Expires?: Date;

    /**
     * _WebsiteRedirectLocation shape
     */
    WebsiteRedirectLocation?: string;

    /**
     * _ServerSideEncryption shape
     */
    ServerSideEncryption?: 'AES256'|'aws:kms'|string;

    /**
     * _Metadata shape
     */
    Metadata?: {[key: string]: string};

    /**
     * _SSECustomerAlgorithm shape
     */
    SSECustomerAlgorithm?: string;

    /**
     * _SSECustomerKeyMD5 shape
     */
    SSECustomerKeyMD5?: string;

    /**
     * _SSEKMSKeyId shape
     */
    SSEKMSKeyId?: string;

    /**
     * _StorageClass shape
     */
    StorageClass?: 'STANDARD'|'REDUCED_REDUNDANCY'|'STANDARD_IA'|string;

    /**
     * _RequestCharged shape
     */
    RequestCharged?: 'requester'|string;

    /**
     * _ReplicationStatus shape
     */
    ReplicationStatus?: 'COMPLETE'|'PENDING'|'FAILED'|'REPLICA'|string;

    /**
     * _PartsCount shape
     */
    PartsCount?: number;

    /**
     * _TagCount shape
     */
    TagCount?: number;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_types.ResponseMetadata;
}
