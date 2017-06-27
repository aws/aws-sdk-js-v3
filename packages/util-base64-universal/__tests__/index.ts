import {fromBase64, toBase64} from '../';

jest.mock('@aws/util-base64-browser', () => {
    return {
        fromBase64: jest.fn(),
        toBase64: jest.fn(),
    };
});
import {
    fromBase64 as browserFromBase64,
    toBase64 as browserToBase64,
} from '@aws/util-base64-browser';

jest.mock('@aws/util-base64-node', () => {
    return {
        fromBase64: jest.fn(),
        toBase64: jest.fn(),
    };
});
import {
    fromBase64 as nodeFromBase64,
    toBase64 as nodeToBase64,
} from '@aws/util-base64-node';

jest.mock('@aws/is-node', () => {
    return { isNode: jest.fn() };
});
import {isNode} from '@aws/is-node';

beforeEach(() => {
    (browserFromBase64 as any).mockReset();
    (browserToBase64 as any).mockReset();
    (nodeFromBase64 as any).mockReset();
    (nodeToBase64 as any).mockReset();
    (isNode as any).mockReset();
});

describe('implementation selection', () => {
    it('should use the node implementation in node', () => {
        (isNode as any).mockReturnValue(true);

        fromBase64('foo');
        expect((nodeFromBase64 as any).mock.calls.length).toBe(1);
        expect((browserFromBase64 as any).mock.calls.length).toBe(0);

        toBase64(new Uint8Array(0));
        expect((nodeToBase64 as any).mock.calls.length).toBe(1);
        expect((browserToBase64 as any).mock.calls.length).toBe(0);
    });

    it('should use the browser implementation elsewhere', () => {
        (isNode as any).mockReturnValue(false);

        fromBase64('foo');
        expect((nodeFromBase64 as any).mock.calls.length).toBe(0);
        expect((browserFromBase64 as any).mock.calls.length).toBe(1);

        toBase64(new Uint8Array(0));
        expect((nodeToBase64 as any).mock.calls.length).toBe(0);
        expect((browserToBase64 as any).mock.calls.length).toBe(1);
    });
});
