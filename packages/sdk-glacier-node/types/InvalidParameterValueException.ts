import {ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>Returned if a parameter of the request is incorrectly specified.</p>
 */
export interface InvalidParameterValueException extends __ServiceException__<_InvalidParameterValueExceptionDetails> {
    name: 'InvalidParameterValueException';
}

export interface _InvalidParameterValueExceptionDetails {
    /**
     * <p>Client</p>
     */
    type?: string;

    /**
     * <p>400 Bad Request</p>
     */
    code?: string;

    /**
     * <p>Returned if a parameter of the request is incorrectly specified.</p>
     */
    message?: string;
}