import {_TargetGrant, _UnmarshalledTargetGrant} from './_TargetGrant';

/**
 * _LoggingEnabled shape
 */
export interface _LoggingEnabled {
    /**
     * _TargetBucket shape
     */
    TargetBucket?: string;

    /**
     * _TargetGrants shape
     */
    TargetGrants?: Array<_TargetGrant>|Iterable<_TargetGrant>;

    /**
     * _TargetPrefix shape
     */
    TargetPrefix?: string;
}

export interface _UnmarshalledLoggingEnabled extends _LoggingEnabled {
    /**
     * _TargetGrants shape
     */
    TargetGrants?: Array<_UnmarshalledTargetGrant>;
}