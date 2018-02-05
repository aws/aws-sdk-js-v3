import {Readable} from 'stream';
import {isArrayBuffer} from '@aws/is-array-buffer';
import {streamCollector} from '@aws/stream-collector-node';
import {fromUtf8} from '@aws/util-utf8-node';

export type ConvertToUint8ArrayInputType = string|Readable|ArrayBuffer|ArrayBufferView;

export async function convertToUint8Array(
    input: ConvertToUint8ArrayInputType
): Promise<Uint8Array> {
    if (typeof input === 'string') {
        return fromUtf8(input);
    }

    if (ArrayBuffer.isView(input)) {
        return new Uint8Array(
            input.buffer,
            input.byteOffset,
            input.byteLength
        );
    }
    
    if (isArrayBuffer(input)) {
        return new Uint8Array(
            input,
            0,
            input.byteLength
        );
    }

    return streamCollector(input);
}