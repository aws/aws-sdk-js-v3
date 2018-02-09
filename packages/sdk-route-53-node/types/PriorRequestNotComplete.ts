import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>If Amazon Route 53 can't process a request before the next request arrives, it will reject subsequent requests for the same hosted zone and return an <code>HTTP 400 error</code> (<code>Bad request</code>). If Amazon Route 53 returns this error repeatedly for the same request, we recommend that you wait, in intervals of increasing duration, before you try the request again.</p>
 */
export interface PriorRequestNotComplete extends __ServiceException__<_PriorRequestNotCompleteDetails> {
    name: 'PriorRequestNotComplete';
}

export interface _PriorRequestNotCompleteDetails {
    /**
     * _ErrorMessage shape
     */
    message?: string;
}