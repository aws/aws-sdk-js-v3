import {_UnmarshalledAccountLimit} from './_AccountLimit';
import * as __aws_types from '@aws/types';

/**
 * <p>A complex type that contains the requested limit. </p>
 */
export interface GetAccountLimitOutput {
    /**
     * <p>The current setting for the specified limit. For example, if you specified <code>MAX_HEALTH_CHECKS_BY_OWNER</code> for the value of <code>Type</code> in the request, the value of <code>Limit</code> is the maximum number of health checks that you can create using the current account.</p>
     */
    Limit: _UnmarshalledAccountLimit;

    /**
     * <p>The current number of entities that you have created of the specified type. For example, if you specified <code>MAX_HEALTH_CHECKS_BY_OWNER</code> for the value of <code>Type</code> in the request, the value of <code>Count</code> is the current number of health checks that you have created using the current account.</p>
     */
    Count: number;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_types.ResponseMetadata;
}
