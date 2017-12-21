import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The request was rejected because the specified CMK is not enabled.</p>
 */
export interface DisabledException extends __ServiceException__<_DisabledExceptionDetails> {
    name: 'DisabledException';
}

export interface _DisabledExceptionDetails {
    /**
     * _ErrorMessageType shape
     */
    message?: string;
}