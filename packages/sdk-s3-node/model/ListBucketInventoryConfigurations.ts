import {ListBucketInventoryConfigurationsInput} from './ListBucketInventoryConfigurationsInput';
import {ListBucketInventoryConfigurationsOutput} from './ListBucketInventoryConfigurationsOutput';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const ListBucketInventoryConfigurations: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'ListBucketInventoryConfigurations',
    http: {
        method: 'GET',
        requestUri: '/{Bucket}?inventory',
    },
    input: {
        shape: ListBucketInventoryConfigurationsInput,
    },
    output: {
        shape: ListBucketInventoryConfigurationsOutput,
    },
    errors: [],
};