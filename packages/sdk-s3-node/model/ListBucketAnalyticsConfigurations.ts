import {ListBucketAnalyticsConfigurationsInput} from './ListBucketAnalyticsConfigurationsInput';
import {ListBucketAnalyticsConfigurationsOutput} from './ListBucketAnalyticsConfigurationsOutput';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const ListBucketAnalyticsConfigurations: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'ListBucketAnalyticsConfigurations',
    http: {
        method: 'GET',
        requestUri: '/{Bucket}?analytics',
    },
    input: {
        shape: ListBucketAnalyticsConfigurationsInput,
    },
    output: {
        shape: ListBucketAnalyticsConfigurationsOutput,
    },
    errors: [],
};