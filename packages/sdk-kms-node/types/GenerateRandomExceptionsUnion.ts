import {DependencyTimeoutException} from './DependencyTimeoutException';
import {KMSInternalException} from './KMSInternalException';
import {UnkownServiceException} from '@aws/types';
export type GenerateRandomExceptionsUnion = DependencyTimeoutException |
    KMSInternalException |
    UnkownServiceException;
