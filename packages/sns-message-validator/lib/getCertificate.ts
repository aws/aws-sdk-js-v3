import {get} from 'https';

const CERTIFICATE_CACHE: {[key: string]: string} = {};
const MAX_CACHE_SIZE = 50;
const CACHE_QUEUE: Array<string> = [];


export function getCertificate(url: string): Promise<string> {
    if (url in CERTIFICATE_CACHE) {
        return Promise.resolve(CERTIFICATE_CACHE[url]);
    }

    return new Promise((resolve, reject) => {
        get(url, res => {
            if (res.statusCode !== 200) {
                reject(new Error('Certificate could not be retrieved'));
            }

            let certificate = '';
            res
                .on('data', chunk => {
                    certificate += chunk.toString();
                })
                .on('end', () => {
                    resolve(certificate);
                    CERTIFICATE_CACHE[url] = certificate;
                    CACHE_QUEUE.push(url);
                    if (CACHE_QUEUE.length > MAX_CACHE_SIZE) {
                        // delete the oldest (not least recently used) item
                        delete CERTIFICATE_CACHE[CACHE_QUEUE.shift() as string];
                    }
                });
        }).on('error', reject);
    });
}
