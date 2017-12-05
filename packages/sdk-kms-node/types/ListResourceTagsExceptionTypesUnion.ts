import {KMSInternalException} from './KMSInternalException';
import {NotFoundException} from './NotFoundException';
import {InvalidArnException} from './InvalidArnException';
import {InvalidMarkerException} from './InvalidMarkerException';
import {SdkExceptions} from '@aws/types';
export type ListResourceTagsExceptionTypesUnion = KMSInternalException |
    NotFoundException |
    InvalidArnException |
    InvalidMarkerException |
    SdkExceptions;
