import {DeleteHostedZoneInput} from './DeleteHostedZoneInput';
import {DeleteHostedZoneOutput} from './DeleteHostedZoneOutput';
import {NoSuchHostedZone} from './NoSuchHostedZone';
import {HostedZoneNotEmpty} from './HostedZoneNotEmpty';
import {PriorRequestNotComplete} from './PriorRequestNotComplete';
import {InvalidInput} from './InvalidInput';
import {InvalidDomainName} from './InvalidDomainName';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const DeleteHostedZone: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'DeleteHostedZone',
    http: {
        method: 'DELETE',
        requestUri: '/2013-04-01/hostedzone/{Id}',
    },
    input: {
        shape: DeleteHostedZoneInput,
    },
    output: {
        shape: DeleteHostedZoneOutput,
    },
    errors: [
        {
            shape: NoSuchHostedZone,
        },
        {
            shape: HostedZoneNotEmpty,
        },
        {
            shape: PriorRequestNotComplete,
        },
        {
            shape: InvalidInput,
        },
        {
            shape: InvalidDomainName,
        },
    ],
};