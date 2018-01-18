import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * <p>Returned if the request results in a vault or account limit being exceeded.</p>
 */
export interface LimitExceededException {
    /**
     * <p>A trace of which functions were called leading to this error being raised.</p>
     */
    stack?: string;

    /**
     * <p>The species of error returned by the service.</p>
     */
    name?: string;

    /**
     * <p>Client</p>
     */
    type?: string;

    /**
     * <p>400 Bad Request</p>
     */
    code?: string;

    /**
     * <p>Returned if the request results in a vault limit or tags limit being exceeded.</p>
     */
    message?: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}