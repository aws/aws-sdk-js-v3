import {_Condition, _UnmarshalledCondition} from './_Condition';
import {_Redirect, _UnmarshalledRedirect} from './_Redirect';

/**
 * _RoutingRule shape
 */
export interface _RoutingRule {
    /**
     * _Condition shape
     */
    Condition?: _Condition;

    /**
     * _Redirect shape
     */
    Redirect: _Redirect;
}

export interface _UnmarshalledRoutingRule extends _RoutingRule {
    /**
     * _Condition shape
     */
    Condition?: _UnmarshalledCondition;

    /**
     * _Redirect shape
     */
    Redirect: _UnmarshalledRedirect;
}