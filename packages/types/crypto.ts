export type SourceData = string|ArrayBuffer|ArrayBufferView;

export interface Hash {
    update(toHash: SourceData, encoding?: 'utf8'|'ascii'|'latin1'): void;
    digest(): Promise<Uint8Array>;
}

export interface HashConstructor {
    new (secret?: SourceData): Hash;
}

export interface randomValues {
    (byteLength: number): Promise<Uint8Array>;
}
