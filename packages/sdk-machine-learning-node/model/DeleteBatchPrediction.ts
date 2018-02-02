import {DeleteBatchPredictionInput} from './DeleteBatchPredictionInput';
import {DeleteBatchPredictionOutput} from './DeleteBatchPredictionOutput';
import {InvalidInputException} from './InvalidInputException';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {InternalServerException} from './InternalServerException';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const DeleteBatchPrediction: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'DeleteBatchPrediction',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: DeleteBatchPredictionInput,
    },
    output: {
        shape: DeleteBatchPredictionOutput,
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