import {_RealtimeEndpointInfo} from './_RealtimeEndpointInfo';
import {Structure as _Structure_} from '@aws/types';

export const CreateRealtimeEndpointOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        MLModelId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        RealtimeEndpointInfo: {
            shape: _RealtimeEndpointInfo,
        },
    },
};