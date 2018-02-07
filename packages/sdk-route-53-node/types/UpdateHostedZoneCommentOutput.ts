import {_UnmarshalledHostedZone} from './_HostedZone';
import * as __aws_types from '@aws/types';

/**
 * <p>A complex type that contains the response to the <code>UpdateHostedZoneComment</code> request.</p>
 */
export interface UpdateHostedZoneCommentOutput {
    /**
     * <p>A complex type that contains general information about the hosted zone.</p>
     */
    HostedZone: _UnmarshalledHostedZone;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_types.ResponseMetadata;
}
