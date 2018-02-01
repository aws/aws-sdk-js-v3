import {NoSuchHostedZone} from './NoSuchHostedZone';
import {InvalidInput} from './InvalidInput';
import {TooManyTrafficPolicyInstances} from './TooManyTrafficPolicyInstances';
import {NoSuchTrafficPolicy} from './NoSuchTrafficPolicy';
import {TrafficPolicyInstanceAlreadyExists} from './TrafficPolicyInstanceAlreadyExists';
export type CreateTrafficPolicyInstanceExceptionsUnion = NoSuchHostedZone |
    InvalidInput |
    TooManyTrafficPolicyInstances |
    NoSuchTrafficPolicy |
    TrafficPolicyInstanceAlreadyExists;
