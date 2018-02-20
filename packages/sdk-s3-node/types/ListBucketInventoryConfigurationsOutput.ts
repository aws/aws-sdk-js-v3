import {_UnmarshalledInventoryConfiguration} from './_InventoryConfiguration';
import * as __aws_types from '@aws/types';

/**
 * ListBucketInventoryConfigurationsOutput shape
 */
export interface ListBucketInventoryConfigurationsOutput {
    /**
     * _Token shape
     */
    ContinuationToken?: string;

    /**
     * _InventoryConfigurationList shape
     */
    InventoryConfigurationList?: Array<_UnmarshalledInventoryConfiguration>;

    /**
     * _IsTruncated shape
     */
    IsTruncated?: boolean;

    /**
     * _NextToken shape
     */
    NextContinuationToken?: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_types.ResponseMetadata;
}
