import {CreateHostedZoneInput} from './CreateHostedZoneInput';
import {CreateHostedZoneOutput} from './CreateHostedZoneOutput';
import {InvalidDomainName} from './InvalidDomainName';
import {HostedZoneAlreadyExists} from './HostedZoneAlreadyExists';
import {TooManyHostedZones} from './TooManyHostedZones';
import {InvalidVPCId} from './InvalidVPCId';
import {InvalidInput} from './InvalidInput';
import {DelegationSetNotAvailable} from './DelegationSetNotAvailable';
import {ConflictingDomainExists} from './ConflictingDomainExists';
import {NoSuchDelegationSet} from './NoSuchDelegationSet';
import {DelegationSetNotReusable} from './DelegationSetNotReusable';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const CreateHostedZone: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'CreateHostedZone',
    http: {
        method: 'POST',
        requestUri: '/2013-04-01/hostedzone',
    },
    input: {
        shape: CreateHostedZoneInput,
        locationName: 'CreateHostedZoneRequest',
        xmlNamespace: {
            uri: 'https://route53.amazonaws.com/doc/2013-04-01/',
        },
    },
    output: {
        shape: CreateHostedZoneOutput,
    },
    errors: [
        {
            shape: InvalidDomainName,
        },
        {
            shape: HostedZoneAlreadyExists,
        },
        {
            shape: TooManyHostedZones,
        },
        {
            shape: InvalidVPCId,
        },
        {
            shape: InvalidInput,
        },
        {
            shape: DelegationSetNotAvailable,
        },
        {
            shape: ConflictingDomainExists,
        },
        {
            shape: NoSuchDelegationSet,
        },
        {
            shape: DelegationSetNotReusable,
        },
    ],
};