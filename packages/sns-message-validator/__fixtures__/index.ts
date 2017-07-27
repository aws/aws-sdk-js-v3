import {LambdaNotificationMessage} from "../lib/convertLambdaNotification";
import {
    NotificationMessage,
    SubscriptionConfirmationMessage,
    UnsubscribeConfirmationMessage
} from "../lib/Message";

export const HTTP_NOTIFICATION: NotificationMessage = {
    Type: "Notification",
    MessageId: "9438aee6-d476-5e20-ba25-ff24bf09d6ce",
    TopicArn: "arn:aws:sns:us-west-2:604091128280:testing1",
    Subject: "A subject",
    Message: "A message",
    Timestamp: "2017-06-20T00:15:59.380Z",
    SignatureVersion: "1",
    Signature: "WT7qMHW+jPdj/brSAX7M1jbP5OoPjn9pYmGQqrWeQgbMyVvz3D2sV72ldhCxQLqj/3TLtcTyErVqzT3AfQ8Vk55Rzxd1xnBufJ+0vIyH98b82pKOqRHOqlB72la5nY9/GF/p71BXmIChQpfv/CEZumexgLWnweJsqSMe82I6/eMmrhVZdKpBvz4Sqj+wNQW+0eYEc9bdZmEKuYIvrvTGm1MWkXmqUGuCGj5o3vFFn1GTtM895B3MyMgaSeDHI08CVfs9y1nLcrxwMvqpkHZmIwTi1jzSipYMRD8FVF6Wvq0Scy+FoYSnOWHpEsELI0SGddSqYgli9ROYiqi3DQhvHw==",
    SigningCertURL: "https://sns.us-west-2.amazonaws.com/SimpleNotificationService-b95095beb82e8f6a046b3aafc7f4149a.pem",
    UnsubscribeURL: "https://sns.us-west-2.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:us-west-2:604091128280:testing1:b061e4fd-c468-458d-9736-91c8c0c18e29",
};

export const LAMBDA_NOTIFICATION: LambdaNotificationMessage = {
    Type: 'Notification',
    MessageId: '9438aee6-d476-5e20-ba25-ff24bf09d6ce',
    TopicArn: 'arn:aws:sns:us-west-2:604091128280:testing1',
    Subject: 'A subject',
    Message: 'A message',
    Timestamp: '2017-06-20T00:15:59.380Z',
    SignatureVersion: '1',
    Signature: 'WT7qMHW+jPdj/brSAX7M1jbP5OoPjn9pYmGQqrWeQgbMyVvz3D2sV72ldhCxQLqj/3TLtcTyErVqzT3AfQ8Vk55Rzxd1xnBufJ+0vIyH98b82pKOqRHOqlB72la5nY9/GF/p71BXmIChQpfv/CEZumexgLWnweJsqSMe82I6/eMmrhVZdKpBvz4Sqj+wNQW+0eYEc9bdZmEKuYIvrvTGm1MWkXmqUGuCGj5o3vFFn1GTtM895B3MyMgaSeDHI08CVfs9y1nLcrxwMvqpkHZmIwTi1jzSipYMRD8FVF6Wvq0Scy+FoYSnOWHpEsELI0SGddSqYgli9ROYiqi3DQhvHw==',
    SigningCertUrl: 'https://sns.us-west-2.amazonaws.com/SimpleNotificationService-b95095beb82e8f6a046b3aafc7f4149a.pem',
    UnsubscribeUrl: 'https://sns.us-west-2.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:us-west-2:604091128280:testing1:7118d01a-202e-4a65-a372-f46b0994bdae',
};

export const HTTP_NOTIFICATION_NO_SUBJECT: NotificationMessage = {
    Type: "Notification",
    MessageId: "7317aaf2-e97a-5cf3-8123-fb3a48fabd2a",
    TopicArn: "arn:aws:sns:us-west-2:604091128280:testing1",
    Message: "A subject-less message",
    Timestamp: "2017-06-24T17:20:00.581Z",
    SignatureVersion: "1",
    Signature: "Lvtgxo8P2C3XUKT8fC7sfMRhxoK6dn/ed9B1DClmJ9GNuFF73G27lhKUsKWrLReawa+v7C1UY49qQb+lSMsBiTV0Hx7L2OKJjzll4fx+G09h2P8OK43Jk6/W05+xU0uvch6Ktp3XrBcI6KNyGFio5GAR2rCBHjdh8MsEYAWRtaVCBqJTLqnHscivOJD8u/m807wDbDhh9cQ5WnvjerUjtrDAfQJN5vHLjEPbL1owtu2FzC3rOHUL9j4TGOdZi2jhUYv8jwzNnJ05bhbtKd6HxKcTcv1JCp/4NLPa8LWYnbLRvWooDQdF2hr56EF6EKDzTtAWagoNYztwSvosQXNK+Q==",
    SigningCertURL: "https://sns.us-west-2.amazonaws.com/SimpleNotificationService-b95095beb82e8f6a046b3aafc7f4149a.pem",
    UnsubscribeURL: "https://sns.us-west-2.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:us-west-2:604091128280:testing1:f0dd49ac-c33d-471e-812d-1f0e5116c711",
};

export const LAMBDA_NOTIFICATION_NO_SUBJECT: LambdaNotificationMessage = {
    Type: 'Notification',
    MessageId: '7317aaf2-e97a-5cf3-8123-fb3a48fabd2a',
    TopicArn: 'arn:aws:sns:us-west-2:604091128280:testing1',
    Subject: null,
    Message: 'A subject-less message',
    Timestamp: '2017-06-24T17:20:00.581Z',
    SignatureVersion: '1',
    Signature: 'Lvtgxo8P2C3XUKT8fC7sfMRhxoK6dn/ed9B1DClmJ9GNuFF73G27lhKUsKWrLReawa+v7C1UY49qQb+lSMsBiTV0Hx7L2OKJjzll4fx+G09h2P8OK43Jk6/W05+xU0uvch6Ktp3XrBcI6KNyGFio5GAR2rCBHjdh8MsEYAWRtaVCBqJTLqnHscivOJD8u/m807wDbDhh9cQ5WnvjerUjtrDAfQJN5vHLjEPbL1owtu2FzC3rOHUL9j4TGOdZi2jhUYv8jwzNnJ05bhbtKd6HxKcTcv1JCp/4NLPa8LWYnbLRvWooDQdF2hr56EF6EKDzTtAWagoNYztwSvosQXNK+Q==',
    SigningCertUrl: 'https://sns.us-west-2.amazonaws.com/SimpleNotificationService-b95095beb82e8f6a046b3aafc7f4149a.pem',
    UnsubscribeUrl: 'https://sns.us-west-2.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:us-west-2:604091128280:testing1:7118d01a-202e-4a65-a372-f46b0994bdae',
};
