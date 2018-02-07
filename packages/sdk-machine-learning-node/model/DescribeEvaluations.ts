import {DescribeEvaluationsInput} from './DescribeEvaluationsInput';
import {DescribeEvaluationsOutput} from './DescribeEvaluationsOutput';
import {InvalidInputException} from './InvalidInputException';
import {InternalServerException} from './InternalServerException';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const DescribeEvaluations: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'DescribeEvaluations',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: DescribeEvaluationsInput,
    },
    output: {
        shape: DescribeEvaluationsOutput,
    },
    errors: [
        {
            shape: InvalidInputException,
        },
        {
            shape: InternalServerException,
        },
    ],
};