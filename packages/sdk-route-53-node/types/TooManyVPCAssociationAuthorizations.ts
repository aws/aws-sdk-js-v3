import {ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>You've created the maximum number of authorizations that can be created for the specified hosted zone. To authorize another VPC to be associated with the hosted zone, submit a <code>DeleteVPCAssociationAuthorization</code> request to remove an existing authorization. To get a list of existing authorizations, submit a <code>ListVPCAssociationAuthorizations</code> request.</p>
 */
export interface TooManyVPCAssociationAuthorizations extends __ServiceException__<_TooManyVPCAssociationAuthorizationsDetails> {
    name: 'TooManyVPCAssociationAuthorizations';
}

export interface _TooManyVPCAssociationAuthorizationsDetails {
    /**
     * <p>Descriptive message for the error response.</p>
     */
    message?: string;
}