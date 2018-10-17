import {_ServerSideEncryptionRule, _UnmarshalledServerSideEncryptionRule} from './_ServerSideEncryptionRule';

/**
 * <p>Container for server-side encryption configuration rules. Currently S3 supports one rule only.</p>
 */
export interface _ServerSideEncryptionConfiguration {
    /**
     * <p>Container for information about a particular server-side encryption configuration rule.</p>
     */
    Rules: Array<_ServerSideEncryptionRule>|Iterable<_ServerSideEncryptionRule>;
}

export interface _UnmarshalledServerSideEncryptionConfiguration extends _ServerSideEncryptionConfiguration {
    /**
     * <p>Container for information about a particular server-side encryption configuration rule.</p>
     */
    Rules: Array<_UnmarshalledServerSideEncryptionRule>;
}