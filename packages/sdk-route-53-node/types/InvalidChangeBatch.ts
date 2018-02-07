import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>This exception contains a list of messages that might contain one or more error messages. Each error message indicates one error in the change batch.</p>
 */
export interface InvalidChangeBatch extends __ServiceException__<_InvalidChangeBatchDetails> {
    name: 'InvalidChangeBatch';
}

export interface _InvalidChangeBatchDetails {
    /**
     * <p>Descriptive message for the error response.</p>
     */
    messages?: Array<string>;

    /**
     * _ErrorMessage shape
     */
    message?: string;
}