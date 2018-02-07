import {ListGeoLocationsInput} from './ListGeoLocationsInput';
import {ListGeoLocationsOutput} from './ListGeoLocationsOutput';
import {InvalidInput} from './InvalidInput';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const ListGeoLocations: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'ListGeoLocations',
    http: {
        method: 'GET',
        requestUri: '/2013-04-01/geolocations',
    },
    input: {
        shape: ListGeoLocationsInput,
    },
    output: {
        shape: ListGeoLocationsOutput,
    },
    errors: [
        {
            shape: InvalidInput,
        },
    ],
};