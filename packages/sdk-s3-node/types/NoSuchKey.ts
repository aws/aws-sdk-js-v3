import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * The specified key does not exist.
 */
export interface NoSuchKey extends __ServiceException__<_NoSuchKeyDetails> {
    name: 'NoSuchKey';
}

export interface _NoSuchKeyDetails {

}