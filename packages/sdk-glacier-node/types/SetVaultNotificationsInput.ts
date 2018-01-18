import {_VaultNotificationConfig} from './_VaultNotificationConfig';

/**
 * <p>Provides options to configure notifications that will be sent when specific events happen to a vault.</p>
 */
export interface SetVaultNotificationsInput {
    /**
     * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.</p>
     */
    accountId: string;

    /**
     * <p>The name of the vault.</p>
     */
    vaultName: string;

    /**
     * <p>Provides options for specifying notification configuration.</p>
     */
    vaultNotificationConfig?: _VaultNotificationConfig;
}