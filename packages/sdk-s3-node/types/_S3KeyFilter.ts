import {_FilterRule, _UnmarshalledFilterRule} from './_FilterRule';

/**
 * Container for object key name prefix and suffix filtering rules.
 */
export interface _S3KeyFilter {
    /**
     * A list of containers for key value pair that defines the criteria for the filter rule.
     */
    FilterRules?: Array<_FilterRule>|Iterable<_FilterRule>;
}

export interface _UnmarshalledS3KeyFilter extends _S3KeyFilter {
    /**
     * A list of containers for key value pair that defines the criteria for the filter rule.
     */
    FilterRules?: Array<_UnmarshalledFilterRule>;
}