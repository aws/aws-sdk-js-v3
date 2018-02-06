import {DeleteEvaluationInput} from './DeleteEvaluationInput';
import {DeleteEvaluationOutput} from './DeleteEvaluationOutput';
import {InvalidInputException} from './InvalidInputException';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {InternalServerException} from './InternalServerException';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const DeleteEvaluation: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'DeleteEvaluation',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: DeleteEvaluationInput,
    },
    output: {
        shape: DeleteEvaluationOutput,
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