import { ssecMiddleware } from './';
import { Handler, HandlerArguments, Hash, SourceData } from '@aws-sdk/types';

describe('ssecMiddleware', () => {
    const next = jest.fn(() => Promise.resolve({}));
    const utf8Decoder = jest.fn(() => Promise.resolve(new Uint8Array(0)));
    const base64Encoder = jest.fn(() => 'base64');

    class MockHash implements Hash {
        update(data: SourceData) {}

        async digest() {
            return new Uint8Array(0);
        }
    }

    beforeEach(() => {
        next.mockClear();
    });

    interface KeyBearingArgs {
        $keyData?: SourceData;
    }

    it(
        'should read the key data from `sourceProperty` and write the base-64 encoded bytes to `targetProperty`',
        async () => {
            const args: HandlerArguments<KeyBearingArgs> = {
                input: Object.freeze({ $keyData: 'utf8-encoded-key' }),
            };

            const handler = ssecMiddleware<KeyBearingArgs>({
                utf8Decoder,
                base64Encoder,
                hashConstructor: MockHash,
                ssecProperties: {
                    $keyData: {
                        targetProperty: 'KeyHeader',
                        hashTargetProperty: 'KeyHashHeader',
                    },
                },
            })(next, {} as any);

            await handler(args);

            expect(utf8Decoder.mock.calls.length).toBe(1);
            expect(utf8Decoder.mock.calls[0][0]).toBe('utf8-encoded-key');

            expect(next.mock.calls.length).toBe(1);
            expect(next.mock.calls[0][0].input.KeyHeader).toBe('base64');
        }
    );

    it(
        'should hash the key data using the supplied hash function and write the base-64 encoded bytes to `hashTargetProperty`',
        async () => {
            const args: HandlerArguments<KeyBearingArgs> = {
                input: Object.freeze({
                    $keyData: Uint8Array.from([0xde, 0xad, 0xbe, 0xef]),
                }),
            };

            const handler = ssecMiddleware<KeyBearingArgs>({
                utf8Decoder,
                base64Encoder,
                hashConstructor: MockHash,
                ssecProperties: {
                    $keyData: {
                        targetProperty: 'KeyHeader',
                        hashTargetProperty: 'KeyHashHeader',
                    },
                },
            })(next, {} as any);

            await handler(args);

            expect(next.mock.calls.length).toBe(1);
            expect(next.mock.calls[0][0].input.KeyHashHeader).toBe('base64');
        }
    );

    it(
        'should overwrite any previously set `targetProperty` and `hashTargetProperty` if `sourceProperty` is provided',
        async () => {
            const args: HandlerArguments<KeyBearingArgs> = {
                input: Object.freeze({
                    $keyData: Uint8Array.from([0xde, 0xad, 0xbe, 0xef]),
                    KeyHeader: 'header string',
                    KeyHashHeader: 'hash header string',
                }),
            };

            const handler = ssecMiddleware<KeyBearingArgs>({
                utf8Decoder,
                base64Encoder,
                hashConstructor: MockHash,
                ssecProperties: {
                    $keyData: {
                        targetProperty: 'KeyHeader',
                        hashTargetProperty: 'KeyHashHeader',
                    },
                },
            })(next, {} as any);

            await handler(args);

            expect(next.mock.calls.length).toBe(1);
            expect(next).toHaveBeenCalledWith({
                input: {
                    $keyData: Uint8Array.from([0xde, 0xad, 0xbe, 0xef]),
                    KeyHeader: 'base64',
                    KeyHashHeader: 'base64',
                },
            });
        }
    );

    it('should handle multiple key properties', async () => {
        interface CopySourceArgs extends KeyBearingArgs {
            $copySourceKeyData?: SourceData;
        }

        const args: HandlerArguments<CopySourceArgs> = {
            input: Object.freeze({
                $keyData: Uint8Array.from([0xde, 0xad, 0xbe, 0xef]),
                $copySourceKeyData: Uint8Array.from([0xca, 0xfe, 0xba, 0xbe]),
            }),
        };

        const handler = ssecMiddleware<CopySourceArgs>({
            utf8Decoder,
            base64Encoder,
            hashConstructor: MockHash,
            ssecProperties: {
                $keyData: {
                    targetProperty: 'SSECustomerKey',
                    hashTargetProperty: 'SSECustomerKeyMD5',
                },
                $copySourceKeyData: {
                    targetProperty: 'CopySourceSSECustomerKey',
                    hashTargetProperty: 'CopySourceSSECustomerKeyMD5',
                },
            },
        })(next, {} as any);

        await handler(args);

        expect(next.mock.calls.length).toBe(1);
        expect(next).toHaveBeenCalledWith({
            input: {
                $keyData: Uint8Array.from([0xde, 0xad, 0xbe, 0xef]),
                SSECustomerKey: 'base64',
                SSECustomerKeyMD5: 'base64',
                $copySourceKeyData: Uint8Array.from([0xca, 0xfe, 0xba, 0xbe]),
                CopySourceSSECustomerKey: 'base64',
                CopySourceSSECustomerKeyMD5: 'base64',
            },
        });
    });

    it(
        'should not alter `targetProperty` or `hashTargetProperty` if no `sourceProperty` is set',
        async () => {
            const args: HandlerArguments<KeyBearingArgs> = {
                input: Object.freeze({
                    KeyHeader: 'header string',
                    KeyHashHeader: 'hash header string',
                }) as any,
            };

            const handler = ssecMiddleware<KeyBearingArgs>({
                utf8Decoder,
                base64Encoder,
                hashConstructor: MockHash,
                ssecProperties: {
                    $keyData: {
                        targetProperty: 'KeyHeader',
                        hashTargetProperty: 'KeyHashHeader',
                    },
                },
            })(next, {} as any);

            await handler(args);

            expect(next.mock.calls.length).toBe(1);
            expect(next).toHaveBeenCalledWith({
                input: {
                    KeyHeader: 'header string',
                    KeyHashHeader: 'hash header string',
                }
            });
        }
    );
});
