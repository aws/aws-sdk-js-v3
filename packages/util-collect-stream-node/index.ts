import {Buffer} from 'buffer';
import {Readable} from 'stream';

export function collectStream(stream: Readable): Promise<Buffer> {
    return new Promise<Buffer>((resolve, reject) => {
        let buf = Promise.resolve(Buffer.alloc(0));

        stream.on('readable', function readableHandler() {
            const chunk = stream.read();
            buf = buf.then((buffer: Buffer) => {
                if (Buffer.isBuffer(chunk)) {
                    return Buffer.concat([buffer, chunk]);
                } else if (typeof chunk === 'string') {
                    // There's no good way to determine the encoding of this
                    // chunk, as `stream.Readable` defines a `setEncoding`
                    // method but not a `getEncoding` method. We could use the
                    // platform default ('utf8'), but if the stream had had
                    // `stream.setEncoding` called with an argument of `'hex'`
                    // or `'base64'`, this output would be invalid.
                    //
                    // This could be remediated by always setting the encoding
                    // of streams to something easily translatable to Buffers
                    // (like `'hex'`), but the performance characteristics of
                    // hex encoding and hex decoding every chunk is not worth
                    // handling this edge case.
                    throw new Error(
                        'Streams decoding bytes into strings cannot be safely collected into a buffer. There is no defined way to determine the string encoding used.'
                    );
                } else if (chunk === null) {
                    // The end of the stream has been reached.
                    return buffer;
                }

                throw new Error(
                    'Streams running in object mode cannot be collected into a buffer'
                );
            });
            buf.catch((err: any) => {
                stream.removeListener('readable', readableHandler);
                reject(err);
            });
        })
            .on('error', reject)
            .on('end', () => {
                buf.then(buffer => resolve(buffer));
            }).on('close', () => {
                buf.then(buffer => resolve(buffer));
            });
    });
}
