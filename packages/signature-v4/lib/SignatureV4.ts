import {cloneRequest} from './cloneRequest';
import {createScope, getSigningKey} from "./credentialDerivation";
import {getCanonicalHeaders} from './getCanonicalHeaders';
import {getCanonicalQuery} from "./getCanonicalQuery";
import {getPayloadHash} from "./getPayloadHash";
import {
    ALGORITHM_IDENTIFIER,
    AMZ_DATE_HEADER,
    AUTH_HEADER,
    GENERATED_HEADERS,
    SHA256_HEADER,
    TOKEN_HEADER,
    UNSIGNED_PAYLOAD,
} from './constants';
import {
    Credentials,
    HashConstructor,
    HttpRequest,
    RequestSigner,
} from '@aws/types';
import {iso8601} from '@aws/protocol-timestamp';
import {toHex} from '@aws/util-hex-encoding';

export interface SignatureV4Init {
    service: string;
    region: string;
    sha256: HashConstructor;
    unsignedPayload?: boolean;
}

interface SigningContext {
    canonicalRequest: string;
    signedHeaders: Array<string>;
}

export class SignatureV4<StreamType = any> implements
    RequestSigner<StreamType>
{
    private readonly service: string;
    private readonly region: string;
    protected readonly sha256: HashConstructor;
    protected readonly unsignedPayload: boolean;

    constructor(options: SignatureV4Init) {
        this.service = options.service;
        this.region = options.region;
        this.sha256 = options.sha256;
        this.unsignedPayload = options.unsignedPayload === true;
    }

    createPresignedUrl(): Promise<string> {
        return Promise.reject('not implemented');
    }

    presignRequest(): Promise<HttpRequest<StreamType>> {
        return Promise.reject('not implemented');
    }

    signRequest(
        request: HttpRequest<StreamType>,
        credentials: Credentials
    ): Promise<HttpRequest<StreamType>> {
        // Create a clone of the request object that does not clone the body
        request = cloneRequest(request);

        for (let headerName of Object.keys(request.headers)) {
            if (GENERATED_HEADERS.indexOf(headerName.toLowerCase()) > -1) {
                delete request.headers[headerName];
            }
        }

        if (credentials.sessionToken) {
            request.headers[TOKEN_HEADER] = credentials.sessionToken;
        }

        const longDate = iso8601(Date.now()).replace(/[\-:]/g, '');
        request.headers[AMZ_DATE_HEADER] = longDate;
        const shortDate = longDate.substr(0, 8);
        const scope = createScope(shortDate, this.region, this.service);
        const keyPromise = getSigningKey(
            this.sha256,
            credentials,
            shortDate,
            this.region,
            this.service
        );

        return this.getPayloadHash(request)
            .then(payloadHash => {
                if (payloadHash === UNSIGNED_PAYLOAD) {
                    request.headers[SHA256_HEADER] = UNSIGNED_PAYLOAD;
                }
                return this.createContext(request, payloadHash);
            }).then(context => {
                return this.getSignature(
                    longDate,
                    scope,
                    keyPromise,
                    context
                ).then(signature => {
                    request.headers[AUTH_HEADER] = `${ALGORITHM_IDENTIFIER} `
                        + `Credential=${credentials.accessKeyId}/${scope}, `
                        + `SignedHeaders=${context.signedHeaders.join(';')}, `
                        + `Signature=${signature}`;
                    return request;
                })
            });
    }

    protected getCanonicalPath(
        {path = ''}: HttpRequest<StreamType>
    ): string {
        const doubleEncoded = encodeURIComponent(path.replace(/^\//, ''));
        return `/${doubleEncoded.replace(/%2F/g, '/')}`;
    }

    protected getPresignedPayloadHash(
        request: HttpRequest<StreamType>
    ): Promise<string> {
        return this.getPayloadHash(request);
    }

    private createContext(
        request: HttpRequest<StreamType>,
        payloadHash: string
    ): SigningContext {
        const canonicalHeaders = getCanonicalHeaders(request);
        const signedHeaders = Object.keys(canonicalHeaders).sort();
        const canonicalRequest =
`${request.method}
${this.getCanonicalPath(request)}
${getCanonicalQuery(request)}
${signedHeaders.map(name => `${name}:${canonicalHeaders[name]}`).join('\n')}

${signedHeaders.join(';')}
${payloadHash}`;

        return {canonicalRequest, signedHeaders};
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

    private getPayloadHash(
        request: HttpRequest<StreamType>
    ): Promise<string> {
        if (this.unsignedPayload && request.protocol === 'https:') {
            return Promise.resolve(UNSIGNED_PAYLOAD);
        }

        return getPayloadHash(request, this.sha256);
    }

    private getSignature(
        longDate: string,
        credentialScope: string,
        keyPromise: Promise<Uint8Array>,
        {canonicalRequest}: SigningContext
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
}
