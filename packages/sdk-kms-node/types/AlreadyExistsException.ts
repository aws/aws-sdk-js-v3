import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The request was rejected because it attempted to create a resource that already exists.</p>
 */
export interface AlreadyExistsException extends __ServiceException__ {
    name: 'AlreadyExistsException';
    details: AlreadyExistsExceptionDetails_;
}

export interface AlreadyExistsExceptionDetails_ {
    /**
     * _ErrorMessageType shape
     */
    message?: string;
}