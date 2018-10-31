import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>A reusable delegation set with the specified ID does not exist.</p>
 */
export interface DelegationSetNotReusable extends __ServiceException__<_DelegationSetNotReusableDetails> {
    name: 'DelegationSetNotReusable';
}

export interface _DelegationSetNotReusableDetails {
    /**
     * <p>Descriptive message for the error response.</p>
     */
    message?: string;
}