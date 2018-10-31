import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * TagLimitExceededException shape
 */
export interface TagLimitExceededException extends __ServiceException__<_TagLimitExceededExceptionDetails> {
    name: 'TagLimitExceededException';
}

export interface _TagLimitExceededExceptionDetails {
    /**
     * _ErrorMessage shape
     */
    message?: string;
}