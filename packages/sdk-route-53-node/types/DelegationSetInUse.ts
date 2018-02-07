import {ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The specified delegation contains associated hosted zones which must be deleted before the reusable delegation set can be deleted.</p>
 */
export interface DelegationSetInUse extends __ServiceException__<_DelegationSetInUseDetails> {
    name: 'DelegationSetInUse';
}

export interface _DelegationSetInUseDetails {
    /**
     * <p>Descriptive message for the error response.</p>
     */
    message?: string;
}