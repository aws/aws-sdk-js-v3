import {
    Message,
    NotificationMessage,
    SubscriptionConfirmationMessage,
    UnsubscribeConfirmationMessage,
} from "./Message";

const NOTIFICATION_KEYS: Array<keyof NotificationMessage> = [
    'Message',
    'MessageId',
    'Timestamp',
    'TopicArn',
    'Type',
];

const CONFIRMATION_KEYS: Array<keyof SubscriptionConfirmationMessage & keyof UnsubscribeConfirmationMessage> = [
    'Message',
    'MessageId',
    'SubscribeURL',
    'Timestamp',
    'Token',
    'TopicArn',
    'Type',
];

export function getStringToSign(message: Message): string {
    if (message.Type === 'Notification') {
        return constructStringToSign(
            message,
            message.Subject
                ? [...NOTIFICATION_KEYS, 'Subject']
                : NOTIFICATION_KEYS
        );
    }

    return constructStringToSign(message, CONFIRMATION_KEYS);
}

function constructStringToSign<T extends Message>(
    message: T,
    keys: Array<keyof T>
): string {
    return keys.sort().reduce(
        (
            toSign: string,
            key: keyof T
        ): string => `${toSign}${key}\n${message[key]}\n`,
        ''
    );
}
