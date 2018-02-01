import {GetBucketEncryptionInput} from './GetBucketEncryptionInput';
import {GetBucketEncryptionOutput} from './GetBucketEncryptionOutput';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const GetBucketEncryption: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'GetBucketEncryption',
    http: {
        method: 'GET',
        requestUri: '/{Bucket}?encryption',
    },
    input: {
        shape: GetBucketEncryptionInput,
    },
    output: {
        shape: GetBucketEncryptionOutput,
    },
    errors: [],
};