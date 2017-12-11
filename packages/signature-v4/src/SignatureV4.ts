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
} from './constants';
import {
    Credentials,
    DateInput,
    HashConstructor,
    HeaderBag,
    HttpRequest,
    Provider,
    QueryParameterBag,
    RequestSigner,
    RequestSigningArguments as RequestSigningArguments,
    SigningArguments,
} from '@aws/types';
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

        if (typeof credentials === 'object') {
            const promisified = Promise.resolve(credentials);
            this.credentialProvider = () => promisified;
        } else {
            this.credentialProvider = credentials;
        }
    }

    public async presignRequest<StreamType>(
        originalRequest: HttpRequest<StreamType>,
        expiration: DateInput,
        options: RequestSigningArguments = {}
    ): Promise<HttpRequest<StreamType>> {
        const [region, credentials] = await Promise.all([
            this.regionProvider(),
            this.credentialProvider()
        ]);

        const {
            signingDate = new Date(),
            unsignableHeaders,
            unsignedPayload = this.unsignedPayload,
        } = options;

        const {longDate, shortDate} = formatDate(signingDate);
        const ttl = getTtl(signingDate, expiration);
        if (ttl > MAX_PRESIGNED_TTL) {
            return Promise.reject('Signature version 4 presigned URLs'
                + ' must have an expiration date less than one week in'
                + ' the future');
        }

        const scope = createScope(shortDate, region, this.service);
        const request = moveHeadersToQuery(prepareRequest(originalRequest));

        if (credentials.sessionToken) {
            request.query[TOKEN_QUERY_PARAM] = credentials.sessionToken;
        }
        request.query[ALGORITHM_QUERY_PARAM] = ALGORITHM_IDENTIFIER;
        request.query[CREDENTIAL_QUERY_PARAM] = `${credentials.accessKeyId}/${scope}`;
        request.query[AMZ_DATE_QUERY_PARAM] = longDate;
        request.query[EXPIRES_QUERY_PARAM] = ttl.toString(10);

        const payloadHash = await this.getPayloadHash(request, unsignedPayload);
        if (this.applyChecksum) {
            request.query[SHA256_QUERY_PARAM] = payloadHash;
        }

        const canonicalHeaders = getCanonicalHeaders(request, unsignableHeaders);
        request.query[SIGNED_HEADERS_QUERY_PARAM] = getCanonicalHeaderList(canonicalHeaders);

        request.query[SIGNATURE_QUERY_PARAM] = await this.getSignature(
            longDate,
            scope,
            this.getSigningKey(credentials, region, shortDate),
            this.createCanonicalRequest(
                request,
                canonicalHeaders,
                payloadHash
            )
        );

        return request;
    }

    public sign(
        stringToSign: string,
        options?: SigningArguments
    ): Promise<string>;
    public sign<StreamType>(
        requestToSign: HttpRequest<StreamType>,
        options?: RequestSigningArguments
    ): Promise<HttpRequest<StreamType>>;
    public async sign<T extends string|HttpRequest<any>>(
        toSign: T,
        {
            signingDate = new Date(),
            ...options
        }: RequestSigningArguments|SigningArguments = {}
    ): Promise<T> {
        const [region, credentials] = await Promise.all([
            this.regionProvider(),
            this.credentialProvider()
        ]);

        if (typeof toSign === 'string') {
            return this.signString(
                toSign,
                signingDate,
                region,
                credentials
            ) as Promise<T>;
        } else {
            const {
                unsignedPayload = this.unsignedPayload,
                unsignableHeaders
            } = options as RequestSigningArguments;

            return this.signRequest(
                toSign as HttpRequest<any>,
                signingDate,
                region,
                credentials,
                unsignedPayload,
                unsignableHeaders
            ) as Promise<T>;
        }
    }

    private async signString(
        stringToSign: string,
        signingDate: DateInput,
        region: string,
        credentials: Credentials,
    ): Promise<string> {
        const {longDate, shortDate} = formatDate(signingDate);
        const scope = createScope(shortDate, region, this.service);

        const hash = new this.sha256(
            await this.getSigningKey(credentials, region, shortDate)
        );
        hash.update(stringToSign);
        return toHex(await hash.digest());
    }

    private async signRequest(
        originalRequest: HttpRequest<any>,
        signingDate: DateInput,
        region: string,
        credentials: Credentials,
        unsignedPayload: boolean,
        unsignableHeaders?: Set<string>
    ): Promise<HttpRequest<any>> {
        const request = prepareRequest(originalRequest);
        const {longDate, shortDate} = formatDate(signingDate);
        const scope = createScope(shortDate, region, this.service);

        request.headers[AMZ_DATE_HEADER] = longDate;
        if (credentials.sessionToken) {
            request.headers[TOKEN_HEADER] = credentials.sessionToken;
        }

        const payloadHash = await this.getPayloadHash(request, unsignedPayload);

        if (this.applyChecksum || payloadHash === UNSIGNED_PAYLOAD) {
            request.headers[SHA256_HEADER] = payloadHash;
        }
        const canonicalHeaders = getCanonicalHeaders(request, unsignableHeaders);
        const signature = await this.getSignature(
            longDate,
            scope,
            this.getSigningKey(credentials, region, shortDate),
            this.createCanonicalRequest(request, canonicalHeaders, payloadHash)
        );

        request.headers[AUTH_HEADER] = `${ALGORITHM_IDENTIFIER} `
            + `Credential=${credentials.accessKeyId}/${scope}, `
            + `SignedHeaders=${getCanonicalHeaderList(canonicalHeaders)}, `
            + `Signature=${signature}`;

        return request;
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

    private async createStringToSign(
        longDate: string,
        credentialScope: string,
        canonicalRequest: string
    ): Promise<string> {
        const hash = new this.sha256();
        hash.update(canonicalRequest);
        const hashedRequest = await hash.digest();

        return`${ALGORITHM_IDENTIFIER}
${longDate}
${credentialScope}
${toHex(hashedRequest)}`;
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

    private async getPayloadHash<StreamType>(
        request: HttpRequest<StreamType>,
        unsignedPayload: boolean
    ): Promise<string> {
        if (unsignedPayload && request.protocol === 'https:') {
            return UNSIGNED_PAYLOAD;
        }

        return getPayloadHash(request, this.sha256);
    }

    private async getSignature(
        longDate: string,
        credentialScope: string,
        keyPromise: Promise<Uint8Array>,
        canonicalRequest: string
    ): Promise<string> {
        const stringToSign = await this.createStringToSign(
            longDate,
            credentialScope,
            canonicalRequest
        );

        const hash = new this.sha256(await keyPromise);
        hash.update(stringToSign);
        return toHex(await hash.digest());
    }

    private getSigningKey(
        credentials: Credentials,
        region: string,
        shortDate: string
    ): Promise<Uint8Array> {
        return getSigningKey(
            this.sha256,
            credentials,
            shortDate,
            region,
            this.service
        );
    }
}

function formatDate(now: DateInput): {longDate: string, shortDate: string} {
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

function getTtl(start: DateInput, expiration: DateInput): number {
    return Math.floor(
        (toDate(expiration).valueOf() - toDate(start).valueOf()) / 1000
    );
}
