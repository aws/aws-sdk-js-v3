import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>The request was rejected because an internal exception occurred. The request can be retried.</p>
 */
export interface KMSInternalException extends __ServiceException__<_KMSInternalExceptionDetails> {
    name: 'KMSInternalException';
}

export interface _KMSInternalExceptionDetails {
    /**
     * _ErrorMessageType shape
     */
    message?: string;
}