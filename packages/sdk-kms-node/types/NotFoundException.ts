import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>The request was rejected because the specified entity or resource could not be found.</p>
 */
export interface NotFoundException extends __ServiceException__<_NotFoundExceptionDetails> {
    name: 'NotFoundException';
}

export interface _NotFoundExceptionDetails {
    /**
     * _ErrorMessageType shape
     */
    message?: string;
}