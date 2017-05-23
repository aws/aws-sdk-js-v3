import {Buffer} from 'buffer';

export function fromUtf8(input: string): Uint8Array {
    if (typeof input === 'number') {
        throw new Error('Cannot UTF-8 decode a number');
    }

    let buf: Buffer;
    if (typeof Buffer.from === 'function' && Buffer.from !== Uint8Array.from) {
        buf = Buffer.from(input, 'utf8');
    } else {
        buf = new Buffer(input, 'utf8')
    }

    return new Uint8Array(
        buf.buffer,
        buf.byteOffset,
        buf.byteLength / Uint8Array.BYTES_PER_ELEMENT
    );
}

export function toUtf8(input: Uint8Array): string {
    if (typeof input === 'number') {
        throw new Error('Cannot UTF-8 encode a number');
    }

    let buf: Buffer;
    if (typeof Buffer.from === 'function' && Buffer.from !== Uint8Array.from) {
        buf = Buffer.from(input.buffer);
    } else {
        buf = new Buffer(input.buffer);
    }

    return buf.toString('utf8');
}
