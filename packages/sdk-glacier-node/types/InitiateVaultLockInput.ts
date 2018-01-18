import {_VaultLockPolicy} from './_VaultLockPolicy';

/**
 * <p>The input values for <code>InitiateVaultLock</code>.</p>
 */
export interface InitiateVaultLockInput {
    /**
     * <p>The <code>AccountId</code> value is the AWS account ID. This value must match the AWS account ID associated with the credentials used to sign the request. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you specify your account ID, do not include any hyphens ('-') in the ID.</p>
     */
    accountId: string;

    /**
     * <p>The name of the vault.</p>
     */
    vaultName: string;

    /**
     * <p>The vault lock policy as a JSON string, which uses "\" as an escape character.</p>
     */
    policy?: _VaultLockPolicy;
}