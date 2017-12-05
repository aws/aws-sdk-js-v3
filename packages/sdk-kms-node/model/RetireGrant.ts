import {RetireGrantInput} from './RetireGrantInput';
import {RetireGrantOutput} from './RetireGrantOutput';
import {InvalidGrantTokenException} from './InvalidGrantTokenException';
import {InvalidGrantIdException} from './InvalidGrantIdException';
import {NotFoundException} from './NotFoundException';
import {DependencyTimeoutException} from './DependencyTimeoutException';
import {KMSInternalException} from './KMSInternalException';
import {KMSInvalidStateException} from './KMSInvalidStateException';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const RetireGrant: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'RetireGrant',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: RetireGrantInput,
    },
    output: {
        shape: RetireGrantOutput,
    },
    errors: [
        {
            shape: InvalidGrantTokenException,
        },
        {
            shape: InvalidGrantIdException,
        },
        {
            shape: NotFoundException,
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
    ],
};