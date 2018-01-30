import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * The source object of the COPY operation is not in the active tier and is only stored in Amazon Glacier.
 */
export interface ObjectNotInActiveTierError extends __ServiceException__<_ObjectNotInActiveTierErrorDetails> {
    name: 'ObjectNotInActiveTierError';
}

export interface _ObjectNotInActiveTierErrorDetails {

}