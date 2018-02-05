import {ListVaultsInput} from './ListVaultsInput';
import {ListVaultsOutput} from './ListVaultsOutput';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {InvalidParameterValueException} from './InvalidParameterValueException';
import {MissingParameterValueException} from './MissingParameterValueException';
import {ServiceUnavailableException} from './ServiceUnavailableException';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const ListVaults: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'ListVaults',
    http: {
        method: 'GET',
        requestUri: '/{accountId}/vaults',
    },
    input: {
        shape: ListVaultsInput,
    },
    output: {
        shape: ListVaultsOutput,
    },
    errors: [
        {
            shape: ResourceNotFoundException,
        },
        {
            shape: InvalidParameterValueException,
        },
        {
            shape: MissingParameterValueException,
        },
        {
            shape: ServiceUnavailableException,
        },
    ],
};