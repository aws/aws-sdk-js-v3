import {List as _List_} from '@aws/types';
import {_MetricsConfiguration} from './_MetricsConfiguration';

export const _MetricsConfigurationList: _List_ = {
    type: 'list',
    flattened: true,
    member: {
        shape: _MetricsConfiguration,
    },
};