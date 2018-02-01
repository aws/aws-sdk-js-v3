import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * The specified multipart upload does not exist.
 */
export interface NoSuchUpload extends __ServiceException__<_NoSuchUploadDetails> {
    name: 'NoSuchUpload';
}

export interface _NoSuchUploadDetails {

}