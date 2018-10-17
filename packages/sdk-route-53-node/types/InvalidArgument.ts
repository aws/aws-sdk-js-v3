import {ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>Parameter name is invalid.</p>
 */
export interface InvalidArgument extends __ServiceException__<_InvalidArgumentDetails> {
    name: 'InvalidArgument';
}

export interface _InvalidArgumentDetails {
    /**
     * <p>Descriptive message for the error response.</p>
     */
    message?: string;
}