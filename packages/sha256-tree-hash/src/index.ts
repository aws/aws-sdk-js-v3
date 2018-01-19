import {
    Decoder,
    Hash,
    HashConstructor,
    SourceData
} from '@aws/types';

/**
 * A Hash that will calculate a Sha256 tree hash.
 */
export class TreeHash implements Hash {
    private buffer?: Uint8Array;
    private collectedHashes: Hash[] = [];
    private MiB: number = 1048576;

    /**
     * Initializes a TreeHash.
     * @param Sha256 A Sha256 hash constructor.
     */
    constructor(
        private readonly Sha256: HashConstructor,
        private readonly fromUtf8: Decoder
    ) {}

    /**
     * Generates Sha256 hashes from 1 MiB chunks of the
     * internal buffer.
     * Will set the internal buffer to any bytes remaining
     * that is less than 1 MiB.
     */
    private hashBuffer() {
        if (!this.buffer) {
            return;
        }

        let remainingSize = this.buffer.byteLength;
        while (remainingSize >= this.MiB) {
            const hash = new this.Sha256();
            hash.update(this.buffer.subarray(0, this.MiB));
            this.collectedHashes.push(hash);

            this.buffer = this.buffer.subarray(this.MiB);
            remainingSize = this.buffer.byteLength;
        }
    }

    /**
     * Updates the tree hash with byte data.
     * @param chunk Byte data to apply to the tree hash.
     */
    public update(data: SourceData) {
        const chunk = this.convertToBuffer(data);
        if (!this.buffer) {
            this.buffer = chunk;
        } else {
            // determine size of both pieces
            const totalSize = this.buffer.byteLength + chunk.byteLength;
            const tempBuffer = new Uint8Array(totalSize);
            
            tempBuffer.set(this.buffer);
            tempBuffer.set(chunk, this.buffer.byteLength);
            this.buffer = tempBuffer;
        }

        // hasBuffer will set this.buffer with remaining data
        this.hashBuffer();
    }

    /**
     * Calculates the digest for the tree hash.
     */
    public async digest(): Promise<Uint8Array> {
        let collectedHashes = this.collectedHashes;
        // remove the reference to collected hashes to free up space
        this.collectedHashes = [];

        // loop through collected hashes
        if (this.buffer) {
            const smallHash = new this.Sha256();
            smallHash.update(this.buffer);
            collectedHashes.push(smallHash);
            // remove the remaining buffer
            this.buffer = void 0;
        }

        while (collectedHashes.length > 1) {
            const higherLevelHashes: Hash[] = [];
            for (let i = 0; i < collectedHashes.length; i += 2) {
                if (i + 1 < collectedHashes.length) {
                    // concatenate the pair of hashes
                    const digest1 = await collectedHashes[i].digest();
                    const digest2 = await collectedHashes[i + 1].digest();

                    const chunk = new Uint8Array(
                        digest1.byteLength + digest2.byteLength
                    );
                    chunk.set(digest1);
                    chunk.set(digest2, digest1.byteLength);

                    const hash = new this.Sha256();
                    hash.update(chunk);
                    higherLevelHashes.push(hash);
                } else {
                    // move a lone hash up a level
                    higherLevelHashes.push(collectedHashes[i]);
                }
            }
            collectedHashes = higherLevelHashes;
        }
        return collectedHashes[0].digest();
    }

    /**
     * Converts source data into a Uint8Array.
     * @param data Data to convert to a Uint8Array.
     */
    private convertToBuffer(data: SourceData): Uint8Array {
        if (typeof data === 'string') {
            return this.fromUtf8(data);
        }

        if (ArrayBuffer.isView(data)) {
            return new Uint8Array(
                data.buffer,
                data.byteOffset,
                data.byteLength / Uint8Array.BYTES_PER_ELEMENT
            );
        }

        return new Uint8Array(data);
    }
}