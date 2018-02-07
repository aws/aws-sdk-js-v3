import {Structure as _Structure_} from '@aws/types';

export const DescribeBatchPredictionsInput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        FilterVariable: {
            shape: {
                type: 'string',
            },
        },
        EQ: {
            shape: {
                type: 'string',
            },
        },
        GT: {
            shape: {
                type: 'string',
            },
        },
        LT: {
            shape: {
                type: 'string',
            },
        },
        GE: {
            shape: {
                type: 'string',
            },
        },
        LE: {
            shape: {
                type: 'string',
            },
        },
        NE: {
            shape: {
                type: 'string',
            },
        },
        Prefix: {
            shape: {
                type: 'string',
            },
        },
        SortOrder: {
            shape: {
                type: 'string',
            },
        },
        NextToken: {
            shape: {
                type: 'string',
            },
        },
        Limit: {
            shape: {
                type: 'integer',
                min: 1,
            },
        },
    },
};