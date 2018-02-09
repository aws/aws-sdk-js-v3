import {ServiceException as __ServiceException__} from '@aws/types';

/**
 * The specified bucket does not exist.
 */
export interface NoSuchBucket extends __ServiceException__<_NoSuchBucketDetails> {
    name: 'NoSuchBucket';
}

export interface _NoSuchBucketDetails {

}