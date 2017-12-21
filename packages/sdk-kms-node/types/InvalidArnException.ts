import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The request was rejected because a specified ARN was not valid.</p>
 */
export interface InvalidArnException extends __ServiceException__<_InvalidArnExceptionDetails> {
    name: 'InvalidArnException';
}

export interface _InvalidArnExceptionDetails {
    /**
     * _ErrorMessageType shape
     */
    message?: string;
}