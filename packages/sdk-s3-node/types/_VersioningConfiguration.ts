/**
 * _VersioningConfiguration shape
 */
export interface _VersioningConfiguration {
    /**
     * _MFADelete shape
     */
    MFADelete?: 'Enabled'|'Disabled'|string;

    /**
     * _BucketVersioningStatus shape
     */
    Status?: 'Enabled'|'Suspended'|string;
}

export type _UnmarshalledVersioningConfiguration = _VersioningConfiguration;