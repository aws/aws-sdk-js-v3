import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The request was rejected because the specified policy is not syntactically or semantically correct.</p>
 */
export interface MalformedPolicyDocumentException extends __ServiceException__ {
    name: 'MalformedPolicyDocumentException';
    details: MalformedPolicyDocumentExceptionDetails_;
}

export interface MalformedPolicyDocumentExceptionDetails_ {
    /**
     * _ErrorMessageType shape
     */
    message?: string;
}