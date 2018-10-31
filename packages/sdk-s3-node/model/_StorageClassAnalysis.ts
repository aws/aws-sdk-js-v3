import {_StorageClassAnalysisDataExport} from './_StorageClassAnalysisDataExport';
import {Structure as _Structure_} from '@aws-sdk/types';

export const _StorageClassAnalysis: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        DataExport: {
            shape: _StorageClassAnalysisDataExport,
        },
    },
};