import {StreamCollector} from '@aws/types';

export const streamCollector: StreamCollector<ReadableStream> = function streamCollector(
    stream
): Promise<Uint8Array> {
    const reader = stream.getReader();
    const chunks: Uint8Array[] = [];

    return read(reader, chunks)
        .then(concatChunks);
}

function concatChunks(chunks: Uint8Array[]): Uint8Array {
    if (chunks.length === 0) {
        return new Uint8Array(0);
    } else if (chunks.length === 1) {
        return chunks[0];
    }

    let size = 0;
    const numChunks = chunks.length;
    for (let i = 0; i < numChunks; i++) {
        size += chunks[i].byteLength;
    }

    const payload: Uint8Array = new Uint8Array(size);
    let offset = 0;
    for (let i = 0; i < numChunks; i++) {
        payload.set(chunks[i], offset);
        offset += chunks[i].byteLength;
    }
    return payload;
}

function read(
    reader: ReadableStreamReader,
    chunks: Uint8Array[]
): Promise<Uint8Array[]> {
    return reader.read()
        .then(({value, done}) => {
            if (done) {
                return chunks;
            }
            
            chunks.push(value);
            return read(reader, chunks);
        });
}