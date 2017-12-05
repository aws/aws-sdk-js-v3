import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The request was rejected because the state of the specified resource is not valid for this request.</p> <p>For more information about how key state affects the use of a CMK, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
 */
export interface KMSInvalidStateException extends __ServiceException__ {
    name: 'KMSInvalidStateException';
    details: KMSInvalidStateExceptionDetails_;
}

export interface KMSInvalidStateExceptionDetails_ {
    /**
     * _ErrorMessageType shape
     */
    message?: string;
}