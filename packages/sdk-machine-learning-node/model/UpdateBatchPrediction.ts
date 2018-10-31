import {UpdateBatchPredictionInput} from './UpdateBatchPredictionInput';
import {UpdateBatchPredictionOutput} from './UpdateBatchPredictionOutput';
import {InvalidInputException} from './InvalidInputException';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {InternalServerException} from './InternalServerException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const UpdateBatchPrediction: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'UpdateBatchPrediction',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: UpdateBatchPredictionInput,
    },
    output: {
        shape: UpdateBatchPredictionOutput,
    },
    errors: [
        {
            shape: InvalidInputException,
        },
        {
            shape: ResourceNotFoundException,
        },
        {
            shape: InternalServerException,
        },
    ],
};