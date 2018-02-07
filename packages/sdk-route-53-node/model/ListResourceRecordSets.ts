import {ListResourceRecordSetsInput} from './ListResourceRecordSetsInput';
import {ListResourceRecordSetsOutput} from './ListResourceRecordSetsOutput';
import {NoSuchHostedZone} from './NoSuchHostedZone';
import {InvalidInput} from './InvalidInput';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const ListResourceRecordSets: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'ListResourceRecordSets',
    http: {
        method: 'GET',
        requestUri: '/2013-04-01/hostedzone/{Id}/rrset',
    },
    input: {
        shape: ListResourceRecordSetsInput,
    },
    output: {
        shape: ListResourceRecordSetsOutput,
    },
    errors: [
        {
            shape: NoSuchHostedZone,
        },
        {
            shape: InvalidInput,
        },
    ],
};