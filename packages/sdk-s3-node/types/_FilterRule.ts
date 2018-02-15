/**
 * _FilterRule shape
 */
export interface _FilterRule {
    /**
     * _FilterRuleName shape
     */
    Name?: 'prefix'|'suffix'|string;

    /**
     * _FilterRuleValue shape
     */
    Value?: string;
}

export type _UnmarshalledFilterRule = _FilterRule;