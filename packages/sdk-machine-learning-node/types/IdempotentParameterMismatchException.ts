import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>A second request to use or change an object was not allowed. This can result from retrying a request using a parameter that was not present in the original request.</p>
 */
export interface IdempotentParameterMismatchException extends __ServiceException__<_IdempotentParameterMismatchExceptionDetails> {
    name: 'IdempotentParameterMismatchException';
}

export interface _IdempotentParameterMismatchExceptionDetails {
    /**
     * _ErrorMessage shape
     */
    message?: string;

    /**
     * _ErrorCode shape
     */
    code?: number;
}