import {NotFoundException} from './NotFoundException';
import {DisabledException} from './DisabledException';
import {DependencyTimeoutException} from './DependencyTimeoutException';
import {InvalidArnException} from './InvalidArnException';
import {KMSInternalException} from './KMSInternalException';
import {InvalidGrantTokenException} from './InvalidGrantTokenException';
import {LimitExceededException} from './LimitExceededException';
import {KMSInvalidStateException} from './KMSInvalidStateException';
export type CreateGrantExceptionsUnion = NotFoundException |
    DisabledException |
    DependencyTimeoutException |
    InvalidArnException |
    KMSInternalException |
    InvalidGrantTokenException |
    LimitExceededException |
    KMSInvalidStateException;
