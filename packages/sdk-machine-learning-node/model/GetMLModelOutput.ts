import {_RealtimeEndpointInfo} from './_RealtimeEndpointInfo';
import {_TrainingParameters} from './_TrainingParameters';
import {Structure as _Structure_} from '@aws/types';

export const GetMLModelOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        MLModelId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        TrainingDataSourceId: {
            shape: {
                type: 'string',
                min: 1,
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
        SizeInBytes: {
            shape: {
                type: 'integer',
            },
        },
        EndpointInfo: {
            shape: _RealtimeEndpointInfo,
        },
        TrainingParameters: {
            shape: _TrainingParameters,
        },
        InputDataLocationS3: {
            shape: {
                type: 'string',
            },
        },
        MLModelType: {
            shape: {
                type: 'string',
            },
        },
        ScoreThreshold: {
            shape: {
                type: 'float',
            },
        },
        ScoreThresholdLastUpdatedAt: {
            shape: {
                type: 'timestamp',
            },
        },
        LogUri: {
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
        Recipe: {
            shape: {
                type: 'string',
            },
        },
        Schema: {
            shape: {
                type: 'string',
            },
        },
    },
};