import {_LifecycleExpiration, _UnmarshalledLifecycleExpiration} from './_LifecycleExpiration';
import {_Transition, _UnmarshalledTransition} from './_Transition';
import {_NoncurrentVersionTransition, _UnmarshalledNoncurrentVersionTransition} from './_NoncurrentVersionTransition';
import {_NoncurrentVersionExpiration, _UnmarshalledNoncurrentVersionExpiration} from './_NoncurrentVersionExpiration';
import {_AbortIncompleteMultipartUpload, _UnmarshalledAbortIncompleteMultipartUpload} from './_AbortIncompleteMultipartUpload';

/**
 * _Rule shape
 */
export interface _Rule {
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
    Prefix: string;

    /**
     * _ExpirationStatus shape
     */
    Status: 'Enabled'|'Disabled'|string;

    /**
     * _Transition shape
     */
    Transition?: _Transition;

    /**
     * _NoncurrentVersionTransition shape
     */
    NoncurrentVersionTransition?: _NoncurrentVersionTransition;

    /**
     * _NoncurrentVersionExpiration shape
     */
    NoncurrentVersionExpiration?: _NoncurrentVersionExpiration;

    /**
     * _AbortIncompleteMultipartUpload shape
     */
    AbortIncompleteMultipartUpload?: _AbortIncompleteMultipartUpload;
}

export interface _UnmarshalledRule extends _Rule {
    /**
     * _LifecycleExpiration shape
     */
    Expiration?: _UnmarshalledLifecycleExpiration;

    /**
     * _Transition shape
     */
    Transition?: _UnmarshalledTransition;

    /**
     * _NoncurrentVersionTransition shape
     */
    NoncurrentVersionTransition?: _UnmarshalledNoncurrentVersionTransition;

    /**
     * _NoncurrentVersionExpiration shape
     */
    NoncurrentVersionExpiration?: _UnmarshalledNoncurrentVersionExpiration;

    /**
     * _AbortIncompleteMultipartUpload shape
     */
    AbortIncompleteMultipartUpload?: _UnmarshalledAbortIncompleteMultipartUpload;
}