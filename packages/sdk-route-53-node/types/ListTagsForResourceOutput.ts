import {_UnmarshalledResourceTagSet} from './_ResourceTagSet';
import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * <p>A complex type that contains information about the health checks or hosted zones for which you want to list tags.</p>
 */
export interface ListTagsForResourceOutput {
    /**
     * <p>A <code>ResourceTagSet</code> containing tags associated with the specified resource.</p>
     */
    ResourceTagSet: _UnmarshalledResourceTagSet;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}