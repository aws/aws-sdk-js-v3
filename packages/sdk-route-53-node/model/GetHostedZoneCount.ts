import {GetHostedZoneCountInput} from './GetHostedZoneCountInput';
import {GetHostedZoneCountOutput} from './GetHostedZoneCountOutput';
import {InvalidInput} from './InvalidInput';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const GetHostedZoneCount: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'GetHostedZoneCount',
    http: {
        method: 'GET',
        requestUri: '/2013-04-01/hostedzonecount',
    },
    input: {
        shape: GetHostedZoneCountInput,
    },
    output: {
        shape: GetHostedZoneCountOutput,
    },
    errors: [
        {
            shape: InvalidInput,
        },
    ],
};