import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>You can create a hosted zone that has the same name as an existing hosted zone (example.com is common), but there is a limit to the number of hosted zones that have the same name. If you get this error, Amazon Route 53 has reached that limit. If you own the domain name and Amazon Route 53 generates this error, contact Customer Support.</p>
 */
export interface DelegationSetNotAvailable extends __ServiceException__<_DelegationSetNotAvailableDetails> {
    name: 'DelegationSetNotAvailable';
}

export interface _DelegationSetNotAvailableDetails {
    /**
     * <p>Descriptive message for the error response.</p>
     */
    message?: string;
}