import {_Tag, _UnmarshalledTag} from './_Tag';
import {_LifecycleRuleAndOperator, _UnmarshalledLifecycleRuleAndOperator} from './_LifecycleRuleAndOperator';

/**
 * The Filter is used to identify objects that a Lifecycle Rule applies to. A Filter must have exactly one of Prefix, Tag, or And specified.
 */
export interface _LifecycleRuleFilter {
    /**
     * Prefix identifying one or more objects to which the rule applies.
     */
    Prefix?: string;

    /**
     * This tag must exist in the object's tag set in order for the rule to apply.
     */
    Tag?: _Tag;

    /**
     * This is used in a Lifecycle Rule Filter to apply a logical AND to two or more predicates. The Lifecycle Rule will apply to any object matching all of the predicates configured inside the And operator.
     */
    And?: _LifecycleRuleAndOperator;
}

export interface _UnmarshalledLifecycleRuleFilter extends _LifecycleRuleFilter {
    /**
     * This tag must exist in the object's tag set in order for the rule to apply.
     */
    Tag?: _UnmarshalledTag;

    /**
     * This is used in a Lifecycle Rule Filter to apply a logical AND to two or more predicates. The Lifecycle Rule will apply to any object matching all of the predicates configured inside the And operator.
     */
    And?: _UnmarshalledLifecycleRuleAndOperator;
}