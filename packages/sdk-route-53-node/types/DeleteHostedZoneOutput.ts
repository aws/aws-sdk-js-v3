import {_UnmarshalledChangeInfo} from './_ChangeInfo';
import * as __aws_types from '@aws/types';

/**
 * <p>A complex type that contains the response to a <code>DeleteHostedZone</code> request.</p>
 */
export interface DeleteHostedZoneOutput {
    /**
     * <p>A complex type that contains the ID, the status, and the date and time of a request to delete a hosted zone.</p>
     */
    ChangeInfo: _UnmarshalledChangeInfo;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_types.ResponseMetadata;
}
