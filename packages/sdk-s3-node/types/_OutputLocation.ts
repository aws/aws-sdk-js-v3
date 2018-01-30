import {_S3Location, _UnmarshalledS3Location} from './_S3Location';

/**
 * Describes the location where the restore job's output is stored.
 */
export interface _OutputLocation {
    /**
     * Describes an S3 location that will receive the results of the restore request.
     */
    S3?: _S3Location;
}

export interface _UnmarshalledOutputLocation extends _OutputLocation {
    /**
     * Describes an S3 location that will receive the results of the restore request.
     */
    S3?: _UnmarshalledS3Location;
}