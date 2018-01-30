import { sigV4UnsignedPayloadMiddleware } from './';
import {HttpRequest} from '@aws/types';

describe('sigV4UnsignedPayloadMiddleware', () => {
    const next = jest.fn(() => Promise.resolve({}));

    const request: HttpRequest<never> = {
        method: 'REPORT',
        headers: {
            'Content-Length': '10',
            Range: 'bytes=0-1000',
        },
        protocol: 'https:',
        hostname: 'example.com',
        path: '/',
        body: 'A very long string'
    }

    beforeEach(() => {
        next.mockClear();
    });

    it(
        'should set an `x-amz-content-sha256` header of "UNSIGNED_PAYLOAD"',
        async () => {
            await sigV4UnsignedPayloadMiddleware(next, {} as any)({
                request,
                input: {}
            });

            expect(next.mock.calls).toEqual([[{
                input: {},
                request: {
                    ...request,
                    headers: {
                        ...request.headers,
                        'X-Amz-Content-Sha256': 'UNSIGNED_PAYLOAD',
                    }
                }
            }]]);
        }
    );

    it(
        'should do nothing if a body checksum header had been previously set',
        async () => {
            await sigV4UnsignedPayloadMiddleware(next, {} as any)({
                request: {
                    ...request,
                    headers: {
                        ...request.headers,
                        'x-amz-content-sha256': 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'
                    }
                },
                input: {}
            });

            expect(next.mock.calls).toEqual([[{
                input: {},
                request: {
                    ...request,
                    headers: {
                        ...request.headers,
                        'x-amz-content-sha256': 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'
                    }
                }
            }]]);
        }
    );
});
