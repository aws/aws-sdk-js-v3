import {DescribeTagsInput} from './DescribeTagsInput';
import {DescribeTagsOutput} from './DescribeTagsOutput';
import {InvalidInputException} from './InvalidInputException';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {InternalServerException} from './InternalServerException';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const DescribeTags: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'DescribeTags',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: DescribeTagsInput,
    },
    output: {
        shape: DescribeTagsOutput,
    },
    errors: [
        {
            shape: InvalidInputException,
        },
        {
            shape: ResourceNotFoundException,
        },
        {
            shape: InternalServerException,
        },
    ],
};