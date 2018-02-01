import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The VPC that you specified is not authorized to be associated with the hosted zone.</p>
 */
export interface VPCAssociationAuthorizationNotFound extends __ServiceException__<_VPCAssociationAuthorizationNotFoundDetails> {
    name: 'VPCAssociationAuthorizationNotFound';
}

export interface _VPCAssociationAuthorizationNotFoundDetails {
    /**
     * <p>Descriptive message for the error response.</p>
     */
    message?: string;
}