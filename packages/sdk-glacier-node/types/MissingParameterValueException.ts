import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>Returned if a required header or parameter is missing from the request.</p>
 */
export interface MissingParameterValueException extends __ServiceException__<_MissingParameterValueExceptionDetails> {
    name: 'MissingParameterValueException';
}

export interface _MissingParameterValueExceptionDetails {
    /**
     * <p>Client.</p>
     */
    type?: string;

    /**
     * <p>400 Bad Request</p>
     */
    code?: string;

    /**
     * <p>Returned if no authentication data is found for the request.</p>
     */
    message?: string;
}