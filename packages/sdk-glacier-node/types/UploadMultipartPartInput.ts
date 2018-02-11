import {NodeHttpOptions as __HttpOptions__} from '@aws/types';
import {Readable} from 'stream';
import * as __aws_types from '@aws/types';

/**
 * <p>Provides options to upload a part of an archive in a multipart upload operation.</p>
 */
export interface UploadMultipartPartInput<StreamType = Readable> {
    /**
     * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID. </p>
     */
    accountId: string;

    /**
     * <p>The name of the vault.</p>
     */
    vaultName: string;

    /**
     * <p>The upload ID of the multipart upload.</p>
     */
    uploadId: string;

    /**
     * <p>The SHA256 tree hash of the data being uploaded.</p>
     */
    checksum?: string;

    /**
     * <p>Identifies the range of bytes in the assembled archive that will be uploaded in this part. Amazon Glacier uses this information to assemble the archive in the proper sequence. The format of this header follows RFC 2616. An example header is Content-Range:bytes 0-4194303/*.</p>
     */
    range?: string;

    /**
     * <p>The data to upload.</p>
     */
    body?: ArrayBuffer|ArrayBufferView|string|StreamType;

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