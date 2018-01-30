import {_Tag, _UnmarshalledTag} from './_Tag';

/**
 * _MetricsAndOperator shape
 */
export interface _MetricsAndOperator {
    /**
     * The prefix used when evaluating an AND predicate.
     */
    Prefix?: string;

    /**
     * The list of tags used when evaluating an AND predicate.
     */
    Tags?: Array<_Tag>|Iterable<_Tag>;
}

export interface _UnmarshalledMetricsAndOperator extends _MetricsAndOperator {
    /**
     * The list of tags used when evaluating an AND predicate.
     */
    Tags?: Array<_UnmarshalledTag>;
}