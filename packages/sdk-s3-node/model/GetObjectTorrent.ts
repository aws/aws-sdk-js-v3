import {GetObjectTorrentInput} from './GetObjectTorrentInput';
import {GetObjectTorrentOutput} from './GetObjectTorrentOutput';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const GetObjectTorrent: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'GetObjectTorrent',
    http: {
        method: 'GET',
        requestUri: '/{Bucket}/{Key+}?torrent',
    },
    input: {
        shape: GetObjectTorrentInput,
    },
    output: {
        shape: GetObjectTorrentOutput,
    },
    errors: [],
};