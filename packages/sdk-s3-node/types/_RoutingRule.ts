import {_Condition, _UnmarshalledCondition} from './_Condition';
import {_Redirect, _UnmarshalledRedirect} from './_Redirect';

/**
 * _RoutingRule shape
 */
export interface _RoutingRule {
    /**
     * A container for describing a condition that must be met for the specified redirect to apply. For example, 1. If request is for pages in the /docs folder, redirect to the /documents folder. 2. If request results in HTTP error 4xx, redirect request to another host where you might process the error.
     */
    Condition?: _Condition;

    /**
     * Container for redirect information. You can redirect requests to another host, to another page, or with another protocol. In the event of an error, you can can specify a different error code to return.
     */
    Redirect: _Redirect;
}

export interface _UnmarshalledRoutingRule extends _RoutingRule {
    /**
     * A container for describing a condition that must be met for the specified redirect to apply. For example, 1. If request is for pages in the /docs folder, redirect to the /documents folder. 2. If request results in HTTP error 4xx, redirect request to another host where you might process the error.
     */
    Condition?: _UnmarshalledCondition;

    /**
     * Container for redirect information. You can redirect requests to another host, to another page, or with another protocol. In the event of an error, you can can specify a different error code to return.
     */
    Redirect: _UnmarshalledRedirect;
}