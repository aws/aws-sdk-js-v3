import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

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