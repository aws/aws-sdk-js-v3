import {CreateKeyInput} from './CreateKeyInput';
import {CreateKeyOutput} from './CreateKeyOutput';
import {MalformedPolicyDocumentException} from './MalformedPolicyDocumentException';
import {DependencyTimeoutException} from './DependencyTimeoutException';
import {InvalidArnException} from './InvalidArnException';
import {UnsupportedOperationException} from './UnsupportedOperationException';
import {KMSInternalException} from './KMSInternalException';
import {LimitExceededException} from './LimitExceededException';
import {TagException} from './TagException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const CreateKey: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'CreateKey',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: CreateKeyInput,
    },
    output: {
        shape: CreateKeyOutput,
    },
    errors: [
        {
            shape: MalformedPolicyDocumentException,
        },
        {
            shape: DependencyTimeoutException,
        },
        {
            shape: InvalidArnException,
        },
        {
            shape: UnsupportedOperationException,
        },
        {
            shape: KMSInternalException,
        },
        {
            shape: LimitExceededException,
        },
        {
            shape: TagException,
        },
    ],
};