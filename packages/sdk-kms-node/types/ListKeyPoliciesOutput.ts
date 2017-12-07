import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * ListKeyPoliciesOutput shape
 */
export interface ListKeyPoliciesOutput {
    /**
     * <p>A list of policy names. Currently, there is only one policy and it is named "Default".</p>
     */
    PolicyNames?: Array<string>;

    /**
     * <p>When <code>Truncated</code> is true, this element is present and contains the value to use for the <code>Marker</code> parameter in a subsequent request.</p>
     */
    NextMarker?: string;

    /**
     * <p>A flag that indicates whether there are more items in the list. When this value is true, the list in this response is truncated. To get more items, pass the value of the <code>NextMarker</code> element in this response to the <code>Marker</code> parameter in a subsequent request.</p>
     */
    Truncated?: boolean;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}