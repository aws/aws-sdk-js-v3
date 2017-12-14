import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The request was rejected because the specified policy is not syntactically or semantically correct.</p>
 */
export interface MalformedPolicyDocumentException extends __ServiceException__<_MalformedPolicyDocumentExceptionDetails> {
    name: 'MalformedPolicyDocumentException';
}

export interface _MalformedPolicyDocumentExceptionDetails {
    /**
     * _ErrorMessageType shape
     */
    message?: string;
}