import {GetBucketReplicationInput} from './GetBucketReplicationInput';
import {GetBucketReplicationOutput} from './GetBucketReplicationOutput';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const GetBucketReplication: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'GetBucketReplication',
    http: {
        method: 'GET',
        requestUri: '/{Bucket}?replication',
    },
    input: {
        shape: GetBucketReplicationInput,
    },
    output: {
        shape: GetBucketReplicationOutput,
    },
    errors: [],
};