import {ListTrafficPoliciesInput} from './ListTrafficPoliciesInput';
import {ListTrafficPoliciesOutput} from './ListTrafficPoliciesOutput';
import {InvalidInput} from './InvalidInput';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const ListTrafficPolicies: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'ListTrafficPolicies',
    http: {
        method: 'GET',
        requestUri: '/2013-04-01/trafficpolicies',
    },
    input: {
        shape: ListTrafficPoliciesInput,
    },
    output: {
        shape: ListTrafficPoliciesOutput,
    },
    errors: [
        {
            shape: InvalidInput,
        },
    ],
};