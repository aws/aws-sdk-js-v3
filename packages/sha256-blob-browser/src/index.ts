import {
    Hash,
    HashConstructor
} from '@aws/types';

import {blobReader} from '@aws/chunked-blob-reader';

export async function calculateSha256(
    Sha256: HashConstructor,
    blob: Blob
): Promise<Uint8Array> {
    const hash = new Sha256();

    await blobReader(
        blob,
        (chunk) => {
            hash.update(chunk);
        }
    );

    return hash.digest();
}