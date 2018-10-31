import {_UnmarshalledQueryLoggingConfig} from './_QueryLoggingConfig';
import * as __aws_types from '@aws-sdk/types';

/**
 * ListQueryLoggingConfigsOutput shape
 */
export interface ListQueryLoggingConfigsOutput {
    /**
     * <p>An array that contains one <a>QueryLoggingConfig</a> element for each configuration for DNS query logging that is associated with the current AWS account.</p>
     */
    QueryLoggingConfigs: Array<_UnmarshalledQueryLoggingConfig>;

    /**
     * <p>If a response includes the last of the query logging configurations that are associated with the current AWS account, <code>NextToken</code> doesn't appear in the response.</p> <p>If a response doesn't include the last of the configurations, you can get more configurations by submitting another <a>ListQueryLoggingConfigs</a> request. Get the value of <code>NextToken</code> that Amazon Route 53 returned in the previous response and include it in <code>NextToken</code> in the next request.</p>
     */
    NextToken?: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_types.ResponseMetadata;
}
