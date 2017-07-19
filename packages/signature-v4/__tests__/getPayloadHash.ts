import {getPayloadHash} from "../lib/getPayloadHash";
import {HttpRequest} from "@aws/types";
import {SHA256_HEADER, UNSIGNED_PAYLOAD} from "../lib/constants";
import {Sha256} from "@aws/crypto-sha256-node";
import {collectStream} from "@aws/util-collect-stream-node";
import {fromString} from "@aws/util-buffer-from";
import {PassThrough, Stream} from 'stream';
import {Buffer} from 'buffer';

describe('getPayloadHash', () => {
    const minimalRequest: HttpRequest<any> = {
        method: 'POST',
        protocol: 'https:',
        path: '/',
        headers: {},
        hostname: 'foo.us-east-1.amazonaws.com',
    };

    it(
        'should return the SHA-256 hash of an empty string if a request has no payload (body)',
        async () => {
            await expect(getPayloadHash(minimalRequest, Sha256))
                .resolves.toBe(
                    'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'
                );
        }
    );

    it(
        `should return the value in the '${SHA256_HEADER}' header (if present)`,
        async () => {
            await expect(getPayloadHash(
                {
                    ...minimalRequest,
                    headers: {
                        [SHA256_HEADER]: 'foo',
                    },
                },
                jest.fn(() => {
                    throw new Error('I should not have been invoked!');
                })
            )).resolves.toBe('foo');
        }
    );

    it('should return the hex-encoded hash of a string body', async () => {
        await expect(getPayloadHash(
            {
                ...minimalRequest,
                body: 'foo',
            },
            Sha256
        )).resolves.toBe(
            '2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae'
        );
    });

    it('should return the hex-encoded hash of a ArrayBufferView body', async () => {
        await expect(getPayloadHash(
            {
                ...minimalRequest,
                body: new Uint8Array([0xde, 0xad, 0xbe, 0xef]),
            },
            Sha256
        )).resolves.toBe(
            '5f78c33274e43fa9de5659265c1d917e25c03722dcb0b8d27db8d5feaa813953'
        );
    });

    it('should return the hex-encoded hash of a ArrayBuffer body', async () => {
        await expect(getPayloadHash(
            {
                ...minimalRequest,
                body: new Uint8Array([0xde, 0xad, 0xbe, 0xef]).buffer,
            },
            Sha256
        )).resolves.toBe(
            '5f78c33274e43fa9de5659265c1d917e25c03722dcb0b8d27db8d5feaa813953'
        );
    });

    it(
        `should return ${UNSIGNED_PAYLOAD} if the request has a streaming body and no stream collector is provided`,
        async () => {
            await expect(getPayloadHash(
                {
                    ...minimalRequest,
                    body: new PassThrough(),
                },
                Sha256
            )).resolves.toBe(UNSIGNED_PAYLOAD);
        }
    );

    it(
        'should collect streams and hash the concatenated output if request has a streaming body and a stream collector was provided',
        async () => {
            const body = new PassThrough();
            const request = {...minimalRequest, body};
            const hashPromise = getPayloadHash(request, Sha256, collectStream);

            body.write('f');
            body.write('o');
            body.write('o');
            body.end();

            expect(await hashPromise).toBe(
                '2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae'
            );
        }
    );

    it(
        'should collect streams and replace the request body with a buffer if request has a streaming body and a stream collector was provided',
        async () => {
            const body = new PassThrough();
            const request: HttpRequest<Stream> = {...minimalRequest, body};
            const hashPromise = getPayloadHash(request, Sha256, collectStream);

            body.write('f');
            body.write('o');
            body.write('o');
            body.end();

            await hashPromise;

            expect(Buffer.isBuffer(request.body)).toBe(true);
            expect(fromString('foo').equals(request.body as Buffer)).toBe(true);
        }
    );
});
