import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The request was rejected because an internal exception occurred. The request can be retried.</p>
 */
export interface KMSInternalException extends __ServiceException__ {
    name: 'KMSInternalException';
    details: KMSInternalExceptionDetails_;
}

export interface KMSInternalExceptionDetails_ {
    /**
     * _ErrorMessageType shape
     */
    message?: string;
}