import {PurchaseProvisionedCapacityInput} from './PurchaseProvisionedCapacityInput';
import {PurchaseProvisionedCapacityOutput} from './PurchaseProvisionedCapacityOutput';
import {InvalidParameterValueException} from './InvalidParameterValueException';
import {MissingParameterValueException} from './MissingParameterValueException';
import {LimitExceededException} from './LimitExceededException';
import {ServiceUnavailableException} from './ServiceUnavailableException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const PurchaseProvisionedCapacity: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'PurchaseProvisionedCapacity',
    http: {
        method: 'POST',
        requestUri: '/{accountId}/provisioned-capacity',
    },
    input: {
        shape: PurchaseProvisionedCapacityInput,
    },
    output: {
        shape: PurchaseProvisionedCapacityOutput,
    },
    errors: [
        {
            shape: InvalidParameterValueException,
        },
        {
            shape: MissingParameterValueException,
        },
        {
            shape: LimitExceededException,
        },
        {
            shape: ServiceUnavailableException,
        },
    ],
};