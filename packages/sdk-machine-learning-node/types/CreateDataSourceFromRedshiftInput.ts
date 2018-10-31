import {_RedshiftDataSpec} from './_RedshiftDataSpec';
import {NodeHttpOptions as __HttpOptions__} from '@aws-sdk/types';
import * as __aws_types from '@aws-sdk/types';

/**
 * CreateDataSourceFromRedshiftInput shape
 */
export interface CreateDataSourceFromRedshiftInput {
    /**
     * <p>A user-supplied ID that uniquely identifies the <code>DataSource</code>.</p>
     */
    DataSourceId: string;

    /**
     * <p>A user-supplied name or description of the <code>DataSource</code>. </p>
     */
    DataSourceName?: string;

    /**
     * <p>The data specification of an Amazon Redshift <code>DataSource</code>:</p> <ul> <li><p>DatabaseInformation - <ul> <li> <code>DatabaseName</code> - The name of the Amazon Redshift database. </li> <li> <code> ClusterIdentifier</code> - The unique ID for the Amazon Redshift cluster.</li> </ul></p></li> <li><p>DatabaseCredentials - The AWS Identity and Access Management (IAM) credentials that are used to connect to the Amazon Redshift database.</p></li> <li><p>SelectSqlQuery - The query that is used to retrieve the observation data for the <code>Datasource</code>.</p></li> <li><p>S3StagingLocation - The Amazon Simple Storage Service (Amazon S3) location for staging Amazon Redshift data. The data retrieved from Amazon Redshift using the <code>SelectSqlQuery</code> query is stored in this location.</p></li> <li><p>DataSchemaUri - The Amazon S3 location of the <code>DataSchema</code>.</p></li> <li><p>DataSchema - A JSON string representing the schema. This is not required if <code>DataSchemaUri</code> is specified. </p></li> <li> <p>DataRearrangement - A JSON string that represents the splitting and rearrangement requirements for the <code>DataSource</code>.</p> <p> Sample - <code> "{\"splitting\":{\"percentBegin\":10,\"percentEnd\":60}}"</code> </p> </li> </ul>
     */
    DataSpec: _RedshiftDataSpec;

    /**
     * <p>A fully specified role Amazon Resource Name (ARN). Amazon ML assumes the role on behalf of the user to create the following: </p> <p> <ul> <li><p>A security group to allow Amazon ML to execute the <code>SelectSqlQuery</code> query on an Amazon Redshift cluster</p></li> <li><p>An Amazon S3 bucket policy to grant Amazon ML read/write permissions on the <code>S3StagingLocation</code></p></li> </ul> </p>
     */
    RoleARN: string;

    /**
     * <p>The compute statistics for a <code>DataSource</code>. The statistics are generated from the observation data referenced by a <code>DataSource</code>. Amazon ML uses the statistics internally during <code>MLModel</code> training. This parameter must be set to <code>true</code> if the <code>DataSource</code> needs to be used for <code>MLModel</code> training.</p>
     */
    ComputeStatistics?: boolean;

    /**
     * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
     */
    $maxRetries?: number;

    /**
     * An object that may be queried to determine if the underlying operation has been aborted.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
     */
    $abortSignal?: __aws_types.AbortSignal;

    /**
     * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
     */
    $httpOptions?: __HttpOptions__;
}