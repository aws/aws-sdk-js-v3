import {_GeoLocationDetails} from './_GeoLocationDetails';
import {Structure as _Structure_} from '@aws/types';

export const GetGeoLocationOutput: _Structure_ = {
    type: 'structure',
    required: [
        'GeoLocationDetails',
    ],
    members: {
        GeoLocationDetails: {
            shape: _GeoLocationDetails,
        },
    },
};