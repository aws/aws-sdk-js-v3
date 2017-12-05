import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The request was rejected because the provided key material is invalid or is not the same key material that was previously imported into this customer master key (CMK).</p>
 */
export interface IncorrectKeyMaterialException extends __ServiceException__ {
    name: 'IncorrectKeyMaterialException';
    details: IncorrectKeyMaterialExceptionDetails_;
}

export interface IncorrectKeyMaterialExceptionDetails_ {
    /**
     * _ErrorMessageType shape
     */
    message?: string;
}