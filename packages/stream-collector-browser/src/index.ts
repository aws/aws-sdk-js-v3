import { StreamCollector } from '@aws/types';

export const streamCollector: StreamCollector<Blob> = function streamCollector(
    stream: Blob
): Promise<Uint8Array> {
    return new Promise<Uint8Array>((resolve, reject) => {
        const reader = new FileReader;
        reader.onload = () => resolve(new Uint8Array(reader.result));
        reader.onabort = () => reject(new Error('Read aborted'));
        reader.onerror = () => reject(reader.error);
        reader.readAsArrayBuffer(stream);
    });
}
