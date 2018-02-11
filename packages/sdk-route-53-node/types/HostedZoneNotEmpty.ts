import {ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The hosted zone contains resource records that are not SOA or NS records.</p>
 */
export interface HostedZoneNotEmpty extends __ServiceException__<_HostedZoneNotEmptyDetails> {
    name: 'HostedZoneNotEmpty';
}

export interface _HostedZoneNotEmptyDetails {
    /**
     * <p>Descriptive message for the error response.</p>
     */
    message?: string;
}