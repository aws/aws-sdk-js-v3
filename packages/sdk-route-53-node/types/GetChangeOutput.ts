import {_UnmarshalledChangeInfo} from './_ChangeInfo';
import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * <p>A complex type that contains the <code>ChangeInfo</code> element.</p>
 */
export interface GetChangeOutput {
    /**
     * <p>A complex type that contains information about the specified change batch.</p>
     */
    ChangeInfo: _UnmarshalledChangeInfo;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}