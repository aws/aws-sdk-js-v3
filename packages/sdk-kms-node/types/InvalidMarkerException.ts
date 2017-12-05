import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The request was rejected because the marker that specifies where pagination should next begin is not valid.</p>
 */
export interface InvalidMarkerException extends __ServiceException__ {
    name: 'InvalidMarkerException';
    details: InvalidMarkerExceptionDetails_;
}

export interface InvalidMarkerExceptionDetails_ {
    /**
     * _ErrorMessageType shape
     */
    message?: string;
}