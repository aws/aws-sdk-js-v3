import {_AccessControlTranslation, _UnmarshalledAccessControlTranslation} from './_AccessControlTranslation';
import {_EncryptionConfiguration, _UnmarshalledEncryptionConfiguration} from './_EncryptionConfiguration';

/**
 * Container for replication destination information.
 */
export interface _Destination {
    /**
     * Amazon resource name (ARN) of the bucket where you want Amazon S3 to store replicas of the object identified by the rule.
     */
    Bucket: string;

    /**
     * Account ID of the destination bucket. Currently this is only being verified if Access Control Translation is enabled
     */
    Account?: string;

    /**
     * The class of storage used to store the object.
     */
    StorageClass?: 'STANDARD'|'REDUCED_REDUNDANCY'|'STANDARD_IA'|string;

    /**
     * Container for information regarding the access control for replicas.
     */
    AccessControlTranslation?: _AccessControlTranslation;

    /**
     * Container for information regarding encryption based configuration for replicas.
     */
    EncryptionConfiguration?: _EncryptionConfiguration;
}

export interface _UnmarshalledDestination extends _Destination {
    /**
     * Container for information regarding the access control for replicas.
     */
    AccessControlTranslation?: _UnmarshalledAccessControlTranslation;

    /**
     * Container for information regarding encryption based configuration for replicas.
     */
    EncryptionConfiguration?: _UnmarshalledEncryptionConfiguration;
}