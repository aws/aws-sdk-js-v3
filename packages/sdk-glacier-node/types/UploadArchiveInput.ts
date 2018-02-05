import {Readable} from 'stream';

/**
 * <p>Provides options to add an archive to a vault.</p>
 */
export interface UploadArchiveInput<StreamType = Readable> {
    /**
     * <p>The name of the vault.</p>
     */
    vaultName: string;

    /**
     * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID. </p>
     */
    accountId: string;

    /**
     * <p>The optional description of the archive you are uploading.</p>
     */
    archiveDescription?: string;

    /**
     * <p>The SHA256 tree hash of the data being uploaded.</p>
     */
    checksum?: string;

    /**
     * <p>The data to upload.</p>
     */
    body?: ArrayBuffer|ArrayBufferView|string|StreamType;
}