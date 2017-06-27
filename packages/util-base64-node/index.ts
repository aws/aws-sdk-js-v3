import {Buffer} from 'buffer';

/**
 * Converts a base-64 encoded string to a Uint8Array of bytes using Node.JS's
 * `buffer` module.
 *
 * @param input The base-64 encoded string
 */
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

/**
 * Converts a Uint8Array of binary data to a base-64 encoded string using
 * Node.JS's `buffer` module.
 *
 * @param input The binary data to encode
 */
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
