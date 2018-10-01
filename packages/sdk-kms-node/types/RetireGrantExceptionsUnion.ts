import {InvalidArnException} from './InvalidArnException';
import {InvalidGrantTokenException} from './InvalidGrantTokenException';
import {InvalidGrantIdException} from './InvalidGrantIdException';
import {NotFoundException} from './NotFoundException';
import {DependencyTimeoutException} from './DependencyTimeoutException';
import {KMSInternalException} from './KMSInternalException';
import {KMSInvalidStateException} from './KMSInvalidStateException';
export type RetireGrantExceptionsUnion = InvalidArnException |
    InvalidGrantTokenException |
    InvalidGrantIdException |
    NotFoundException |
    DependencyTimeoutException |
    KMSInternalException |
    KMSInvalidStateException;
