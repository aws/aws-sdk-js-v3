import {_UnmarshalledHealthCheck} from './_HealthCheck';
import * as __aws_types from '@aws-sdk/types';

/**
 * UpdateHealthCheckOutput shape
 */
export interface UpdateHealthCheckOutput {
    /**
     * <p>A complex type that contains information about one health check that is associated with the current AWS account.</p>
     */
    HealthCheck: _UnmarshalledHealthCheck;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_types.ResponseMetadata;
}
