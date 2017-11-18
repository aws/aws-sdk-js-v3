import {lstatSync} from 'fs';

export function calculateBodyLength(body: any): number {
    if (typeof body === 'string') {
        return body.length;
    } else if (typeof body.byteLength === 'number') {
        // handles Uint8Array, ArrayBuffer, Buffer, and ArrayBufferView
        return body.byteLength;
    } else if (typeof body.size === 'number') {
        return body.size;
    } else if (typeof body.path === 'string') {
        // handles fs readable streams
        return lstatSync(body.path).size;
    }

    throw new Error(`Could not determine size of ${body}`);
}