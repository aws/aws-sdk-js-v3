import {KMSInternalException} from './KMSInternalException';
import {NotFoundException} from './NotFoundException';
import {InvalidArnException} from './InvalidArnException';
import {InvalidMarkerException} from './InvalidMarkerException';
import {UnkownServiceException} from '@aws/types';
export type ListResourceTagsExceptionsUnion = KMSInternalException |
    NotFoundException |
    InvalidArnException |
    InvalidMarkerException |
    UnkownServiceException;
