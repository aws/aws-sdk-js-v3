import {ListHostedZonesInput} from './ListHostedZonesInput';
import {ListHostedZonesOutput} from './ListHostedZonesOutput';
import {InvalidInput} from './InvalidInput';
import {NoSuchDelegationSet} from './NoSuchDelegationSet';
import {DelegationSetNotReusable} from './DelegationSetNotReusable';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const ListHostedZones: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'ListHostedZones',
    http: {
        method: 'GET',
        requestUri: '/2013-04-01/hostedzone',
    },
    input: {
        shape: ListHostedZonesInput,
    },
    output: {
        shape: ListHostedZonesOutput,
    },
    errors: [
        {
            shape: InvalidInput,
        },
        {
            shape: NoSuchDelegationSet,
        },
        {
            shape: DelegationSetNotReusable,
        },
    ],
};