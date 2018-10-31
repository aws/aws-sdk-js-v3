import {ListGrantsInput} from './ListGrantsInput';
import {ListGrantsOutput} from './ListGrantsOutput';
import {NotFoundException} from './NotFoundException';
import {DependencyTimeoutException} from './DependencyTimeoutException';
import {InvalidMarkerException} from './InvalidMarkerException';
import {InvalidArnException} from './InvalidArnException';
import {KMSInternalException} from './KMSInternalException';
import {KMSInvalidStateException} from './KMSInvalidStateException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const ListGrants: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'ListGrants',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: ListGrantsInput,
    },
    output: {
        shape: ListGrantsOutput,
    },
    errors: [
        {
            shape: NotFoundException,
        },
        {
            shape: DependencyTimeoutException,
        },
        {
            shape: InvalidMarkerException,
        },
        {
            shape: InvalidArnException,
        },
        {
            shape: KMSInternalException,
        },
        {
            shape: KMSInvalidStateException,
        },
    ],
};