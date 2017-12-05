import {NotFoundException} from './NotFoundException';
import {InvalidArnException} from './InvalidArnException';
import {DependencyTimeoutException} from './DependencyTimeoutException';
import {KMSInternalException} from './KMSInternalException';
import {SdkExceptions} from '@aws/types';
export type DescribeKeyExceptionTypesUnion = NotFoundException |
    InvalidArnException |
    DependencyTimeoutException |
    KMSInternalException |
    SdkExceptions;
