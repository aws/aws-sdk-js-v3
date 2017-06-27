import {isNode} from '@aws/is-node';
import {
    fromBase64 as browserFromBase64,
    toBase64 as browserToBase64,
} from '@aws/util-base64-browser';
import {
    fromBase64 as nodeFromBase64,
    toBase64 as nodeToBase64,
} from '@aws/util-base64-node';

/**
 * Converts a base-64 encoded string to a Uint8Array of bytes.
 *
 * @param input The base-64 encoded string
 */
export function fromBase64(input: string): Uint8Array {
    if (isNode()) {
        return nodeFromBase64(input);
    }

    return browserFromBase64(input);
}

/**
 * Converts a Uint8Array of binary data to a base-64 encoded string.
 *
 * @param input The binary data to encode
 */
export function toBase64(input: Uint8Array): string {
    if (isNode()) {
        return nodeToBase64(input);
    }

    return browserToBase64(input);
}
