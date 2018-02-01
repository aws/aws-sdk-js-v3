import {Structure as _Structure_} from '@aws/types';

export const _RequestPaymentConfiguration: _Structure_ = {
    type: 'structure',
    required: [
        'Payer',
    ],
    members: {
        Payer: {
            shape: {
                type: 'string',
            },
        },
    },
};