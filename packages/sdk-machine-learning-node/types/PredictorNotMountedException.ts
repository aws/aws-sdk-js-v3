import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The exception is thrown when a predict request is made to an unmounted <code>MLModel</code>.</p>
 */
export interface PredictorNotMountedException extends __ServiceException__<_PredictorNotMountedExceptionDetails> {
    name: 'PredictorNotMountedException';
}

export interface _PredictorNotMountedExceptionDetails {
    /**
     * _ErrorMessage shape
     */
    message?: string;
}