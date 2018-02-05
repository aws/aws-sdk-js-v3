import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * <p>Contains the Amazon Glacier response to your request.</p>
 */
export interface GetVaultLockOutput {
    /**
     * <p>The vault lock policy as a JSON string, which uses "\" as an escape character.</p>
     */
    Policy?: string;

    /**
     * <p>The state of the vault lock. <code>InProgress</code> or <code>Locked</code>.</p>
     */
    State?: string;

    /**
     * <p>The UTC date and time at which the lock ID expires. This value can be <code>null</code> if the vault lock is in a <code>Locked</code> state.</p>
     */
    ExpirationDate?: string;

    /**
     * <p>The UTC date and time at which the vault lock was put into the <code>InProgress</code> state.</p>
     */
    CreationDate?: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}