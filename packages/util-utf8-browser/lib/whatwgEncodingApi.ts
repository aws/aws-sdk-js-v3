export function fromUtf8(input: string): Uint8Array {
    return new TextEncoder('utf-8').encode(input);
}

export function toUtf8(input: Uint8Array): string {
    return new TextDecoder('utf-8').decode(input);
}
