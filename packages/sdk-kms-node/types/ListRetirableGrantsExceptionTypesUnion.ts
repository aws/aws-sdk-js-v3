import {DependencyTimeoutException} from './DependencyTimeoutException';
import {InvalidMarkerException} from './InvalidMarkerException';
import {InvalidArnException} from './InvalidArnException';
import {NotFoundException} from './NotFoundException';
import {KMSInternalException} from './KMSInternalException';
import {SdkExceptions} from '@aws/types';
export type ListRetirableGrantsExceptionTypesUnion = DependencyTimeoutException |
    InvalidMarkerException |
    InvalidArnException |
    NotFoundException |
    KMSInternalException |
    SdkExceptions;
