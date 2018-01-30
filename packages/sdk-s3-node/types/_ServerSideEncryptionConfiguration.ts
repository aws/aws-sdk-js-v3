import {_ServerSideEncryptionRule, _UnmarshalledServerSideEncryptionRule} from './_ServerSideEncryptionRule';

/**
 * Container for server-side encryption configuration rules. Currently S3 supports one rule only.
 */
export interface _ServerSideEncryptionConfiguration {
    /**
     * Container for information about a particular server-side encryption configuration rule.
     */
    Rules: Array<_ServerSideEncryptionRule>|Iterable<_ServerSideEncryptionRule>;
}

export interface _UnmarshalledServerSideEncryptionConfiguration extends _ServerSideEncryptionConfiguration {
    /**
     * Container for information about a particular server-side encryption configuration rule.
     */
    Rules: Array<_UnmarshalledServerSideEncryptionRule>;
}