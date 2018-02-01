import {GetHealthCheckStatusInput} from './GetHealthCheckStatusInput';
import {GetHealthCheckStatusOutput} from './GetHealthCheckStatusOutput';
import {NoSuchHealthCheck} from './NoSuchHealthCheck';
import {InvalidInput} from './InvalidInput';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const GetHealthCheckStatus: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'GetHealthCheckStatus',
    http: {
        method: 'GET',
        requestUri: '/2013-04-01/healthcheck/{HealthCheckId}/status',
    },
    input: {
        shape: GetHealthCheckStatusInput,
    },
    output: {
        shape: GetHealthCheckStatusOutput,
    },
    errors: [
        {
            shape: NoSuchHealthCheck,
        },
        {
            shape: InvalidInput,
        },
    ],
};