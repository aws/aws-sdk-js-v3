import {_Tag, _UnmarshalledTag} from './_Tag';

/**
 * _AnalyticsAndOperator shape
 */
export interface _AnalyticsAndOperator {
    /**
     * The prefix to use when evaluating an AND predicate.
     */
    Prefix?: string;

    /**
     * The list of tags to use when evaluating an AND predicate.
     */
    Tags?: Array<_Tag>|Iterable<_Tag>;
}

export interface _UnmarshalledAnalyticsAndOperator extends _AnalyticsAndOperator {
    /**
     * The list of tags to use when evaluating an AND predicate.
     */
    Tags?: Array<_UnmarshalledTag>;
}