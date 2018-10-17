import {_Tag, _UnmarshalledTag} from './_Tag';

/**
 * _AnalyticsAndOperator shape
 */
export interface _AnalyticsAndOperator {
    /**
     * <p>The prefix to use when evaluating an AND predicate.</p>
     */
    Prefix?: string;

    /**
     * <p>The list of tags to use when evaluating an AND predicate.</p>
     */
    Tags?: Array<_Tag>|Iterable<_Tag>;
}

export interface _UnmarshalledAnalyticsAndOperator extends _AnalyticsAndOperator {
    /**
     * <p>The list of tags to use when evaluating an AND predicate.</p>
     */
    Tags?: Array<_UnmarshalledTag>;
}