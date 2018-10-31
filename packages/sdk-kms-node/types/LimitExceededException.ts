import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>The request was rejected because a limit was exceeded. For more information, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/limits.html">Limits</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
 */
export interface LimitExceededException extends __ServiceException__<_LimitExceededExceptionDetails> {
    name: 'LimitExceededException';
}

export interface _LimitExceededExceptionDetails {
    /**
     * _ErrorMessageType shape
     */
    message?: string;
}