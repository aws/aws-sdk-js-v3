import {PutObjectTaggingInput} from './PutObjectTaggingInput';
import {PutObjectTaggingOutput} from './PutObjectTaggingOutput';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const PutObjectTagging: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'PutObjectTagging',
    http: {
        method: 'PUT',
        requestUri: '/{Bucket}/{Key+}?tagging',
    },
    input: {
        shape: PutObjectTaggingInput,
    },
    output: {
        shape: PutObjectTaggingOutput,
    },
    errors: [],
};