import {List as _List_} from '@aws/types';
import {_LambdaFunctionConfiguration} from './_LambdaFunctionConfiguration';

export const _LambdaFunctionConfigurationList: _List_ = {
    type: 'list',
    flattened: true,
    member: {
        shape: _LambdaFunctionConfiguration,
    },
};