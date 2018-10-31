import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>A reusable delegation set with the specified ID does not exist.</p>
 */
export interface NoSuchDelegationSet extends __ServiceException__<_NoSuchDelegationSetDetails> {
    name: 'NoSuchDelegationSet';
}

export interface _NoSuchDelegationSetDetails {
    /**
     * <p>Descriptive message for the error response.</p>
     */
    message?: string;
}