import {convertToUint8Array} from './index';
import {MockReadableStream} from './readable-stream.fixture';

describe('convertToUint8Array', () => {
    it('converts strings to Uint8Arrays', async () => {
        const result = await convertToUint8Array('foo');

        expect(result).toEqual(new Uint8Array([102, 111, 111]));
    });

    it('converts TypedArrays to Uint8Arrays', async () => {
        const fooArray = new Uint8Array([102, 111, 111]);
        const result = await convertToUint8Array(fooArray);

        expect(result).toEqual(fooArray);
    });

    it('converts ArrayBuffers to Uint8Arrays', async () => {
        const fooBuffer = new ArrayBuffer(8);
        const result = await convertToUint8Array(fooBuffer);

        expect(result instanceof Uint8Array).toBe(true);
    });

    it('converts ReadableStreams to Uint8Arrays', async () => {
        const mockReadStream = <ReadableStream><any>new MockReadableStream([
            new Uint8Array([102, 111, 111])
        ]);

        const result = await convertToUint8Array(mockReadStream);
        expect(result).toEqual(new Uint8Array([102, 111, 111]));
    });

    it('converts Blobs to Uint8Arrays', async () => {
        const fooBlob = new Blob(['foo']);

        const result = await convertToUint8Array(fooBlob);
        expect(result).toEqual(new Uint8Array([102, 111, 111]));
    });
});