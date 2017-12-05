import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The request was rejected because the specified CMK was not available. The request can be retried.</p>
 */
export interface KeyUnavailableException extends __ServiceException__ {
    name: 'KeyUnavailableException';
    details: KeyUnavailableExceptionDetails_;
}

export interface KeyUnavailableExceptionDetails_ {
    /**
     * _ErrorMessageType shape
     */
    message?: string;
}