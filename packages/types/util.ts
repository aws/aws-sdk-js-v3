export interface Encoder {
    (input: Uint8Array): string;
}

export interface Decoder {
    (input: string): Uint8Array;
}
