import {DependencyTimeoutException} from './DependencyTimeoutException';
import {InvalidMarkerException} from './InvalidMarkerException';
import {InvalidArnException} from './InvalidArnException';
import {NotFoundException} from './NotFoundException';
import {KMSInternalException} from './KMSInternalException';
import {UnkownServiceException} from '@aws/types';
export type ListRetirableGrantsExceptionsUnion = DependencyTimeoutException |
    InvalidMarkerException |
    InvalidArnException |
    NotFoundException |
    KMSInternalException |
    UnkownServiceException;
