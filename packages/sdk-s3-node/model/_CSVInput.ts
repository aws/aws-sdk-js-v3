import {Structure as _Structure_} from '@aws/types';

export const _CSVInput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        FileHeaderInfo: {
            shape: {
                type: 'string',
            },
        },
        Comments: {
            shape: {
                type: 'string',
            },
        },
        QuoteEscapeCharacter: {
            shape: {
                type: 'string',
            },
        },
        RecordDelimiter: {
            shape: {
                type: 'string',
            },
        },
        FieldDelimiter: {
            shape: {
                type: 'string',
            },
        },
        QuoteCharacter: {
            shape: {
                type: 'string',
            },
        },
        AllowQuotedRecordDelimiter: {
            shape: {
                type: 'boolean',
            },
        },
    },
};