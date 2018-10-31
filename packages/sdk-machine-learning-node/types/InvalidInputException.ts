import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
 */
export interface InvalidInputException extends __ServiceException__<_InvalidInputExceptionDetails> {
    name: 'InvalidInputException';
}

export interface _InvalidInputExceptionDetails {
    /**
     * _ErrorMessage shape
     */
    message?: string;

    /**
     * _ErrorCode shape
     */
    code?: number;
}