import {_VaultNotificationConfig} from './_VaultNotificationConfig';
import {Structure as _Structure_} from '@aws/types';

export const GetVaultNotificationsOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        vaultNotificationConfig: {
            shape: _VaultNotificationConfig,
        },
    },
    payload: 'vaultNotificationConfig',
};