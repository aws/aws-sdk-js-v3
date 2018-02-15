import {_Tag, _UnmarshalledTag} from './_Tag';

/**
 * _MetricsAndOperator shape
 */
export interface _MetricsAndOperator {
    /**
     * _Prefix shape
     */
    Prefix?: string;

    /**
     * _TagSet shape
     */
    Tags?: Array<_Tag>|Iterable<_Tag>;
}

export interface _UnmarshalledMetricsAndOperator extends _MetricsAndOperator {
    /**
     * _TagSet shape
     */
    Tags?: Array<_UnmarshalledTag>;
}