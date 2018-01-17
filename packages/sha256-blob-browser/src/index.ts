import {
    Hash,
    HashConstructor
} from '@aws/types';

import {readBlob} from '@aws/blob-collector';

export async function calculateSha256(
    Sha256: HashConstructor,
    blob: Blob
): Promise<Uint8Array> {
    const hash = new Sha256();

    await readBlob(
        blob,
        (chunk) => {
            hash.update(chunk);
        }
    );

    return hash.digest();
}