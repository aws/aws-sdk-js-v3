import {PutBucketTaggingInput} from './PutBucketTaggingInput';
import {PutBucketTaggingOutput} from './PutBucketTaggingOutput';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const PutBucketTagging: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'PutBucketTagging',
    http: {
        method: 'PUT',
        requestUri: '/{Bucket}?tagging',
    },
    input: {
        shape: PutBucketTaggingInput,
    },
    output: {
        shape: PutBucketTaggingOutput,
    },
    errors: [],
};