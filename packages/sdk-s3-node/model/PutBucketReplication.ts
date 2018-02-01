import {PutBucketReplicationInput} from './PutBucketReplicationInput';
import {PutBucketReplicationOutput} from './PutBucketReplicationOutput';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const PutBucketReplication: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'PutBucketReplication',
    http: {
        method: 'PUT',
        requestUri: '/{Bucket}?replication',
    },
    input: {
        shape: PutBucketReplicationInput,
    },
    output: {
        shape: PutBucketReplicationOutput,
    },
    errors: [],
};