import {GetTrafficPolicyInstanceInput} from './GetTrafficPolicyInstanceInput';
import {GetTrafficPolicyInstanceOutput} from './GetTrafficPolicyInstanceOutput';
import {NoSuchTrafficPolicyInstance} from './NoSuchTrafficPolicyInstance';
import {InvalidInput} from './InvalidInput';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const GetTrafficPolicyInstance: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'GetTrafficPolicyInstance',
    http: {
        method: 'GET',
        requestUri: '/2013-04-01/trafficpolicyinstance/{Id}',
    },
    input: {
        shape: GetTrafficPolicyInstanceInput,
    },
    output: {
        shape: GetTrafficPolicyInstanceOutput,
    },
    errors: [
        {
            shape: NoSuchTrafficPolicyInstance,
        },
        {
            shape: InvalidInput,
        },
    ],
};