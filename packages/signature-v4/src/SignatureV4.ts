import { createScope, getSigningKey } from './credentialDerivation';
import { isArrayBuffer } from '@aws/is-array-buffer';
import {
    Credentials,
    DateInput,
    HashConstructor,
    HeaderBag,
    HttpRequest,
    Provider,
    RequestPresigner,
    QueryParameterBag,
    RequestSigner,
    RequestSigningArguments,
    SigningArguments,
    StringSigner,
} from '@aws/types';
import { iso8601, toDate } from '@aws/protocol-timestamp';
import { toHex } from '@aws/util-hex-encoding';

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
     * Whether to uri-escape the request URI path as part of computing the
     * canonical request string. This is required for every AWS service, except
     * Amazon S3, as of late 2017.
     *
     * @default [true]
     */
    uriEscapePath?: boolean;
}

export interface SignatureV4CryptoInit {
    sha256: HashConstructor;
}

export class SignatureV4 implements
    RequestPresigner,
    RequestSigner,
    StringSigner
{
    private readonly service: string;
    private readonly regionProvider: Provider<string>;
    private readonly credentialProvider: Provider<Credentials>;
    private readonly sha256: HashConstructor;
    private readonly uriEscapePath: boolean;

    constructor({
        credentials,
        region,
        service,
        sha256,
        uriEscapePath = true,
    }: SignatureV4Init & SignatureV4CryptoInit) {
        this.service = service;
        this.sha256 = sha256;
        this.uriEscapePath = uriEscapePath;

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

        const { signingDate = new Date(), unsignableHeaders } = options;

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

        const canonicalHeaders = getCanonicalHeaders(request, unsignableHeaders);
        request.query[SIGNED_HEADERS_QUERY_PARAM] = getCanonicalHeaderList(canonicalHeaders);

        request.query[SIGNATURE_QUERY_PARAM] = await this.getSignature(
            longDate,
            scope,
            this.getSigningKey(credentials, region, shortDate),
            this.createCanonicalRequest(
                request,
                canonicalHeaders,
                await this.getPayloadHash(originalRequest)
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
            const { unsignableHeaders } = options as RequestSigningArguments;

            return this.signRequest(
                toSign as HttpRequest<any>,
                signingDate,
                region,
                credentials,
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
        const { shortDate } = formatDate(signingDate);

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
        unsignableHeaders?: Set<string>
    ): Promise<HttpRequest<any>> {
        const request = prepareRequest(originalRequest);
        const {longDate, shortDate} = formatDate(signingDate);
        const scope = createScope(shortDate, region, this.service);

        request.headers[AMZ_DATE_HEADER] = longDate;
        if (credentials.sessionToken) {
            request.headers[TOKEN_HEADER] = credentials.sessionToken;
        }

        const payloadHash = await this.getPayloadHash(request);

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

    private async getPayloadHash(
        {headers, body}: HttpRequest<any>
    ): Promise<string> {
        for (const headerName of Object.keys(headers)) {
            if (headerName.toLowerCase() === SHA256_HEADER) {
                return headers[headerName];
            }
        }

        if (body == undefined) {
            return EMPTY_DATA_SHA256;
        } else if (
            typeof body === 'string'
                || ArrayBuffer.isView(body)
                || isArrayBuffer(body)
        ) {
            const hashCtor = new this.sha256();
            hashCtor.update(body);
            return toHex(await hashCtor.digest());
        }

        // As any defined body that is not a string or binary data is a stream, this
        // body is unsignable. Attempt to send the request with an unsigned payload,
        // which may or may not be accepted by the service.
        return UNSIGNED_PAYLOAD;
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

function cloneRequest<StreamType>(
    {headers, query, ...rest}: HttpRequest<StreamType>
): HttpRequest<StreamType> {
    return {
        ...rest,
        headers: {...headers},
        query: query ? cloneQuery(query) : undefined,
    };
}

function cloneQuery(query: QueryParameterBag): QueryParameterBag {
    return Object.keys(query)
        .reduce((carry: QueryParameterBag, paramName: string) => {
            const param = query[paramName];
            return {
                ...carry,
                    [paramName]: Array.isArray(param)
                    ? [...param]
                    : param
                };
        }, {});
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

function getCanonicalHeaders(
    {headers}: HttpRequest<any>,
    unsignableHeaders?: Set<string>
): HeaderBag {
    const canonical: HeaderBag = {};
    for (let headerName of Object.keys(headers).sort()) {
        const canonicalHeaderName = headerName.toLowerCase();
        if (
            canonicalHeaderName in ALWAYS_UNSIGNABLE_HEADERS ||
            (unsignableHeaders && unsignableHeaders.has(canonicalHeaderName)) ||
            PROXY_HEADER_PATTERN.test(canonicalHeaderName) ||
            SEC_HEADER_PATTERN.test(canonicalHeaderName)
        ) {
            continue;
        }

        canonical[canonicalHeaderName] = headers[headerName]
            .trim()
            .replace(/\s+/g, ' ');
    }

    return canonical;
}

function getCanonicalQuery({query = {}}: HttpRequest<any>): string {
    const keys: Array<string> = [];
    const serialized: {[key: string]: string} = {};
    for (let key of Object.keys(query).sort()) {
        if (key.toLowerCase() === SIGNATURE_HEADER) {
            continue;
        }

        keys.push(key);
        const value = query[key];
        if (typeof value === 'string') {
            serialized[key] = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
        } else if (Array.isArray(value)) {
            const escapedKey = encodeURIComponent(key);
            serialized[key] = value.slice(0).sort()
                .map(value => `${escapedKey}=${encodeURIComponent(value)}`)
                .join('&');
        }
    }

    return keys
        .map(key => serialized[key])
        .filter(serialized => serialized) // omit any falsy values
        .join('&');
}

function moveHeadersToQuery<StreamType>(
    request: HttpRequest<StreamType>
): HttpRequest<StreamType> & {query: QueryParameterBag} {
    const {headers, query = {} as QueryParameterBag} = cloneRequest(request);
    for (let name of Object.keys(headers)) {
        const lname = name.toLowerCase();
        if (lname.substr(0, 6) === 'x-amz-') {
            query[name] = headers[name];
            delete headers[name];
        }
    }

    return {
        ...request,
        headers,
        query,
    };
}

function prepareRequest<StreamType>(
    request: HttpRequest<StreamType>
): HttpRequest<StreamType> {
    // Create a clone of the request object that does not clone the body
    request = cloneRequest(request);

    for (let headerName of Object.keys(request.headers)) {
        if (GENERATED_HEADERS.indexOf(headerName.toLowerCase()) > -1) {
            delete request.headers[headerName];
        }
    }

    if (!(HOST_HEADER in request.headers)) {
        request.headers[HOST_HEADER] = request.hostname;
    }

    return request;
}

const ALGORITHM_QUERY_PARAM = 'X-Amz-Algorithm';
const CREDENTIAL_QUERY_PARAM = 'X-Amz-Credential';
const AMZ_DATE_QUERY_PARAM = 'X-Amz-Date';
const SIGNED_HEADERS_QUERY_PARAM = 'X-Amz-SignedHeaders';
const EXPIRES_QUERY_PARAM = 'X-Amz-Expires';
const SIGNATURE_QUERY_PARAM = 'X-Amz-Signature';
const TOKEN_QUERY_PARAM = 'X-Amz-Security-Token';

const AUTH_HEADER = 'authorization';
const AMZ_DATE_HEADER = 'x-amz-date';
const DATE_HEADER = 'date';
const GENERATED_HEADERS = [AUTH_HEADER, AMZ_DATE_HEADER, DATE_HEADER];
const SIGNATURE_HEADER = 'x-amz-signature';
const SHA256_HEADER = 'x-amz-content-sha256';
const TOKEN_HEADER = 'x-amz-security-token';
const HOST_HEADER = 'host';

const EMPTY_DATA_SHA256 = 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855';

const ALWAYS_UNSIGNABLE_HEADERS = {
    'authorization': true,
    'cache-control': true,
    'connection': true,
    'expect': true,
    'from': true,
    'keep-alive': true,
    'max-forwards': true,
    'pragma': true,
    'referer': true,
    'te': true,
    'trailer': true,
    'transfer-encoding': true,
    'upgrade': true,
    'user-agent': true,
    'x-amzn-trace-id': true,
};

const PROXY_HEADER_PATTERN = /^proxy-/;

const SEC_HEADER_PATTERN = /^sec-/;

const ALGORITHM_IDENTIFIER = 'AWS4-HMAC-SHA256';

const UNSIGNED_PAYLOAD = 'UNSIGNED-PAYLOAD';

const MAX_PRESIGNED_TTL = 60 * 60 * 24 * 7;
