import {blobCollector} from '@aws/blob-collector';
import {isArrayBuffer} from '@aws/is-array-buffer';
import {streamCollector} from '@aws/stream-collector-browser';
import {fromUtf8} from '@aws/util-utf8-browser';

export type ConvertToUint8ArrayInputType = string|ReadableStream|Blob|ArrayBuffer|ArrayBufferView;

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

    // Blobs will always have a size field
    if (isBlob(input)) {
        return blobCollector(input);
    }

    return streamCollector(input);
}

function isBlob(input: any): input is Blob {
    if (typeof input.size === 'number') {
        return true;
    } else {
        return false;
    }
}