import {_UnmarshalledDeletedObject} from './_DeletedObject';
import {_UnmarshalledError} from './_Error';
import * as __aws_types from '@aws/types';

/**
 * DeleteObjectsOutput shape
 */
export interface DeleteObjectsOutput {
    /**
     * _DeletedObjects shape
     */
    Deleted?: Array<_UnmarshalledDeletedObject>;

    /**
     * _RequestCharged shape
     */
    RequestCharged?: 'requester'|string;

    /**
     * _Errors shape
     */
    Errors?: Array<_UnmarshalledError>;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_types.ResponseMetadata;
}
