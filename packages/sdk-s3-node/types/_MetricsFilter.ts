import {_Tag, _UnmarshalledTag} from './_Tag';
import {_MetricsAndOperator, _UnmarshalledMetricsAndOperator} from './_MetricsAndOperator';

/**
 * _MetricsFilter shape
 */
export interface _MetricsFilter {
    /**
     * _Prefix shape
     */
    Prefix?: string;

    /**
     * _Tag shape
     */
    Tag?: _Tag;

    /**
     * _MetricsAndOperator shape
     */
    And?: _MetricsAndOperator;
}

export interface _UnmarshalledMetricsFilter extends _MetricsFilter {
    /**
     * _Tag shape
     */
    Tag?: _UnmarshalledTag;

    /**
     * _MetricsAndOperator shape
     */
    And?: _UnmarshalledMetricsAndOperator;
}