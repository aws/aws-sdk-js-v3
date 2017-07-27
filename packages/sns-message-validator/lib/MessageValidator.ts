import {
    convertLambdaNotification,
    isLambdaNotificationMessage,
    LambdaNotificationMessage,
} from './convertLambdaNotification';
import {isMessage, Message} from "./Message";
import {MessageValidationError} from "./MessageValidationError";
import {getCertificate} from "./getCertificate";
import {createVerify} from 'crypto';
import {parse} from 'url';
import {getStringToSign} from "./getStringToSign";

export const DEFAULT_HOST_PATTERN = /^sns\.[a-zA-Z0-9\-]{3,}\.amazonaws\.com(\.cn)?$/;
export const DEFAULT_ENCODING = 'utf8';

const SIGNATURE_ALGO = 'RSA-SHA1';
const SIGNATURE_ENCODING = 'base64';

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
        private readonly encoding: 'utf8'|'ascii'|'latin1' = DEFAULT_ENCODING
    ) {}

    /**
     * Verifies a message's signature and returns a promise resolved with the
     * validated message.
     *
     * @param message The decoded message received
     */
    validate(
        message: Message|LambdaNotificationMessage|object
    ): Promise<Message> {
        if (isLambdaNotificationMessage(message)) {
            message = convertLambdaNotification(message);
        }

        if (isMessage(message)) {
            return this.validateHost(message)
                .then(message => this.validateSignature(message));
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
                `The provided URL did not match the designated host pattern`
                + ` of ${this.hostPattern.toString()}`
            ));
        }

        return Promise.resolve(message);
    }

    private validateSignature(message: Message): Promise<Message> {
        const {
            Signature,
            SignatureVersion,
            SigningCertURL,
        } = message;
        if (SignatureVersion !== '1') {
            return Promise.reject(new MessageValidationError(
                {SignatureVersion},
                'The MessageValidator can only validate Signature Version 1'
            ));
        }

        return getCertificate(SigningCertURL)
            .then(certificate => {
                const verify = createVerify(SIGNATURE_ALGO);
                verify.update(getStringToSign(message), this.encoding);

                if (verify.verify(certificate, Signature, SIGNATURE_ENCODING)) {
                    return message;
                }

                throw new MessageValidationError(
                    {Signature},
                    'The provided signature is not valid'
                );
            });
    }
}
