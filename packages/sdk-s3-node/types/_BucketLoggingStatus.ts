import {_LoggingEnabled, _UnmarshalledLoggingEnabled} from './_LoggingEnabled';

/**
 * _BucketLoggingStatus shape
 */
export interface _BucketLoggingStatus {
    /**
     * _LoggingEnabled shape
     */
    LoggingEnabled?: _LoggingEnabled;
}

export interface _UnmarshalledBucketLoggingStatus extends _BucketLoggingStatus {
    /**
     * _LoggingEnabled shape
     */
    LoggingEnabled?: _UnmarshalledLoggingEnabled;
}