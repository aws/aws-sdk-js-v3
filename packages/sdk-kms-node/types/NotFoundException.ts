import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The request was rejected because the specified entity or resource could not be found.</p>
 */
export interface NotFoundException extends __ServiceException__ {
    name: 'NotFoundException';
    details: NotFoundExceptionDetails_;
}

export interface NotFoundExceptionDetails_ {
    /**
     * _ErrorMessageType shape
     */
    message?: string;
}