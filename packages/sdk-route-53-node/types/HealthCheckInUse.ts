import {ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>This error code is not in use.</p>
 */
export interface HealthCheckInUse extends __ServiceException__<_HealthCheckInUseDetails> {
    name: 'HealthCheckInUse';
}

export interface _HealthCheckInUseDetails {
    /**
     * <p>Descriptive message for the error response.</p>
     */
    message?: string;
}