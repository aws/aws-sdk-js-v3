import {DeleteVPCAssociationAuthorizationInput} from './DeleteVPCAssociationAuthorizationInput';
import {DeleteVPCAssociationAuthorizationOutput} from './DeleteVPCAssociationAuthorizationOutput';
import {ConcurrentModification} from './ConcurrentModification';
import {VPCAssociationAuthorizationNotFound} from './VPCAssociationAuthorizationNotFound';
import {NoSuchHostedZone} from './NoSuchHostedZone';
import {InvalidVPCId} from './InvalidVPCId';
import {InvalidInput} from './InvalidInput';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const DeleteVPCAssociationAuthorization: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'DeleteVPCAssociationAuthorization',
    http: {
        method: 'POST',
        requestUri: '/2013-04-01/hostedzone/{Id}/deauthorizevpcassociation',
    },
    input: {
        shape: DeleteVPCAssociationAuthorizationInput,
        locationName: 'DeleteVPCAssociationAuthorizationRequest',
        xmlNamespace: {
            uri: 'https://route53.amazonaws.com/doc/2013-04-01/',
        },
    },
    output: {
        shape: DeleteVPCAssociationAuthorizationOutput,
    },
    errors: [
        {
            shape: ConcurrentModification,
        },
        {
            shape: VPCAssociationAuthorizationNotFound,
        },
        {
            shape: NoSuchHostedZone,
        },
        {
            shape: InvalidVPCId,
        },
        {
            shape: InvalidInput,
        },
    ],
};