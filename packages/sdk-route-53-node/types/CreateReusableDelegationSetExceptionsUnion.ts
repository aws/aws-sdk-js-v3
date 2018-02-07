import {DelegationSetAlreadyCreated} from './DelegationSetAlreadyCreated';
import {LimitsExceeded} from './LimitsExceeded';
import {HostedZoneNotFound} from './HostedZoneNotFound';
import {InvalidArgument} from './InvalidArgument';
import {InvalidInput} from './InvalidInput';
import {DelegationSetNotAvailable} from './DelegationSetNotAvailable';
import {DelegationSetAlreadyReusable} from './DelegationSetAlreadyReusable';
export type CreateReusableDelegationSetExceptionsUnion = DelegationSetAlreadyCreated |
    LimitsExceeded |
    HostedZoneNotFound |
    InvalidArgument |
    InvalidInput |
    DelegationSetNotAvailable |
    DelegationSetAlreadyReusable;
