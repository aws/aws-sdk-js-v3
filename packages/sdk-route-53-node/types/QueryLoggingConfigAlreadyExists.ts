import {ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>You can create only one query logging configuration for a hosted zone, and a query logging configuration already exists for this hosted zone.</p>
 */
export interface QueryLoggingConfigAlreadyExists extends __ServiceException__<_QueryLoggingConfigAlreadyExistsDetails> {
    name: 'QueryLoggingConfigAlreadyExists';
}

export interface _QueryLoggingConfigAlreadyExistsDetails {
    /**
     * _ErrorMessage shape
     */
    message?: string;
}