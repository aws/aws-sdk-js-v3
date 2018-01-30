import {PutBucketAnalyticsConfigurationInput} from './PutBucketAnalyticsConfigurationInput';
import {PutBucketAnalyticsConfigurationOutput} from './PutBucketAnalyticsConfigurationOutput';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const PutBucketAnalyticsConfiguration: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'PutBucketAnalyticsConfiguration',
    http: {
        method: 'PUT',
        requestUri: '/{Bucket}?analytics',
    },
    input: {
        shape: PutBucketAnalyticsConfigurationInput,
    },
    output: {
        shape: PutBucketAnalyticsConfigurationOutput,
    },
    errors: [],
};