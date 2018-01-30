import {_UnmarshalledLoggingEnabled} from './_LoggingEnabled';
import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * GetBucketLoggingOutput shape
 */
export interface GetBucketLoggingOutput {
    /**
     * _LoggingEnabled shape
     */
    LoggingEnabled?: _UnmarshalledLoggingEnabled;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}