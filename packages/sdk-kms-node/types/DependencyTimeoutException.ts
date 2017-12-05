import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The system timed out while trying to fulfill the request. The request can be retried.</p>
 */
export interface DependencyTimeoutException extends __ServiceException__ {
    name: 'DependencyTimeoutException';
    details: DependencyTimeoutExceptionDetails_;
}

export interface DependencyTimeoutExceptionDetails_ {
    /**
     * _ErrorMessageType shape
     */
    message?: string;
}