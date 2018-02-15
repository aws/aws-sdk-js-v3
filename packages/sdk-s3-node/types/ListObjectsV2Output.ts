import {_UnmarshalledObject} from './_Object';
import {_UnmarshalledCommonPrefix} from './_CommonPrefix';
import * as __aws_types from '@aws/types';

/**
 * ListObjectsV2Output shape
 */
export interface ListObjectsV2Output {
    /**
     * _IsTruncated shape
     */
    IsTruncated?: boolean;

    /**
     * _ObjectList shape
     */
    Contents?: Array<_UnmarshalledObject>;

    /**
     * _BucketName shape
     */
    Name?: string;

    /**
     * _Prefix shape
     */
    Prefix?: string;

    /**
     * _Delimiter shape
     */
    Delimiter?: string;

    /**
     * _MaxKeys shape
     */
    MaxKeys?: number;

    /**
     * _CommonPrefixList shape
     */
    CommonPrefixes?: Array<_UnmarshalledCommonPrefix>;

    /**
     * _EncodingType shape
     */
    EncodingType?: 'url'|string;

    /**
     * _KeyCount shape
     */
    KeyCount?: number;

    /**
     * _Token shape
     */
    ContinuationToken?: string;

    /**
     * _NextToken shape
     */
    NextContinuationToken?: string;

    /**
     * _StartAfter shape
     */
    StartAfter?: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_types.ResponseMetadata;
}
