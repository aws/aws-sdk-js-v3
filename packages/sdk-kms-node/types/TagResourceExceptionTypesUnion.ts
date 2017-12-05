import {KMSInternalException} from './KMSInternalException';
import {NotFoundException} from './NotFoundException';
import {InvalidArnException} from './InvalidArnException';
import {KMSInvalidStateException} from './KMSInvalidStateException';
import {LimitExceededException} from './LimitExceededException';
import {TagException} from './TagException';
import {SdkExceptions} from '@aws/types';
export type TagResourceExceptionTypesUnion = KMSInternalException |
    NotFoundException |
    InvalidArnException |
    KMSInvalidStateException |
    LimitExceededException |
    TagException |
    SdkExceptions;
