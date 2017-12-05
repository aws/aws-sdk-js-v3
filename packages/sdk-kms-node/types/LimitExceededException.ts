import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The request was rejected because a limit was exceeded. For more information, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/limits.html">Limits</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
 */
export interface LimitExceededException extends __ServiceException__ {
    name: 'LimitExceededException';
    details: LimitExceededExceptionDetails_;
}

export interface LimitExceededExceptionDetails_ {
    /**
     * _ErrorMessageType shape
     */
    message?: string;
}