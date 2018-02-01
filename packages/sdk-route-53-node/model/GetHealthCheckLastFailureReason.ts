import {GetHealthCheckLastFailureReasonInput} from './GetHealthCheckLastFailureReasonInput';
import {GetHealthCheckLastFailureReasonOutput} from './GetHealthCheckLastFailureReasonOutput';
import {NoSuchHealthCheck} from './NoSuchHealthCheck';
import {InvalidInput} from './InvalidInput';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const GetHealthCheckLastFailureReason: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'GetHealthCheckLastFailureReason',
    http: {
        method: 'GET',
        requestUri: '/2013-04-01/healthcheck/{HealthCheckId}/lastfailurereason',
    },
    input: {
        shape: GetHealthCheckLastFailureReasonInput,
    },
    output: {
        shape: GetHealthCheckLastFailureReasonOutput,
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