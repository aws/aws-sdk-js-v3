import {ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The specified HostedZone can't be found.</p>
 */
export interface HostedZoneNotFound extends __ServiceException__<_HostedZoneNotFoundDetails> {
    name: 'HostedZoneNotFound';
}

export interface _HostedZoneNotFoundDetails {
    /**
     * <p>Descriptive message for the error response.</p>
     */
    message?: string;
}