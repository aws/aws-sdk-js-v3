import {_ObjectIdentifier, _UnmarshalledObjectIdentifier} from './_ObjectIdentifier';

/**
 * _Delete shape
 */
export interface _Delete {
    /**
     * _ObjectIdentifierList shape
     */
    Objects: Array<_ObjectIdentifier>|Iterable<_ObjectIdentifier>;

    /**
     * _Quiet shape
     */
    Quiet?: boolean;
}

export interface _UnmarshalledDelete extends _Delete {
    /**
     * _ObjectIdentifierList shape
     */
    Objects: Array<_UnmarshalledObjectIdentifier>;
}