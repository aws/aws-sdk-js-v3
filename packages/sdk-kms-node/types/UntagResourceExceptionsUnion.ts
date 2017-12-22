import {KMSInternalException} from './KMSInternalException';
import {NotFoundException} from './NotFoundException';
import {InvalidArnException} from './InvalidArnException';
import {KMSInvalidStateException} from './KMSInvalidStateException';
import {TagException} from './TagException';
import {UnkownServiceException} from '@aws/types';
export type UntagResourceExceptionsUnion = KMSInternalException |
    NotFoundException |
    InvalidArnException |
    KMSInvalidStateException |
    TagException |
    UnkownServiceException;
