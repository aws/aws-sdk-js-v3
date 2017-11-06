import {createScope, getSigningKey} from "./credentialDerivation";
import {getCanonicalHeaders} from './getCanonicalHeaders';
import {getCanonicalQuery} from "./getCanonicalQuery";
import {getPayloadHash} from "./getPayloadHash";
import {prepareRequest} from "./prepareRequest";
import {moveHeadersToQuery} from "./moveHeadersToQuery";
import {
    ALGORITHM_IDENTIFIER,
    ALGORITHM_QUERY_PARAM,
    AMZ_DATE_HEADER,
    AMZ_DATE_QUERY_PARAM,
    AUTH_HEADER,
    CREDENTIAL_QUERY_PARAM,
    EXPIRES_QUERY_PARAM,
    MAX_PRESIGNED_TTL,
    SHA256_HEADER,
    SHA256_QUERY_PARAM,
    SIGNATURE_QUERY_PARAM,
    SIGNED_HEADERS_QUERY_PARAM,
    UNSIGNED_PAYLOAD,
    TOKEN_HEADER,
    TOKEN_QUERY_PARAM,
    UNSIGNABLE_HEADERS,
} from './constants';
import {
    Credentials,
    HashConstructor,
    HeaderBag,
    HttpRequest,
    Provider,
    QueryParameterBag,
    RequestPresigningArguments as PresigningArguments,
    RequestSigner,
    RequestSigningArguments as SigningArguments,
} from '@aws/types';
import {isCredentials} from '@aws/credential-provider-base';
import {iso8601, toDate} from '@aws/protocol-timestamp';
import {toHex} from '@aws/util-hex-encoding';

export interface SignatureV4Init {
    /**
     * The service signing name.
     */
    service: string;

    /**
     * The region name or a function that returns a promise that will be
     * resolved with the region name.
     */
    region: string|Provider<string>,

    /**
     * The credentials with which the request should be signed or a function
     * that returns a promise that will be resolved with credentials.
     */
    credentials: Credentials|Provider<Credentials>,

    /**
     * A constructor function for a hash object that will calculate SHA-256 HMAC
     * checksums.
     */
    sha256?: HashConstructor;

    /**
     * Whether to sign requests in such a way as to allow arbitrary message
     * bodies. Useful for presigning requests for which the body is not known in
     * advance.
     *
     * @default [false]
     */
    unsignedPayload?: boolean;

    /**
     * Whether to uri-escape the request URI path as part of computing the
     * canonical request string. This is required for every AWS service, except
     * Amazon S3, as of late 2017.
     *
     * @default [true]
     */
    uriEscapePath?: boolean;

    /**
     * Whether to calculate a checksum of the request body and include it as
     * either a request header (when signing) or as a query string parameter
     * (when presigning). This is required for AWS Glacier and optional for
     * every other AWS service as of late 2017.
     *
     * @default [false]
     */
    applyChecksum?: boolean;
}

export interface SignatureV4CryptoInit {
    sha256: HashConstructor;
}

export class SignatureV4 implements RequestSigner {
    private readonly service: string;
    private readonly regionProvider: Provider<string>;
    private readonly credentialProvider: Provider<Credentials>;
    private readonly sha256: HashConstructor;
    private readonly unsignedPayload: boolean;
    private readonly uriEscapePath: boolean;
    private readonly applyChecksum: boolean;

    constructor({
        applyChecksum = false,
        credentials,
        region,
        service,
        sha256,
        unsignedPayload = false,
        uriEscapePath = true,
    }: SignatureV4Init & SignatureV4CryptoInit) {
        this.service = service;
        this.sha256 = sha256;
        this.unsignedPayload = unsignedPayload;
        this.uriEscapePath = uriEscapePath;
        this.applyChecksum = applyChecksum;

        if (typeof region === 'string') {
            const promisified = Promise.resolve(region);
            this.regionProvider = () => promisified;
        } else {
            this.regionProvider = region;
        }

        if (isCredentials(credentials)) {
            const promisified = Promise.resolve(credentials);
            this.credentialProvider = () => promisified;
        } else {
            this.credentialProvider = credentials;
        }
    }

    presignRequest<StreamType>({
        request: originalRequest,
        expiration,
        signingDate = new Date(),
        hoistHeaders = true,
        unsignableHeaders = UNSIGNABLE_HEADERS,
        unsignedPayload = this.unsignedPayload,
    }: PresigningArguments<StreamType>): Promise<HttpRequest<StreamType>> {
        return Promise.all([this.regionProvider(), this.credentialProvider()])
            .then(([region, credentials]) => {
                const {longDate, shortDate} = formatDate(signingDate);
                const ttl = getTtl(signingDate, expiration);
                if (ttl > MAX_PRESIGNED_TTL) {
                    return Promise.reject('Signature version 4 presigned URLs'
                        + ' must have an expiration date less than one week in'
                        + ' the future');
                }

                const scope = createScope(shortDate, region, this.service);
                const keyPromise = this.getSigningKey(credentials, shortDate);

                const wrapperFn = hoistHeaders
                    ? moveHeadersToQuery
                    : ensureRequestHasQuery;
                const request = wrapperFn(prepareRequest(originalRequest));

                if (credentials.sessionToken) {
                    request.query[TOKEN_QUERY_PARAM] = credentials.sessionToken;
                }
                request.query[ALGORITHM_QUERY_PARAM] = ALGORITHM_IDENTIFIER;
                request.query[CREDENTIAL_QUERY_PARAM]
                    = `${credentials.accessKeyId}/${scope}`;
                request.query[AMZ_DATE_QUERY_PARAM] = longDate;
                request.query[EXPIRES_QUERY_PARAM] = ttl.toString(10);

                return this.getPayloadHash(request, unsignedPayload)
                    .then(payloadHash => {
                        if (this.applyChecksum) {
                            request.query[SHA256_QUERY_PARAM] = payloadHash;
                        }

                        const canonicalHeaders = getCanonicalHeaders(
                            request,
                            unsignableHeaders
                        );
                        request.query[SIGNED_HEADERS_QUERY_PARAM]
                            = getCanonicalHeaderList(canonicalHeaders);
                        const canonicalRequest = this.createCanonicalRequest(
                            request,
                            canonicalHeaders,
                            payloadHash
                        );

                        return this.getSignature(
                            longDate,
                            scope,
                            keyPromise,
                            canonicalRequest
                        )
                    }).then(signature => {
                        request.query[SIGNATURE_QUERY_PARAM] = signature;
                        return request;
                    });
            });
    }

