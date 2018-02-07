import {NoSuchHostedZone} from './NoSuchHostedZone';
import {InvalidVPCId} from './InvalidVPCId';
import {VPCAssociationNotFound} from './VPCAssociationNotFound';
import {LastVPCAssociation} from './LastVPCAssociation';
import {InvalidInput} from './InvalidInput';
export type DisassociateVPCFromHostedZoneExceptionsUnion = NoSuchHostedZone |
    InvalidVPCId |
    VPCAssociationNotFound |
    LastVPCAssociation |
    InvalidInput;
