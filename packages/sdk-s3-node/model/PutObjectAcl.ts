import {PutObjectAclInput} from './PutObjectAclInput';
import {PutObjectAclOutput} from './PutObjectAclOutput';
import {NoSuchKey} from './NoSuchKey';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const PutObjectAcl: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'PutObjectAcl',
    http: {
        method: 'PUT',
        requestUri: '/{Bucket}/{Key+}?acl',
    },
    input: {
        shape: PutObjectAclInput,
    },
    output: {
        shape: PutObjectAclOutput,
    },
    errors: [
        {
            shape: NoSuchKey,
        },
    ],
};