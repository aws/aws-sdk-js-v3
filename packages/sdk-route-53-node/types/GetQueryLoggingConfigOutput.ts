import {_UnmarshalledQueryLoggingConfig} from './_QueryLoggingConfig';
import * as __aws_types from '@aws/types';

/**
 * GetQueryLoggingConfigOutput shape
 */
export interface GetQueryLoggingConfigOutput {
    /**
     * <p>A complex type that contains information about the query logging configuration that you specified in a <a>GetQueryLoggingConfig</a> request.</p>
     */
    QueryLoggingConfig: _UnmarshalledQueryLoggingConfig;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_types.ResponseMetadata;
}
