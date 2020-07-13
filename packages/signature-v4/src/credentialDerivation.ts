import { Credentials, HashConstructor, SourceData } from "@aws-sdk/types";

import { KEY_TYPE_IDENTIFIER, MAX_CACHE_SIZE } from "./constants";

const signingKeyCache: { [key: string]: Promise<Uint8Array> } = {};
const cacheQueue: Array<string> = [];

/**
 * Create a string describing the scope of credentials used to sign a request.
 *
 * @param shortDate The current calendar date in the form YYYYMMDD.
 * @param region    The AWS region in which the service resides.
 * @param service   The service to which the signed request is being sent.
 */
export function createScope(shortDate: string, region: string, service: string): string {
  return `${shortDate}/${region}/${service}/${KEY_TYPE_IDENTIFIER}`;
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
  const cacheKey = `${shortDate}:${region}:${service}:` + `${credentials.accessKeyId}:${credentials.sessionToken}`;
  if (cacheKey in signingKeyCache) {
    return signingKeyCache[cacheKey];
  }

  cacheQueue.push(cacheKey);
  while (cacheQueue.length > MAX_CACHE_SIZE) {
    delete signingKeyCache[cacheQueue.shift() as string];
  }

  return (signingKeyCache[cacheKey] = new Promise((resolve, reject) => {
    let keyPromise: Promise<SourceData> = Promise.resolve(`AWS4${credentials.secretAccessKey}`);

    for (const signable of [shortDate, region, service, KEY_TYPE_IDENTIFIER]) {
      keyPromise = keyPromise.then<Uint8Array>((intermediateKey) => hmac(sha256Constructor, intermediateKey, signable));
      keyPromise.catch(() => {});
    }

    (keyPromise as Promise<Uint8Array>).then(resolve, (reason) => {
      delete signingKeyCache[cacheKey];
      reject(reason);
    });
  }));
}

/**
 * @internal
 */
export function clearCredentialCache(): void {
  cacheQueue.length = 0;
  Object.keys(signingKeyCache).forEach((cacheKey) => {
    delete signingKeyCache[cacheKey];
  });
}

function hmac(ctor: HashConstructor, secret: SourceData, data: SourceData): Promise<Uint8Array> {
  const hash = new ctor(secret);
  hash.update(data);
  return hash.digest();
}
