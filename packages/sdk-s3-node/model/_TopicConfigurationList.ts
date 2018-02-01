import {List as _List_} from '@aws/types';
import {_TopicConfiguration} from './_TopicConfiguration';

export const _TopicConfigurationList: _List_ = {
    type: 'list',
    flattened: true,
    member: {
        shape: _TopicConfiguration,
    },
};