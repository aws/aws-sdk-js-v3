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
     * Unique identifier for the rule. The value cannot be longer than 255 characters.
     */
    ID?: string;

    /**
     * Prefix identifying one or more objects to which the rule applies. This is deprecated; use Filter instead.
     */
    Prefix?: string;

    /**
     * The Filter is used to identify objects that a Lifecycle Rule applies to. A Filter must have exactly one of Prefix, Tag, or And specified.
     */
    Filter?: _LifecycleRuleFilter;

    /**
     * If 'Enabled', the rule is currently being applied. If 'Disabled', the rule is not currently being applied.
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
     * Specifies when noncurrent object versions expire. Upon expiration, Amazon S3 permanently deletes the noncurrent object versions. You set this lifecycle configuration action on a bucket that has versioning enabled (or suspended) to request that Amazon S3 delete noncurrent object versions at a specific period in the object's lifetime.
     */
    NoncurrentVersionExpiration?: _NoncurrentVersionExpiration;

    /**
     * Specifies the days since the initiation of an Incomplete Multipart Upload that Lifecycle will wait before permanently removing all parts of the upload.
     */
    AbortIncompleteMultipartUpload?: _AbortIncompleteMultipartUpload;
}

export interface _UnmarshalledLifecycleRule extends _LifecycleRule {
    /**
     * _LifecycleExpiration shape
     */
    Expiration?: _UnmarshalledLifecycleExpiration;

    /**
     * The Filter is used to identify objects that a Lifecycle Rule applies to. A Filter must have exactly one of Prefix, Tag, or And specified.
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
     * Specifies when noncurrent object versions expire. Upon expiration, Amazon S3 permanently deletes the noncurrent object versions. You set this lifecycle configuration action on a bucket that has versioning enabled (or suspended) to request that Amazon S3 delete noncurrent object versions at a specific period in the object's lifetime.
     */
    NoncurrentVersionExpiration?: _UnmarshalledNoncurrentVersionExpiration;

    /**
     * Specifies the days since the initiation of an Incomplete Multipart Upload that Lifecycle will wait before permanently removing all parts of the upload.
     */
    AbortIncompleteMultipartUpload?: _UnmarshalledAbortIncompleteMultipartUpload;
}