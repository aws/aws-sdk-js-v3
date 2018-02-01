import {GetObjectTaggingInput} from './GetObjectTaggingInput';
import {GetObjectTaggingOutput} from './GetObjectTaggingOutput';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const GetObjectTagging: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'GetObjectTagging',
    http: {
        method: 'GET',
        requestUri: '/{Bucket}/{Key+}?tagging',
    },
    input: {
        shape: GetObjectTaggingInput,
    },
    output: {
        shape: GetObjectTaggingOutput,
    },
    errors: [],
};