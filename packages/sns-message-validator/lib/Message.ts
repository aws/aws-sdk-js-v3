export interface BaseMessage {
    /**
     * The type of message.
     */
    Type: 'Notification'|'SubscriptionConfirmation'|'UnsubscribeConfirmation';

    /**
     * A string that describes the message.
     */
    Message: string;

    /**
     * A Universally Unique Identifier, unique for each message published. For a
     * message that Amazon SNS resends during a retry, the message ID of the
     * original message is used.
     */
    MessageId: string;

    /**
     * Base64-encoded "SHA1withRSA" signature of several fields (depending on
     * message type).
     */
    Signature: string;

    /**
     * Version of the Amazon SNS signature used.
     */
    SignatureVersion: string;

    /**
     * The URL to the certificate that was used to sign the message.
     */
    SigningCertURL: string;

    /**
     * The time (GMT) when the message was sent.
     */
    Timestamp: string;

    /**
     * The Amazon Resource Name (ARN) for the topic on which this message was
     * sent.
     */
    TopicArn: string;
}

function isBaseMessage(arg: any): boolean {
    return Boolean(arg)
        && typeof arg === 'object'
        && typeof arg.Message === 'string'
        && typeof arg.MessageId === 'string'
        && typeof arg.Signature === 'string'
        && typeof arg.SignatureVersion === 'string'
        && typeof arg.SigningCertURL === 'string'
        && typeof arg.Timestamp === 'string'
        && typeof arg.TopicArn === 'string';
}

export interface NotificationMessage extends BaseMessage {
    Type: 'Notification';

    /**
     * The Message value specified when the notification was published to the
     * topic.
     */
    Message: string;

    /**
     * Base64-encoded "SHA1withRSA" signature of the Message, MessageId, Subject
     * (if present), Type, Timestamp, and TopicArn values.
     */
    Signature: string;

    /**
     * The Subject parameter specified when the notification was published to
     * the topic.
     */
    Subject?: string;

    /**
     * A URL that you can use to unsubscribe the endpoint from this topic. If
     * you visit this URL, Amazon SNS unsubscribes the endpoint and stops
     * sending notifications to this endpoint.
     */
    UnsubscribeURL: string;
}

function isNotificationMessage(arg: any): arg is NotificationMessage {
    return isBaseMessage(arg)
        && arg.Type === 'Notification'
        && ['string', 'undefined'].indexOf(typeof arg.Subject) > -1
        && typeof arg.UnsubscribeURL === 'string';
}

export interface SubscriptionConfirmationMessage extends BaseMessage {
    Type: 'SubscriptionConfirmation';

    /**
     * Base64-encoded "SHA1withRSA" signature of the Message, MessageId, Type,
     * Timestamp, and TopicArn values.
     */
    Signature: string;

    /**
     * The URL that you must visit in order to confirm the subscription.
     */
    SubscribeURL: string;

    /**
     * A value you can use with the ConfirmSubscription action to confirm the
     * subscription.
     *
     * @see http://docs.aws.amazon.com/sns/latest/api/API_ConfirmSubscription.html
     */
    Token: string;
}

function isSubscriptionConfirmationMessage(
    arg: any
): arg is SubscriptionConfirmationMessage {
    return isBaseMessage(arg)
        && arg.Type === 'SubscriptionConfirmation'
        && typeof arg.SubscribeURL === 'string'
        && typeof arg.Token === 'string';
}

export interface UnsubscribeConfirmationMessage extends BaseMessage {
    Type: 'UnsubscribeConfirmation';

    /**
     * Base64-encoded "SHA1withRSA" signature of the Message, MessageId, Type,
     * Timestamp, and TopicArn values.
     */
    Signature: string;

    /**
     * The URL that you must visit in order to re-confirm the subscription.
     */
    SubscribeURL: string;

    /**
     * A value you can use with the ConfirmSubscription action to re-confirm the
     * subscription.
     */
    Token: string;
}

function isUnsubscribeConfirmationMessage(
    arg: any
): arg is UnsubscribeConfirmationMessage {
    return isBaseMessage(arg)
        && arg.Type === 'UnsubscribeConfirmation'
        && typeof arg.SubscribeURL === 'string'
        && typeof arg.Token === 'string';
}

/**
 * A message sent by SNS to an HTTP or HTTPS endpoint.
 *
 * @see http://docs.aws.amazon.com/sns/latest/dg/json-formats.html
 */
export type Message = NotificationMessage |
    SubscriptionConfirmationMessage |
    UnsubscribeConfirmationMessage;

export function isMessage(arg: any): arg is Message {
    return isNotificationMessage(arg)
        || isSubscriptionConfirmationMessage(arg)
        || isUnsubscribeConfirmationMessage(arg);
}
