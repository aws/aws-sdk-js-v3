import {CreateTrafficPolicyInstanceInput} from './CreateTrafficPolicyInstanceInput';
import {CreateTrafficPolicyInstanceOutput} from './CreateTrafficPolicyInstanceOutput';
import {NoSuchHostedZone} from './NoSuchHostedZone';
import {InvalidInput} from './InvalidInput';
import {TooManyTrafficPolicyInstances} from './TooManyTrafficPolicyInstances';
import {NoSuchTrafficPolicy} from './NoSuchTrafficPolicy';
import {TrafficPolicyInstanceAlreadyExists} from './TrafficPolicyInstanceAlreadyExists';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const CreateTrafficPolicyInstance: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'CreateTrafficPolicyInstance',
    http: {
        method: 'POST',
        requestUri: '/2013-04-01/trafficpolicyinstance',
    },
    input: {
        shape: CreateTrafficPolicyInstanceInput,
        locationName: 'CreateTrafficPolicyInstanceRequest',
        xmlNamespace: {
            uri: 'https://route53.amazonaws.com/doc/2013-04-01/',
        },
    },
    output: {
        shape: CreateTrafficPolicyInstanceOutput,
    },
    errors: [
        {
            shape: NoSuchHostedZone,
        },
        {
            shape: InvalidInput,
        },
        {
            shape: TooManyTrafficPolicyInstances,
        },
        {
            shape: NoSuchTrafficPolicy,
        },
        {
            shape: TrafficPolicyInstanceAlreadyExists,
        },
    ],
};