import {Buffer} from 'buffer';

export function fromArrayBuffer(
    buffer: ArrayBuffer,
    offset: number = 0,
    length: number = buffer.byteLength - offset
): Buffer {
    if (!(buffer instanceof ArrayBuffer)) {
        throw new Error(
            'argument passed to fromArrayBuffer was not an ArrayBuffer'
        );
    }

    if (typeof Buffer.from === 'function' && Buffer.from !== Uint8Array.from) {
        return Buffer.from(buffer, offset, length);
    }

    // Any version of node that supports the optional offset and length
    // parameters, which were added in Node 6.0.0, will support Buffer.from and
    // have already returned. Throw if offset is not 0 or if length differs from
    // the underlying buffer's length.
    if (offset !== 0 || length !== buffer.byteLength) {
        throw new Error(
            `Unable to convert TypedArray to Buffer in Node ${process.version}`
        );
    }
    return new Buffer(buffer);
}

export function fromString(
    input: string,
    encoding?: 'ascii'|'utf8'|'utf16le'|'ucs2'|'base64'|'latin1'|'binary'|'hex'|string
): Buffer {
    if (typeof input !== 'string') {
        throw new Error('argument passed to fromString was not a string');
    }

    if (typeof Buffer.from === 'function' && Buffer.from !== Uint8Array.from) {
        return Buffer.from(input, encoding);
    }

    return new Buffer(input, encoding);
}
