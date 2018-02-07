import {GetBatchPredictionInput} from './GetBatchPredictionInput';
import {GetBatchPredictionOutput} from './GetBatchPredictionOutput';
import {InvalidInputException} from './InvalidInputException';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {InternalServerException} from './InternalServerException';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const GetBatchPrediction: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'GetBatchPrediction',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: GetBatchPredictionInput,
    },
    output: {
        shape: GetBatchPredictionOutput,
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