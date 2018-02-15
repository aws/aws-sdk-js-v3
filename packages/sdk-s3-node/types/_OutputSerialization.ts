import {_CSVOutput, _UnmarshalledCSVOutput} from './_CSVOutput';

/**
 * _OutputSerialization shape
 */
export interface _OutputSerialization {
    /**
     * _CSVOutput shape
     */
    CSV?: _CSVOutput;
}

export interface _UnmarshalledOutputSerialization extends _OutputSerialization {
    /**
     * _CSVOutput shape
     */
    CSV?: _UnmarshalledCSVOutput;
}