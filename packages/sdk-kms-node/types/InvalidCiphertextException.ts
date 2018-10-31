import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>The request was rejected because the specified ciphertext, or additional authenticated data incorporated into the ciphertext, such as the encryption context, is corrupted, missing, or otherwise invalid.</p>
 */
export interface InvalidCiphertextException extends __ServiceException__<_InvalidCiphertextExceptionDetails> {
    name: 'InvalidCiphertextException';
}

export interface _InvalidCiphertextExceptionDetails {
    /**
     * _ErrorMessageType shape
     */
    message?: string;
}