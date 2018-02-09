import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>No traffic policy instance exists with the specified ID.</p>
 */
export interface NoSuchTrafficPolicyInstance extends __ServiceException__<_NoSuchTrafficPolicyInstanceDetails> {
    name: 'NoSuchTrafficPolicyInstance';
}

export interface _NoSuchTrafficPolicyInstanceDetails {
    /**
     * <p>Descriptive message for the error response.</p>
     */
    message?: string;
}