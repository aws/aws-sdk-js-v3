import {ListTrafficPolicyInstancesByHostedZoneInput} from './ListTrafficPolicyInstancesByHostedZoneInput';
import {ListTrafficPolicyInstancesByHostedZoneOutput} from './ListTrafficPolicyInstancesByHostedZoneOutput';
import {InvalidInput} from './InvalidInput';
import {NoSuchTrafficPolicyInstance} from './NoSuchTrafficPolicyInstance';
import {NoSuchHostedZone} from './NoSuchHostedZone';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const ListTrafficPolicyInstancesByHostedZone: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'ListTrafficPolicyInstancesByHostedZone',
    http: {
        method: 'GET',
        requestUri: '/2013-04-01/trafficpolicyinstances/hostedzone',
    },
    input: {
        shape: ListTrafficPolicyInstancesByHostedZoneInput,
    },
    output: {
        shape: ListTrafficPolicyInstancesByHostedZoneOutput,
    },
    errors: [
        {
            shape: InvalidInput,
        },
        {
            shape: NoSuchTrafficPolicyInstance,
        },
        {
            shape: NoSuchHostedZone,
        },
    ],
};