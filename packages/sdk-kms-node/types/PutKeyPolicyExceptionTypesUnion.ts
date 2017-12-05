import {NotFoundException} from './NotFoundException';
import {InvalidArnException} from './InvalidArnException';
import {MalformedPolicyDocumentException} from './MalformedPolicyDocumentException';
import {DependencyTimeoutException} from './DependencyTimeoutException';
import {UnsupportedOperationException} from './UnsupportedOperationException';
import {KMSInternalException} from './KMSInternalException';
import {LimitExceededException} from './LimitExceededException';
import {KMSInvalidStateException} from './KMSInvalidStateException';
import {SdkExceptions} from '@aws/types';
export type PutKeyPolicyExceptionTypesUnion = NotFoundException |
    InvalidArnException |
    MalformedPolicyDocumentException |
    DependencyTimeoutException |
    UnsupportedOperationException |
    KMSInternalException |
    LimitExceededException |
    KMSInvalidStateException |
    SdkExceptions;
