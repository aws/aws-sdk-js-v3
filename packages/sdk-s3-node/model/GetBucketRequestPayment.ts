import {GetBucketRequestPaymentInput} from './GetBucketRequestPaymentInput';
import {GetBucketRequestPaymentOutput} from './GetBucketRequestPaymentOutput';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const GetBucketRequestPayment: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'GetBucketRequestPayment',
    http: {
        method: 'GET',
        requestUri: '/{Bucket}?requestPayment',
    },
    input: {
        shape: GetBucketRequestPaymentInput,
    },
    output: {
        shape: GetBucketRequestPaymentOutput,
    },
    errors: [],
};