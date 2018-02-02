import {GetEvaluationInput} from './GetEvaluationInput';
import {GetEvaluationOutput} from './GetEvaluationOutput';
import {InvalidInputException} from './InvalidInputException';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {InternalServerException} from './InternalServerException';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const GetEvaluation: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'GetEvaluation',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: GetEvaluationInput,
    },
    output: {
        shape: GetEvaluationOutput,
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