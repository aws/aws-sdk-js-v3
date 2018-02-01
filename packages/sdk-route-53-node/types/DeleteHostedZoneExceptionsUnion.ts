import {NoSuchHostedZone} from './NoSuchHostedZone';
import {HostedZoneNotEmpty} from './HostedZoneNotEmpty';
import {PriorRequestNotComplete} from './PriorRequestNotComplete';
import {InvalidInput} from './InvalidInput';
import {InvalidDomainName} from './InvalidDomainName';
export type DeleteHostedZoneExceptionsUnion = NoSuchHostedZone |
    HostedZoneNotEmpty |
    PriorRequestNotComplete |
    InvalidInput |
    InvalidDomainName;
