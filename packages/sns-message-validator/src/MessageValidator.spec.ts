import {MessageValidator} from "./MessageValidator";
import {MessageValidationError} from './MessageValidationError';
import {
    HTTP_NOTIFICATION,
    LAMBDA_NOTIFICATION
} from './capturedMessages.fixture';

jest.mock('./getCertificate', () => {
    return {getCertificate: jest.fn()};
});
import {getCertificate} from './getCertificate';

jest.mock('crypto', () => {
    const verify = {
        update: jest.fn(),
        verify: jest.fn(),
    };

    return {createVerify: jest.fn(() => verify)};
});
import {createVerify} from 'crypto';

beforeEach(() => {
    (getCertificate as any).mockReset();
    (getCertificate as any).mockImplementation(() => Promise.resolve('certificate'));
    const verify = createVerify('RSA-SHA1');
    (verify.update as any).mockReset();
    (verify.verify as any).mockReset();
    (verify.verify as any).mockImplementation(() => true);
});

describe('MessageValidator', () => {
    it('should reject scalar values', async () => {
        const validator = new MessageValidator();

        for (let scalar of ['string', 123, true, null, void 0]) {
            await expect(validator.validate(scalar as any))
                .rejects
                .toMatchObject(new MessageValidationError(
                    scalar as any,
                    'Message missing required keys'
                ));
        }
    });

    it(
        'should reject objects that do not fulfill the Message interface',
        async () => {
            const validator = new MessageValidator();

            for (let object of [{}, [], new ArrayBuffer(0)]) {
                await expect(validator.validate(object as any))
                    .rejects
                    .toMatchObject(new MessageValidationError(
                        object,
                        'Message missing required keys'
                    ));
            }
        }
    );

    it(
        'should reject messages whose SigningCertURL does not use the https: protocol',
        () => {
            const validator = new MessageValidator();
            let {SigningCertURL} = HTTP_NOTIFICATION;
            SigningCertURL = SigningCertURL.replace(/^https:/, 'http:');
            expect(SigningCertURL).not.toBe(HTTP_NOTIFICATION.SigningCertURL);

            return expect(validator.validate({
                ...HTTP_NOTIFICATION,
                SigningCertURL
            })).rejects.toMatchObject(new MessageValidationError(
                {SigningCertURL},
                'Signing certificate URLs must use the https: protocol'
            ));
        }
    );

    it('should reject messages whose SigningCertURL does not end in .pem', () => {
        const validator = new MessageValidator();
        let {SigningCertURL} = HTTP_NOTIFICATION;
        SigningCertURL = SigningCertURL.replace(/\.pem$/, '.pfx');
        expect(SigningCertURL).not.toBe(HTTP_NOTIFICATION.SigningCertURL);

        return expect(validator.validate({
            ...HTTP_NOTIFICATION,
            SigningCertURL
        })).rejects.toMatchObject(new MessageValidationError(
            {SigningCertURL},
            'Signing certificate URLs must end in ".pem"'
        ));
    });

    it(
        'should reject messages whose SigningCertURL does not match the defined host pattern',
        () => {
            const validator = new MessageValidator();
            let {SigningCertURL} = HTTP_NOTIFICATION;
            SigningCertURL = SigningCertURL.replace(
                'sns.us-west-2.amazonaws.com',
                'localhost'
            );
            expect(SigningCertURL).not.toBe(HTTP_NOTIFICATION.SigningCertURL);

            return expect(validator.validate({
                ...HTTP_NOTIFICATION,
                SigningCertURL
            })).rejects.toMatchObject(new MessageValidationError(
                {SigningCertURL},
                'The provided URL did not match the designated host pattern of /^sns\\.[a-zA-Z0-9\\-]{3,}\\.amazonaws\\.com(\\.cn)?$/'
            ));
        }
    );

    it('should allow the injection of custom host patterns', () => {
        const validator = new MessageValidator(/^localhost$/);
        const {SigningCertURL} = HTTP_NOTIFICATION;

        return expect(validator.validate(HTTP_NOTIFICATION)).rejects
            .toMatchObject(new MessageValidationError(
                {SigningCertURL},
                'The provided URL did not match the designated host pattern of /^localhost$/'
            ));
    });

    it('should reject messages whose SignatureVersion is not "1"', () => {
        const validator = new MessageValidator();

        return expect(validator.validate({
            ...HTTP_NOTIFICATION,
            SignatureVersion: "2"
        })).rejects.toMatchObject(new MessageValidationError(
            {SignatureVersion: "2"},
            'The MessageValidator can only validate Signature Version 1'
        ));
    });

    it('should accept, validate, and return HTTP-style SNS messages', () => {
        const validator = new MessageValidator();

        return expect(validator.validate(HTTP_NOTIFICATION)).resolves
            .toEqual(HTTP_NOTIFICATION);
    });

    it('should accept, validate, and return Lambda-style SNS messages', () => {
        const validator = new MessageValidator();

        return expect(validator.validate(LAMBDA_NOTIFICATION)).resolves
            .toMatchObject(LAMBDA_NOTIFICATION);
    });

    it('should trap verifier errors', () => {
        const validator = new MessageValidator();
        const verify = createVerify('RSA-SHA1');
        (verify.verify as any).mockImplementation(() => {
            throw new Error('Keep calm and carry on.');
        });

        return expect(validator.validate(HTTP_NOTIFICATION)).rejects
            .toMatchObject(new Error('Keep calm and carry on.'));
    });

    it('should reject the promise if signature verification fails', () => {
        const validator = new MessageValidator();
        const verify = createVerify('RSA-SHA1');
        (verify.verify as any).mockImplementation(() => false);

        return expect(validator.validate(HTTP_NOTIFICATION)).rejects
            .toMatchObject(new Error('The provided signature is not valid'));
    });
});
