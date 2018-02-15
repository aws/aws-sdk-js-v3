import {_Tag, _UnmarshalledTag} from './_Tag';
import {_LifecycleRuleAndOperator, _UnmarshalledLifecycleRuleAndOperator} from './_LifecycleRuleAndOperator';

/**
 * _LifecycleRuleFilter shape
 */
export interface _LifecycleRuleFilter {
    /**
     * _Prefix shape
     */
    Prefix?: string;

    /**
     * _Tag shape
     */
    Tag?: _Tag;

    /**
     * _LifecycleRuleAndOperator shape
     */
    And?: _LifecycleRuleAndOperator;
}

export interface _UnmarshalledLifecycleRuleFilter extends _LifecycleRuleFilter {
    /**
     * _Tag shape
     */
    Tag?: _UnmarshalledTag;

    /**
     * _LifecycleRuleAndOperator shape
     */
    And?: _UnmarshalledLifecycleRuleAndOperator;
}