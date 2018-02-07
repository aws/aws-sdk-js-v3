import {_UnmarshalledChangeInfo} from './_ChangeInfo';
import * as __aws_types from '@aws/types';

/**
 * <p>A complex type containing the response for the request.</p>
 */
export interface ChangeResourceRecordSetsOutput {
    /**
     * <p>A complex type that contains information about changes made to your hosted zone.</p> <p>This element contains an ID that you use when performing a <a>GetChange</a> action to get detailed information about the change.</p>
     */
    ChangeInfo: _UnmarshalledChangeInfo;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_types.ResponseMetadata;
}
