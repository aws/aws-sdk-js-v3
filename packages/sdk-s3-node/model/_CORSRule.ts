import {_AllowedHeaders} from './_AllowedHeaders';
import {_AllowedMethods} from './_AllowedMethods';
import {_AllowedOrigins} from './_AllowedOrigins';
import {_ExposeHeaders} from './_ExposeHeaders';
import {Structure as _Structure_} from '@aws/types';

export const _CORSRule: _Structure_ = {
    type: 'structure',
    required: [
        'AllowedMethods',
        'AllowedOrigins',
    ],
    members: {
        AllowedHeaders: {
            shape: _AllowedHeaders,
            locationName: 'AllowedHeader',
        },
        AllowedMethods: {
            shape: _AllowedMethods,
            locationName: 'AllowedMethod',
        },
        AllowedOrigins: {
            shape: _AllowedOrigins,
            locationName: 'AllowedOrigin',
        },
        ExposeHeaders: {
            shape: _ExposeHeaders,
            locationName: 'ExposeHeader',
        },
        MaxAgeSeconds: {
            shape: {
                type: 'integer',
            },
        },
    },
};