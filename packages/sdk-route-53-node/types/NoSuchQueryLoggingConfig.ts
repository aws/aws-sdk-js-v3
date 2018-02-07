import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>There is no DNS query logging configuration with the specified ID.</p>
 */
export interface NoSuchQueryLoggingConfig extends __ServiceException__<_NoSuchQueryLoggingConfigDetails> {
    name: 'NoSuchQueryLoggingConfig';
}

export interface _NoSuchQueryLoggingConfigDetails {
    /**
     * _ErrorMessage shape
     */
    message?: string;
}