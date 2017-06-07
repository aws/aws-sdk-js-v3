import {Buffer} from 'buffer';

export function fromBase64(input: string): Uint8Array {
    if (typeof input === 'number') {
        throw new Error('Cannot base64 decode a number');
    }

    let buf: Buffer;
    if (typeof Buffer.from === 'function' && Buffer.from !== Uint8Array.from) {
        buf = Buffer.from(input, 'base64');
    } else {
        buf = new Buffer(input, 'base64')
    }

    return new Uint8Array(
        buf.buffer,
        buf.byteOffset,
        buf.byteLength / Uint8Array.BYTES_PER_ELEMENT
    );
}

export function toBase64(input: Uint8Array): string {
    if (typeof input === 'number') {
        throw new Error('Cannot base64 encode a number');
    }

    let buf: Buffer;
    if (typeof Buffer.from === 'function' && Buffer.from !== Uint8Array.from) {
        buf = Buffer.from(input.buffer);
    } else {
        buf = new Buffer(input.buffer);
    }

    return buf.toString('base64');
}
