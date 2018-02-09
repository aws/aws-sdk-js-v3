import {ListTrafficPolicyInstancesInput} from './ListTrafficPolicyInstancesInput';
import {ListTrafficPolicyInstancesOutput} from './ListTrafficPolicyInstancesOutput';
import {InvalidInput} from './InvalidInput';
import {NoSuchTrafficPolicyInstance} from './NoSuchTrafficPolicyInstance';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const ListTrafficPolicyInstances: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'ListTrafficPolicyInstances',
    http: {
        method: 'GET',
        requestUri: '/2013-04-01/trafficpolicyinstances',
    },
    input: {
        shape: ListTrafficPolicyInstancesInput,
    },
    output: {
        shape: ListTrafficPolicyInstancesOutput,
    },
    errors: [
        {
            shape: InvalidInput,
        },
        {
            shape: NoSuchTrafficPolicyInstance,
        },
    ],
};