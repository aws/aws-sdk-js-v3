import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>An error on the server occurred when trying to process a request.</p>
 */
export interface InternalServerException extends __ServiceException__<_InternalServerExceptionDetails> {
    name: 'InternalServerException';
}

export interface _InternalServerExceptionDetails {
    /**
     * _ErrorMessage shape
     */
    message?: string;

    /**
     * _ErrorCode shape
     */
    code?: number;
}