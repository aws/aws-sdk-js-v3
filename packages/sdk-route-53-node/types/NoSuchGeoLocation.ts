import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>Amazon Route 53 doesn't support the specified geolocation.</p>
 */
export interface NoSuchGeoLocation extends __ServiceException__<_NoSuchGeoLocationDetails> {
    name: 'NoSuchGeoLocation';
}

export interface _NoSuchGeoLocationDetails {
    /**
     * <p>Descriptive message for the error response.</p>
     */
    message?: string;
}