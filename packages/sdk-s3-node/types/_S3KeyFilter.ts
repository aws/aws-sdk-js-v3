import {_FilterRule, _UnmarshalledFilterRule} from './_FilterRule';

/**
 * _S3KeyFilter shape
 */
export interface _S3KeyFilter {
    /**
     * _FilterRuleList shape
     */
    FilterRules?: Array<_FilterRule>|Iterable<_FilterRule>;
}

export interface _UnmarshalledS3KeyFilter extends _S3KeyFilter {
    /**
     * _FilterRuleList shape
     */
    FilterRules?: Array<_UnmarshalledFilterRule>;
}