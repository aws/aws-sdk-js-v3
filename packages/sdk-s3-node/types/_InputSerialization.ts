import {_CSVInput, _UnmarshalledCSVInput} from './_CSVInput';

/**
 * Describes the serialization format of the object.
 */
export interface _InputSerialization {
    /**
     * Describes the serialization of a CSV-encoded object.
     */
    CSV?: _CSVInput;
}

export interface _UnmarshalledInputSerialization extends _InputSerialization {
    /**
     * Describes the serialization of a CSV-encoded object.
     */
    CSV?: _UnmarshalledCSVInput;
}