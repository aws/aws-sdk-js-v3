import {_RDSDatabase} from './_RDSDatabase';
import {_RDSDatabaseCredentials} from './_RDSDatabaseCredentials';
import {_EDPSecurityGroupIds} from './_EDPSecurityGroupIds';
import {Structure as _Structure_} from '@aws/types';

export const _RDSDataSpec: _Structure_ = {
    type: 'structure',
    required: [
        'DatabaseInformation',
        'SelectSqlQuery',
        'DatabaseCredentials',
        'S3StagingLocation',
        'ResourceRole',
        'ServiceRole',
        'SubnetId',
        'SecurityGroupIds',
    ],
    members: {
        DatabaseInformation: {
            shape: _RDSDatabase,
        },
        SelectSqlQuery: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        DatabaseCredentials: {
            shape: _RDSDatabaseCredentials,
        },
        S3StagingLocation: {
            shape: {
                type: 'string',
            },
        },
        DataRearrangement: {
            shape: {
                type: 'string',
            },
        },
        DataSchema: {
            shape: {
                type: 'string',
            },
        },
        DataSchemaUri: {
            shape: {
                type: 'string',
            },
        },
        ResourceRole: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        ServiceRole: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        SubnetId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        SecurityGroupIds: {
            shape: _EDPSecurityGroupIds,
        },
    },
};