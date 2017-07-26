import {SignatureV4} from "../lib/SignatureV4";
import {
    ALGORITHM_IDENTIFIER,
    ALGORITHM_QUERY_PARAM,
    AMZ_DATE_HEADER,
    AMZ_DATE_QUERY_PARAM,
    AUTH_HEADER,
    CREDENTIAL_QUERY_PARAM,
    EXPIRES_QUERY_PARAM,
    HOST_HEADER,
    SHA256_HEADER,
    SIGNATURE_QUERY_PARAM,
    SIGNED_HEADERS_QUERY_PARAM,
    TOKEN_HEADER,
    TOKEN_QUERY_PARAM,
    UNSIGNED_PAYLOAD,
} from "../lib/constants";
import {Sha256} from "@aws/crypto-sha256-node";
import {Credentials, HttpRequest} from "@aws/types";
import {iso8601} from "@aws/protocol-timestamp";
import {PassThrough} from 'stream';

const MockDate = () => new Date('2000-01-01T00:00:00.000Z');

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
    describe('#presignRequest', () => {
        const expiration = Math.floor(
            (MockDate().valueOf() + 60 * 60 * 1000) / 1000
        );

        it('should sign requests without bodies', async () => {
            const {query} = await signer.presignRequest({
                request: minimalRequest,
                credentials,
                expiration,
                currentDateConstructor: MockDate as any,
            });
            expect(query).toEqual({
                [ALGORITHM_QUERY_PARAM]: ALGORITHM_IDENTIFIER,
                [CREDENTIAL_QUERY_PARAM]: 'foo/20000101/us-bar-1/foo/aws4_request',
                [AMZ_DATE_QUERY_PARAM]: '20000101T000000Z',
                [EXPIRES_QUERY_PARAM]: '3600',
                [SIGNED_HEADERS_QUERY_PARAM]: HOST_HEADER,
                [SIGNATURE_QUERY_PARAM]: '477e1bb76b04bd9973b28d67a6307e43934ec8327fc17950539eb47573db3c4a',
            });
        });

        it('should sign requests with string bodies', async () => {
            const {query} = await signer.presignRequest({
                request: {
                    ...minimalRequest,
                    body: 'It was the best of times, it was the worst of times'
                },
                credentials,
                expiration,
                currentDateConstructor: MockDate as any,
            });
            expect(query).toEqual({
                [ALGORITHM_QUERY_PARAM]: ALGORITHM_IDENTIFIER,
                [CREDENTIAL_QUERY_PARAM]: 'foo/20000101/us-bar-1/foo/aws4_request',
                [AMZ_DATE_QUERY_PARAM]: '20000101T000000Z',
                [EXPIRES_QUERY_PARAM]: '3600',
                [SIGNED_HEADERS_QUERY_PARAM]: HOST_HEADER,
                [SIGNATURE_QUERY_PARAM]: '2e27ee66efe81b085eea0aa53948bb49b76efc90d285ae6b4960f6072608f495',
            });
        });

        it('should sign requests with binary bodies', async () => {
            const {query} = await signer.presignRequest({
                request: {
                    ...minimalRequest,
                    body: new Uint8Array([0xde, 0xad, 0xbe, 0xef])
                },
                credentials,
                expiration,
                currentDateConstructor: MockDate as any,
            });
            expect(query).toEqual({
                [ALGORITHM_QUERY_PARAM]: ALGORITHM_IDENTIFIER,
                [CREDENTIAL_QUERY_PARAM]: 'foo/20000101/us-bar-1/foo/aws4_request',
                [AMZ_DATE_QUERY_PARAM]: '20000101T000000Z',
                [EXPIRES_QUERY_PARAM]: '3600',
                [SIGNED_HEADERS_QUERY_PARAM]: HOST_HEADER,
                [SIGNATURE_QUERY_PARAM]: '0b13a0f33c2e949b565b61209478951f809bd6943310d44814c9526100047ea7',
            });
        });

        it('should sign requests with streaming (unsigned) bodies', async () => {
            const {query} = await signer.presignRequest({
                request: {
                    ...minimalRequest,
                    body: new PassThrough()
                },
                credentials,
                expiration,
                currentDateConstructor: MockDate as any,
            });
            expect(query).toEqual({
                [ALGORITHM_QUERY_PARAM]: ALGORITHM_IDENTIFIER,
                [CREDENTIAL_QUERY_PARAM]: 'foo/20000101/us-bar-1/foo/aws4_request',
                [AMZ_DATE_QUERY_PARAM]: '20000101T000000Z',
                [EXPIRES_QUERY_PARAM]: '3600',
                [SIGNED_HEADERS_QUERY_PARAM]: HOST_HEADER,
                [SIGNATURE_QUERY_PARAM]: '60f0eb0b56c453974f0980ac8004c117e5f70f5720288c5fca0180cd6073fb95',
            });
        });

        it(
            `should set and sign the ${TOKEN_QUERY_PARAM} query parameter if the credentials have a session token`,
            async () => {
                const {query} = await signer.presignRequest({
                    request: minimalRequest,
                    credentials: {
                        ...credentials,
                        sessionToken: 'baz',
                    },
                    expiration,
                    currentDateConstructor: MockDate as any,
                });

                expect(query).toEqual({
                    [TOKEN_QUERY_PARAM]: 'baz',
                    [ALGORITHM_QUERY_PARAM]: ALGORITHM_IDENTIFIER,
                    [CREDENTIAL_QUERY_PARAM]: 'foo/20000101/us-bar-1/foo/aws4_request',
                    [AMZ_DATE_QUERY_PARAM]: '20000101T000000Z',
                    [EXPIRES_QUERY_PARAM]: '3600',
                    [SIGNED_HEADERS_QUERY_PARAM]: HOST_HEADER,
                    [SIGNATURE_QUERY_PARAM]: '3663461416873c62951f3d97a93620d11f2b9bf584bb6790586cc8184aa2efd8',
                });
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

                const {query} = await signer.presignRequest({
                    request: {
                        ...minimalRequest,
                        body: new Uint8Array([0xde, 0xad, 0xbe, 0xef]),
                    },
                    credentials,
                    expiration,
                    currentDateConstructor: MockDate as any,
                });

                expect(query).toEqual({
                    [ALGORITHM_QUERY_PARAM]: ALGORITHM_IDENTIFIER,
                    [CREDENTIAL_QUERY_PARAM]: 'foo/20000101/us-bar-1/foo/aws4_request',
                    [AMZ_DATE_QUERY_PARAM]: '20000101T000000Z',
                    [EXPIRES_QUERY_PARAM]: '3600',
                    [SIGNED_HEADERS_QUERY_PARAM]: HOST_HEADER,
                    [SIGNATURE_QUERY_PARAM]: '60f0eb0b56c453974f0980ac8004c117e5f70f5720288c5fca0180cd6073fb95',
                });
            }
        );

        it('should not hoist headers if told not to', async () => {
            const headers = {
                host: 'foo.us-bar-1.amazonaws.com',
                'X-Amz-Tagging': 'foo=bar',
                'X-Amz-Acl': 'public-read',
                'X-Amz-Server-Side-Encryption-Customer-Algorithm': 'AES256',
                'X-Amz-Server-Side-Encryption-Customer-Key': 'deadbeef',
                'X-Amz-Server-Side-Encryption-Customer-Key-MD5': 'beefface',
            };
            const {headers: headersAsSigned, query} = await signer.presignRequest({
                request: {
                    ...minimalRequest,
                    headers,
                },
                credentials,
                expiration,
                hoistHeaders: false,
                currentDateConstructor: MockDate as any,
            });
            expect(query).toEqual({
                [ALGORITHM_QUERY_PARAM]: ALGORITHM_IDENTIFIER,
                [CREDENTIAL_QUERY_PARAM]: 'foo/20000101/us-bar-1/foo/aws4_request',
                [AMZ_DATE_QUERY_PARAM]: '20000101T000000Z',
                [EXPIRES_QUERY_PARAM]: '3600',
                [SIGNED_HEADERS_QUERY_PARAM]: 'host;x-amz-acl;x-amz-server-side-encryption-customer-algorithm;x-amz-server-side-encryption-customer-key;x-amz-server-side-encryption-customer-key-md5;x-amz-tagging',
                [SIGNATURE_QUERY_PARAM]: 'eba8554e595eca3d59c58939a166922566186263a8931a81e62434a38591a6cc',
            });
            expect(headersAsSigned).toEqual(headers);
        });

        it('should allow specifying custom unsignable headers', async () => {
            const headers = {
                host: 'foo.us-bar-1.amazonaws.com',
                foo: 'bar',
                'user-agent': 'baz',
            };
            const {headers: headersAsSigned, query} = await signer.presignRequest({
                request: {
                    ...minimalRequest,
                    headers,
                },
                credentials,
                expiration,
                hoistHeaders: false,
                currentDateConstructor: MockDate as any,
                unsignableHeaders: {foo: true}
            });
            expect((query as any)[SIGNED_HEADERS_QUERY_PARAM]).toBe('host;user-agent');
            expect(headersAsSigned).toEqual(headers);
        });

        it(
            'should overwrite invalid query params even when not hoisting headers',
            async () => {
                const {query = {}} = await signer.presignRequest({
                    request: {
                        ...minimalRequest,
                        query: {
                            [EXPIRES_QUERY_PARAM]: '1 week',
                        }
                    },
                    credentials,
                    expiration,
                    hoistHeaders: false,
                    currentDateConstructor: MockDate as any,
                });
                expect(query[EXPIRES_QUERY_PARAM]).toBe('3600');
            }
        );

        it(
            'should return a rejected promise if the expiration is more than one week in the future',
            () => {
                return expect(
                    signer.presignRequest({
                        request: minimalRequest,
                        credentials,
                        expiration: new Date(),
                        currentDateConstructor: MockDate as any,
                    })
                ).rejects.toMatch(/less than one week in the future/);
            }
        );

        it('should use the current date if no constructor supplied', async () => {
            const {query} = await signer.presignRequest({
                request: minimalRequest,
                credentials,
                expiration: Math.floor((Date.now() + 60 * 60 * 1000) / 1000),
            });
            expect((query as any)[AMZ_DATE_QUERY_PARAM]).toBe(
                iso8601(new Date()).replace(/[\-:]/g, '')
            );
        });
    });

    describe('#signRequest', () => {
        it('should sign requests without bodies', async () => {
            const {headers} = await signer.signRequest({
                request: minimalRequest,
                credentials,
                currentDateConstructor: MockDate as any,
            });
            expect(headers[AUTH_HEADER]).toBe(
                'AWS4-HMAC-SHA256 Credential=foo/20000101/us-bar-1/foo/aws4_request, SignedHeaders=host;x-amz-date, Signature=9fd83bc86a8d79b30697566790e40f832f280c9d7cbb343b213d1544a0273ebb'
            );
        });

        it('should sign requests with string bodies', async () => {
            const {headers} = await signer.signRequest({
                request: {
                    ...minimalRequest,
                    body: 'It was the best of times, it was the worst of times'
                },
                credentials,
                currentDateConstructor: MockDate as any,
            });
            expect(headers[AUTH_HEADER]).toBe(
                'AWS4-HMAC-SHA256 Credential=foo/20000101/us-bar-1/foo/aws4_request, SignedHeaders=host;x-amz-date, Signature=b281e6664227db05f6f161b1d9725e030f9c2cddb91b42f8b93d7cbffa7eb796'
            );
        });

        it('should sign requests with binary bodies', async () => {
            const {headers} = await signer.signRequest({
                request: {
                    ...minimalRequest,
                    body: new Uint8Array([0xde, 0xad, 0xbe, 0xef]),
                },
                credentials,
                currentDateConstructor: MockDate as any,
            });
            expect(headers[AUTH_HEADER]).toBe(
                'AWS4-HMAC-SHA256 Credential=foo/20000101/us-bar-1/foo/aws4_request, SignedHeaders=host;x-amz-date, Signature=a8def96b8c754e523927d6a49392c02ff803ee49dc56549e244daf3f62b4abdd'
            );
        });

        it('should sign requests with streaming (unsigned) bodies', async () => {
            const {headers} = await signer.signRequest({
                request: {
                    ...minimalRequest,
                    body: new PassThrough(),
                },
                credentials,
                currentDateConstructor: MockDate as any,
            });

            expect(headers[AUTH_HEADER]).toBe(
                'AWS4-HMAC-SHA256 Credential=foo/20000101/us-bar-1/foo/aws4_request, SignedHeaders=host;x-amz-content-sha256;x-amz-date, Signature=2d17bf1aa1624819549626389790503937599b27a998286e0e190b897b1467dd'
            );
            expect(headers[SHA256_HEADER]).toBe(UNSIGNED_PAYLOAD);
        });

        it(`should set the ${AMZ_DATE_HEADER}`, async () => {
            const {headers} = await signer.signRequest({
                request: minimalRequest,
                credentials,
                currentDateConstructor: MockDate as any,
            });
            expect(headers[AMZ_DATE_HEADER]).toBe('20000101T000000Z');
        });

        it(
            `should set and sign the ${TOKEN_HEADER} header if the credentials have a session token`,
            async () => {
                const {headers} = await signer.signRequest({
                    request: minimalRequest,
                    credentials: {
                        ...credentials,
                        sessionToken: 'baz',
                    },
                    currentDateConstructor: MockDate as any,
                });
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

                const {headers} = await signer.signRequest({
                    request: {
                        ...minimalRequest,
                        body: new Uint8Array([0xde, 0xad, 0xbe, 0xef]),
                    },
                    credentials,
                    currentDateConstructor: MockDate as any,
                });
                expect(headers[AUTH_HEADER]).toBe(
                    'AWS4-HMAC-SHA256 Credential=foo/20000101/us-bar-1/foo/aws4_request, SignedHeaders=host;x-amz-content-sha256;x-amz-date, Signature=2d17bf1aa1624819549626389790503937599b27a998286e0e190b897b1467dd'
                );
                expect(headers[SHA256_HEADER]).toBe(UNSIGNED_PAYLOAD);
            }
        );

        it('should use the current date if no constructor supplied', async () => {
            const {headers} = await signer.signRequest({
                request: minimalRequest,
                credentials,
            });
            expect(headers[AMZ_DATE_HEADER]).toBe(
                iso8601(new Date()).replace(/[\-:]/g, '')
            );
        });

        it('should allow specifying custom unsignable headers', async () => {
            const {headers} = await signer.signRequest({
                request: {
                    ...minimalRequest,
                    headers: {
                        host: 'foo.us-bar-1.amazonaws.com',
                        foo: 'bar',
                        'user-agent': 'baz',
                    },
                },
                credentials,
                currentDateConstructor: MockDate as any,
                unsignableHeaders: {foo: true}
            });
            expect(headers[AUTH_HEADER]).toMatch(
                /^AWS4-HMAC-SHA256 Credential=foo\/20000101\/us-bar-1\/foo\/aws4_request, SignedHeaders=host;user-agent;x-amz-date, Signature=/
            );
        });
    });
});


