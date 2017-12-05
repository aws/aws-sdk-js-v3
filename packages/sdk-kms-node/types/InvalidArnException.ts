import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The request was rejected because a specified ARN was not valid.</p>
 */
export interface InvalidArnException extends __ServiceException__ {
    name: 'InvalidArnException';
    details: InvalidArnExceptionDetails_;
}

export interface InvalidArnExceptionDetails_ {
    /**
     * _ErrorMessageType shape
     */
    message?: string;
}