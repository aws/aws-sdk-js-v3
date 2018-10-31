import {TagResourceInput} from './TagResourceInput';
import {TagResourceOutput} from './TagResourceOutput';
import {KMSInternalException} from './KMSInternalException';
import {NotFoundException} from './NotFoundException';
import {InvalidArnException} from './InvalidArnException';
import {KMSInvalidStateException} from './KMSInvalidStateException';
import {LimitExceededException} from './LimitExceededException';
import {TagException} from './TagException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const TagResource: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'TagResource',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: TagResourceInput,
    },
    output: {
        shape: TagResourceOutput,
    },
    errors: [
        {
            shape: KMSInternalException,
        },
        {
            shape: NotFoundException,
        },
        {
            shape: InvalidArnException,
        },
        {
            shape: KMSInvalidStateException,
        },
        {
            shape: LimitExceededException,
        },
        {
            shape: TagException,
        },
    ],
};