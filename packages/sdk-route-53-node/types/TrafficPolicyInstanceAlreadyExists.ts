import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>There is already a traffic policy instance with the specified ID.</p>
 */
export interface TrafficPolicyInstanceAlreadyExists extends __ServiceException__<_TrafficPolicyInstanceAlreadyExistsDetails> {
    name: 'TrafficPolicyInstanceAlreadyExists';
}

export interface _TrafficPolicyInstanceAlreadyExistsDetails {
    /**
     * <p>Descriptive message for the error response.</p>
     */
    message?: string;
}