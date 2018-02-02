import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * <p> Represents the output of a <code>DeleteDataSource</code> operation.</p>
 */
export interface DeleteDataSourceOutput {
    /**
     * <p>A user-supplied ID that uniquely identifies the <code>DataSource</code>. This value should be identical to the value of the <code>DataSourceID</code> in the request.</p>
     */
    DataSourceId?: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}