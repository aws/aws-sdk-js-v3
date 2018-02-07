import {CreateVPCAssociationAuthorizationInput} from './CreateVPCAssociationAuthorizationInput';
import {CreateVPCAssociationAuthorizationOutput} from './CreateVPCAssociationAuthorizationOutput';
import {ConcurrentModification} from './ConcurrentModification';
import {TooManyVPCAssociationAuthorizations} from './TooManyVPCAssociationAuthorizations';
import {NoSuchHostedZone} from './NoSuchHostedZone';
import {InvalidVPCId} from './InvalidVPCId';
import {InvalidInput} from './InvalidInput';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const CreateVPCAssociationAuthorization: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'CreateVPCAssociationAuthorization',
    http: {
        method: 'POST',
        requestUri: '/2013-04-01/hostedzone/{Id}/authorizevpcassociation',
    },
    input: {
        shape: CreateVPCAssociationAuthorizationInput,
        locationName: 'CreateVPCAssociationAuthorizationRequest',
        xmlNamespace: {
            uri: 'https://route53.amazonaws.com/doc/2013-04-01/',
        },
    },
    output: {
        shape: CreateVPCAssociationAuthorizationOutput,
    },
    errors: [
        {
            shape: ConcurrentModification,
        },
        {
            shape: TooManyVPCAssociationAuthorizations,
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