/**
 * _VersioningConfiguration shape
 */
export interface _VersioningConfiguration {
    /**
     * Specifies whether MFA delete is enabled in the bucket versioning configuration. This element is only returned if the bucket has been configured with MFA delete. If the bucket has never been so configured, this element is not returned.
     */
    MFADelete?: 'Enabled'|'Disabled'|string;

    /**
     * The versioning state of the bucket.
     */
    Status?: 'Enabled'|'Suspended'|string;
}

export type _UnmarshalledVersioningConfiguration = _VersioningConfiguration;