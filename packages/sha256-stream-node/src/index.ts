import {
    Hash,
    HashConstructor
} from '@aws/types';
import {ReadStream, createReadStream} from 'fs';
import {HashCalculator} from './hash-calculator';

export function calculateSha256(
    Sha256: HashConstructor,
    fileStream: ReadStream
): Promise<Uint8Array> {
    return new Promise((resolve, reject) => {
        if (typeof fileStream.path !== 'string') {
            reject(new Error(
                'Unable to calculate SHA256 for non-file streams.'
            ));
            return;
        }
        const fileStreamTee = createReadStream(fileStream.path, {
            start: (fileStream as any).start,
            end: (fileStream as any).end
        });

        const hash = new Sha256();
        const hashCalculator = new HashCalculator(hash);

        fileStreamTee.pipe(hashCalculator);
        fileStreamTee.on('error', (err: any) => {
            // if the source errors, the destination stream needs to manually end
            hashCalculator.end();
            reject(err);
        });
        hashCalculator.on('error', reject);
        hashCalculator.on('finish', function(this: HashCalculator) {
            hash.digest().then(resolve).catch(reject);
        });
    });
}
