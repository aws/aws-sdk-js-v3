import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The request was rejected because a specified parameter is not supported or a specified resource is not valid for this operation.</p>
 */
export interface UnsupportedOperationException extends __ServiceException__ {
    name: 'UnsupportedOperationException';
    details: UnsupportedOperationExceptionDetails_;
}

export interface UnsupportedOperationExceptionDetails_ {
    /**
     * _ErrorMessageType shape
     */
    message?: string;
}