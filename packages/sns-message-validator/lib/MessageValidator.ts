import {
    convertLambdaNotification,
    isLambdaNotificationMessage,
    LambdaNotificationMessage,
} from './convertLambdaNotification';
import {isMessage, Message} from "./Message";
import {parse} from 'url';
import {MessageValidationError} from "./MessageValidationError";

const DEFAULT_HOST_PATTERN = /^sns\.[a-zA-Z0-9\-]{3,}\.amazonaws\.com(\.cn)?$/;
const DEFAULT_ENCODING = 'utf8';
const CERTIFICATE_CACHE: {[key: string]: string} = {};

export interface ValidateCallback {
    (err: Error|null, message?: string): void;
}

/**
 * A validator for inbound HTTP(S) SNS messages.
 */
export class MessageValidator {

    /**
     * @param hostPattern - A pattern used to validate that a message's
     *                      certificate originates from a trusted domain.
     * @param encoding - The encoding of the messages being signed.
     */
    constructor(
        private readonly hostPattern: RegExp = DEFAULT_HOST_PATTERN,
        private readonly encoding: string = DEFAULT_ENCODING
    ) {}

    validate(
        message: Message|LambdaNotificationMessage|object
    ): Promise<Message> {
        if (isLambdaNotificationMessage(message)) {
            message = convertLambdaNotification(message);
        }

        if (isMessage(message)) {
            return Promise.resolve(message)
                .then(this.validateHost);
        }

        return Promise.reject(
            new MessageValidationError(message, 'Message missing required keys')
        );
    }

    private validateHost(message: Message): Promise<Message> {
        const {SigningCertURL} = message;
        const {hostname = '', path = '', protocol} = parse(SigningCertURL);

        if (protocol !== 'https:') {
            return Promise.reject(new MessageValidationError(
                {SigningCertURL},
                'Signing certificate URLs must use the https: protocol'
            ));
        }

        if (path.substr(-4) !== '.pem') {
            return Promise.reject(new MessageValidationError(
                {SigningCertURL},
                'Signing certificate URLs must end in ".pem"'
            ));
        }

        if (!this.hostPattern.test(hostname)) {
            return Promise.reject(new MessageValidationError(
                {SigningCertURL},
                `The provided URL did not match the designated host pattern of ${this.hostPattern.toString()}`
            ));
        }

        return Promise.resolve(message);
    }

    private validateSignature(message: Message): Promise<Message> {
        const {SignatureVersion} = message;
        // if (SignatureVersion !== '1') {
            return Promise.reject(new MessageValidationError(
                {SignatureVersion},
                'The MessageValidator can only validate Signature Version 1'
            ));
        // }
    }
}
