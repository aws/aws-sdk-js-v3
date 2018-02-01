import {_CreateBucketConfiguration} from './_CreateBucketConfiguration';
import {AbortSignal as __AbortSignal__, NodeHttpOptions as __HttpOptions__} from '@aws/types';

/**
 * CreateBucketInput shape
 */
export interface CreateBucketInput {
    /**
     * The canned ACL to apply to the bucket.
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
     * Allows grantee the read, write, read ACP, and write ACP permissions on the bucket.
     */
    GrantFullControl?: string;

    /**
     * Allows grantee to list the objects in the bucket.
     */
    GrantRead?: string;

    /**
     * Allows grantee to read the bucket ACL.
     */
    GrantReadACP?: string;

    /**
     * Allows grantee to create, overwrite, and delete any object in the bucket.
     */
    GrantWrite?: string;

    /**
     * Allows grantee to write the ACL for the applicable bucket.
     */
    GrantWriteACP?: string;

    /**
     * The maximum number of times this operation should be retried. If set, this
     * value will override the `maxRetries` configuration set on the client for
     * this command.
     */
    $maxRetries?: number;

    /**
     * An object that may be queried to determine if the underlying operation
     * has been aborted.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
     */
    $abortSignal?: __AbortSignal__

    /**
     * Per-request HTTP configuration options. If set, any options specified will
     * override the corresponding HTTP option set on the client for this command.
     */
    $httpOptions?: __HttpOptions__
}