import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The subscriber exceeded the maximum number of operations. This exception can occur when listing objects such as <code>DataSource</code>.</p>
 */
export interface LimitExceededException extends __ServiceException__<_LimitExceededExceptionDetails> {
    name: 'LimitExceededException';
}

export interface _LimitExceededExceptionDetails {
    /**
     * _ErrorMessage shape
     */
    message?: string;

    /**
     * _ErrorCode shape
     */
    code?: number;
}