import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * <p>The request was rejected because the provided import token is invalid or is associated with a different customer master key (CMK).</p>
 */
export interface InvalidImportTokenException {
    /**
     * <p>A trace of which functions were called leading to this error being raised.</p>
     */
    stack?: string;

    /**
     * <p>The species of error returned by the service.</p>
     */
    name?: string;

    /**
     * _ErrorMessageType shape
     */
    message?: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}