import {_Owner, _UnmarshalledOwner} from './_Owner';
import {_Initiator, _UnmarshalledInitiator} from './_Initiator';

/**
 * _MultipartUpload shape
 */
export interface _MultipartUpload {
    /**
     * _MultipartUploadId shape
     */
    UploadId?: string;

    /**
     * _ObjectKey shape
     */
    Key?: string;

    /**
     * _Initiated shape
     */
    Initiated?: Date|string|number;

    /**
     * _StorageClass shape
     */
    StorageClass?: 'STANDARD'|'REDUCED_REDUNDANCY'|'STANDARD_IA'|string;

    /**
     * _Owner shape
     */
    Owner?: _Owner;

    /**
     * _Initiator shape
     */
    Initiator?: _Initiator;
}

export interface _UnmarshalledMultipartUpload extends _MultipartUpload {
    /**
     * _Initiated shape
     */
    Initiated?: Date;

    /**
     * _Owner shape
     */
    Owner?: _UnmarshalledOwner;

    /**
     * _Initiator shape
     */
    Initiator?: _UnmarshalledInitiator;
}