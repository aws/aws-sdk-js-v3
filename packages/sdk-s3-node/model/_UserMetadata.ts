import {List as _List_} from '@aws/types';
import {_MetadataEntry} from './_MetadataEntry';

export const _UserMetadata: _List_ = {
    type: 'list',
    member: {
        shape: _MetadataEntry,
        locationName: 'MetadataEntry',
    },
};