import {PutBucketInventoryConfigurationInput} from './PutBucketInventoryConfigurationInput';
import {PutBucketInventoryConfigurationOutput} from './PutBucketInventoryConfigurationOutput';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const PutBucketInventoryConfiguration: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'PutBucketInventoryConfiguration',
    http: {
        method: 'PUT',
        requestUri: '/{Bucket}?inventory',
    },
    input: {
        shape: PutBucketInventoryConfigurationInput,
    },
    output: {
        shape: PutBucketInventoryConfigurationOutput,
    },
    errors: [],
};