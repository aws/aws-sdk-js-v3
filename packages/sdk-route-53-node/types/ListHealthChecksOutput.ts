import {_UnmarshalledHealthCheck} from './_HealthCheck';
import * as __aws_types from '@aws/types';

/**
 * <p>A complex type that contains the response to a <code>ListHealthChecks</code> request.</p>
 */
export interface ListHealthChecksOutput {
    /**
     * <p>A complex type that contains one <code>HealthCheck</code> element for each health check that is associated with the current AWS account.</p>
     */
    HealthChecks: Array<_UnmarshalledHealthCheck>;

    /**
     * <p>For the second and subsequent calls to <code>ListHealthChecks</code>, <code>Marker</code> is the value that you specified for the <code>marker</code> parameter in the previous request.</p>
     */
    Marker: string;

    /**
     * <p>A flag that indicates whether there are more health checks to be listed. If the response was truncated, you can get the next group of health checks by submitting another <code>ListHealthChecks</code> request and specifying the value of <code>NextMarker</code> in the <code>marker</code> parameter.</p>
     */
    IsTruncated: boolean;

    /**
     * <p>If <code>IsTruncated</code> is <code>true</code>, the value of <code>NextMarker</code> identifies the first health check that Amazon Route 53 returns if you submit another <code>ListHealthChecks</code> request and specify the value of <code>NextMarker</code> in the <code>marker</code> parameter.</p>
     */
    NextMarker?: string;

    /**
     * <p>The value that you specified for the <code>maxitems</code> parameter in the call to <code>ListHealthChecks</code> that produced the current response.</p>
     */
    MaxItems: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_types.ResponseMetadata;
}
