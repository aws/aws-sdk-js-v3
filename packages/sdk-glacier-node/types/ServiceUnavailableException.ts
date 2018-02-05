import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * <p>Returned if the service cannot complete the request.</p>
 */
export interface ServiceUnavailableException {
    /**
     * <p>A trace of which functions were called leading to this error being raised.</p>
     */
    stack?: string;

    /**
     * <p>The species of error returned by the service.</p>
     */
    name?: string;

    /**
     * <p>Server</p>
     */
    type?: string;

    /**
     * <p>500 Internal Server Error</p>
     */
    code?: string;

    /**
     * <p>Returned if the service cannot complete the request.</p>
     */
    message?: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}