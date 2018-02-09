import {ServiceException as __ServiceException__} from '@aws/types';

/**
 * The requested bucket name is not available. The bucket namespace is shared by all users of the system. Please select a different name and try again.
 */
export interface BucketAlreadyExists extends __ServiceException__<_BucketAlreadyExistsDetails> {
    name: 'BucketAlreadyExists';
}

export interface _BucketAlreadyExistsDetails {

}