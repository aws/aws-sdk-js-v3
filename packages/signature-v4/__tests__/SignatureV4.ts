import {SignatureV4} from "../lib/SignatureV4";
import {
    AMZ_DATE_HEADER,
    AUTH_HEADER,
    DATE_HEADER, HOST_HEADER,
    SHA256_HEADER,
    TOKEN_HEADER,
    UNSIGNED_PAYLOAD
} from "../lib/constants";
import {Sha256} from "@aws/crypto-sha256-node";
import {Credentials, HttpRequest} from "@aws/types";
import {PassThrough} from 'stream';

const testDate = new Date('2000-01-01T00:00:00.000Z');
const globalDate = Date;

beforeEach(() => {
    (Date as any) = jest.fn(() => testDate);
    (Date.now as any) = jest.fn(() => testDate);
});

afterEach(() => {
    (Date as any) = globalDate;
});

const signer = new SignatureV4({
    service: 'foo',
    region: 'us-bar-1',
    sha256: Sha256
});

const minimalRequest: HttpRequest<any> = {
    method: 'POST',
    protocol: 'https:',
    path: '/',
    headers: {
        host: 'foo.us-bar-1.amazonaws.com'
    },
    hostname: 'foo.us-bar-1.amazonaws.com',
};

const credentials: Credentials = {
    accessKeyId: 'foo',
    secretAccessKey: 'bar',
};

describe('SignatureV4', () => {
    describe('#signRequest', () => {
        it('should sign requests without bodies', async () => {
            const {headers} = await signer.signRequest(
                minimalRequest,
                credentials
            );
            expect(headers[AUTH_HEADER]).toBe(
                'AWS4-HMAC-SHA256 Credential=foo/20000101/us-bar-1/foo/aws4_request, SignedHeaders=host;x-amz-date, Signature=9fd83bc86a8d79b30697566790e40f832f280c9d7cbb343b213d1544a0273ebb'
            );
        });

        it('should sign requests with string bodies', async () => {
            const {headers} = await signer.signRequest(
                {
                    ...minimalRequest,
                    body: 'It was the best of times, it was the worst of times'
                },
                credentials
            );
            expect(headers[AUTH_HEADER]).toBe(
                'AWS4-HMAC-SHA256 Credential=foo/20000101/us-bar-1/foo/aws4_request, SignedHeaders=host;x-amz-date, Signature=b281e6664227db05f6f161b1d9725e030f9c2cddb91b42f8b93d7cbffa7eb796'
            );
        });

        it('should sign requests with binary bodies', async () => {
            const {headers} = await signer.signRequest(
                {
                    ...minimalRequest,
                    body: new Uint8Array([0xde, 0xad, 0xbe, 0xef]),
                },
                credentials
            );
            expect(headers[AUTH_HEADER]).toBe(
                'AWS4-HMAC-SHA256 Credential=foo/20000101/us-bar-1/foo/aws4_request, SignedHeaders=host;x-amz-date, Signature=a8def96b8c754e523927d6a49392c02ff803ee49dc56549e244daf3f62b4abdd'
            );
        });

        it('should sign requests with streaming (unsigned) bodies', async () => {
            const {headers} = await signer.signRequest(
                {
                    ...minimalRequest,
                    body: new PassThrough(),
                },
                credentials
            );

            expect(headers[AUTH_HEADER]).toBe(
                'AWS4-HMAC-SHA256 Credential=foo/20000101/us-bar-1/foo/aws4_request, SignedHeaders=host;x-amz-content-sha256;x-amz-date, Signature=2d17bf1aa1624819549626389790503937599b27a998286e0e190b897b1467dd'
            );
            expect(headers[SHA256_HEADER]).toBe(UNSIGNED_PAYLOAD);
        });

        it(
            `should set and sign the ${TOKEN_HEADER} header if the credentials have a session token`,
            async () => {
                const {headers} = await signer.signRequest(
                    minimalRequest,
                    {
                        ...credentials,
                        sessionToken: 'baz',
                    }
                );
                expect(headers[AUTH_HEADER]).toBe(
                    'AWS4-HMAC-SHA256 Credential=foo/20000101/us-bar-1/foo/aws4_request, SignedHeaders=host;x-amz-date;x-amz-security-token, Signature=772bb343901420732ab811c947f90e1fafbc3b88697bad072b436a4e895b4bfc'
                );
            }
        );

        it(
            'should not sign the body if payload signing was disabled at signer creation time',
            async () => {
                const signer = new SignatureV4({
                    service: 'foo',
                    region: 'us-bar-1',
                    sha256: Sha256,
                    unsignedPayload: true
                });

                const {headers} = await signer.signRequest(
                    {
                        ...minimalRequest,
                        body: new Uint8Array([0xde, 0xad, 0xbe, 0xef]),
                    },
                    credentials
                );
                expect(headers[AUTH_HEADER]).toBe(
                    'AWS4-HMAC-SHA256 Credential=foo/20000101/us-bar-1/foo/aws4_request, SignedHeaders=host;x-amz-content-sha256;x-amz-date, Signature=2d17bf1aa1624819549626389790503937599b27a998286e0e190b897b1467dd'
                );
                expect(headers[SHA256_HEADER]).toBe(UNSIGNED_PAYLOAD);
            }
        );
    });
});


