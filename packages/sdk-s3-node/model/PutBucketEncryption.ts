import {PutBucketEncryptionInput} from './PutBucketEncryptionInput';
import {PutBucketEncryptionOutput} from './PutBucketEncryptionOutput';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const PutBucketEncryption: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'PutBucketEncryption',
    http: {
        method: 'PUT',
        requestUri: '/{Bucket}?encryption',
    },
    input: {
        shape: PutBucketEncryptionInput,
    },
    output: {
        shape: PutBucketEncryptionOutput,
    },
    errors: [],
};