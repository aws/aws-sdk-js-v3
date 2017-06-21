import {
    convertLambdaNotification,
    isLambdaNotificationMessage,
} from "../lib/convertLambdaNotification";
import {HTTP_MESSAGE, LAMBDA_MESSAGE} from '../__fixtures__';
import {isMessage} from "../lib/Message";

describe('isLambdaNotificationMessage', () => {
    it(
        'will accept a real-life SNS message provided to an AWS Lambda invocation',
        () => {
            expect(isLambdaNotificationMessage(LAMBDA_MESSAGE)).toBe(true);
        }
    );

    it('will not accept an HTTP-style message', () => {
        expect(isLambdaNotificationMessage(HTTP_MESSAGE)).toBe(false);
    });
});

describe('convertLambdaNotification', () => {
    it(
        'should convert lambda notifications into HTTP-style notifications',
        () => {
            const converted = convertLambdaNotification(LAMBDA_MESSAGE);
            expect(isMessage(converted)).toBe(true);
        }
    );
});
