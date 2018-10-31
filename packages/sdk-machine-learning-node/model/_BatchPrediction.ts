import {Structure as _Structure_} from '@aws-sdk/types';

export const _BatchPrediction: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        BatchPredictionId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        MLModelId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        BatchPredictionDataSourceId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        InputDataLocationS3: {
            shape: {
                type: 'string',
            },
        },
        CreatedByIamUser: {
            shape: {
                type: 'string',
            },
        },
        CreatedAt: {
            shape: {
                type: 'timestamp',
            },
        },
        LastUpdatedAt: {
            shape: {
                type: 'timestamp',
            },
        },
        Name: {
            shape: {
                type: 'string',
            },
        },
        Status: {
            shape: {
                type: 'string',
            },
        },
        OutputUri: {
            shape: {
                type: 'string',
            },
        },
        Message: {
            shape: {
                type: 'string',
            },
        },
        ComputeTime: {
            shape: {
                type: 'integer',
            },
        },
        FinishedAt: {
            shape: {
                type: 'timestamp',
            },
        },
        StartedAt: {
            shape: {
                type: 'timestamp',
            },
        },
        TotalRecordCount: {
            shape: {
                type: 'integer',
            },
        },
        InvalidRecordCount: {
            shape: {
                type: 'integer',
            },
        },
    },
};