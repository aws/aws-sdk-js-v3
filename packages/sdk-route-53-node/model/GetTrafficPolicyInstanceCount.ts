import {GetTrafficPolicyInstanceCountInput} from './GetTrafficPolicyInstanceCountInput';
import {GetTrafficPolicyInstanceCountOutput} from './GetTrafficPolicyInstanceCountOutput';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const GetTrafficPolicyInstanceCount: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'GetTrafficPolicyInstanceCount',
    http: {
        method: 'GET',
        requestUri: '/2013-04-01/trafficpolicyinstancecount',
    },
    input: {
        shape: GetTrafficPolicyInstanceCountInput,
    },
    output: {
        shape: GetTrafficPolicyInstanceCountOutput,
    },
    errors: [],
};