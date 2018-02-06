/**
 * <p>The database details of an Amazon RDS database.</p>
 */
export interface _RDSDatabase {
    /**
     * <p>The ID of an RDS DB instance.</p>
     */
    InstanceIdentifier: string;

    /**
     * <p>The name of a database hosted on an RDS DB instance.</p>
     */
    DatabaseName: string;
}

export type _UnmarshalledRDSDatabase = _RDSDatabase;