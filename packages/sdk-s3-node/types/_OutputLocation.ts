import {_S3Location, _UnmarshalledS3Location} from './_S3Location';

/**
 * _OutputLocation shape
 */
export interface _OutputLocation {
    /**
     * _S3Location shape
     */
    S3?: _S3Location;
}

export interface _UnmarshalledOutputLocation extends _OutputLocation {
    /**
     * _S3Location shape
     */
    S3?: _UnmarshalledS3Location;
}