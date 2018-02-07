import {ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>This traffic policy can't be created because the current account has reached the limit on the number of traffic policies.</p> <p>For information about default limits, see <a href="http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html">Limits</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> <p>To get the current limit for an account, see <a>GetAccountLimit</a>. </p> <p>To request a higher limit, <a href="http://aws.amazon.com/route53-request">create a case</a> with the AWS Support Center.</p>
 */
export interface TooManyTrafficPolicies extends __ServiceException__<_TooManyTrafficPoliciesDetails> {
    name: 'TooManyTrafficPolicies';
}

export interface _TooManyTrafficPoliciesDetails {
    /**
     * <p>Descriptive message for the error response.</p>
     */
    message?: string;
}