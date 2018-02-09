import {GetHealthCheckCountInput} from './GetHealthCheckCountInput';
import {GetHealthCheckCountOutput} from './GetHealthCheckCountOutput';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const GetHealthCheckCount: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'GetHealthCheckCount',
    http: {
        method: 'GET',
        requestUri: '/2013-04-01/healthcheckcount',
    },
    input: {
        shape: GetHealthCheckCountInput,
    },
    output: {
        shape: GetHealthCheckCountOutput,
    },
    errors: [],
};