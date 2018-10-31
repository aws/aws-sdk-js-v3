import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>The request was rejected because the specified alias name is not valid.</p>
 */
export interface InvalidAliasNameException extends __ServiceException__<_InvalidAliasNameExceptionDetails> {
    name: 'InvalidAliasNameException';
}

export interface _InvalidAliasNameExceptionDetails {
    /**
     * _ErrorMessageType shape
     */
    message?: string;
}