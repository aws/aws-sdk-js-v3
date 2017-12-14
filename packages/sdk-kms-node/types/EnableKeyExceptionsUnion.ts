import {NotFoundException} from './NotFoundException';
import {InvalidArnException} from './InvalidArnException';
import {DependencyTimeoutException} from './DependencyTimeoutException';
import {KMSInternalException} from './KMSInternalException';
import {LimitExceededException} from './LimitExceededException';
import {KMSInvalidStateException} from './KMSInvalidStateException';
import {UnkownServiceException} from '@aws/types';
export type EnableKeyExceptionsUnion = NotFoundException |
    InvalidArnException |
    DependencyTimeoutException |
    KMSInternalException |
    LimitExceededException |
    KMSInvalidStateException |
    UnkownServiceException;
