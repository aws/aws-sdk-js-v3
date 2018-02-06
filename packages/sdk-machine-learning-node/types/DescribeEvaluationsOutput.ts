import {_UnmarshalledEvaluation} from './_Evaluation';
import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * <p>Represents the query results from a <code>DescribeEvaluations</code> operation. The content is essentially a list of <code>Evaluation</code>.</p>
 */
export interface DescribeEvaluationsOutput {
    /**
     * <p>A list of <code>Evaluation</code> that meet the search criteria. </p>
     */
    Results?: Array<_UnmarshalledEvaluation>;

    /**
     * <p>The ID of the next page in the paginated results that indicates at least one more page follows.</p>
     */
    NextToken?: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}