import {_InventoryConfiguration} from './_InventoryConfiguration';
import {Structure as _Structure_} from '@aws/types';

export const PutBucketInventoryConfigurationInput: _Structure_ = {
    type: 'structure',
    required: [
        'Bucket',
        'Id',
        'InventoryConfiguration',
    ],
    members: {
        Bucket: {
            shape: {
                type: 'string',
            },
            location: 'uri',
            locationName: 'Bucket',
        },
        Id: {
            shape: {
                type: 'string',
            },
            location: 'querystring',
            locationName: 'id',
        },
        InventoryConfiguration: {
            shape: _InventoryConfiguration,
            locationName: 'InventoryConfiguration',
            xmlNamespace: {
                uri: 'http://s3.amazonaws.com/doc/2006-03-01/',
            },
        },
    },
    payload: 'InventoryConfiguration',
};