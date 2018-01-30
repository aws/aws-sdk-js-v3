import {_CSVOutput, _UnmarshalledCSVOutput} from './_CSVOutput';

/**
 * Describes how results of the Select job are serialized.
 */
export interface _OutputSerialization {
    /**
     * Describes the serialization of CSV-encoded Select results.
     */
    CSV?: _CSVOutput;
}

export interface _UnmarshalledOutputSerialization extends _OutputSerialization {
    /**
     * Describes the serialization of CSV-encoded Select results.
     */
    CSV?: _UnmarshalledCSVOutput;
}