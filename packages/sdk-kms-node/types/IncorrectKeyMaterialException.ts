import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>The request was rejected because the provided key material is invalid or is not the same key material that was previously imported into this customer master key (CMK).</p>
 */
export interface IncorrectKeyMaterialException extends __ServiceException__<_IncorrectKeyMaterialExceptionDetails> {
    name: 'IncorrectKeyMaterialException';
}

export interface _IncorrectKeyMaterialExceptionDetails {
    /**
     * _ErrorMessageType shape
     */
    message?: string;
}