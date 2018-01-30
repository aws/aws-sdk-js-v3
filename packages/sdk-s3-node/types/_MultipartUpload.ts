import {_Owner, _UnmarshalledOwner} from './_Owner';
import {_Initiator, _UnmarshalledInitiator} from './_Initiator';

/**
 * _MultipartUpload shape
 */
export interface _MultipartUpload {
    /**
     * Upload ID that identifies the multipart upload.
     */
    UploadId?: string;

    /**
     * Key of the object for which the multipart upload was initiated.
     */
    Key?: string;

    /**
     * Date and time at which the multipart upload was initiated.
     */
    Initiated?: Date|string|number;

    /**
     * The class of storage used to store the object.
     */
    StorageClass?: 'STANDARD'|'REDUCED_REDUNDANCY'|'STANDARD_IA'|string;

    /**
     * _Owner shape
     */
    Owner?: _Owner;

    /**
     * Identifies who initiated the multipart upload.
     */
    Initiator?: _Initiator;
}

export interface _UnmarshalledMultipartUpload extends _MultipartUpload {
    /**
     * Date and time at which the multipart upload was initiated.
     */
    Initiated?: Date;

    /**
     * _Owner shape
     */
    Owner?: _UnmarshalledOwner;

    /**
     * Identifies who initiated the multipart upload.
     */
    Initiator?: _UnmarshalledInitiator;
}