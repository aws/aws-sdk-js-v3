import {_RedshiftDatabase} from './_RedshiftDatabase';
import {_RedshiftDatabaseCredentials} from './_RedshiftDatabaseCredentials';
import {Structure as _Structure_} from '@aws/types';

export const _RedshiftDataSpec: _Structure_ = {
    type: 'structure',
    required: [
        'DatabaseInformation',
        'SelectSqlQuery',
        'DatabaseCredentials',
        'S3StagingLocation',
    ],
    members: {
        DatabaseInformation: {
            shape: _RedshiftDatabase,
        },
        SelectSqlQuery: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        DatabaseCredentials: {
            shape: _RedshiftDatabaseCredentials,
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
    },
};