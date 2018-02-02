import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * InvalidTagException shape
 */
export interface InvalidTagException extends __ServiceException__<_InvalidTagExceptionDetails> {
    name: 'InvalidTagException';
}

export interface _InvalidTagExceptionDetails {
    /**
     * _ErrorMessage shape
     */
    message?: string;
}