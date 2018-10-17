import {_S3Location, _UnmarshalledS3Location} from './_S3Location';

/**
 * <p>Contains information about the location where the select job results are stored.</p>
 */
export interface _OutputLocation {
    /**
     * <p>Describes an S3 location that will receive the results of the job request.</p>
     */
    S3?: _S3Location;
}

export interface _UnmarshalledOutputLocation extends _OutputLocation {
    /**
     * <p>Describes an S3 location that will receive the results of the job request.</p>
     */
    S3?: _UnmarshalledS3Location;
}