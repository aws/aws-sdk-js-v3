import {ListTagsForResourceInput} from './ListTagsForResourceInput';
import {ListTagsForResourceOutput} from './ListTagsForResourceOutput';
import {InvalidInput} from './InvalidInput';
import {NoSuchHealthCheck} from './NoSuchHealthCheck';
import {NoSuchHostedZone} from './NoSuchHostedZone';
import {PriorRequestNotComplete} from './PriorRequestNotComplete';
import {ThrottlingException} from './ThrottlingException';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const ListTagsForResource: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'ListTagsForResource',
    http: {
        method: 'GET',
        requestUri: '/2013-04-01/tags/{ResourceType}/{ResourceId}',
    },
    input: {
        shape: ListTagsForResourceInput,
    },
    output: {
        shape: ListTagsForResourceOutput,
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