import * as __aws_types from '@aws/types';

/**
 * <p>A complex type that contains the response to a <code>GetHealthCheckCount</code> request.</p>
 */
export interface GetHealthCheckCountOutput {
    /**
     * <p>The number of health checks associated with the current AWS account.</p>
     */
    HealthCheckCount: number;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_types.ResponseMetadata;
}
