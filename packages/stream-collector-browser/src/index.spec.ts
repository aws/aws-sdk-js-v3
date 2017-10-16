import {streamCollector} from './index';

class MockReadableStream {
    private buffersRead: number = 0;
    constructor(
        private buffers: Uint8Array[] = []
    ) {}

    getReader = () => {
        return {
            read: async () => {
                if (this.buffersRead >= this.buffers.length) {
                    return {
                        done: true
                    };
                }
                return {
                    done: false,   
                    value: this.buffers[this.buffersRead++]
                };
            }
        } as ReadableStreamReader;
    }

}

describe('streamCollector', () => {
    it(
        'returns a Uint8Array from a stream',
        async () => {
            const mockData = [
                Uint8Array.from([102, 111, 111])
            ];
            const expected = new Uint8Array([102, 111, 111]);
            const stream = <ReadableStream><any>new MockReadableStream(mockData);
            const collectedData = await streamCollector(stream);
            expect(collectedData).toEqual(expected);
        }
    );
    
    it(
        'returns a Uint8Array containing all data from a stream',
        async () => {
            const mockData = [
                Uint8Array.from([102, 111, 111]),
                Uint8Array.from([98, 97, 114]),
                Uint8Array.from([98, 117, 122, 122])
            ];
            const expected = new Uint8Array([102, 111, 111, 98, 97, 114, 98, 117, 122, 122]);
            const stream = <ReadableStream><any>new MockReadableStream(mockData);
            const collectedData = await streamCollector(stream);
            expect(collectedData).toEqual(expected);
        }
    );

    it(
        'returns a Uint8Array when stream is empty',
        async () => {
            const expected = new Uint8Array(0);
            const stream = <ReadableStream><any>new MockReadableStream();
            const collectedData = await streamCollector(stream);
            expect(collectedData).toEqual(expected);
        }
    );
});