import {_UnmarshalledDataSource} from './_DataSource';
import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * <p>Represents the query results from a <a>DescribeDataSources</a> operation. The content is essentially a list of <code>DataSource</code>.</p>
 */
export interface DescribeDataSourcesOutput {
    /**
     * <p>A list of <code>DataSource</code> that meet the search criteria. </p>
     */
    Results?: Array<_UnmarshalledDataSource>;

    /**
     * <p>An ID of the next page in the paginated results that indicates at least one more page follows.</p>
     */
    NextToken?: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}