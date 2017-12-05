import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The request was rejected because the provided import token is invalid or is associated with a different customer master key (CMK).</p>
 */
export interface InvalidImportTokenException extends __ServiceException__ {
    name: 'InvalidImportTokenException';
    details: InvalidImportTokenExceptionDetails_;
}

export interface InvalidImportTokenExceptionDetails_ {
    /**
     * _ErrorMessageType shape
     */
    message?: string;
}