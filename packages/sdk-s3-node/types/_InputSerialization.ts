import {_CSVInput, _UnmarshalledCSVInput} from './_CSVInput';

/**
 * _InputSerialization shape
 */
export interface _InputSerialization {
    /**
     * _CSVInput shape
     */
    CSV?: _CSVInput;
}

export interface _UnmarshalledInputSerialization extends _InputSerialization {
    /**
     * _CSVInput shape
     */
    CSV?: _UnmarshalledCSVInput;
}