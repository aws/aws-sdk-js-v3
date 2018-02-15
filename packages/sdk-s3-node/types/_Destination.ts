import {_AccessControlTranslation, _UnmarshalledAccessControlTranslation} from './_AccessControlTranslation';
import {_EncryptionConfiguration, _UnmarshalledEncryptionConfiguration} from './_EncryptionConfiguration';

/**
 * _Destination shape
 */
export interface _Destination {
    /**
     * _BucketName shape
     */
    Bucket: string;

    /**
     * _AccountId shape
     */
    Account?: string;

    /**
     * _StorageClass shape
     */
    StorageClass?: 'STANDARD'|'REDUCED_REDUNDANCY'|'STANDARD_IA'|string;

    /**
     * _AccessControlTranslation shape
     */
    AccessControlTranslation?: _AccessControlTranslation;

    /**
     * _EncryptionConfiguration shape
     */
    EncryptionConfiguration?: _EncryptionConfiguration;
}

export interface _UnmarshalledDestination extends _Destination {
    /**
     * _AccessControlTranslation shape
     */
    AccessControlTranslation?: _UnmarshalledAccessControlTranslation;

    /**
     * _EncryptionConfiguration shape
     */
    EncryptionConfiguration?: _UnmarshalledEncryptionConfiguration;
}