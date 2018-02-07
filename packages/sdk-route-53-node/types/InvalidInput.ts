import {ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The input is not valid.</p>
 */
export interface InvalidInput extends __ServiceException__<_InvalidInputDetails> {
    name: 'InvalidInput';
}

export interface _InvalidInputDetails {
    /**
     * <p>Descriptive message for the error response.</p>
     */
    message?: string;
}