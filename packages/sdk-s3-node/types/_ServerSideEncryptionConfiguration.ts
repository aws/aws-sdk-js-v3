import {_ServerSideEncryptionRule, _UnmarshalledServerSideEncryptionRule} from './_ServerSideEncryptionRule';

/**
 * _ServerSideEncryptionConfiguration shape
 */
export interface _ServerSideEncryptionConfiguration {
    /**
     * _ServerSideEncryptionRules shape
     */
    Rules: Array<_ServerSideEncryptionRule>|Iterable<_ServerSideEncryptionRule>;
}

export interface _UnmarshalledServerSideEncryptionConfiguration extends _ServerSideEncryptionConfiguration {
    /**
     * _ServerSideEncryptionRules shape
     */
    Rules: Array<_UnmarshalledServerSideEncryptionRule>;
}