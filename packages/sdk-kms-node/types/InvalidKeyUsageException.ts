import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The request was rejected because the specified <code>KeySpec</code> value is not valid.</p>
 */
export interface InvalidKeyUsageException extends __ServiceException__ {
    name: 'InvalidKeyUsageException';
    details: InvalidKeyUsageExceptionDetails_;
}

export interface InvalidKeyUsageExceptionDetails_ {
    /**
     * _ErrorMessageType shape
     */
    message?: string;
}