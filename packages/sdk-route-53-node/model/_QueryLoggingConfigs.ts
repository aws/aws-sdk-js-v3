import {List as _List_} from '@aws/types';
import {_QueryLoggingConfig} from './_QueryLoggingConfig';

export const _QueryLoggingConfigs: _List_ = {
    type: 'list',
    member: {
        shape: _QueryLoggingConfig,
        locationName: 'QueryLoggingConfig',
    },
};