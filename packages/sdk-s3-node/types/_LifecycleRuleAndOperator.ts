import {_Tag, _UnmarshalledTag} from './_Tag';

/**
 * _LifecycleRuleAndOperator shape
 */
export interface _LifecycleRuleAndOperator {
    /**
     * _Prefix shape
     */
    Prefix?: string;

    /**
     * _TagSet shape
     */
    Tags?: Array<_Tag>|Iterable<_Tag>;
}

export interface _UnmarshalledLifecycleRuleAndOperator extends _LifecycleRuleAndOperator {
    /**
     * _TagSet shape
     */
    Tags?: Array<_UnmarshalledTag>;
}