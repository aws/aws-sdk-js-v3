import {GetBucketInventoryConfigurationInput} from './GetBucketInventoryConfigurationInput';
import {GetBucketInventoryConfigurationOutput} from './GetBucketInventoryConfigurationOutput';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const GetBucketInventoryConfiguration: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'GetBucketInventoryConfiguration',
    http: {
        method: 'GET',
        requestUri: '/{Bucket}?inventory',
    },
    input: {
        shape: GetBucketInventoryConfigurationInput,
    },
    output: {
        shape: GetBucketInventoryConfigurationOutput,
    },
    errors: [],
};