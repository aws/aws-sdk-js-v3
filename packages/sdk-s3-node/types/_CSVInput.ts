/**
 * Describes how a CSV-formatted input object is formatted.
 */
export interface _CSVInput {
    /**
     * Describes the first line of input. Valid values: None, Ignore, Use.
     */
    FileHeaderInfo?: 'USE'|'IGNORE'|'NONE'|string;

    /**
     * Single character used to indicate a row should be ignored when present at the start of a row.
     */
    Comments?: string;

    /**
     * Single character used for escaping the quote character inside an already escaped value.
     */
    QuoteEscapeCharacter?: string;

    /**
     * Value used to separate individual records.
     */
    RecordDelimiter?: string;

    /**
     * Value used to separate individual fields in a record.
     */
    FieldDelimiter?: string;

    /**
     * Value used for escaping where the field delimiter is part of the value.
     */
    QuoteCharacter?: string;
}

export type _UnmarshalledCSVInput = _CSVInput;