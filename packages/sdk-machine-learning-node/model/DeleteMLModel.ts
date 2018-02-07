import {DeleteMLModelInput} from './DeleteMLModelInput';
import {DeleteMLModelOutput} from './DeleteMLModelOutput';
import {InvalidInputException} from './InvalidInputException';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {InternalServerException} from './InternalServerException';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const DeleteMLModel: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'DeleteMLModel',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: DeleteMLModelInput,
    },
    output: {
        shape: DeleteMLModelOutput,
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