/**
 * _CSVOutput shape
 */
export interface _CSVOutput {
    /**
     * _QuoteFields shape
     */
    QuoteFields?: 'ALWAYS'|'ASNEEDED'|string;

    /**
     * _QuoteEscapeCharacter shape
     */
    QuoteEscapeCharacter?: string;

    /**
     * _RecordDelimiter shape
     */
    RecordDelimiter?: string;

    /**
     * _FieldDelimiter shape
     */
    FieldDelimiter?: string;

    /**
     * _QuoteCharacter shape
     */
    QuoteCharacter?: string;
}

export type _UnmarshalledCSVOutput = _CSVOutput;