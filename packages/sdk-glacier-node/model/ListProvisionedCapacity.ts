import {ListProvisionedCapacityInput} from './ListProvisionedCapacityInput';
import {ListProvisionedCapacityOutput} from './ListProvisionedCapacityOutput';
import {InvalidParameterValueException} from './InvalidParameterValueException';
import {MissingParameterValueException} from './MissingParameterValueException';
import {ServiceUnavailableException} from './ServiceUnavailableException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const ListProvisionedCapacity: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'ListProvisionedCapacity',
    http: {
        method: 'GET',
        requestUri: '/{accountId}/provisioned-capacity',
    },
    input: {
        shape: ListProvisionedCapacityInput,
    },
    output: {
        shape: ListProvisionedCapacityOutput,
    },
    errors: [
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