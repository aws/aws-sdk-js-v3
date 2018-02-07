import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The limit on the number of requests per second was exceeded.</p>
 */
export interface ThrottlingException extends __ServiceException__<_ThrottlingExceptionDetails> {
    name: 'ThrottlingException';
}

export interface _ThrottlingExceptionDetails {
    /**
     * _ErrorMessage shape
     */
    message?: string;
}