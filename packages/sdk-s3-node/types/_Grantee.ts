/**
 * _Grantee shape
 */
export interface _Grantee {
    /**
     * _DisplayName shape
     */
    DisplayName?: string;

    /**
     * _EmailAddress shape
     */
    EmailAddress?: string;

    /**
     * _ID shape
     */
    ID?: string;

    /**
     * _Type shape
     */
    Type: 'CanonicalUser'|'AmazonCustomerByEmail'|'Group'|string;

    /**
     * _URI shape
     */
    URI?: string;
}

export type _UnmarshalledGrantee = _Grantee;