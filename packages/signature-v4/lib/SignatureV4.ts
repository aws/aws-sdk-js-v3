import {cloneRequest} from './cloneRequest';
import {createScope} from "./credentialDerivation";
import {
    Credentials,
    HashConstructor,
    HttpRequest,
    RequestSigner,
    StreamCollector
} from '@aws/types';
import {iso8601} from '@aws/protocol-timestamp';
import {isArrayBuffer} from "@aws/is-array-buffer";

const AUTH_HEADER = 'authorization';
const AMZ_DATE_HEADER = 'x-amz-date';
const DATE_HEADER = 'date';
const SIGNATURE_HEADERS = [AUTH_HEADER, AMZ_DATE_HEADER, DATE_HEADER];
const HOST_HEADER = 'host';
const SHA256_HEADER = 'x-amz-content-sha256';
const TOKEN_HEADER = 'x-amz-security-token';
const UNSIGNED_PAYLOAD = 'UNSIGNED-PAYLOAD';
const UNSIGNABLE_HEADERS: {[key: string]: true} = {
    'cache-control': true,
    'content-type': true,
    'content-length': true,
    'expect': true,
    'max-forwards': true,
    'pragma': true,
    'range': true,
    'te': true,
    'if-match': true,
    'if-none-match': true,
    'if-modified-since': true,
    'if-unmodified-since': true,
    'if-range': true,
    'accept': true,
    'authorization': true,
    'proxy-authorization': true,
    'from': true,
    'referer': true,
    'user-agent': true,
    'x-amzn-trace-id': true,
};

const EMPTY_DATA_SHA_256 = new Uint8Array([
    227,
    176,
    196,
    66,
    152,
    252,
    28,
    20,
    154,
    251,
    244,
    200,
    153,
    111,
    185,
    36,
    39,
    174,
    65,
    228,
    100,
    155,
    147,
    76,
    164,
    149,
    153,
    27,
    120,
    82,
    184,
    85,
]);

export interface SignatureV4Init<StreamType> {
    service: string;
    region: string;
    sha256: HashConstructor;
    streamCollector?: StreamCollector<StreamType>;
    unsignedPayload?: boolean;
    collectAndSignStreams?: boolean;
}

export class SignatureV4<StreamType = any> implements
    RequestSigner<StreamType>
{
    private readonly service: string;
    private readonly region: string;
    protected readonly sha256: HashConstructor;
    protected readonly streamCollector: StreamCollector<StreamType>|undefined;
    protected readonly unsignedPayload: boolean;

    constructor(options: SignatureV4Init<StreamType>) {
        this.service = options.service;
        this.region = options.region;
        this.sha256 = options.sha256;
        this.streamCollector = options.streamCollector;
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
            if (SIGNATURE_HEADERS.indexOf(headerName.toLowerCase()) > -1) {
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

    }

    protected getPresignedPayloadHash(
        request: HttpRequest<StreamType>
    ): Promise<string> {
        return this.getPayloadHash(request);
    }

    private getPayloadHash(
        request: HttpRequest<StreamType>
    ): Promise<string> {
        if (this.unsignedPayload && request.protocol === 'https:') {
            return Promise.resolve(UNSIGNED_PAYLOAD);
        }

        if (SHA256_HEADER in request.headers) {
            return Promise.resolve(request.headers[SHA256_HEADER]);
        }

        const {body} = request;
        let hashPromise: Promise<Uint8Array>;

        if (body == undefined) {
            hashPromise = Promise.resolve(EMPTY_DATA_SHA_256);
        } else {
            const hash = new this.sha256();

            if (
                typeof body === 'string'
                || ArrayBuffer.isView(body)
                || isArrayBuffer(body)
            ) {
                hash.update(body);
                hashPromise = hash.digest();
            } else {
                if (this.streamCollector) {
                    hashPromise = this.streamCollector(body)
                        .then(data => {
                            // The stream may not be replayable, so replace the
                            // request's streaming body with the collected
                            // binary buffer
                            request.body = data;
                            hash.update(data);
                        }).then(hash.digest.bind(hash));
                } else {
                    // If no stream collector was provided, this body is
                    // unsignable.
                    return Promise.resolve(UNSIGNED_PAYLOAD);
                }
            }
        }

        return hashPromise.then(hexEncode);
    }
}

function hexEncode(array: Uint8Array): string {
    return array.reduce((hex: string, byte: number) => {
        let encodedByte = byte.toString(16);
        if (encodedByte.length === 1) {
            encodedByte = `0${encodedByte}`;
        }

        return hex + encodedByte;
    }, '');
}
