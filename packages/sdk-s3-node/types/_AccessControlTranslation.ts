/**
 * Container for information regarding the access control for replicas.
 */
export interface _AccessControlTranslation {
    /**
     * The override value for the owner of the replica object.
     */
    Owner: 'Destination'|string;
}

export type _UnmarshalledAccessControlTranslation = _AccessControlTranslation;