import {_UnmarshalledPartListElement} from './_PartListElement';
import * as __aws_types from '@aws-sdk/types';

/**
 * <p>Contains the Amazon Glacier response to your request.</p>
 */
export interface ListPartsOutput {
    /**
     * <p>The ID of the upload to which the parts are associated.</p>
     */
    MultipartUploadId?: string;

    /**
     * <p>The Amazon Resource Name (ARN) of the vault to which the multipart upload was initiated.</p>
     */
    VaultARN?: string;

    /**
     * <p>The description of the archive that was specified in the Initiate Multipart Upload request.</p>
     */
    ArchiveDescription?: string;

    /**
     * <p>The part size in bytes. This is the same value that you specified in the Initiate Multipart Upload request.</p>
     */
    PartSizeInBytes?: number;

    /**
     * <p>The UTC time at which the multipart upload was initiated.</p>
     */
    CreationDate?: string;

    /**
     * <p>A list of the part sizes of the multipart upload. Each object in the array contains a <code>RangeBytes</code> and <code>sha256-tree-hash</code> name/value pair.</p>
     */
    Parts?: Array<_UnmarshalledPartListElement>;

    /**
     * <p>An opaque string that represents where to continue pagination of the results. You use the marker in a new List Parts request to obtain more jobs in the list. If there are no more parts, this value is <code>null</code>.</p>
     */
    Marker?: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_types.ResponseMetadata;
}
