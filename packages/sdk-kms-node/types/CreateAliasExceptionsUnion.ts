import {DependencyTimeoutException} from './DependencyTimeoutException';
import {AlreadyExistsException} from './AlreadyExistsException';
import {NotFoundException} from './NotFoundException';
import {InvalidAliasNameException} from './InvalidAliasNameException';
import {KMSInternalException} from './KMSInternalException';
import {LimitExceededException} from './LimitExceededException';
import {KMSInvalidStateException} from './KMSInvalidStateException';
import {UnkownServiceException} from '@aws/types';
export type CreateAliasExceptionsUnion = DependencyTimeoutException |
    AlreadyExistsException |
    NotFoundException |
    InvalidAliasNameException |
    KMSInternalException |
    LimitExceededException |
    KMSInvalidStateException |
    UnkownServiceException;
