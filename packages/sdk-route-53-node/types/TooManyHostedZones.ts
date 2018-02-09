import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>This operation can't be completed either because the current account has reached the limit on the number of hosted zones or because you've reached the limit on the number of hosted zones that can be associated with a reusable delegation set.</p> <p>For information about default limits, see <a href="http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html">Limits</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> <p>To get the current limit on hosted zones that can be created by an account, see <a>GetAccountLimit</a>.</p> <p>To get the current limit on hosted zones that can be associated with a reusable delegation set, see <a>GetReusableDelegationSetLimit</a>.</p> <p>To request a higher limit, <a href="http://aws.amazon.com/route53-request">create a case</a> with the AWS Support Center.</p>
 */
export interface TooManyHostedZones extends __ServiceException__<_TooManyHostedZonesDetails> {
    name: 'TooManyHostedZones';
}

export interface _TooManyHostedZonesDetails {
    /**
     * <p>Descriptive message for the error response.</p>
     */
    message?: string;
}