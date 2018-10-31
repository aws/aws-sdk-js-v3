import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>The request was rejected because the specified grant token is not valid.</p>
 */
export interface InvalidGrantTokenException extends __ServiceException__<_InvalidGrantTokenExceptionDetails> {
    name: 'InvalidGrantTokenException';
}

export interface _InvalidGrantTokenExceptionDetails {
    /**
     * _ErrorMessageType shape
     */
    message?: string;
}