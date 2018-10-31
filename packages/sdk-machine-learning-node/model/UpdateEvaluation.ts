import {UpdateEvaluationInput} from './UpdateEvaluationInput';
import {UpdateEvaluationOutput} from './UpdateEvaluationOutput';
import {InvalidInputException} from './InvalidInputException';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {InternalServerException} from './InternalServerException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const UpdateEvaluation: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'UpdateEvaluation',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: UpdateEvaluationInput,
    },
    output: {
        shape: UpdateEvaluationOutput,
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