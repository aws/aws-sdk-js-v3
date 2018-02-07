import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>You tried to update a traffic policy instance by using a traffic policy version that has a different DNS type than the current type for the instance. You specified the type in the JSON document in the <code>CreateTrafficPolicy</code> or <code>CreateTrafficPolicyVersion</code>request. </p>
 */
export interface ConflictingTypes extends __ServiceException__<_ConflictingTypesDetails> {
    name: 'ConflictingTypes';
}

export interface _ConflictingTypesDetails {
    /**
     * <p>Descriptive message for the error response.</p>
     */
    message?: string;
}