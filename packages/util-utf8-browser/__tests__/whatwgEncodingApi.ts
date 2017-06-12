import {
    fromUtf8,
    toUtf8,
} from '../lib/whatwgEncodingApi';

beforeEach(() => {
    const textDecoderInstance = {
        decode: jest.fn(() => ''),
    };
    const textEncoderInstance = {
        encode: jest.fn(() => new Uint8Array(0)),
    };

    (global as any).TextDecoder = jest.fn(() => textDecoderInstance) as any;
    (global as any).TextEncoder = jest.fn(() => textEncoderInstance) as any;
});

interface TextDecoderCtor {
    new (): any;
}
interface TextEncoderCtor {
    new (): any;
}
declare const TextDecoder: TextDecoderCtor;
declare const TextEncoder: TextEncoderCtor;

describe('WHATWG encoding spec compliant environment UTF-8 handling', () => {
    it('should use the global TextDecoder to decode UTF-8', () => {
        const decoder = new TextDecoder();
        (TextDecoder as any).mockClear();

        expect((TextDecoder as any).mock.calls.length).toBe(0);

        toUtf8(new Uint8Array(0));

        expect((TextDecoder as any).mock.calls.length).toBe(1);
        expect((decoder.decode as any).mock.calls.length).toBe(1);
    });

    it('should use the global TextEncoder to encode UTF-8', () => {
        const encoder = new TextEncoder();
        (TextEncoder as any).mockClear();

        expect((TextEncoder as any).mock.calls.length).toBe(0);

        fromUtf8('string');

        expect((TextEncoder as any).mock.calls.length).toBe(1);
        expect((encoder.encode as any).mock.calls.length).toBe(1);
    });
});
