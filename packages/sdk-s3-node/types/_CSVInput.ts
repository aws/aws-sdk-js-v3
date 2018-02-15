/**
 * _CSVInput shape
 */
export interface _CSVInput {
    /**
     * _FileHeaderInfo shape
     */
    FileHeaderInfo?: 'USE'|'IGNORE'|'NONE'|string;

    /**
     * _Comments shape
     */
    Comments?: string;

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

export type _UnmarshalledCSVInput = _CSVInput;