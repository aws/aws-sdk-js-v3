/**
 * Describes how CSV-formatted results are formatted.
 */
export interface _CSVOutput {
    /**
     * Indicates whether or not all output fields should be quoted.
     */
    QuoteFields?: 'ALWAYS'|'ASNEEDED'|string;

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

export type _UnmarshalledCSVOutput = _CSVOutput;