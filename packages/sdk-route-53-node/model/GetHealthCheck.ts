import {GetHealthCheckInput} from './GetHealthCheckInput';
import {GetHealthCheckOutput} from './GetHealthCheckOutput';
import {NoSuchHealthCheck} from './NoSuchHealthCheck';
import {InvalidInput} from './InvalidInput';
import {IncompatibleVersion} from './IncompatibleVersion';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const GetHealthCheck: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'GetHealthCheck',
    http: {
        method: 'GET',
        requestUri: '/2013-04-01/healthcheck/{HealthCheckId}',
    },
    input: {
        shape: GetHealthCheckInput,
    },
    output: {
        shape: GetHealthCheckOutput,
    },
    errors: [
        {
            shape: NoSuchHealthCheck,
        },
        {
            shape: InvalidInput,
        },
        {
            shape: IncompatibleVersion,
        },
    ],
};