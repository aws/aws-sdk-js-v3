import {_UnmarshalledRedshiftMetadata} from './_RedshiftMetadata';
import {_UnmarshalledRDSMetadata} from './_RDSMetadata';
import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * <p>Represents the output of a <code>GetDataSource</code> operation and describes a <code>DataSource</code>.</p>
 */
export interface GetDataSourceOutput {
    /**
     * <p>The ID assigned to the <code>DataSource</code> at creation. This value should be identical to the value of the <code>DataSourceId</code> in the request.</p>
     */
    DataSourceId?: string;

    /**
     * <p>The location of the data file or directory in Amazon Simple Storage Service (Amazon S3).</p>
     */
    DataLocationS3?: string;

    /**
     * <p>A JSON string that represents the splitting and rearrangement requirement used when this <code>DataSource</code> was created.</p>
     */
    DataRearrangement?: string;

    /**
     * <p>The AWS user account from which the <code>DataSource</code> was created. The account type can be either an AWS root account or an AWS Identity and Access Management (IAM) user account.</p>
     */
    CreatedByIamUser?: string;

    /**
     * <p>The time that the <code>DataSource</code> was created. The time is expressed in epoch time.</p>
     */
    CreatedAt?: Date;

    /**
     * <p>The time of the most recent edit to the <code>DataSource</code>. The time is expressed in epoch time.</p>
     */
    LastUpdatedAt?: Date;

    /**
     * <p>The total size of observations in the data files.</p>
     */
    DataSizeInBytes?: number;

    /**
     * <p>The number of data files referenced by the <code>DataSource</code>.</p>
     */
    NumberOfFiles?: number;

    /**
     * <p>A user-supplied name or description of the <code>DataSource</code>.</p>
     */
    Name?: string;

    /**
     * <p>The current status of the <code>DataSource</code>. This element can have one of the following values:</p> <ul> <li> <code>PENDING</code> - Amazon ML submitted a request to create a <code>DataSource</code>.</li> <li> <code>INPROGRESS</code> - The creation process is underway.</li> <li> <code>FAILED</code> - The request to create a <code>DataSource</code> did not run to completion. It is not usable.</li> <li> <code>COMPLETED</code> - The creation process completed successfully.</li> <li> <code>DELETED</code> - The <code>DataSource</code> is marked as deleted. It is not usable.</li> </ul>
     */
    Status?: 'PENDING'|'INPROGRESS'|'FAILED'|'COMPLETED'|'DELETED'|string;

    /**
     * <p>A link to the file containing logs of <code>CreateDataSourceFrom*</code> operations.</p>
     */
    LogUri?: string;

    /**
     * <p>The user-supplied description of the most recent details about creating the <code>DataSource</code>.</p>
     */
    Message?: string;

    /**
     * <p>Describes the <code>DataSource</code> details specific to Amazon Redshift.</p>
     */
    RedshiftMetadata?: _UnmarshalledRedshiftMetadata;

    /**
     * <p>The datasource details that are specific to Amazon RDS.</p>
     */
    RDSMetadata?: _UnmarshalledRDSMetadata;

    /**
     * <p>The Amazon Resource Name (ARN) of an <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html#roles-about-termsandconcepts">AWS IAM Role</a>, such as the following: arn:aws:iam::account:role/rolename. </p>
     */
    RoleARN?: string;

    /**
     * <p> The parameter is <code>true</code> if statistics need to be generated from the observation data. </p>
     */
    ComputeStatistics?: boolean;

    /**
     * <p>The approximate CPU time in milliseconds that Amazon Machine Learning spent processing the <code>DataSource</code>, normalized and scaled on computation resources. <code>ComputeTime</code> is only available if the <code>DataSource</code> is in the <code>COMPLETED</code> state and the <code>ComputeStatistics</code> is set to true.</p>
     */
    ComputeTime?: number;

    /**
     * <p>The epoch time when Amazon Machine Learning marked the <code>DataSource</code> as <code>COMPLETED</code> or <code>FAILED</code>. <code>FinishedAt</code> is only available when the <code>DataSource</code> is in the <code>COMPLETED</code> or <code>FAILED</code> state.</p>
     */
    FinishedAt?: Date;

    /**
     * <p>The epoch time when Amazon Machine Learning marked the <code>DataSource</code> as <code>INPROGRESS</code>. <code>StartedAt</code> isn't available if the <code>DataSource</code> is in the <code>PENDING</code> state.</p>
     */
    StartedAt?: Date;

    /**
     * <p>The schema used by all of the data files of this <code>DataSource</code>.</p> <note><title>Note</title> <p>This parameter is provided as part of the verbose format.</p></note>
     */
    DataSourceSchema?: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}