import {ChangeTagsForResourceInput} from './ChangeTagsForResourceInput';
import {ChangeTagsForResourceOutput} from './ChangeTagsForResourceOutput';
import {InvalidInput} from './InvalidInput';
import {NoSuchHealthCheck} from './NoSuchHealthCheck';
import {NoSuchHostedZone} from './NoSuchHostedZone';
import {PriorRequestNotComplete} from './PriorRequestNotComplete';
import {ThrottlingException} from './ThrottlingException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const ChangeTagsForResource: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'ChangeTagsForResource',
    http: {
        method: 'POST',
        requestUri: '/2013-04-01/tags/{ResourceType}/{ResourceId}',
    },
    input: {
        shape: ChangeTagsForResourceInput,
        locationName: 'ChangeTagsForResourceRequest',
        xmlNamespace: {
            uri: 'https://route53.amazonaws.com/doc/2013-04-01/',
        },
    },
    output: {
        shape: ChangeTagsForResourceOutput,
    },
    errors: [
        {
            shape: InvalidInput,
        },
        {
            shape: NoSuchHealthCheck,
        },
        {
            shape: NoSuchHostedZone,
        },
        {
            shape: PriorRequestNotComplete,
        },
        {
            shape: ThrottlingException,
        },
    ],
};