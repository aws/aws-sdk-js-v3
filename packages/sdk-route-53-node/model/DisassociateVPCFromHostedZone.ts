import {DisassociateVPCFromHostedZoneInput} from './DisassociateVPCFromHostedZoneInput';
import {DisassociateVPCFromHostedZoneOutput} from './DisassociateVPCFromHostedZoneOutput';
import {NoSuchHostedZone} from './NoSuchHostedZone';
import {InvalidVPCId} from './InvalidVPCId';
import {VPCAssociationNotFound} from './VPCAssociationNotFound';
import {LastVPCAssociation} from './LastVPCAssociation';
import {InvalidInput} from './InvalidInput';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const DisassociateVPCFromHostedZone: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'DisassociateVPCFromHostedZone',
    http: {
        method: 'POST',
        requestUri: '/2013-04-01/hostedzone/{Id}/disassociatevpc',
    },
    input: {
        shape: DisassociateVPCFromHostedZoneInput,
        locationName: 'DisassociateVPCFromHostedZoneRequest',
        xmlNamespace: {
            uri: 'https://route53.amazonaws.com/doc/2013-04-01/',
        },
    },
    output: {
        shape: DisassociateVPCFromHostedZoneOutput,
    },
    errors: [
        {
            shape: NoSuchHostedZone,
        },
        {
            shape: InvalidVPCId,
        },
        {
            shape: VPCAssociationNotFound,
        },
        {
            shape: LastVPCAssociation,
        },
        {
            shape: InvalidInput,
        },
    ],
};