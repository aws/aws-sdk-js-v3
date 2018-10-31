import {ListKeysInput} from './ListKeysInput';
import {ListKeysOutput} from './ListKeysOutput';
import {DependencyTimeoutException} from './DependencyTimeoutException';
import {KMSInternalException} from './KMSInternalException';
import {InvalidMarkerException} from './InvalidMarkerException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const ListKeys: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'ListKeys',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: ListKeysInput,
    },
    output: {
        shape: ListKeysOutput,
    },
    errors: [
        {
            shape: DependencyTimeoutException,
        },
        {
            shape: KMSInternalException,
        },
        {
            shape: InvalidMarkerException,
        },
    ],
};