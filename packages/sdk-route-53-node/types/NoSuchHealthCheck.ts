import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>No health check exists with the ID that you specified in the <code>DeleteHealthCheck</code> request.</p>
 */
export interface NoSuchHealthCheck extends __ServiceException__<_NoSuchHealthCheckDetails> {
    name: 'NoSuchHealthCheck';
}

export interface _NoSuchHealthCheckDetails {
    /**
     * <p>Descriptive message for the error response.</p>
     */
    message?: string;
}