import {getStringToSign} from "../lib/getStringToSign";
import {
    NotificationMessage,
    SubscriptionConfirmationMessage,
} from "../lib/Message";

describe('getStringToSign', () => {
    const notification: NotificationMessage = {
        Type: 'Notification',
        MessageId: '4d4dc071-ddbf-465d-bba8-08f81c89da64',
        Message: 'My Test Message',
        Timestamp: '2012-06-05T04:37:04.321Z',
        TopicArn: 'arn:aws:sns:us-east-1:123456789012:s4-MySNSTopic-1G1WEFCOXTC0P',
        SignatureVersion: "1",
        Signature: "EXAMPLElDMXvB8r9R83tGoNn0ecwd5UjllzsvSvbItzfaMpN2nk5HVSw7XnOn/49IkxDKz8YrlH2qJXj2iZB0Zo2O71c4qQk1fMUDi3LGpij7RCW7AW9vYYsSqIKRnFS94ilu7NFhUzLiieYr4BKHpdTmdD6c0esKEYBpabxDSc=",
        SigningCertURL: "https://sns.us-west-2.amazonaws.com/SimpleNotificationService-f3ecfb7224c7233fe7bb5f59f96de52f.pem",
        UnsubscribeURL: "https://sns.us-west-2.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:us-west-2:123456789012:MyTopic:2bcfbf39-05c3-41de-beaa-fcfcc21c8f55"
    };

    const confirmation: SubscriptionConfirmationMessage = {
        Type: "SubscriptionConfirmation",
        MessageId: "3d891288-136d-417f-bc05-901c108273ee",
        Token: "2336412f37fb687f5d51e6e241d09c8058323f60b964268bfe08ce35640228c208a66d3621bd9f7b012918cfdcfe65e153df551f76df58ed147f1245e330ce77ceff06dedab9f051f7028657e6c42750bf64bc9ef711d494e9f7637b86e690779eb5568f72466806b246bd244fa9392b1bc01eeb1c5e420847a745b7aa4b0085",
        TopicArn: "arn:aws:sns:us-west-2:123456789012:s4-MySNSTopic-1G1WEFCOXTC0P",
        Message: "My Test Message",
        SubscribeURL: "https://sns.us-west-2.amazonaws.com/?Action=ConfirmSubscription&TopicArn=arn:aws:sns:us-west-2:123456789012:s4-MySNSTopic-1G1WEFCOXTC0P&Token=2336412f37fb687f5d51e6e241d09c8058323f60b964268bfe08ce35640228c208a66d3621bd9f7b012918cfdcfe65e153df551f76df58ed147f1245e330ce77ceff06dedab9f051f7028657e6c42750bf64bc9ef711d494e9f7637b86e690779eb5568f72466806b246bd244fa9392b1bc01eeb1c5e420847a745b7aa4b0085",
        Timestamp: "2012-06-03T19:25:13.719Z",
        SignatureVersion: "1",
        Signature: "EXAMPLEpH+DcEwjAPg8O9mY8dReBSwksfg2S7WKQcikcNKWLQjwu6A4VbeS0QHVCkhRS7fUQvi2egU3N858fiTDN6bkkOxYDVrY0Ad8L10Hs3zH81mtnPk5uvvolIC1CXGu43obcgFxeL3khZl8IKvO61GWB6jI9b5+gLPoBc1Q=",
        SigningCertURL: "https://sns.us-west-2.amazonaws.com/SimpleNotificationService-f3ecfb7224c7233fe7bb5f59f96de52f.pem"
    };

    /**
     * @see http://docs.aws.amazon.com/sns/latest/dg/SendMessageToHttp.verify.signature.html
     */
    it('should produce a canonical string from notifications', () => {
        expect(getStringToSign(notification)).toBe(
`Message
My Test Message
MessageId
4d4dc071-ddbf-465d-bba8-08f81c89da64
Timestamp
2012-06-05T04:37:04.321Z
TopicArn
arn:aws:sns:us-east-1:123456789012:s4-MySNSTopic-1G1WEFCOXTC0P
Type
Notification
`);
    });

    /**
     * @see http://docs.aws.amazon.com/sns/latest/dg/SendMessageToHttp.verify.signature.html
     */
    it('should include the subject in the canonical string if present', () => {
        expect(getStringToSign({...notification, Subject: 'My subject'})).toBe(
`Message
My Test Message
MessageId
4d4dc071-ddbf-465d-bba8-08f81c89da64
Subject
My subject
Timestamp
2012-06-05T04:37:04.321Z
TopicArn
arn:aws:sns:us-east-1:123456789012:s4-MySNSTopic-1G1WEFCOXTC0P
Type
Notification
`);
    });

    /**
     * @see http://docs.aws.amazon.com/sns/latest/dg/SendMessageToHttp.verify.signature.html
     */
    it('should produce a canonical string from subscription confirmations', () => {
        expect(getStringToSign(confirmation)).toBe(
`Message
My Test Message
MessageId
3d891288-136d-417f-bc05-901c108273ee
SubscribeURL
https://sns.us-west-2.amazonaws.com/?Action=ConfirmSubscription&TopicArn=arn:aws:sns:us-west-2:123456789012:s4-MySNSTopic-1G1WEFCOXTC0P&Token=2336412f37fb687f5d51e6e241d09c8058323f60b964268bfe08ce35640228c208a66d3621bd9f7b012918cfdcfe65e153df551f76df58ed147f1245e330ce77ceff06dedab9f051f7028657e6c42750bf64bc9ef711d494e9f7637b86e690779eb5568f72466806b246bd244fa9392b1bc01eeb1c5e420847a745b7aa4b0085
Timestamp
2012-06-03T19:25:13.719Z
Token
2336412f37fb687f5d51e6e241d09c8058323f60b964268bfe08ce35640228c208a66d3621bd9f7b012918cfdcfe65e153df551f76df58ed147f1245e330ce77ceff06dedab9f051f7028657e6c42750bf64bc9ef711d494e9f7637b86e690779eb5568f72466806b246bd244fa9392b1bc01eeb1c5e420847a745b7aa4b0085
TopicArn
arn:aws:sns:us-west-2:123456789012:s4-MySNSTopic-1G1WEFCOXTC0P
Type
SubscriptionConfirmation
`);
    });

    /**
     * @see http://docs.aws.amazon.com/sns/latest/dg/SendMessageToHttp.verify.signature.html
     */
    it('should produce a canonical string from unsubscribe confirmations', () => {
        expect(
            getStringToSign({...confirmation, Type: 'UnsubscribeConfirmation'})
        ).toBe(
`Message
My Test Message
MessageId
3d891288-136d-417f-bc05-901c108273ee
SubscribeURL
https://sns.us-west-2.amazonaws.com/?Action=ConfirmSubscription&TopicArn=arn:aws:sns:us-west-2:123456789012:s4-MySNSTopic-1G1WEFCOXTC0P&Token=2336412f37fb687f5d51e6e241d09c8058323f60b964268bfe08ce35640228c208a66d3621bd9f7b012918cfdcfe65e153df551f76df58ed147f1245e330ce77ceff06dedab9f051f7028657e6c42750bf64bc9ef711d494e9f7637b86e690779eb5568f72466806b246bd244fa9392b1bc01eeb1c5e420847a745b7aa4b0085
Timestamp
2012-06-03T19:25:13.719Z
Token
2336412f37fb687f5d51e6e241d09c8058323f60b964268bfe08ce35640228c208a66d3621bd9f7b012918cfdcfe65e153df551f76df58ed147f1245e330ce77ceff06dedab9f051f7028657e6c42750bf64bc9ef711d494e9f7637b86e690779eb5568f72466806b246bd244fa9392b1bc01eeb1c5e420847a745b7aa4b0085
TopicArn
arn:aws:sns:us-west-2:123456789012:s4-MySNSTopic-1G1WEFCOXTC0P
Type
UnsubscribeConfirmation
`);
    });
});
