import {_CreateBucketConfiguration} from './_CreateBucketConfiguration';
import {NodeHttpOptions as __HttpOptions__} from '@aws/types';
import * as __aws_types from '@aws/types';

/**
 * CreateBucketInput shape
 */
export interface CreateBucketInput {
    /**
     * _BucketCannedACL shape
     */
    ACL?: 'private'|'public-read'|'public-read-write'|'authenticated-read'|string;

    /**
     * _BucketName shape
     */
    Bucket: string;

    /**
     * _CreateBucketConfiguration shape
     */
    CreateBucketConfiguration?: _CreateBucketConfiguration;

    /**
     * _GrantFullControl shape
     */
    GrantFullControl?: string;

    /**
     * _GrantRead shape
     */
    GrantRead?: string;

    /**
     * _GrantReadACP shape
     */
    GrantReadACP?: string;

    /**
     * _GrantWrite shape
     */
    GrantWrite?: string;

    /**
     * _GrantWriteACP shape
     */
    GrantWriteACP?: string;

    /**
     * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
     */
    $maxRetries?: number;

    /**
     * An object that may be queried to determine if the underlying operation has been aborted.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
     */
    $abortSignal?: __aws_types.AbortSignal;

    /**
     * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
     */
    $httpOptions?: __HttpOptions__;
}