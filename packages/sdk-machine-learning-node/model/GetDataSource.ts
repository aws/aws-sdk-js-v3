import {GetDataSourceInput} from './GetDataSourceInput';
import {GetDataSourceOutput} from './GetDataSourceOutput';
import {InvalidInputException} from './InvalidInputException';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {InternalServerException} from './InternalServerException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const GetDataSource: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'GetDataSource',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: GetDataSourceInput,
    },
    output: {
        shape: GetDataSourceOutput,
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