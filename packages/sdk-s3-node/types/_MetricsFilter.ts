import {_Tag, _UnmarshalledTag} from './_Tag';
import {_MetricsAndOperator, _UnmarshalledMetricsAndOperator} from './_MetricsAndOperator';

/**
 * _MetricsFilter shape
 */
export interface _MetricsFilter {
    /**
     * The prefix used when evaluating a metrics filter.
     */
    Prefix?: string;

    /**
     * The tag used when evaluating a metrics filter.
     */
    Tag?: _Tag;

    /**
     * A conjunction (logical AND) of predicates, which is used in evaluating a metrics filter. The operator must have at least two predicates, and an object must match all of the predicates in order for the filter to apply.
     */
    And?: _MetricsAndOperator;
}

export interface _UnmarshalledMetricsFilter extends _MetricsFilter {
    /**
     * The tag used when evaluating a metrics filter.
     */
    Tag?: _UnmarshalledTag;

    /**
     * A conjunction (logical AND) of predicates, which is used in evaluating a metrics filter. The operator must have at least two predicates, and an object must match all of the predicates in order for the filter to apply.
     */
    And?: _UnmarshalledMetricsAndOperator;
}