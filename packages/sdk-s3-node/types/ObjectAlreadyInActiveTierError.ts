import {ServiceException as __ServiceException__} from '@aws/types';

/**
 * This operation is not allowed against this storage tier
 */
export interface ObjectAlreadyInActiveTierError extends __ServiceException__<_ObjectAlreadyInActiveTierErrorDetails> {
    name: 'ObjectAlreadyInActiveTierError';
}

export interface _ObjectAlreadyInActiveTierErrorDetails {

}