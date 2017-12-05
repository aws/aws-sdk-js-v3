import {DependencyTimeoutException} from './DependencyTimeoutException';
import {KMSInternalException} from './KMSInternalException';
import {SdkExceptions} from '@aws/types';
export type GenerateRandomExceptionTypesUnion = DependencyTimeoutException |
    KMSInternalException |
    SdkExceptions;
