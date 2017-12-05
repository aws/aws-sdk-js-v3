import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The request was rejected because the specified <code>GrantId</code> is not valid.</p>
 */
export interface InvalidGrantIdException extends __ServiceException__ {
    name: 'InvalidGrantIdException';
    details: InvalidGrantIdExceptionDetails_;
}

export interface InvalidGrantIdExceptionDetails_ {
    /**
     * _ErrorMessageType shape
     */
    message?: string;
}