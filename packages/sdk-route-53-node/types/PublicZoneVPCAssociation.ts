import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>You're trying to associate a VPC with a public hosted zone. Amazon Route 53 doesn't support associating a VPC with a public hosted zone.</p>
 */
export interface PublicZoneVPCAssociation extends __ServiceException__<_PublicZoneVPCAssociationDetails> {
    name: 'PublicZoneVPCAssociation';
}

export interface _PublicZoneVPCAssociationDetails {
    /**
     * <p>Descriptive message for the error response.</p>
     */
    message?: string;
}