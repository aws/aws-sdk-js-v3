/**
 * _ObjectIdentifier shape
 */
export interface _ObjectIdentifier {
    /**
     * Key name of the object to delete.
     */
    Key: string;

    /**
     * VersionId for the specific version of the object to delete.
     */
    VersionId?: string;
}

export type _UnmarshalledObjectIdentifier = _ObjectIdentifier;