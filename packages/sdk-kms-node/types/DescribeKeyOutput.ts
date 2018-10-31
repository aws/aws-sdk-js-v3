import {_UnmarshalledKeyMetadata} from './_KeyMetadata';
import * as __aws_types from '@aws-sdk/types';

/**
 * DescribeKeyOutput shape
 */
export interface DescribeKeyOutput {
    /**
     * <p>Metadata associated with the key.</p>
     */
    KeyMetadata?: _UnmarshalledKeyMetadata;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_types.ResponseMetadata;
}
