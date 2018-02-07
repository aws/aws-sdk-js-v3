import {_RedshiftDatabase, _UnmarshalledRedshiftDatabase} from './_RedshiftDatabase';
import {_RedshiftDatabaseCredentials, _UnmarshalledRedshiftDatabaseCredentials} from './_RedshiftDatabaseCredentials';

/**
 * <p>Describes the data specification of an Amazon Redshift <code>DataSource</code>.</p>
 */
export interface _RedshiftDataSpec {
    /**
     * <p>Describes the <code>DatabaseName</code> and <code>ClusterIdentifier</code> for an Amazon Redshift <code>DataSource</code>.</p>
     */
    DatabaseInformation: _RedshiftDatabase;

    /**
     * <p>Describes the SQL Query to execute on an Amazon Redshift database for an Amazon Redshift <code>DataSource</code>.</p>
     */
    SelectSqlQuery: string;

    /**
     * <p>Describes AWS Identity and Access Management (IAM) credentials that are used connect to the Amazon Redshift database.</p>
     */
    DatabaseCredentials: _RedshiftDatabaseCredentials;

    /**
     * <p>Describes an Amazon S3 location to store the result set of the <code>SelectSqlQuery</code> query.</p>
     */
    S3StagingLocation: string;

    /**
     * <p>A JSON string that represents the splitting and rearrangement processing to be applied to a <code>DataSource</code>. If the <code>DataRearrangement</code> parameter is not provided, all of the input data is used to create the <code>Datasource</code>.</p> <p>There are multiple parameters that control what data is used to create a datasource:</p> <ul> <li><p><b><code>percentBegin</code></b></p> <p>Use <code>percentBegin</code> to indicate the beginning of the range of the data used to create the Datasource. If you do not include <code>percentBegin</code> and <code>percentEnd</code>, Amazon ML includes all of the data when creating the datasource.</p></li> <li><p><b><code>percentEnd</code></b></p> <p>Use <code>percentEnd</code> to indicate the end of the range of the data used to create the Datasource. If you do not include <code>percentBegin</code> and <code>percentEnd</code>, Amazon ML includes all of the data when creating the datasource.</p></li> <li><p><b><code>complement</code></b></p> <p>The <code>complement</code> parameter instructs Amazon ML to use the data that is not included in the range of <code>percentBegin</code> to <code>percentEnd</code> to create a datasource. The <code>complement</code> parameter is useful if you need to create complementary datasources for training and evaluation. To create a complementary datasource, use the same values for <code>percentBegin</code> and <code>percentEnd</code>, along with the <code>complement</code> parameter.</p> <p>For example, the following two datasources do not share any data, and can be used to train and evaluate a model. The first datasource has 25 percent of the data, and the second one has 75 percent of the data.</p> <p>Datasource for evaluation: <code>{"splitting":{"percentBegin":0, "percentEnd":25}}</code></p> <p>Datasource for training: <code>{"splitting":{"percentBegin":0, "percentEnd":25, "complement":"true"}}</code></p> </li> <li><p><b><code>strategy</code></b></p> <p>To change how Amazon ML splits the data for a datasource, use the <code>strategy</code> parameter.</p> <p>The default value for the <code>strategy</code> parameter is <code>sequential</code>, meaning that Amazon ML takes all of the data records between the <code>percentBegin</code> and <code>percentEnd</code> parameters for the datasource, in the order that the records appear in the input data.</p> <p>The following two <code>DataRearrangement</code> lines are examples of sequentially ordered training and evaluation datasources:</p> <p>Datasource for evaluation: <code>{"splitting":{"percentBegin":70, "percentEnd":100, "strategy":"sequential"}}</code></p> <p>Datasource for training: <code>{"splitting":{"percentBegin":70, "percentEnd":100, "strategy":"sequential", "complement":"true"}}</code></p> <p>To randomly split the input data into the proportions indicated by the percentBegin and percentEnd parameters, set the <code>strategy</code> parameter to <code>random</code> and provide a string that is used as the seed value for the random data splitting (for example, you can use the S3 path to your data as the random seed string). If you choose the random split strategy, Amazon ML assigns each row of data a pseudo-random number between 0 and 100, and then selects the rows that have an assigned number between <code>percentBegin</code> and <code>percentEnd</code>. Pseudo-random numbers are assigned using both the input seed string value and the byte offset as a seed, so changing the data results in a different split. Any existing ordering is preserved. The random splitting strategy ensures that variables in the training and evaluation data are distributed similarly. It is useful in the cases where the input data may have an implicit sort order, which would otherwise result in training and evaluation datasources containing non-similar data records.</p> <p>The following two <code>DataRearrangement</code> lines are examples of non-sequentially ordered training and evaluation datasources:</p> <p>Datasource for evaluation: <code>{"splitting":{"percentBegin":70, "percentEnd":100, "strategy":"random", "randomSeed"="s3://my_s3_path/bucket/file.csv"}}</code></p> <p>Datasource for training: <code>{"splitting":{"percentBegin":70, "percentEnd":100, "strategy":"random", "randomSeed"="s3://my_s3_path/bucket/file.csv", "complement":"true"}}</code></p> </li> </ul>
     */
    DataRearrangement?: string;

    /**
     * <p>A JSON string that represents the schema for an Amazon Redshift <code>DataSource</code>. The <code>DataSchema</code> defines the structure of the observation data in the data file(s) referenced in the <code>DataSource</code>.</p> <p>A <code>DataSchema</code> is not required if you specify a <code>DataSchemaUri</code>.</p> <p>Define your <code>DataSchema</code> as a series of key-value pairs. <code>attributes</code> and <code>excludedVariableNames</code> have an array of key-value pairs for their value. Use the following format to define your <code>DataSchema</code>.</p> <p>{ "version": "1.0",</p> <p> "recordAnnotationFieldName": "F1",</p> <p> "recordWeightFieldName": "F2",</p> <p> "targetFieldName": "F3",</p> <p> "dataFormat": "CSV",</p> <p> "dataFileContainsHeader": true,</p> <p> "attributes": [</p> <p> { "fieldName": "F1", "fieldType": "TEXT" }, { "fieldName": "F2", "fieldType": "NUMERIC" }, { "fieldName": "F3", "fieldType": "CATEGORICAL" }, { "fieldName": "F4", "fieldType": "NUMERIC" }, { "fieldName": "F5", "fieldType": "CATEGORICAL" }, { "fieldName": "F6", "fieldType": "TEXT" }, { "fieldName": "F7", "fieldType": "WEIGHTED_INT_SEQUENCE" }, { "fieldName": "F8", "fieldType": "WEIGHTED_STRING_SEQUENCE" } ],</p> <p> "excludedVariableNames": [ "F6" ] } </p>
     */
    DataSchema?: string;

    /**
     * <p>Describes the schema location for an Amazon Redshift <code>DataSource</code>.</p>
     */
    DataSchemaUri?: string;
}

export interface _UnmarshalledRedshiftDataSpec extends _RedshiftDataSpec {
    /**
     * <p>Describes the <code>DatabaseName</code> and <code>ClusterIdentifier</code> for an Amazon Redshift <code>DataSource</code>.</p>
     */
    DatabaseInformation: _UnmarshalledRedshiftDatabase;

    /**
     * <p>Describes AWS Identity and Access Management (IAM) credentials that are used connect to the Amazon Redshift database.</p>
     */
    DatabaseCredentials: _UnmarshalledRedshiftDatabaseCredentials;
}