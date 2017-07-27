import {NotificationMessage} from './Message';

export interface LambdaNotificationMessage {
    /**
     * The type of message.
     */
    Type: 'Notification';

    /**
     * The Message value specified when the notification was published to the
     * topic.
     */
    Message: string;

    /**
     * A Universally Unique Identifier, unique for each message published. For a
     * message that Amazon SNS resends during a retry, the message ID of the
     * original message is used.
     */
    MessageId: string;

    /**
     * Base64-encoded "SHA1withRSA" signature of the Message, MessageId, Subject
     * (if present), Type, Timestamp, and TopicArn values.
     */
    Signature: string;

    /**
     * Version of the Amazon SNS signature used.
     */
    SignatureVersion: string;

    /**
     * The URL to the certificate that was used to sign the message.
     *
     * @warning The casing of this key differs in Lambda messages vs those sent
     * to HTTP(S) endpoints.
     */
    SigningCertUrl: string;

    /**
     * The Subject parameter specified when the notification was published to
     * the topic.
     */
    Subject?: string|null;

    /**
     * The time (GMT) when the message was sent.
     */
    Timestamp: string;

    /**
     * The Amazon Resource Name (ARN) for the topic on which this message was
     * sent.
     */
    TopicArn: string;

    /**
     * A URL that you can use to unsubscribe the endpoint from this topic. If
     * you visit this URL, Amazon SNS unsubscribes the endpoint and stops
     * sending notifications to this endpoint.
     *
     * @warning The casing of this key differs in Lambda messages vs those sent
     * to HTTP(S) endpoints.
     */
    UnsubscribeUrl: string;
}

export function isLambdaNotificationMessage(
    arg: any
): arg is LambdaNotificationMessage {
    return Boolean(arg)
        && typeof arg === 'object'
        && typeof arg.Message === 'string'
        && typeof arg.MessageId === 'string'
        && typeof arg.Signature === 'string'
        && typeof arg.SignatureVersion === 'string'
        && typeof arg.SigningCertUrl === 'string'
        && typeof arg.Timestamp === 'string'
        && typeof arg.TopicArn === 'string'
        && arg.Type === 'Notification'
        && (['string', 'undefined'].indexOf(typeof arg.Subject) > -1 || arg.Subject === null)
        && typeof arg.UnsubscribeUrl === 'string';
}

export function convertLambdaNotification(
    notification: LambdaNotificationMessage
): NotificationMessage {
    const httpStyleNotification = {
        ...notification,
        SigningCertURL: notification.SigningCertUrl,
        UnsubscribeURL: notification.UnsubscribeUrl,
    };

    if (httpStyleNotification.Subject === null) {
        delete httpStyleNotification.Subject;
    }

    return httpStyleNotification as NotificationMessage;
}
