/**
 * _Grantee shape
 */
export interface _Grantee {
    /**
     * Screen name of the grantee.
     */
    DisplayName?: string;

    /**
     * Email address of the grantee.
     */
    EmailAddress?: string;

    /**
     * The canonical user ID of the grantee.
     */
    ID?: string;

    /**
     * Type of grantee
     */
    Type: 'CanonicalUser'|'AmazonCustomerByEmail'|'Group'|string;

    /**
     * URI of the grantee group.
     */
    URI?: string;
}

export type _UnmarshalledGrantee = _Grantee;