    signRequest<StreamType>({
        request: originalRequest,
        signingDate = new Date(),
        unsignableHeaders = UNSIGNABLE_HEADERS,
        unsignedPayload = this.unsignedPayload,
    }: SigningArguments<StreamType>): Promise<HttpRequest<StreamType>> {
        return Promise.all([this.regionProvider(), this.credentialProvider()])
            .then(([region, credentials]) => {
                const request = prepareRequest(originalRequest);
                const {longDate, shortDate} = formatDate(signingDate);
                const scope = createScope(shortDate, region, this.service);
                const keyPromise = this.getSigningKey(credentials, shortDate);

                request.headers[AMZ_DATE_HEADER] = longDate;
                if (credentials.sessionToken) {
                    request.headers[TOKEN_HEADER] = credentials.sessionToken;
                }

                return this.getPayloadHash(request, unsignedPayload)
                    .then(payloadHash => {
                        if (this.applyChecksum || payloadHash === UNSIGNED_PAYLOAD) {
                            request.headers[SHA256_HEADER] = payloadHash;
                        }
                        const canonicalHeaders = getCanonicalHeaders(
                            request,
                            unsignableHeaders
                        );
                        const canonicalRequest =  this.createCanonicalRequest(
                            request,
                            canonicalHeaders,
                            payloadHash
                        );

                        return this.getSignature(
                            longDate,
                            scope,
                            keyPromise,
                            canonicalRequest
                        ).then(signature => {
                            request.headers[AUTH_HEADER] = `${ALGORITHM_IDENTIFIER} `
                                + `Credential=${credentials.accessKeyId}/${scope}, `
                                + `SignedHeaders=${getCanonicalHeaderList(canonicalHeaders)}, `
                                + `Signature=${signature}`;
                            return request;
                        });
                    });
            });
    }

    private createCanonicalRequest(
        request: HttpRequest<any>,
        canonicalHeaders: HeaderBag,
        payloadHash: string
    ): string {
        const sortedHeaders = Object.keys(canonicalHeaders).sort();
        return `${request.method}
${this.getCanonicalPath(request)}
${getCanonicalQuery(request)}
${sortedHeaders.map(name => `${name}:${canonicalHeaders[name]}`).join('\n')}

${sortedHeaders.join(';')}
${payloadHash}`;
    }

    private createStringToSign(
        longDate: string,
        credentialScope: string,
        canonicalRequest: string
    ): Promise<string> {
        const hash = new this.sha256();
        hash.update(canonicalRequest);

        return hash.digest().then(hashedRequest => (
`${ALGORITHM_IDENTIFIER}
${longDate}
${credentialScope}
${toHex(hashedRequest)}`
        ));
    }

    private getCanonicalPath(
        {path}: HttpRequest<any>
    ): string {
        if (this.uriEscapePath) {
            const doubleEncoded = encodeURIComponent(path.replace(/^\//, ''));
            return `/${doubleEncoded.replace(/%2F/g, '/')}`;
        }

        return path;
    }

    private getPayloadHash<StreamType>(
        request: HttpRequest<StreamType>,
        unsignedPayload: boolean
    ): Promise<string> {


        if (unsignedPayload && request.protocol === 'https:') {
            return Promise.resolve(UNSIGNED_PAYLOAD);
        }

        return getPayloadHash(request, this.sha256);
    }

    private getSignature(
        longDate: string,
        credentialScope: string,
        keyPromise: Promise<Uint8Array>,
        canonicalRequest: string
    ): Promise<string> {
        return this.createStringToSign(
            longDate,
            credentialScope,
            canonicalRequest
        ).then(stringToSign => {
            return keyPromise.then(key => {
                const hash = new this.sha256(key);
                hash.update(stringToSign);
                return hash.digest();
            });
        }).then(toHex);
    }

    private getSigningKey(
        credentials: Credentials,
        shortDate: string
    ): Promise<Uint8Array> {
        return this.regionProvider().then(region => getSigningKey(
            this.sha256,
            credentials,
            shortDate,
            region,
            this.service
        ));
    }
}

function ensureRequestHasQuery<StreamType>(
    request: HttpRequest<StreamType>
): HttpRequest<StreamType> & {query: QueryParameterBag} {
    const {query = {} as QueryParameterBag} = request;

    return {
        ...request,
        query
    };
}

function formatDate(
    now: string|number|Date
): {longDate: string, shortDate: string} {
    const longDate = iso8601(now).replace(/[\-:]/g, '');
    return {
        longDate,
        shortDate: longDate.substr(0, 8),
    };
}

function getCanonicalHeaderList(headers: object): string {
    return Object.keys(headers)
        .sort()
        .join(';');
}

function getTtl(
    start: string|number|Date,
    expiration: string|number|Date
): number {
    return Math.floor(
        (toDate(expiration).valueOf() - toDate(start).valueOf()) / 1000
    );
}
