import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The request was rejected because the specified alias name is not valid.</p>
 */
export interface InvalidAliasNameException extends __ServiceException__ {
    name: 'InvalidAliasNameException';
    details: InvalidAliasNameExceptionDetails_;
}

export interface InvalidAliasNameExceptionDetails_ {
    /**
     * _ErrorMessageType shape
     */
    message?: string;
}