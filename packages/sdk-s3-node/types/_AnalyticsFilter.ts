import {_Tag, _UnmarshalledTag} from './_Tag';
import {_AnalyticsAndOperator, _UnmarshalledAnalyticsAndOperator} from './_AnalyticsAndOperator';

/**
 * _AnalyticsFilter shape
 */
export interface _AnalyticsFilter {
    /**
     * _Prefix shape
     */
    Prefix?: string;

    /**
     * _Tag shape
     */
    Tag?: _Tag;

    /**
     * _AnalyticsAndOperator shape
     */
    And?: _AnalyticsAndOperator;
}

export interface _UnmarshalledAnalyticsFilter extends _AnalyticsFilter {
    /**
     * _Tag shape
     */
    Tag?: _UnmarshalledTag;

    /**
     * _AnalyticsAndOperator shape
     */
    And?: _UnmarshalledAnalyticsAndOperator;
}