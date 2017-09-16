import {
    convertLambdaNotification,
    isLambdaNotificationMessage,
} from "./convertLambdaNotification";
import {isMessage} from "./Message";
import {
    HTTP_NOTIFICATION,
    LAMBDA_NOTIFICATION,
    LAMBDA_NOTIFICATION_NO_SUBJECT
} from './capturedMessages.fixture';

describe('isLambdaNotificationMessage', () => {
    it(
        'will accept a real-life SNS message provided to an AWS Lambda invocation',
        () => {
            expect(isLambdaNotificationMessage(LAMBDA_NOTIFICATION)).toBe(true);
        }
    );

    it('will not accept an HTTP-style message', () => {
        expect(isLambdaNotificationMessage(HTTP_NOTIFICATION)).toBe(false);
    });

    it('will accept a notification with a subject of `null`', () => {
        expect(isLambdaNotificationMessage(LAMBDA_NOTIFICATION_NO_SUBJECT))
            .toBe(true);
    });
});

describe('convertLambdaNotification', () => {
    it(
        'should convert lambda notifications into HTTP-style notifications',
        () => {
            expect(isMessage(convertLambdaNotification(LAMBDA_NOTIFICATION)))
                .toBe(true);
            expect(isMessage(
                convertLambdaNotification(LAMBDA_NOTIFICATION_NO_SUBJECT)
            )).toBe(true);
        }
    );

    it('should convert a subject of `null` to undefined', () => {
        const converted = convertLambdaNotification(LAMBDA_NOTIFICATION_NO_SUBJECT);
        expect(converted.Subject).not
            .toEqual(LAMBDA_NOTIFICATION_NO_SUBJECT.Subject);
        expect(converted.Subject).not.toBeDefined();
    });
});
