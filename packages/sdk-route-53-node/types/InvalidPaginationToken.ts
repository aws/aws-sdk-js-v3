import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The value that you specified to get the second or subsequent page of results is invalid.</p>
 */
export interface InvalidPaginationToken extends __ServiceException__<_InvalidPaginationTokenDetails> {
    name: 'InvalidPaginationToken';
}

export interface _InvalidPaginationTokenDetails {
    /**
     * _ErrorMessage shape
     */
    message?: string;
}