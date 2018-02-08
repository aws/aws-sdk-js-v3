import {_UnmarshalledProvisionedCapacityDescription} from './_ProvisionedCapacityDescription';
import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * ListProvisionedCapacityOutput shape
 */
export interface ListProvisionedCapacityOutput {
    /**
     * <p>The response body contains the following JSON fields.</p>
     */
    ProvisionedCapacityList?: Array<_UnmarshalledProvisionedCapacityDescription>;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}