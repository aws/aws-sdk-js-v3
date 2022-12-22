export const fromUtf8 = (input: string): Uint8Array => new TextEncoder().encode(input);
