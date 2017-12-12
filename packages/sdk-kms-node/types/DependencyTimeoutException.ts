import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * <p>The system timed out while trying to fulfill the request. The request can be retried.</p>
 */
export interface DependencyTimeoutException {
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