import {ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The hosted zone you're trying to create already exists. Amazon Route 53 returns this error when a hosted zone has already been created with the specified <code>CallerReference</code>.</p>
 */
export interface HostedZoneAlreadyExists extends __ServiceException__<_HostedZoneAlreadyExistsDetails> {
    name: 'HostedZoneAlreadyExists';
}

export interface _HostedZoneAlreadyExistsDetails {
    /**
     * <p>Descriptive message for the error response.</p>
     */
    message?: string;
}