import {DescribeMLModelsInput} from './DescribeMLModelsInput';
import {DescribeMLModelsOutput} from './DescribeMLModelsOutput';
import {InvalidInputException} from './InvalidInputException';
import {InternalServerException} from './InternalServerException';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const DescribeMLModels: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'DescribeMLModels',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: DescribeMLModelsInput,
    },
    output: {
        shape: DescribeMLModelsOutput,
    },
    errors: [
        {
            shape: InvalidInputException,
        },
        {
            shape: InternalServerException,
        },
    ],
};