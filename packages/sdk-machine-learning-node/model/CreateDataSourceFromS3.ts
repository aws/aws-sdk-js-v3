import {CreateDataSourceFromS3Input} from './CreateDataSourceFromS3Input';
import {CreateDataSourceFromS3Output} from './CreateDataSourceFromS3Output';
import {InvalidInputException} from './InvalidInputException';
import {InternalServerException} from './InternalServerException';
import {IdempotentParameterMismatchException} from './IdempotentParameterMismatchException';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const CreateDataSourceFromS3: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'CreateDataSourceFromS3',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: CreateDataSourceFromS3Input,
    },
    output: {
        shape: CreateDataSourceFromS3Output,
    },
    errors: [
        {
            shape: InvalidInputException,
        },
        {
            shape: InternalServerException,
        },
        {
            shape: IdempotentParameterMismatchException,
        },
    ],
};