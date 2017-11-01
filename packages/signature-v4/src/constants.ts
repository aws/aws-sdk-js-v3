export const ALGORITHM_QUERY_PARAM = 'X-Amz-Algorithm';
export const CREDENTIAL_QUERY_PARAM = 'X-Amz-Credential';
export const AMZ_DATE_QUERY_PARAM = 'X-Amz-Date';
export const SIGNED_HEADERS_QUERY_PARAM = 'X-Amz-SignedHeaders';
export const EXPIRES_QUERY_PARAM = 'X-Amz-Expires';
export const SIGNATURE_QUERY_PARAM = 'X-Amz-Signature';
export const TOKEN_QUERY_PARAM = 'X-Amz-Security-Token';
export const SHA256_QUERY_PARAM = 'X-Amz-Content-Sha256';

export const AUTH_HEADER = 'authorization';
export const AMZ_DATE_HEADER = AMZ_DATE_QUERY_PARAM.toLowerCase();
export const DATE_HEADER = 'date';
export const GENERATED_HEADERS = [AUTH_HEADER, AMZ_DATE_HEADER, DATE_HEADER];
export const SIGNATURE_HEADER = SIGNATURE_QUERY_PARAM.toLowerCase();
export const SHA256_HEADER = SHA256_QUERY_PARAM.toLowerCase();
export const TOKEN_HEADER = TOKEN_QUERY_PARAM.toLowerCase();
export const HOST_HEADER = 'host';
export const UNSIGNABLE_HEADERS: {[key: string]: true} = {
    'cache-control': true,
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

export const ALGORITHM_IDENTIFIER = 'AWS4-HMAC-SHA256';

export const UNSIGNED_PAYLOAD = 'UNSIGNED-PAYLOAD';

export const EMPTY_DATA_SHA_256 = new Uint8Array([
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

export const MAX_CACHE_SIZE = 50;
export const KEY_TYPE_IDENTIFIER = 'aws4_request';

export const MAX_PRESIGNED_TTL = 60 * 60 * 24 * 7;
