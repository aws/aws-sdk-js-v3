/**
 * <p>Describes the database details required to connect to an Amazon Redshift database.</p>
 */
export interface _RedshiftDatabase {
    /**
     * <p>The name of a database hosted on an Amazon Redshift cluster.</p>
     */
    DatabaseName: string;

    /**
     * <p>The ID of an Amazon Redshift cluster.</p>
     */
    ClusterIdentifier: string;
}

export type _UnmarshalledRedshiftDatabase = _RedshiftDatabase;