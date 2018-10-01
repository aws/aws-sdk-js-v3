import {_UnmarshalledSelectObjectContentEventStream} from './_SelectObjectContentEventStream';
import * as __aws_types from '@aws/types';

/**
 * SelectObjectContentOutput shape
 */
export interface SelectObjectContentOutput {
    /**
     * _SelectObjectContentEventStream shape
     */
    Payload?: _UnmarshalledSelectObjectContentEventStream;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_types.ResponseMetadata;
}
