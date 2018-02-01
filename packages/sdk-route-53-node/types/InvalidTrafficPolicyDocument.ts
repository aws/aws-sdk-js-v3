import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The format of the traffic policy document that you specified in the <code>Document</code> element is invalid.</p>
 */
export interface InvalidTrafficPolicyDocument extends __ServiceException__<_InvalidTrafficPolicyDocumentDetails> {
    name: 'InvalidTrafficPolicyDocument';
}

export interface _InvalidTrafficPolicyDocumentDetails {
    /**
     * <p>Descriptive message for the error response.</p>
     */
    message?: string;
}