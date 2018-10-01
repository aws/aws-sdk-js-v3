import {ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>Another user submitted a request to create, update, or delete the object at the same time that you did. Retry the request. </p>
 */
export interface ConcurrentModification extends __ServiceException__<_ConcurrentModificationDetails> {
    name: 'ConcurrentModification';
}

export interface _ConcurrentModificationDetails {
    /**
     * <p>Descriptive message for the error response.</p>
     */
    message?: string;
}