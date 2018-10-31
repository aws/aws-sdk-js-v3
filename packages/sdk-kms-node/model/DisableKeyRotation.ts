import {DisableKeyRotationInput} from './DisableKeyRotationInput';
import {DisableKeyRotationOutput} from './DisableKeyRotationOutput';
import {NotFoundException} from './NotFoundException';
import {DisabledException} from './DisabledException';
import {InvalidArnException} from './InvalidArnException';
import {DependencyTimeoutException} from './DependencyTimeoutException';
import {KMSInternalException} from './KMSInternalException';
import {KMSInvalidStateException} from './KMSInvalidStateException';
import {UnsupportedOperationException} from './UnsupportedOperationException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const DisableKeyRotation: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'DisableKeyRotation',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: DisableKeyRotationInput,
    },
    output: {
        shape: DisableKeyRotationOutput,
    },
    errors: [
        {
            shape: NotFoundException,
        },
        {
            shape: DisabledException,
        },
        {
            shape: InvalidArnException,
        },
        {
            shape: DependencyTimeoutException,
        },
        {
            shape: KMSInternalException,
        },
        {
            shape: KMSInvalidStateException,
        },
        {
            shape: UnsupportedOperationException,
        },
    ],
};