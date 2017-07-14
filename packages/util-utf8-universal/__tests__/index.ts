import {fromUtf8, toUtf8} from '../';

jest.mock('@aws/util-utf8-browser', () => {
    return {
        fromUtf8: jest.fn(),
        toUtf8: jest.fn(),
    };
});
import {
    fromUtf8 as browserFromUtf8,
    toUtf8 as browserToUtf8,
} from '@aws/util-utf8-browser';

jest.mock('@aws/util-utf8-node', () => {
    return {
        fromUtf8: jest.fn(),
        toUtf8: jest.fn(),
    };
});
import {
    fromUtf8 as nodeFromUtf8,
    toUtf8 as nodeToUtf8,
} from '@aws/util-utf8-node';

jest.mock('@aws/is-node', () => {
    return { isNode: jest.fn() };
});
import {isNode} from '@aws/is-node';

beforeEach(() => {
    (browserFromUtf8 as any).mockReset();
    (browserToUtf8 as any).mockReset();
    (nodeFromUtf8 as any).mockReset();
    (nodeToUtf8 as any).mockReset();
    (isNode as any).mockReset();

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

describe('implementation selection', () => {
    it('should use the node implementation in node', () => {
        (isNode as any).mockReturnValue(true);

        fromUtf8('foo');
        expect((nodeFromUtf8 as any).mock.calls.length).toBe(1);
        expect((browserFromUtf8 as any).mock.calls.length).toBe(0);

        toUtf8(new Uint8Array(0));
        expect((nodeToUtf8 as any).mock.calls.length).toBe(1);
        expect((browserToUtf8 as any).mock.calls.length).toBe(0);
    });

    it('should use the browser implementation elsewhere', () => {
        (isNode as any).mockReturnValue(false);

        fromUtf8('foo');
        expect((nodeFromUtf8 as any).mock.calls.length).toBe(0);
        expect((browserFromUtf8 as any).mock.calls.length).toBe(1);

        toUtf8(new Uint8Array(0));
        expect((nodeToUtf8 as any).mock.calls.length).toBe(0);
        expect((browserToUtf8 as any).mock.calls.length).toBe(1);
    });
});
