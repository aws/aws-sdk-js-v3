import {UpdateTrafficPolicyInstanceInput} from './UpdateTrafficPolicyInstanceInput';
import {UpdateTrafficPolicyInstanceOutput} from './UpdateTrafficPolicyInstanceOutput';
import {InvalidInput} from './InvalidInput';
import {NoSuchTrafficPolicy} from './NoSuchTrafficPolicy';
import {NoSuchTrafficPolicyInstance} from './NoSuchTrafficPolicyInstance';
import {PriorRequestNotComplete} from './PriorRequestNotComplete';
import {ConflictingTypes} from './ConflictingTypes';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const UpdateTrafficPolicyInstance: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'UpdateTrafficPolicyInstance',
    http: {
        method: 'POST',
        requestUri: '/2013-04-01/trafficpolicyinstance/{Id}',
    },
    input: {
        shape: UpdateTrafficPolicyInstanceInput,
        locationName: 'UpdateTrafficPolicyInstanceRequest',
        xmlNamespace: {
            uri: 'https://route53.amazonaws.com/doc/2013-04-01/',
        },
    },
    output: {
        shape: UpdateTrafficPolicyInstanceOutput,
    },
    errors: [
        {
            shape: InvalidInput,
        },
        {
            shape: NoSuchTrafficPolicy,
        },
        {
            shape: NoSuchTrafficPolicyInstance,
        },
        {
            shape: PriorRequestNotComplete,
        },
        {
            shape: ConflictingTypes,
        },
    ],
};