import {GetBucketAclInput} from './GetBucketAclInput';
import {GetBucketAclOutput} from './GetBucketAclOutput';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const GetBucketAcl: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'GetBucketAcl',
    http: {
        method: 'GET',
        requestUri: '/{Bucket}?acl',
    },
    input: {
        shape: GetBucketAclInput,
    },
    output: {
        shape: GetBucketAclOutput,
    },
    errors: [],
};