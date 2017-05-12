export type SourceData = string|ArrayBuffer|ArrayBufferView;

export interface CryptoProvider {
    /**
     * Computes the SHA-256 hash of the provided data.
     */
    sha256Digest(toHash: SourceData): Promise<Uint8Array>;

    /**
     * Computes the SHA-256 HMAC of the provided data using a provided secret.
     */
    hmacSha256(toHash: SourceData, secret: SourceData): Promise<Uint8Array>;

    /**
     * Returns cryptographically secure random values with the provided byte
     * length.
     */
    randomValues(length: number): Promise<Uint8Array>;
}

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
