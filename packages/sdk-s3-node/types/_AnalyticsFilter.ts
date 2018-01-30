import {_Tag, _UnmarshalledTag} from './_Tag';
import {_AnalyticsAndOperator, _UnmarshalledAnalyticsAndOperator} from './_AnalyticsAndOperator';

/**
 * _AnalyticsFilter shape
 */
export interface _AnalyticsFilter {
    /**
     * The prefix to use when evaluating an analytics filter.
     */
    Prefix?: string;

    /**
     * The tag to use when evaluating an analytics filter.
     */
    Tag?: _Tag;

    /**
     * A conjunction (logical AND) of predicates, which is used in evaluating an analytics filter. The operator must have at least two predicates.
     */
    And?: _AnalyticsAndOperator;
}

export interface _UnmarshalledAnalyticsFilter extends _AnalyticsFilter {
    /**
     * The tag to use when evaluating an analytics filter.
     */
    Tag?: _UnmarshalledTag;

    /**
     * A conjunction (logical AND) of predicates, which is used in evaluating an analytics filter. The operator must have at least two predicates.
     */
    And?: _UnmarshalledAnalyticsAndOperator;
}