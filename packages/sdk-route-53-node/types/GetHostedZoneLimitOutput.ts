import {_UnmarshalledHostedZoneLimit} from './_HostedZoneLimit';
import * as __aws_types from '@aws-sdk/types';

/**
 * <p>A complex type that contains the requested limit. </p>
 */
export interface GetHostedZoneLimitOutput {
    /**
     * <p>The current setting for the specified limit. For example, if you specified <code>MAX_RRSETS_BY_ZONE</code> for the value of <code>Type</code> in the request, the value of <code>Limit</code> is the maximum number of records that you can create in the specified hosted zone.</p>
     */
    Limit: _UnmarshalledHostedZoneLimit;

    /**
     * <p>The current number of entities that you have created of the specified type. For example, if you specified <code>MAX_RRSETS_BY_ZONE</code> for the value of <code>Type</code> in the request, the value of <code>Count</code> is the current number of records that you have created in the specified hosted zone.</p>
     */
    Count: number;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_types.ResponseMetadata;
}
