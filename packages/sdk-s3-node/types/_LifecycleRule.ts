import {_LifecycleExpiration, _UnmarshalledLifecycleExpiration} from './_LifecycleExpiration';
import {_LifecycleRuleFilter, _UnmarshalledLifecycleRuleFilter} from './_LifecycleRuleFilter';
import {_Transition, _UnmarshalledTransition} from './_Transition';
import {_NoncurrentVersionTransition, _UnmarshalledNoncurrentVersionTransition} from './_NoncurrentVersionTransition';
import {_NoncurrentVersionExpiration, _UnmarshalledNoncurrentVersionExpiration} from './_NoncurrentVersionExpiration';
import {_AbortIncompleteMultipartUpload, _UnmarshalledAbortIncompleteMultipartUpload} from './_AbortIncompleteMultipartUpload';

/**
 * _LifecycleRule shape
 */
export interface _LifecycleRule {
    /**
     * _LifecycleExpiration shape
     */
    Expiration?: _LifecycleExpiration;

    /**
     * _ID shape
     */
    ID?: string;

    /**
     * _Prefix shape
     */
    Prefix?: string;

    /**
     * _LifecycleRuleFilter shape
     */
    Filter?: _LifecycleRuleFilter;

    /**
     * _ExpirationStatus shape
     */
    Status: 'Enabled'|'Disabled'|string;

    /**
     * _TransitionList shape
     */
    Transitions?: Array<_Transition>|Iterable<_Transition>;

    /**
     * _NoncurrentVersionTransitionList shape
     */
    NoncurrentVersionTransitions?: Array<_NoncurrentVersionTransition>|Iterable<_NoncurrentVersionTransition>;

    /**
     * _NoncurrentVersionExpiration shape
     */
    NoncurrentVersionExpiration?: _NoncurrentVersionExpiration;

    /**
     * _AbortIncompleteMultipartUpload shape
     */
    AbortIncompleteMultipartUpload?: _AbortIncompleteMultipartUpload;
}

export interface _UnmarshalledLifecycleRule extends _LifecycleRule {
    /**
     * _LifecycleExpiration shape
     */
    Expiration?: _UnmarshalledLifecycleExpiration;

    /**
     * _LifecycleRuleFilter shape
     */
    Filter?: _UnmarshalledLifecycleRuleFilter;

    /**
     * _TransitionList shape
     */
    Transitions?: Array<_UnmarshalledTransition>;

    /**
     * _NoncurrentVersionTransitionList shape
     */
    NoncurrentVersionTransitions?: Array<_UnmarshalledNoncurrentVersionTransition>;

    /**
     * _NoncurrentVersionExpiration shape
     */
    NoncurrentVersionExpiration?: _UnmarshalledNoncurrentVersionExpiration;

    /**
     * _AbortIncompleteMultipartUpload shape
     */
    AbortIncompleteMultipartUpload?: _UnmarshalledAbortIncompleteMultipartUpload;
}