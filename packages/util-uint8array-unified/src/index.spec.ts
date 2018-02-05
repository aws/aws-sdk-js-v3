import {convertToUint8Array} from './index';

jest.mock('@aws/util-uint8array-browser', () => {
    return {
        convertToUint8Array: jest.fn()
    };
});
jest.mock('@aws/util-uint8array-node', () => {
    return {
        convertToUint8Array: jest.fn()
    };
});
jest.mock('@aws/is-node', () => {
    return { isNode: jest.fn() };
});
import {
    convertToUint8Array as browserConvertToUint8Array
} from '@aws/util-uint8array-browser';
import {
    convertToUint8Array as nodeConvertToUint8Array
} from '@aws/util-uint8array-node';
import {isNode} from '@aws/is-node';


describe('implementation selection', () => {
    beforeEach(() => {
        (browserConvertToUint8Array as jest.Mock<any>).mockReset();
        (nodeConvertToUint8Array as jest.Mock<any>).mockReset();
        (isNode as jest.Mock<any>).mockReset()
    });

    it('should use the node implementation in node', () => {
        (isNode as jest.Mock<any>).mockReturnValue(true);

        convertToUint8Array('foo');
        expect((nodeConvertToUint8Array as jest.Mock<any>).mock.calls.length).toBe(1);
        expect((browserConvertToUint8Array as jest.Mock<any>).mock.calls.length).toBe(0);
    });

    it('should use the browser implementation elsewhere', () => {
        (isNode as jest.Mock<any>).mockReturnValue(false);

        convertToUint8Array('foo');
        expect((nodeConvertToUint8Array as jest.Mock<any>).mock.calls.length).toBe(0);
        expect((browserConvertToUint8Array as jest.Mock<any>).mock.calls.length).toBe(1);
    });
});