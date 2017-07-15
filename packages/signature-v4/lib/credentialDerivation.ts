import {Credentials, HashConstructor, SourceData} from '@aws/types';

const signingKeyCache: {[key: string]: Promise<Uint8Array>} = {};
const cacheQueue: Array<string> = [];
const MAX_CACHE_SIZE = 50;
const ALGORITHM_IDENTIFIER = 'aws4_request';

/**
 * Create a string describing the scope of credentials used to sign a request.
 *
 * @param shortDate The current calendar date in the form YYYYMMDD.
 * @param region    The AWS region in which the service resides.
 * @param service   The service to which the signed request is being sent.
 */
export function createScope(
    shortDate: string,
    region: string,
    service: string
): string {
    return `${shortDate}/${region}/${service}/${ALGORITHM_IDENTIFIER}`;
}

/**
 * Derive a signing key from its composite parts
 *
 * @param sha256Constructor A constructor function that can instantiate SHA-256
 *                          hash objects.
 * @param credentials       The credentials with which the request will be
 *                          signed.
 * @param shortDate         The current calendar date in the form YYYYMMDD.
 * @param region            The AWS region in which the service resides.
 * @param service           The service to which the signed request is being
 *                          sent.
 */
export function getSigningKey(
    sha256Constructor: HashConstructor,
    credentials: Credentials,
    shortDate: string,
    region: string,
    service: string
): Promise<Uint8Array> {
    const cacheKey = `${shortDate}:${region}:${service}:`
        + `${credentials.accessKeyId}:${credentials.sessionToken}`;
    if (cacheKey in signingKeyCache) {
        return signingKeyCache[cacheKey];
    }

    cacheQueue.push(cacheKey);
    while (cacheQueue.length > MAX_CACHE_SIZE) {
        delete signingKeyCache[cacheQueue.shift() as string];
    }

    return signingKeyCache[cacheKey] = new Promise((resolve, reject) => {
        let keyPromise = hmac(
            sha256Constructor,
            `AWS4${credentials.secretAccessKey}`,
            shortDate
        );
        keyPromise.catch(() => {});

        for (let signable of [region, service, ALGORITHM_IDENTIFIER]) {
            keyPromise = keyPromise.then(intermediateKey => hmac(
                sha256Constructor,
                intermediateKey,
                signable
            ));
            keyPromise.catch(() => {});
        }

        keyPromise.then(
            resolve,
            reason => {
                delete signingKeyCache[cacheKey];
                reject(reason);
            }
        );
    });
}

function hmac(
    ctor: HashConstructor,
    secret: SourceData,
    data: SourceData
): Promise<Uint8Array> {
    const hash = new ctor(secret);
    hash.update(data);
    return hash.digest();
}
