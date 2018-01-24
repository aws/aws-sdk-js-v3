import {InvalidGrantTokenException} from './InvalidGrantTokenException';
import {InvalidGrantIdException} from './InvalidGrantIdException';
import {NotFoundException} from './NotFoundException';
import {DependencyTimeoutException} from './DependencyTimeoutException';
import {KMSInternalException} from './KMSInternalException';
import {KMSInvalidStateException} from './KMSInvalidStateException';
export type RetireGrantExceptionsUnion = InvalidGrantTokenException |
    InvalidGrantIdException |
    NotFoundException |
    DependencyTimeoutException |
    KMSInternalException |
    KMSInvalidStateException;
