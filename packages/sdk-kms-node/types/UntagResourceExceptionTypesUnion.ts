import {KMSInternalException} from './KMSInternalException';
import {NotFoundException} from './NotFoundException';
import {InvalidArnException} from './InvalidArnException';
import {KMSInvalidStateException} from './KMSInvalidStateException';
import {TagException} from './TagException';
import {SdkExceptions} from '@aws/types';
export type UntagResourceExceptionTypesUnion = KMSInternalException |
    NotFoundException |
    InvalidArnException |
    KMSInvalidStateException |
    TagException |
    SdkExceptions;
