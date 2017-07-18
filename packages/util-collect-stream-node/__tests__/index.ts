import {PassThrough} from 'stream';
import {fromString} from '@aws/util-buffer-from';
import {collectStream} from "../";

describe('collectStream', () => {
    it('should convert a byte stream into a Buffer object', async () => {
        const stream = new PassThrough();
        const bufferPromise = collectStream(stream);

        stream.write('dead', 'hex');
        stream.write('beef', 'hex');
        stream.write('face', 'hex');
        stream.end();

        expect((await bufferPromise).equals(fromString('deadbeefface', 'hex')))
            .toBe(true);
    });

    it(
        'should reject the promise when given a stream with a set encoding',
        async () => {
            const stream = new PassThrough();
            stream.setEncoding('hex');

            const promise = collectStream(stream).then(
                () => {
                    throw new Error('The promise should have been rejected.');
                },
                () => {
                    /* Promise rejected, just as expected */
                }
            );

            stream.write('deadbeefface', 'hex');
            stream.write('cafebabe', 'hex');

            await promise;
        }
    );

    it(
        'should reject the promise when given a stream in object mode',
        async () => {
            const stream = new PassThrough({
                objectMode: true
            });

            const promise = collectStream(stream).then(
                () => {
                    throw new Error('The promise should have been rejected.');
                },
                () => {
                    /* Promise rejected, just as expected */
                }
            );

            stream.write({foo: 'bar'});
            stream.write({fizz: 'buzz'});

            await promise;
        }
    );
});
