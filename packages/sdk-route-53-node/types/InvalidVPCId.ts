import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>The VPC ID that you specified either isn't a valid ID or the current account is not authorized to access this VPC.</p>
 */
export interface InvalidVPCId extends __ServiceException__<_InvalidVPCIdDetails> {
    name: 'InvalidVPCId';
}

export interface _InvalidVPCIdDetails {
    /**
     * <p>Descriptive message for the error response.</p>
     */
    message?: string;
}