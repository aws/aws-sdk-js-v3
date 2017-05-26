import {isNode} from '@aws/is-node';
import {
    fromBase64 as browserFromBase64,
    toBase64 as browserToBase64,
} from '@aws/util-base64-browser';
import {
    fromBase64 as nodeFromBase64,
    toBase64 as nodeToBase64,
} from '@aws/util-base64-node';

export function fromBase64(input: string): Uint8Array {
    if (isNode()) {
        return nodeFromBase64(input);
    }

    return browserFromBase64(input);
}

export function toBase64(input: Uint8Array): string {
    if (isNode()) {
        return nodeToBase64(input);
    }

    return browserToBase64(input);
}
