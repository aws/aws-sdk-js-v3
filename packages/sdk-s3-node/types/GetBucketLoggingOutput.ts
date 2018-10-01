import {_UnmarshalledLoggingEnabled} from './_LoggingEnabled';
import * as __aws_types from '@aws/types';

/**
 * GetBucketLoggingOutput shape
 */
export interface GetBucketLoggingOutput {
    /**
     * <p>Container for logging information. Presence of this element indicates that logging is enabled. Parameters TargetBucket and TargetPrefix are required in this case.</p>
     */
    LoggingEnabled?: _UnmarshalledLoggingEnabled;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_types.ResponseMetadata;
}
