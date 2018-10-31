import {CreateQueryLoggingConfigInput} from './CreateQueryLoggingConfigInput';
import {CreateQueryLoggingConfigOutput} from './CreateQueryLoggingConfigOutput';
import {ConcurrentModification} from './ConcurrentModification';
import {NoSuchHostedZone} from './NoSuchHostedZone';
import {NoSuchCloudWatchLogsLogGroup} from './NoSuchCloudWatchLogsLogGroup';
import {InvalidInput} from './InvalidInput';
import {QueryLoggingConfigAlreadyExists} from './QueryLoggingConfigAlreadyExists';
import {InsufficientCloudWatchLogsResourcePolicy} from './InsufficientCloudWatchLogsResourcePolicy';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const CreateQueryLoggingConfig: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'CreateQueryLoggingConfig',
    http: {
        method: 'POST',
        requestUri: '/2013-04-01/queryloggingconfig',
    },
    input: {
        shape: CreateQueryLoggingConfigInput,
        locationName: 'CreateQueryLoggingConfigRequest',
        xmlNamespace: {
            uri: 'https://route53.amazonaws.com/doc/2013-04-01/',
        },
    },
    output: {
        shape: CreateQueryLoggingConfigOutput,
    },
    errors: [
        {
            shape: ConcurrentModification,
        },
        {
            shape: NoSuchHostedZone,
        },
        {
            shape: NoSuchCloudWatchLogsLogGroup,
        },
        {
            shape: InvalidInput,
        },
        {
            shape: QueryLoggingConfigAlreadyExists,
        },
        {
            shape: InsufficientCloudWatchLogsResourcePolicy,
        },
    ],
};