import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>The request was rejected because the provided import token is invalid or is associated with a different customer master key (CMK).</p>
 */
export interface InvalidImportTokenException extends __ServiceException__<_InvalidImportTokenExceptionDetails> {
    name: 'InvalidImportTokenException';
}

export interface _InvalidImportTokenExceptionDetails {
    /**
     * _ErrorMessageType shape
     */
    message?: string;
}