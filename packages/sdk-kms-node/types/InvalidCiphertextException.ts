import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The request was rejected because the specified ciphertext, or additional authenticated data incorporated into the ciphertext, such as the encryption context, is corrupted, missing, or otherwise invalid.</p>
 */
export interface InvalidCiphertextException extends __ServiceException__ {
    name: 'InvalidCiphertextException';
    details: InvalidCiphertextExceptionDetails_;
}

export interface InvalidCiphertextExceptionDetails_ {
    /**
     * _ErrorMessageType shape
     */
    message?: string;
}