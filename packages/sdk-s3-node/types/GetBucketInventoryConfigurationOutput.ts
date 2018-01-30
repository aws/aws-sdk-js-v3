import {_UnmarshalledInventoryConfiguration} from './_InventoryConfiguration';
import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * GetBucketInventoryConfigurationOutput shape
 */
export interface GetBucketInventoryConfigurationOutput {
    /**
     * Specifies the inventory configuration.
     */
    InventoryConfiguration?: _UnmarshalledInventoryConfiguration;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}