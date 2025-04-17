var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) =>
  function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])((fn = 0))), res;
  };

// ../../node_modules/@smithy/util-hex-encoding/dist-es/index.js
function fromHex(encoded) {
  if (encoded.length % 2 !== 0) {
    throw new Error("Hex encoded strings must have an even number length");
  }
  const out = new Uint8Array(encoded.length / 2);
  for (let i = 0; i < encoded.length; i += 2) {
    const encodedByte = encoded.slice(i, i + 2).toLowerCase();
    if (encodedByte in HEX_TO_SHORT) {
      out[i / 2] = HEX_TO_SHORT[encodedByte];
    } else {
      throw new Error(`Cannot decode unrecognized sequence ${encodedByte} as hexadecimal`);
    }
  }
  return out;
}
function toHex(bytes) {
  let out = "";
  for (let i = 0; i < bytes.byteLength; i++) {
    out += SHORT_TO_HEX[bytes[i]];
  }
  return out;
}
var SHORT_TO_HEX, HEX_TO_SHORT;
var init_dist_es = __esm({
  "../../node_modules/@smithy/util-hex-encoding/dist-es/index.js"() {
    init_inject_sigv4a();
    SHORT_TO_HEX = {};
    HEX_TO_SHORT = {};
    for (let i = 0; i < 256; i++) {
      let encodedByte = i.toString(16).toLowerCase();
      if (encodedByte.length === 1) {
        encodedByte = `0${encodedByte}`;
      }
      SHORT_TO_HEX[i] = encodedByte;
      HEX_TO_SHORT[encodedByte] = i;
    }
  },
});

// ../../node_modules/@smithy/util-utf8/dist-es/fromUtf8.browser.js
var fromUtf8;
var init_fromUtf8_browser = __esm({
  "../../node_modules/@smithy/util-utf8/dist-es/fromUtf8.browser.js"() {
    init_inject_sigv4a();
    fromUtf8 = (input) => new TextEncoder().encode(input);
  },
});

// ../../node_modules/@smithy/util-utf8/dist-es/toUint8Array.js
var toUint8Array;
var init_toUint8Array = __esm({
  "../../node_modules/@smithy/util-utf8/dist-es/toUint8Array.js"() {
    init_inject_sigv4a();
    init_fromUtf8_browser();
    toUint8Array = (data) => {
      if (typeof data === "string") {
        return fromUtf8(data);
      }
      if (ArrayBuffer.isView(data)) {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
      }
      return new Uint8Array(data);
    };
  },
});

// ../../node_modules/@smithy/util-utf8/dist-es/toUtf8.browser.js
var init_toUtf8_browser = __esm({
  "../../node_modules/@smithy/util-utf8/dist-es/toUtf8.browser.js"() {
    init_inject_sigv4a();
  },
});

// ../../node_modules/@smithy/util-utf8/dist-es/index.js
var init_dist_es2 = __esm({
  "../../node_modules/@smithy/util-utf8/dist-es/index.js"() {
    init_inject_sigv4a();
    init_fromUtf8_browser();
    init_toUint8Array();
    init_toUtf8_browser();
  },
});

// ../../node_modules/@smithy/signature-v4/dist-es/constants.js
var ALGORITHM_QUERY_PARAM,
  CREDENTIAL_QUERY_PARAM,
  AMZ_DATE_QUERY_PARAM,
  SIGNED_HEADERS_QUERY_PARAM,
  EXPIRES_QUERY_PARAM,
  SIGNATURE_QUERY_PARAM,
  TOKEN_QUERY_PARAM,
  REGION_SET_PARAM,
  AUTH_HEADER,
  AMZ_DATE_HEADER,
  DATE_HEADER,
  GENERATED_HEADERS,
  SIGNATURE_HEADER,
  SHA256_HEADER,
  TOKEN_HEADER,
  ALWAYS_UNSIGNABLE_HEADERS,
  PROXY_HEADER_PATTERN,
  SEC_HEADER_PATTERN,
  ALGORITHM_IDENTIFIER,
  ALGORITHM_IDENTIFIER_V4A,
  EVENT_ALGORITHM_IDENTIFIER,
  UNSIGNED_PAYLOAD,
  MAX_CACHE_SIZE,
  KEY_TYPE_IDENTIFIER,
  MAX_PRESIGNED_TTL;
var init_constants = __esm({
  "../../node_modules/@smithy/signature-v4/dist-es/constants.js"() {
    init_inject_sigv4a();
    ALGORITHM_QUERY_PARAM = "X-Amz-Algorithm";
    CREDENTIAL_QUERY_PARAM = "X-Amz-Credential";
    AMZ_DATE_QUERY_PARAM = "X-Amz-Date";
    SIGNED_HEADERS_QUERY_PARAM = "X-Amz-SignedHeaders";
    EXPIRES_QUERY_PARAM = "X-Amz-Expires";
    SIGNATURE_QUERY_PARAM = "X-Amz-Signature";
    TOKEN_QUERY_PARAM = "X-Amz-Security-Token";
    REGION_SET_PARAM = "X-Amz-Region-Set";
    AUTH_HEADER = "authorization";
    AMZ_DATE_HEADER = AMZ_DATE_QUERY_PARAM.toLowerCase();
    DATE_HEADER = "date";
    GENERATED_HEADERS = [AUTH_HEADER, AMZ_DATE_HEADER, DATE_HEADER];
    SIGNATURE_HEADER = SIGNATURE_QUERY_PARAM.toLowerCase();
    SHA256_HEADER = "x-amz-content-sha256";
    TOKEN_HEADER = TOKEN_QUERY_PARAM.toLowerCase();
    ALWAYS_UNSIGNABLE_HEADERS = {
      authorization: true,
      "cache-control": true,
      connection: true,
      expect: true,
      from: true,
      "keep-alive": true,
      "max-forwards": true,
      pragma: true,
      referer: true,
      te: true,
      trailer: true,
      "transfer-encoding": true,
      upgrade: true,
      "user-agent": true,
      "x-amzn-trace-id": true,
    };
    PROXY_HEADER_PATTERN = /^proxy-/;
    SEC_HEADER_PATTERN = /^sec-/;
    ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256";
    ALGORITHM_IDENTIFIER_V4A = "AWS4-ECDSA-P256-SHA256";
    EVENT_ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256-PAYLOAD";
    UNSIGNED_PAYLOAD = "UNSIGNED-PAYLOAD";
    MAX_CACHE_SIZE = 50;
    KEY_TYPE_IDENTIFIER = "aws4_request";
    MAX_PRESIGNED_TTL = 60 * 60 * 24 * 7;
  },
});

// ../../node_modules/@smithy/signature-v4/dist-es/credentialDerivation.js
var signingKeyCache, cacheQueue, createScope, getSigningKey, hmac;
var init_credentialDerivation = __esm({
  "../../node_modules/@smithy/signature-v4/dist-es/credentialDerivation.js"() {
    init_inject_sigv4a();
    init_dist_es();
    init_dist_es2();
    init_constants();
    signingKeyCache = {};
    cacheQueue = [];
    createScope = (shortDate, region, service) => `${shortDate}/${region}/${service}/${KEY_TYPE_IDENTIFIER}`;
    getSigningKey = async (sha256Constructor, credentials, shortDate, region, service) => {
      const credsHash = await hmac(sha256Constructor, credentials.secretAccessKey, credentials.accessKeyId);
      const cacheKey = `${shortDate}:${region}:${service}:${toHex(credsHash)}:${credentials.sessionToken}`;
      if (cacheKey in signingKeyCache) {
        return signingKeyCache[cacheKey];
      }
      cacheQueue.push(cacheKey);
      while (cacheQueue.length > MAX_CACHE_SIZE) {
        delete signingKeyCache[cacheQueue.shift()];
      }
      let key = `AWS4${credentials.secretAccessKey}`;
      for (const signable of [shortDate, region, service, KEY_TYPE_IDENTIFIER]) {
        key = await hmac(sha256Constructor, key, signable);
      }
      return (signingKeyCache[cacheKey] = key);
    };
    hmac = (ctor, secret, data) => {
      const hash = new ctor(secret);
      hash.update(toUint8Array(data));
      return hash.digest();
    };
  },
});

// ../../node_modules/@smithy/signature-v4/dist-es/getCanonicalHeaders.js
var getCanonicalHeaders;
var init_getCanonicalHeaders = __esm({
  "../../node_modules/@smithy/signature-v4/dist-es/getCanonicalHeaders.js"() {
    init_inject_sigv4a();
    init_constants();
    getCanonicalHeaders = ({ headers }, unsignableHeaders, signableHeaders) => {
      const canonical = {};
      for (const headerName of Object.keys(headers).sort()) {
        if (headers[headerName] == void 0) {
          continue;
        }
        const canonicalHeaderName = headerName.toLowerCase();
        if (
          canonicalHeaderName in ALWAYS_UNSIGNABLE_HEADERS ||
          unsignableHeaders?.has(canonicalHeaderName) ||
          PROXY_HEADER_PATTERN.test(canonicalHeaderName) ||
          SEC_HEADER_PATTERN.test(canonicalHeaderName)
        ) {
          if (!signableHeaders || (signableHeaders && !signableHeaders.has(canonicalHeaderName))) {
            continue;
          }
        }
        canonical[canonicalHeaderName] = headers[headerName].trim().replace(/\s+/g, " ");
      }
      return canonical;
    };
  },
});

// ../../node_modules/@smithy/is-array-buffer/dist-es/index.js
var isArrayBuffer;
var init_dist_es3 = __esm({
  "../../node_modules/@smithy/is-array-buffer/dist-es/index.js"() {
    init_inject_sigv4a();
    isArrayBuffer = (arg) =>
      (typeof ArrayBuffer === "function" && arg instanceof ArrayBuffer) ||
      Object.prototype.toString.call(arg) === "[object ArrayBuffer]";
  },
});

// ../../node_modules/@smithy/signature-v4/dist-es/getPayloadHash.js
var getPayloadHash;
var init_getPayloadHash = __esm({
  "../../node_modules/@smithy/signature-v4/dist-es/getPayloadHash.js"() {
    init_inject_sigv4a();
    init_dist_es3();
    init_dist_es();
    init_dist_es2();
    init_constants();
    getPayloadHash = async ({ headers, body }, hashConstructor) => {
      for (const headerName of Object.keys(headers)) {
        if (headerName.toLowerCase() === SHA256_HEADER) {
          return headers[headerName];
        }
      }
      if (body == void 0) {
        return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
      } else if (typeof body === "string" || ArrayBuffer.isView(body) || isArrayBuffer(body)) {
        const hashCtor = new hashConstructor();
        hashCtor.update(toUint8Array(body));
        return toHex(await hashCtor.digest());
      }
      return UNSIGNED_PAYLOAD;
    };
  },
});

// ../../node_modules/@smithy/signature-v4/dist-es/HeaderFormatter.js
function negate(bytes) {
  for (let i = 0; i < 8; i++) {
    bytes[i] ^= 255;
  }
  for (let i = 7; i > -1; i--) {
    bytes[i]++;
    if (bytes[i] !== 0) break;
  }
}
var HeaderFormatter, HEADER_VALUE_TYPE, UUID_PATTERN, Int64;
var init_HeaderFormatter = __esm({
  "../../node_modules/@smithy/signature-v4/dist-es/HeaderFormatter.js"() {
    init_inject_sigv4a();
    init_dist_es();
    init_dist_es2();
    HeaderFormatter = class {
      format(headers) {
        const chunks = [];
        for (const headerName of Object.keys(headers)) {
          const bytes = fromUtf8(headerName);
          chunks.push(Uint8Array.from([bytes.byteLength]), bytes, this.formatHeaderValue(headers[headerName]));
        }
        const out = new Uint8Array(chunks.reduce((carry, bytes) => carry + bytes.byteLength, 0));
        let position = 0;
        for (const chunk of chunks) {
          out.set(chunk, position);
          position += chunk.byteLength;
        }
        return out;
      }
      formatHeaderValue(header) {
        switch (header.type) {
          case "boolean":
            return Uint8Array.from([header.value ? 0 : 1]);
          case "byte":
            return Uint8Array.from([2, header.value]);
          case "short":
            const shortView = new DataView(new ArrayBuffer(3));
            shortView.setUint8(0, 3);
            shortView.setInt16(1, header.value, false);
            return new Uint8Array(shortView.buffer);
          case "integer":
            const intView = new DataView(new ArrayBuffer(5));
            intView.setUint8(0, 4);
            intView.setInt32(1, header.value, false);
            return new Uint8Array(intView.buffer);
          case "long":
            const longBytes = new Uint8Array(9);
            longBytes[0] = 5;
            longBytes.set(header.value.bytes, 1);
            return longBytes;
          case "binary":
            const binView = new DataView(new ArrayBuffer(3 + header.value.byteLength));
            binView.setUint8(0, 6);
            binView.setUint16(1, header.value.byteLength, false);
            const binBytes = new Uint8Array(binView.buffer);
            binBytes.set(header.value, 3);
            return binBytes;
          case "string":
            const utf8Bytes = fromUtf8(header.value);
            const strView = new DataView(new ArrayBuffer(3 + utf8Bytes.byteLength));
            strView.setUint8(0, 7);
            strView.setUint16(1, utf8Bytes.byteLength, false);
            const strBytes = new Uint8Array(strView.buffer);
            strBytes.set(utf8Bytes, 3);
            return strBytes;
          case "timestamp":
            const tsBytes = new Uint8Array(9);
            tsBytes[0] = 8;
            tsBytes.set(Int64.fromNumber(header.value.valueOf()).bytes, 1);
            return tsBytes;
          case "uuid":
            if (!UUID_PATTERN.test(header.value)) {
              throw new Error(`Invalid UUID received: ${header.value}`);
            }
            const uuidBytes = new Uint8Array(17);
            uuidBytes[0] = 9;
            uuidBytes.set(fromHex(header.value.replace(/\-/g, "")), 1);
            return uuidBytes;
        }
      }
    };
    (function (HEADER_VALUE_TYPE2) {
      HEADER_VALUE_TYPE2[(HEADER_VALUE_TYPE2["boolTrue"] = 0)] = "boolTrue";
      HEADER_VALUE_TYPE2[(HEADER_VALUE_TYPE2["boolFalse"] = 1)] = "boolFalse";
      HEADER_VALUE_TYPE2[(HEADER_VALUE_TYPE2["byte"] = 2)] = "byte";
      HEADER_VALUE_TYPE2[(HEADER_VALUE_TYPE2["short"] = 3)] = "short";
      HEADER_VALUE_TYPE2[(HEADER_VALUE_TYPE2["integer"] = 4)] = "integer";
      HEADER_VALUE_TYPE2[(HEADER_VALUE_TYPE2["long"] = 5)] = "long";
      HEADER_VALUE_TYPE2[(HEADER_VALUE_TYPE2["byteArray"] = 6)] = "byteArray";
      HEADER_VALUE_TYPE2[(HEADER_VALUE_TYPE2["string"] = 7)] = "string";
      HEADER_VALUE_TYPE2[(HEADER_VALUE_TYPE2["timestamp"] = 8)] = "timestamp";
      HEADER_VALUE_TYPE2[(HEADER_VALUE_TYPE2["uuid"] = 9)] = "uuid";
    })(HEADER_VALUE_TYPE || (HEADER_VALUE_TYPE = {}));
    UUID_PATTERN = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
    Int64 = class _Int64 {
      constructor(bytes) {
        this.bytes = bytes;
        if (bytes.byteLength !== 8) {
          throw new Error("Int64 buffers must be exactly 8 bytes");
        }
      }
      static fromNumber(number) {
        if (number > 9223372036854776e3 || number < -9223372036854776e3) {
          throw new Error(`${number} is too large (or, if negative, too small) to represent as an Int64`);
        }
        const bytes = new Uint8Array(8);
        for (let i = 7, remaining = Math.abs(Math.round(number)); i > -1 && remaining > 0; i--, remaining /= 256) {
          bytes[i] = remaining;
        }
        if (number < 0) {
          negate(bytes);
        }
        return new _Int64(bytes);
      }
      valueOf() {
        const bytes = this.bytes.slice(0);
        const negative = bytes[0] & 128;
        if (negative) {
          negate(bytes);
        }
        return parseInt(toHex(bytes), 16) * (negative ? -1 : 1);
      }
      toString() {
        return String(this.valueOf());
      }
    };
  },
});

// ../../node_modules/@smithy/signature-v4/dist-es/headerUtil.js
var hasHeader;
var init_headerUtil = __esm({
  "../../node_modules/@smithy/signature-v4/dist-es/headerUtil.js"() {
    init_inject_sigv4a();
    hasHeader = (soughtHeader, headers) => {
      soughtHeader = soughtHeader.toLowerCase();
      for (const headerName of Object.keys(headers)) {
        if (soughtHeader === headerName.toLowerCase()) {
          return true;
        }
      }
      return false;
    };
  },
});

// ../../node_modules/@smithy/protocol-http/dist-es/extensions/httpExtensionConfiguration.js
var init_httpExtensionConfiguration = __esm({
  "../../node_modules/@smithy/protocol-http/dist-es/extensions/httpExtensionConfiguration.js"() {
    init_inject_sigv4a();
  },
});

// ../../node_modules/@smithy/protocol-http/dist-es/extensions/index.js
var init_extensions = __esm({
  "../../node_modules/@smithy/protocol-http/dist-es/extensions/index.js"() {
    init_inject_sigv4a();
    init_httpExtensionConfiguration();
  },
});

// ../../node_modules/@smithy/types/dist-es/abort.js
var init_abort = __esm({
  "../../node_modules/@smithy/types/dist-es/abort.js"() {
    init_inject_sigv4a();
  },
});

// ../../node_modules/@smithy/types/dist-es/auth/auth.js
var HttpAuthLocation;
var init_auth = __esm({
  "../../node_modules/@smithy/types/dist-es/auth/auth.js"() {
    init_inject_sigv4a();
    (function (HttpAuthLocation2) {
      HttpAuthLocation2["HEADER"] = "header";
      HttpAuthLocation2["QUERY"] = "query";
    })(HttpAuthLocation || (HttpAuthLocation = {}));
  },
});

// ../../node_modules/@smithy/types/dist-es/auth/HttpApiKeyAuth.js
var HttpApiKeyAuthLocation;
var init_HttpApiKeyAuth = __esm({
  "../../node_modules/@smithy/types/dist-es/auth/HttpApiKeyAuth.js"() {
    init_inject_sigv4a();
    (function (HttpApiKeyAuthLocation2) {
      HttpApiKeyAuthLocation2["HEADER"] = "header";
      HttpApiKeyAuthLocation2["QUERY"] = "query";
    })(HttpApiKeyAuthLocation || (HttpApiKeyAuthLocation = {}));
  },
});

// ../../node_modules/@smithy/types/dist-es/auth/HttpAuthScheme.js
var init_HttpAuthScheme = __esm({
  "../../node_modules/@smithy/types/dist-es/auth/HttpAuthScheme.js"() {
    init_inject_sigv4a();
  },
});

// ../../node_modules/@smithy/types/dist-es/auth/HttpAuthSchemeProvider.js
var init_HttpAuthSchemeProvider = __esm({
  "../../node_modules/@smithy/types/dist-es/auth/HttpAuthSchemeProvider.js"() {
    init_inject_sigv4a();
  },
});

// ../../node_modules/@smithy/types/dist-es/auth/HttpSigner.js
var init_HttpSigner = __esm({
  "../../node_modules/@smithy/types/dist-es/auth/HttpSigner.js"() {
    init_inject_sigv4a();
  },
});

// ../../node_modules/@smithy/types/dist-es/auth/IdentityProviderConfig.js
var init_IdentityProviderConfig = __esm({
  "../../node_modules/@smithy/types/dist-es/auth/IdentityProviderConfig.js"() {
    init_inject_sigv4a();
  },
});

// ../../node_modules/@smithy/types/dist-es/auth/index.js
var init_auth2 = __esm({
  "../../node_modules/@smithy/types/dist-es/auth/index.js"() {
    init_inject_sigv4a();
    init_auth();
    init_HttpApiKeyAuth();
    init_HttpAuthScheme();
    init_HttpAuthSchemeProvider();
    init_HttpSigner();
    init_IdentityProviderConfig();
  },
});

// ../../node_modules/@smithy/types/dist-es/blob/blob-payload-input-types.js
var init_blob_payload_input_types = __esm({
  "../../node_modules/@smithy/types/dist-es/blob/blob-payload-input-types.js"() {
    init_inject_sigv4a();
  },
});

// ../../node_modules/@smithy/types/dist-es/checksum.js
var init_checksum = __esm({
  "../../node_modules/@smithy/types/dist-es/checksum.js"() {
    init_inject_sigv4a();
  },
});

// ../../node_modules/@smithy/types/dist-es/client.js
var init_client = __esm({
  "../../node_modules/@smithy/types/dist-es/client.js"() {
    init_inject_sigv4a();
  },
});

// ../../node_modules/@smithy/types/dist-es/command.js
var init_command = __esm({
  "../../node_modules/@smithy/types/dist-es/command.js"() {
    init_inject_sigv4a();
  },
});

// ../../node_modules/@smithy/types/dist-es/connection/config.js
var init_config = __esm({
  "../../node_modules/@smithy/types/dist-es/connection/config.js"() {
    init_inject_sigv4a();
  },
});

// ../../node_modules/@smithy/types/dist-es/connection/manager.js
var init_manager = __esm({
  "../../node_modules/@smithy/types/dist-es/connection/manager.js"() {
    init_inject_sigv4a();
  },
});

// ../../node_modules/@smithy/types/dist-es/connection/pool.js
var init_pool = __esm({
  "../../node_modules/@smithy/types/dist-es/connection/pool.js"() {
    init_inject_sigv4a();
  },
});

// ../../node_modules/@smithy/types/dist-es/connection/index.js
var init_connection = __esm({
  "../../node_modules/@smithy/types/dist-es/connection/index.js"() {
    init_inject_sigv4a();
    init_config();
    init_manager();
    init_pool();
  },
});

// ../../node_modules/@smithy/types/dist-es/crypto.js
var init_crypto = __esm({
  "../../node_modules/@smithy/types/dist-es/crypto.js"() {
    init_inject_sigv4a();
  },
});

// ../../node_modules/@smithy/types/dist-es/encode.js
var init_encode = __esm({
  "../../node_modules/@smithy/types/dist-es/encode.js"() {
    init_inject_sigv4a();
  },
});

// ../../node_modules/@smithy/types/dist-es/endpoint.js
var EndpointURLScheme;
var init_endpoint = __esm({
  "../../node_modules/@smithy/types/dist-es/endpoint.js"() {
    init_inject_sigv4a();
    (function (EndpointURLScheme2) {
      EndpointURLScheme2["HTTP"] = "http";
      EndpointURLScheme2["HTTPS"] = "https";
    })(EndpointURLScheme || (EndpointURLScheme = {}));
  },
});

// ../../node_modules/@smithy/types/dist-es/endpoints/EndpointRuleObject.js
var init_EndpointRuleObject = __esm({
  "../../node_modules/@smithy/types/dist-es/endpoints/EndpointRuleObject.js"() {
    init_inject_sigv4a();
  },
});

// ../../node_modules/@smithy/types/dist-es/endpoints/ErrorRuleObject.js
var init_ErrorRuleObject = __esm({
  "../../node_modules/@smithy/types/dist-es/endpoints/ErrorRuleObject.js"() {
    init_inject_sigv4a();
  },
});

// ../../node_modules/@smithy/types/dist-es/endpoints/RuleSetObject.js
var init_RuleSetObject = __esm({
  "../../node_modules/@smithy/types/dist-es/endpoints/RuleSetObject.js"() {
    init_inject_sigv4a();
  },
});

// ../../node_modules/@smithy/types/dist-es/endpoints/shared.js
var init_shared = __esm({
  "../../node_modules/@smithy/types/dist-es/endpoints/shared.js"() {
    init_inject_sigv4a();
  },
});

// ../../node_modules/@smithy/types/dist-es/endpoints/TreeRuleObject.js
var init_TreeRuleObject = __esm({
  "../../node_modules/@smithy/types/dist-es/endpoints/TreeRuleObject.js"() {
    init_inject_sigv4a();
  },
});

// ../../node_modules/@smithy/types/dist-es/endpoints/index.js
var init_endpoints = __esm({
  "../../node_modules/@smithy/types/dist-es/endpoints/index.js"() {
    init_inject_sigv4a();
    init_EndpointRuleObject();
    init_ErrorRuleObject();
    init_RuleSetObject();
    init_shared();
    init_TreeRuleObject();
  },
});

// ../../node_modules/@smithy/types/dist-es/eventStream.js
var init_eventStream = __esm({
  "../../node_modules/@smithy/types/dist-es/eventStream.js"() {
    init_inject_sigv4a();
  },
});

// ../../node_modules/@smithy/types/dist-es/extensions/checksum.js
var AlgorithmId;
var init_checksum2 = __esm({
  "../../node_modules/@smithy/types/dist-es/extensions/checksum.js"() {
    init_inject_sigv4a();
    (function (AlgorithmId2) {
      AlgorithmId2["MD5"] = "md5";
      AlgorithmId2["CRC32"] = "crc32";
      AlgorithmId2["CRC32C"] = "crc32c";
      AlgorithmId2["SHA1"] = "sha1";
      AlgorithmId2["SHA256"] = "sha256";
    })(AlgorithmId || (AlgorithmId = {}));
  },
});

// ../../node_modules/@smithy/types/dist-es/extensions/defaultClientConfiguration.js
var init_defaultClientConfiguration = __esm({
  "../../node_modules/@smithy/types/dist-es/extensions/defaultClientConfiguration.js"() {
    init_inject_sigv4a();
    init_checksum2();
  },
});

// ../../node_modules/@smithy/types/dist-es/extensions/defaultExtensionConfiguration.js
var init_defaultExtensionConfiguration = __esm({
  "../../node_modules/@smithy/types/dist-es/extensions/defaultExtensionConfiguration.js"() {
    init_inject_sigv4a();
  },
});

// ../../node_modules/@smithy/types/dist-es/extensions/index.js
var init_extensions2 = __esm({
  "../../node_modules/@smithy/types/dist-es/extensions/index.js"() {
    init_inject_sigv4a();
    init_defaultClientConfiguration();
    init_defaultExtensionConfiguration();
    init_checksum2();
  },
});

// ../../node_modules/@smithy/types/dist-es/feature-ids.js
var init_feature_ids = __esm({
  "../../node_modules/@smithy/types/dist-es/feature-ids.js"() {
    init_inject_sigv4a();
  },
});

// ../../node_modules/@smithy/types/dist-es/http.js
var FieldPosition;
var init_http = __esm({
  "../../node_modules/@smithy/types/dist-es/http.js"() {
    init_inject_sigv4a();
    (function (FieldPosition2) {
      FieldPosition2[(FieldPosition2["HEADER"] = 0)] = "HEADER";
      FieldPosition2[(FieldPosition2["TRAILER"] = 1)] = "TRAILER";
    })(FieldPosition || (FieldPosition = {}));
  },
});

// ../../node_modules/@smithy/types/dist-es/http/httpHandlerInitialization.js
var init_httpHandlerInitialization = __esm({
  "../../node_modules/@smithy/types/dist-es/http/httpHandlerInitialization.js"() {
    init_inject_sigv4a();
  },
});

// ../../node_modules/@smithy/types/dist-es/identity/apiKeyIdentity.js
var init_apiKeyIdentity = __esm({
  "../../node_modules/@smithy/types/dist-es/identity/apiKeyIdentity.js"() {
    init_inject_sigv4a();
  },
});

// ../../node_modules/@smithy/types/dist-es/identity/awsCredentialIdentity.js
var init_awsCredentialIdentity = __esm({
  "../../node_modules/@smithy/types/dist-es/identity/awsCredentialIdentity.js"() {
    init_inject_sigv4a();
  },
});

// ../../node_modules/@smithy/types/dist-es/identity/identity.js
var init_identity = __esm({
  "../../node_modules/@smithy/types/dist-es/identity/identity.js"() {
    init_inject_sigv4a();
  },
});

// ../../node_modules/@smithy/types/dist-es/identity/tokenIdentity.js
var init_tokenIdentity = __esm({
  "../../node_modules/@smithy/types/dist-es/identity/tokenIdentity.js"() {
    init_inject_sigv4a();
  },
});

// ../../node_modules/@smithy/types/dist-es/identity/index.js
var init_identity2 = __esm({
  "../../node_modules/@smithy/types/dist-es/identity/index.js"() {
    init_inject_sigv4a();
    init_apiKeyIdentity();
    init_awsCredentialIdentity();
    init_identity();
    init_tokenIdentity();
  },
});

// ../../node_modules/@smithy/types/dist-es/logger.js
var init_logger = __esm({
  "../../node_modules/@smithy/types/dist-es/logger.js"() {
    init_inject_sigv4a();
  },
});

// ../../node_modules/@smithy/types/dist-es/middleware.js
var init_middleware = __esm({
  "../../node_modules/@smithy/types/dist-es/middleware.js"() {
    init_inject_sigv4a();
  },
});

// ../../node_modules/@smithy/types/dist-es/pagination.js
var init_pagination = __esm({
  "../../node_modules/@smithy/types/dist-es/pagination.js"() {
    init_inject_sigv4a();
  },
});

// ../../node_modules/@smithy/types/dist-es/profile.js
var IniSectionType;
var init_profile = __esm({
  "../../node_modules/@smithy/types/dist-es/profile.js"() {
    init_inject_sigv4a();
    (function (IniSectionType2) {
      IniSectionType2["PROFILE"] = "profile";
      IniSectionType2["SSO_SESSION"] = "sso-session";
      IniSectionType2["SERVICES"] = "services";
    })(IniSectionType || (IniSectionType = {}));
  },
});

// ../../node_modules/@smithy/types/dist-es/response.js
var init_response = __esm({
  "../../node_modules/@smithy/types/dist-es/response.js"() {
    init_inject_sigv4a();
  },
});

// ../../node_modules/@smithy/types/dist-es/retry.js
var init_retry = __esm({
  "../../node_modules/@smithy/types/dist-es/retry.js"() {
    init_inject_sigv4a();
  },
});

// ../../node_modules/@smithy/types/dist-es/serde.js
var init_serde = __esm({
  "../../node_modules/@smithy/types/dist-es/serde.js"() {
    init_inject_sigv4a();
  },
});

// ../../node_modules/@smithy/types/dist-es/shapes.js
var init_shapes = __esm({
  "../../node_modules/@smithy/types/dist-es/shapes.js"() {
    init_inject_sigv4a();
  },
});

// ../../node_modules/@smithy/types/dist-es/signature.js
var init_signature = __esm({
  "../../node_modules/@smithy/types/dist-es/signature.js"() {
    init_inject_sigv4a();
  },
});

// ../../node_modules/@smithy/types/dist-es/stream.js
var init_stream = __esm({
  "../../node_modules/@smithy/types/dist-es/stream.js"() {
    init_inject_sigv4a();
  },
});

// ../../node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-common-types.js
var init_streaming_blob_common_types = __esm({
  "../../node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-common-types.js"() {
    init_inject_sigv4a();
  },
});

// ../../node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-input-types.js
var init_streaming_blob_payload_input_types = __esm({
  "../../node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-input-types.js"() {
    init_inject_sigv4a();
  },
});

// ../../node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-output-types.js
var init_streaming_blob_payload_output_types = __esm({
  "../../node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-output-types.js"() {
    init_inject_sigv4a();
  },
});

// ../../node_modules/@smithy/types/dist-es/transfer.js
var RequestHandlerProtocol;
var init_transfer = __esm({
  "../../node_modules/@smithy/types/dist-es/transfer.js"() {
    init_inject_sigv4a();
    (function (RequestHandlerProtocol2) {
      RequestHandlerProtocol2["HTTP_0_9"] = "http/0.9";
      RequestHandlerProtocol2["HTTP_1_0"] = "http/1.0";
      RequestHandlerProtocol2["TDS_8_0"] = "tds/8.0";
    })(RequestHandlerProtocol || (RequestHandlerProtocol = {}));
  },
});

// ../../node_modules/@smithy/types/dist-es/transform/client-payload-blob-type-narrow.js
var init_client_payload_blob_type_narrow = __esm({
  "../../node_modules/@smithy/types/dist-es/transform/client-payload-blob-type-narrow.js"() {
    init_inject_sigv4a();
  },
});

// ../../node_modules/@smithy/types/dist-es/transform/no-undefined.js
var init_no_undefined = __esm({
  "../../node_modules/@smithy/types/dist-es/transform/no-undefined.js"() {
    init_inject_sigv4a();
  },
});

// ../../node_modules/@smithy/types/dist-es/transform/type-transform.js
var init_type_transform = __esm({
  "../../node_modules/@smithy/types/dist-es/transform/type-transform.js"() {
    init_inject_sigv4a();
  },
});

// ../../node_modules/@smithy/types/dist-es/uri.js
var init_uri = __esm({
  "../../node_modules/@smithy/types/dist-es/uri.js"() {
    init_inject_sigv4a();
  },
});

// ../../node_modules/@smithy/types/dist-es/util.js
var init_util = __esm({
  "../../node_modules/@smithy/types/dist-es/util.js"() {
    init_inject_sigv4a();
  },
});

// ../../node_modules/@smithy/types/dist-es/waiter.js
var init_waiter = __esm({
  "../../node_modules/@smithy/types/dist-es/waiter.js"() {
    init_inject_sigv4a();
  },
});

// ../../node_modules/@smithy/types/dist-es/index.js
var init_dist_es4 = __esm({
  "../../node_modules/@smithy/types/dist-es/index.js"() {
    init_inject_sigv4a();
    init_abort();
    init_auth2();
    init_blob_payload_input_types();
    init_checksum();
    init_client();
    init_command();
    init_connection();
    init_crypto();
    init_encode();
    init_endpoint();
    init_endpoints();
    init_eventStream();
    init_extensions2();
    init_feature_ids();
    init_http();
    init_httpHandlerInitialization();
    init_identity2();
    init_logger();
    init_middleware();
    init_pagination();
    init_profile();
    init_response();
    init_retry();
    init_serde();
    init_shapes();
    init_signature();
    init_stream();
    init_streaming_blob_common_types();
    init_streaming_blob_payload_input_types();
    init_streaming_blob_payload_output_types();
    init_transfer();
    init_client_payload_blob_type_narrow();
    init_no_undefined();
    init_type_transform();
    init_uri();
    init_util();
    init_waiter();
  },
});

// ../../node_modules/@smithy/protocol-http/dist-es/Field.js
var init_Field = __esm({
  "../../node_modules/@smithy/protocol-http/dist-es/Field.js"() {
    init_inject_sigv4a();
    init_dist_es4();
  },
});

// ../../node_modules/@smithy/protocol-http/dist-es/Fields.js
var init_Fields = __esm({
  "../../node_modules/@smithy/protocol-http/dist-es/Fields.js"() {
    init_inject_sigv4a();
  },
});

// ../../node_modules/@smithy/protocol-http/dist-es/httpHandler.js
var init_httpHandler = __esm({
  "../../node_modules/@smithy/protocol-http/dist-es/httpHandler.js"() {
    init_inject_sigv4a();
  },
});

// ../../node_modules/@smithy/protocol-http/dist-es/httpRequest.js
function cloneQuery(query) {
  return Object.keys(query).reduce((carry, paramName) => {
    const param = query[paramName];
    return {
      ...carry,
      [paramName]: Array.isArray(param) ? [...param] : param,
    };
  }, {});
}
var HttpRequest;
var init_httpRequest = __esm({
  "../../node_modules/@smithy/protocol-http/dist-es/httpRequest.js"() {
    init_inject_sigv4a();
    HttpRequest = class _HttpRequest {
      constructor(options) {
        this.method = options.method || "GET";
        this.hostname = options.hostname || "localhost";
        this.port = options.port;
        this.query = options.query || {};
        this.headers = options.headers || {};
        this.body = options.body;
        this.protocol = options.protocol
          ? options.protocol.slice(-1) !== ":"
            ? `${options.protocol}:`
            : options.protocol
          : "https:";
        this.path = options.path ? (options.path.charAt(0) !== "/" ? `/${options.path}` : options.path) : "/";
        this.username = options.username;
        this.password = options.password;
        this.fragment = options.fragment;
      }
      static clone(request) {
        const cloned = new _HttpRequest({
          ...request,
          headers: { ...request.headers },
        });
        if (cloned.query) {
          cloned.query = cloneQuery(cloned.query);
        }
        return cloned;
      }
      static isInstance(request) {
        if (!request) {
          return false;
        }
        const req = request;
        return (
          "method" in req &&
          "protocol" in req &&
          "hostname" in req &&
          "path" in req &&
          typeof req["query"] === "object" &&
          typeof req["headers"] === "object"
        );
      }
      clone() {
        return _HttpRequest.clone(this);
      }
    };
  },
});

// ../../node_modules/@smithy/protocol-http/dist-es/httpResponse.js
var init_httpResponse = __esm({
  "../../node_modules/@smithy/protocol-http/dist-es/httpResponse.js"() {
    init_inject_sigv4a();
  },
});

// ../../node_modules/@smithy/protocol-http/dist-es/isValidHostname.js
var init_isValidHostname = __esm({
  "../../node_modules/@smithy/protocol-http/dist-es/isValidHostname.js"() {
    init_inject_sigv4a();
  },
});

// ../../node_modules/@smithy/protocol-http/dist-es/types.js
var init_types = __esm({
  "../../node_modules/@smithy/protocol-http/dist-es/types.js"() {
    init_inject_sigv4a();
  },
});

// ../../node_modules/@smithy/protocol-http/dist-es/index.js
var init_dist_es5 = __esm({
  "../../node_modules/@smithy/protocol-http/dist-es/index.js"() {
    init_inject_sigv4a();
    init_extensions();
    init_Field();
    init_Fields();
    init_httpHandler();
    init_httpRequest();
    init_httpResponse();
    init_isValidHostname();
    init_types();
  },
});

// ../../node_modules/@smithy/signature-v4/dist-es/moveHeadersToQuery.js
var moveHeadersToQuery;
var init_moveHeadersToQuery = __esm({
  "../../node_modules/@smithy/signature-v4/dist-es/moveHeadersToQuery.js"() {
    init_inject_sigv4a();
    init_dist_es5();
    moveHeadersToQuery = (request, options = {}) => {
      const { headers, query = {} } = HttpRequest.clone(request);
      for (const name of Object.keys(headers)) {
        const lname = name.toLowerCase();
        if (
          (lname.slice(0, 6) === "x-amz-" && !options.unhoistableHeaders?.has(lname)) ||
          options.hoistableHeaders?.has(lname)
        ) {
          query[name] = headers[name];
          delete headers[name];
        }
      }
      return {
        ...request,
        headers,
        query,
      };
    };
  },
});

// ../../node_modules/@smithy/signature-v4/dist-es/prepareRequest.js
var prepareRequest;
var init_prepareRequest = __esm({
  "../../node_modules/@smithy/signature-v4/dist-es/prepareRequest.js"() {
    init_inject_sigv4a();
    init_dist_es5();
    init_constants();
    prepareRequest = (request) => {
      request = HttpRequest.clone(request);
      for (const headerName of Object.keys(request.headers)) {
        if (GENERATED_HEADERS.indexOf(headerName.toLowerCase()) > -1) {
          delete request.headers[headerName];
        }
      }
      return request;
    };
  },
});

// ../../node_modules/@smithy/util-middleware/dist-es/getSmithyContext.js
var init_getSmithyContext = __esm({
  "../../node_modules/@smithy/util-middleware/dist-es/getSmithyContext.js"() {
    init_inject_sigv4a();
    init_dist_es4();
  },
});

// ../../node_modules/@smithy/util-middleware/dist-es/normalizeProvider.js
var normalizeProvider;
var init_normalizeProvider = __esm({
  "../../node_modules/@smithy/util-middleware/dist-es/normalizeProvider.js"() {
    init_inject_sigv4a();
    normalizeProvider = (input) => {
      if (typeof input === "function") return input;
      const promisified = Promise.resolve(input);
      return () => promisified;
    };
  },
});

// ../../node_modules/@smithy/util-middleware/dist-es/index.js
var init_dist_es6 = __esm({
  "../../node_modules/@smithy/util-middleware/dist-es/index.js"() {
    init_inject_sigv4a();
    init_getSmithyContext();
    init_normalizeProvider();
  },
});

// ../../node_modules/@smithy/util-uri-escape/dist-es/escape-uri.js
var escapeUri, hexEncode;
var init_escape_uri = __esm({
  "../../node_modules/@smithy/util-uri-escape/dist-es/escape-uri.js"() {
    init_inject_sigv4a();
    escapeUri = (uri) => encodeURIComponent(uri).replace(/[!'()*]/g, hexEncode);
    hexEncode = (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`;
  },
});

// ../../node_modules/@smithy/util-uri-escape/dist-es/escape-uri-path.js
var init_escape_uri_path = __esm({
  "../../node_modules/@smithy/util-uri-escape/dist-es/escape-uri-path.js"() {
    init_inject_sigv4a();
    init_escape_uri();
  },
});

// ../../node_modules/@smithy/util-uri-escape/dist-es/index.js
var init_dist_es7 = __esm({
  "../../node_modules/@smithy/util-uri-escape/dist-es/index.js"() {
    init_inject_sigv4a();
    init_escape_uri();
    init_escape_uri_path();
  },
});

// ../../node_modules/@smithy/signature-v4/dist-es/getCanonicalQuery.js
var getCanonicalQuery;
var init_getCanonicalQuery = __esm({
  "../../node_modules/@smithy/signature-v4/dist-es/getCanonicalQuery.js"() {
    init_inject_sigv4a();
    init_dist_es7();
    init_constants();
    getCanonicalQuery = ({ query = {} }) => {
      const keys = [];
      const serialized = {};
      for (const key of Object.keys(query)) {
        if (key.toLowerCase() === SIGNATURE_HEADER) {
          continue;
        }
        const encodedKey = escapeUri(key);
        keys.push(encodedKey);
        const value = query[key];
        if (typeof value === "string") {
          serialized[encodedKey] = `${encodedKey}=${escapeUri(value)}`;
        } else if (Array.isArray(value)) {
          serialized[encodedKey] = value
            .slice(0)
            .reduce((encoded, value2) => encoded.concat([`${encodedKey}=${escapeUri(value2)}`]), [])
            .sort()
            .join("&");
        }
      }
      return keys
        .sort()
        .map((key) => serialized[key])
        .filter((serialized2) => serialized2)
        .join("&");
    };
  },
});

// ../../node_modules/@smithy/signature-v4/dist-es/utilDate.js
var iso8601, toDate;
var init_utilDate = __esm({
  "../../node_modules/@smithy/signature-v4/dist-es/utilDate.js"() {
    init_inject_sigv4a();
    iso8601 = (time) =>
      toDate(time)
        .toISOString()
        .replace(/\.\d{3}Z$/, "Z");
    toDate = (time) => {
      if (typeof time === "number") {
        return new Date(time * 1e3);
      }
      if (typeof time === "string") {
        if (Number(time)) {
          return new Date(Number(time) * 1e3);
        }
        return new Date(time);
      }
      return time;
    };
  },
});

// ../../node_modules/@smithy/signature-v4/dist-es/SignatureV4Base.js
var SignatureV4Base;
var init_SignatureV4Base = __esm({
  "../../node_modules/@smithy/signature-v4/dist-es/SignatureV4Base.js"() {
    init_inject_sigv4a();
    init_dist_es();
    init_dist_es6();
    init_dist_es7();
    init_dist_es2();
    init_getCanonicalQuery();
    init_utilDate();
    SignatureV4Base = class {
      constructor({ applyChecksum, credentials, region, service, sha256, uriEscapePath = true }) {
        this.service = service;
        this.sha256 = sha256;
        this.uriEscapePath = uriEscapePath;
        this.applyChecksum = typeof applyChecksum === "boolean" ? applyChecksum : true;
        this.regionProvider = normalizeProvider(region);
        this.credentialProvider = normalizeProvider(credentials);
      }
      createCanonicalRequest(request, canonicalHeaders, payloadHash) {
        const sortedHeaders = Object.keys(canonicalHeaders).sort();
        return `${request.method}
${this.getCanonicalPath(request)}
${getCanonicalQuery(request)}
${sortedHeaders.map((name) => `${name}:${canonicalHeaders[name]}`).join("\n")}

${sortedHeaders.join(";")}
${payloadHash}`;
      }
      async createStringToSign(longDate, credentialScope, canonicalRequest, algorithmIdentifier) {
        const hash = new this.sha256();
        hash.update(toUint8Array(canonicalRequest));
        const hashedRequest = await hash.digest();
        return `${algorithmIdentifier}
${longDate}
${credentialScope}
${toHex(hashedRequest)}`;
      }
      getCanonicalPath({ path }) {
        if (this.uriEscapePath) {
          const normalizedPathSegments = [];
          for (const pathSegment of path.split("/")) {
            if (pathSegment?.length === 0) continue;
            if (pathSegment === ".") continue;
            if (pathSegment === "..") {
              normalizedPathSegments.pop();
            } else {
              normalizedPathSegments.push(pathSegment);
            }
          }
          const normalizedPath = `${path?.startsWith("/") ? "/" : ""}${normalizedPathSegments.join("/")}${
            normalizedPathSegments.length > 0 && path?.endsWith("/") ? "/" : ""
          }`;
          const doubleEncoded = escapeUri(normalizedPath);
          return doubleEncoded.replace(/%2F/g, "/");
        }
        return path;
      }
      validateResolvedCredentials(credentials) {
        if (
          typeof credentials !== "object" ||
          typeof credentials.accessKeyId !== "string" ||
          typeof credentials.secretAccessKey !== "string"
        ) {
          throw new Error("Resolved credential object is not valid");
        }
      }
      formatDate(now) {
        const longDate = iso8601(now).replace(/[\-:]/g, "");
        return {
          longDate,
          shortDate: longDate.slice(0, 8),
        };
      }
      getCanonicalHeaderList(headers) {
        return Object.keys(headers).sort().join(";");
      }
    };
  },
});

// ../../node_modules/@smithy/signature-v4/dist-es/SignatureV4.js
var SignatureV4;
var init_SignatureV4 = __esm({
  "../../node_modules/@smithy/signature-v4/dist-es/SignatureV4.js"() {
    init_inject_sigv4a();
    init_dist_es();
    init_dist_es2();
    init_constants();
    init_credentialDerivation();
    init_getCanonicalHeaders();
    init_getPayloadHash();
    init_HeaderFormatter();
    init_headerUtil();
    init_moveHeadersToQuery();
    init_prepareRequest();
    init_SignatureV4Base();
    SignatureV4 = class extends SignatureV4Base {
      constructor({ applyChecksum, credentials, region, service, sha256, uriEscapePath = true }) {
        super({
          applyChecksum,
          credentials,
          region,
          service,
          sha256,
          uriEscapePath,
        });
        this.headerFormatter = new HeaderFormatter();
      }
      async presign(originalRequest, options = {}) {
        const {
          signingDate = /* @__PURE__ */ new Date(),
          expiresIn = 3600,
          unsignableHeaders,
          unhoistableHeaders,
          signableHeaders,
          hoistableHeaders,
          signingRegion,
          signingService,
        } = options;
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion ?? (await this.regionProvider());
        const { longDate, shortDate } = this.formatDate(signingDate);
        if (expiresIn > MAX_PRESIGNED_TTL) {
          return Promise.reject(
            "Signature version 4 presigned URLs must have an expiration date less than one week in the future"
          );
        }
        const scope = createScope(shortDate, region, signingService ?? this.service);
        const request = moveHeadersToQuery(prepareRequest(originalRequest), { unhoistableHeaders, hoistableHeaders });
        if (credentials.sessionToken) {
          request.query[TOKEN_QUERY_PARAM] = credentials.sessionToken;
        }
        request.query[ALGORITHM_QUERY_PARAM] = ALGORITHM_IDENTIFIER;
        request.query[CREDENTIAL_QUERY_PARAM] = `${credentials.accessKeyId}/${scope}`;
        request.query[AMZ_DATE_QUERY_PARAM] = longDate;
        request.query[EXPIRES_QUERY_PARAM] = expiresIn.toString(10);
        const canonicalHeaders = getCanonicalHeaders(request, unsignableHeaders, signableHeaders);
        request.query[SIGNED_HEADERS_QUERY_PARAM] = this.getCanonicalHeaderList(canonicalHeaders);
        request.query[SIGNATURE_QUERY_PARAM] = await this.getSignature(
          longDate,
          scope,
          this.getSigningKey(credentials, region, shortDate, signingService),
          this.createCanonicalRequest(request, canonicalHeaders, await getPayloadHash(originalRequest, this.sha256))
        );
        return request;
      }
      async sign(toSign, options) {
        if (typeof toSign === "string") {
          return this.signString(toSign, options);
        } else if (toSign.headers && toSign.payload) {
          return this.signEvent(toSign, options);
        } else if (toSign.message) {
          return this.signMessage(toSign, options);
        } else {
          return this.signRequest(toSign, options);
        }
      }
      async signEvent(
        { headers, payload },
        { signingDate = /* @__PURE__ */ new Date(), priorSignature, signingRegion, signingService }
      ) {
        const region = signingRegion ?? (await this.regionProvider());
        const { shortDate, longDate } = this.formatDate(signingDate);
        const scope = createScope(shortDate, region, signingService ?? this.service);
        const hashedPayload = await getPayloadHash({ headers: {}, body: payload }, this.sha256);
        const hash = new this.sha256();
        hash.update(headers);
        const hashedHeaders = toHex(await hash.digest());
        const stringToSign = [
          EVENT_ALGORITHM_IDENTIFIER,
          longDate,
          scope,
          priorSignature,
          hashedHeaders,
          hashedPayload,
        ].join("\n");
        return this.signString(stringToSign, { signingDate, signingRegion: region, signingService });
      }
      async signMessage(signableMessage, { signingDate = /* @__PURE__ */ new Date(), signingRegion, signingService }) {
        const promise = this.signEvent(
          {
            headers: this.headerFormatter.format(signableMessage.message.headers),
            payload: signableMessage.message.body,
          },
          {
            signingDate,
            signingRegion,
            signingService,
            priorSignature: signableMessage.priorSignature,
          }
        );
        return promise.then((signature) => {
          return { message: signableMessage.message, signature };
        });
      }
      async signString(stringToSign, { signingDate = /* @__PURE__ */ new Date(), signingRegion, signingService } = {}) {
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion ?? (await this.regionProvider());
        const { shortDate } = this.formatDate(signingDate);
        const hash = new this.sha256(await this.getSigningKey(credentials, region, shortDate, signingService));
        hash.update(toUint8Array(stringToSign));
        return toHex(await hash.digest());
      }
      async signRequest(
        requestToSign,
        {
          signingDate = /* @__PURE__ */ new Date(),
          signableHeaders,
          unsignableHeaders,
          signingRegion,
          signingService,
        } = {}
      ) {
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion ?? (await this.regionProvider());
        const request = prepareRequest(requestToSign);
        const { longDate, shortDate } = this.formatDate(signingDate);
        const scope = createScope(shortDate, region, signingService ?? this.service);
        request.headers[AMZ_DATE_HEADER] = longDate;
        if (credentials.sessionToken) {
          request.headers[TOKEN_HEADER] = credentials.sessionToken;
        }
        const payloadHash = await getPayloadHash(request, this.sha256);
        if (!hasHeader(SHA256_HEADER, request.headers) && this.applyChecksum) {
          request.headers[SHA256_HEADER] = payloadHash;
        }
        const canonicalHeaders = getCanonicalHeaders(request, unsignableHeaders, signableHeaders);
        const signature = await this.getSignature(
          longDate,
          scope,
          this.getSigningKey(credentials, region, shortDate, signingService),
          this.createCanonicalRequest(request, canonicalHeaders, payloadHash)
        );
        request.headers[AUTH_HEADER] = `${ALGORITHM_IDENTIFIER} Credential=${
          credentials.accessKeyId
        }/${scope}, SignedHeaders=${this.getCanonicalHeaderList(canonicalHeaders)}, Signature=${signature}`;
        return request;
      }
      async getSignature(longDate, credentialScope, keyPromise, canonicalRequest) {
        const stringToSign = await this.createStringToSign(
          longDate,
          credentialScope,
          canonicalRequest,
          ALGORITHM_IDENTIFIER
        );
        const hash = new this.sha256(await keyPromise);
        hash.update(toUint8Array(stringToSign));
        return toHex(await hash.digest());
      }
      getSigningKey(credentials, region, shortDate, service) {
        return getSigningKey(this.sha256, credentials, shortDate, region, service || this.service);
      }
    };
  },
});

// ../../node_modules/@smithy/signature-v4/dist-es/signature-v4a-container.js
var signatureV4aContainer;
var init_signature_v4a_container = __esm({
  "../../node_modules/@smithy/signature-v4/dist-es/signature-v4a-container.js"() {
    init_inject_sigv4a();
    signatureV4aContainer = {
      SignatureV4a: null,
    };
  },
});

// ../../node_modules/@smithy/signature-v4/dist-es/index.js
var init_dist_es8 = __esm({
  "../../node_modules/@smithy/signature-v4/dist-es/index.js"() {
    init_inject_sigv4a();
    init_SignatureV4();
    init_constants();
    init_getCanonicalHeaders();
    init_getCanonicalQuery();
    init_getPayloadHash();
    init_moveHeadersToQuery();
    init_prepareRequest();
    init_credentialDerivation();
    init_SignatureV4Base();
    init_headerUtil();
    init_signature_v4a_container();
  },
});

// ../../node_modules/@smithy/signature-v4a/dist-es/constants.js
var REGION_HEADER, ONE_AS_4_BYTES, TWOFIFTYSIX_AS_4_BYTES, N_MINUS_TWO;
var init_constants2 = __esm({
  "../../node_modules/@smithy/signature-v4a/dist-es/constants.js"() {
    init_inject_sigv4a();
    init_dist_es8();
    REGION_HEADER = REGION_SET_PARAM.toLowerCase();
    ONE_AS_4_BYTES = [0, 0, 0, 1];
    TWOFIFTYSIX_AS_4_BYTES = [0, 0, 1, 0];
    N_MINUS_TWO = [
      255, 255, 255, 255, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 188, 230, 250, 173, 167, 23, 158, 132,
      243, 185, 202, 194, 252, 99, 37, 79,
    ];
  },
});

// ../../node_modules/@smithy/signature-v4a/dist-es/credentialDerivation.js
var createSigV4aScope, getSigV4aSigningKey, buildFixedInputBuffer, isBiggerThanNMinus2, addOneToArray;
var init_credentialDerivation2 = __esm({
  "../../node_modules/@smithy/signature-v4a/dist-es/credentialDerivation.js"() {
    init_inject_sigv4a();
    init_dist_es8();
    init_dist_es2();
    init_constants2();
    createSigV4aScope = (shortDate, service) => `${shortDate}/${service}/${KEY_TYPE_IDENTIFIER}`;
    getSigV4aSigningKey = async (sha256, accessKey, secretKey) => {
      let outputBufferWriter = "";
      const maxTrials = 254;
      const aws4ALength = 5;
      const inputKeyLength = aws4ALength + secretKey.length;
      const inputKeyBuf = inputKeyLength <= 64 ? new Uint8Array(64) : new Uint8Array(inputKeyLength);
      const aws4aArray = "AWS4A".split("");
      for (let index = 0; index < aws4aArray.length; index++) {
        inputKeyBuf[index] = aws4aArray[index].charCodeAt(0);
      }
      const secretKeyArray = secretKey.split("");
      for (let index = 0; index < secretKeyArray.length; index++) {
        inputKeyBuf[aws4aArray.length + index] = secretKeyArray[index].charCodeAt(0);
      }
      let trial = 1;
      while (trial < maxTrials) {
        outputBufferWriter = buildFixedInputBuffer(outputBufferWriter, accessKey, trial);
        const secretKey2 = inputKeyBuf.subarray(0, inputKeyLength);
        const hash = new sha256(secretKey2);
        const hashVal = toUint8Array(outputBufferWriter);
        hash.update(hashVal);
        const hashedOutput = await hash.digest();
        if (isBiggerThanNMinus2(hashedOutput)) {
          trial++;
          continue;
        }
        return addOneToArray(hashedOutput);
      }
      throw new Error("Cannot derive signing key: number of maximum trials exceeded.");
    };
    buildFixedInputBuffer = (bufferInput, accessKey, counter) => {
      let outputBuffer = bufferInput;
      outputBuffer += ONE_AS_4_BYTES.map((value) => String.fromCharCode(value)).join("");
      outputBuffer += ALGORITHM_IDENTIFIER_V4A;
      outputBuffer += String.fromCharCode(0);
      outputBuffer += accessKey;
      outputBuffer += String.fromCharCode(counter);
      outputBuffer += TWOFIFTYSIX_AS_4_BYTES.map((value) => String.fromCharCode(value)).join("");
      return outputBuffer;
    };
    isBiggerThanNMinus2 = (value) => {
      for (let index = 0; index < value.length; index++) {
        if (value[index] > N_MINUS_TWO[index]) {
          return true;
        } else if (value[index] < N_MINUS_TWO[index]) {
          return false;
        }
      }
      return false;
    };
    addOneToArray = (value) => {
      const output = new Uint8Array(32);
      let carry = 1;
      for (let index = value.length - 1; index >= 0; index--) {
        const newValueAtIndex = (value[index] + carry) % 256;
        if (newValueAtIndex < value[index]) {
          carry = 1;
        } else {
          carry = 0;
        }
        output[index] = newValueAtIndex;
      }
      if (carry !== 0) {
        return new Uint8Array([carry, ...output]);
      }
      return output;
    };
  },
});

// ../../node_modules/@smithy/signature-v4a/dist-es/elliptic/Ec.js
var __create,
  __defProp,
  __getOwnPropDesc,
  __getOwnPropNames2,
  __getProtoOf,
  __hasOwnProp,
  __commonJS,
  __copyProps,
  __toESM,
  require_package,
  require_buffer,
  require_bn,
  require_minimalistic_assert,
  require_utils,
  require_utils2,
  require_crypto,
  require_brorand,
  require_base,
  require_shams,
  require_shams2,
  require_has_symbols,
  require_implementation,
  require_function_bind,
  require_implementation2,
  require_function_bind2,
  require_src,
  require_get_intrinsic,
  require_call_bind,
  require_callBound,
  require_is_arguments,
  require_is_generator_function,
  require_is_callable,
  require_for_each,
  require_available_typed_arrays,
  require_implementation3,
  require_function_bind3,
  require_get_intrinsic2,
  require_call_bind2,
  require_callBound2,
  require_implementation4,
  require_function_bind4,
  require_get_intrinsic3,
  require_gopd,
  require_is_typed_array,
  require_which_typed_array,
  require_types,
  require_isBufferBrowser,
  require_util,
  require_inherits_browser,
  require_inherits,
  require_short,
  require_mont,
  require_edwards,
  require_curve,
  require_utils3,
  require_common,
  require_common2,
  require__,
  require__2,
  require__3,
  require__4,
  require__5,
  require_sha,
  require_ripemd,
  require_hmac,
  require_hash,
  require_secp256k1,
  require_curves,
  require_hmac_drbg,
  require_key,
  require_signature,
  require_ec,
  require_key2,
  require_signature2,
  require_eddsa,
  require_elliptic,
  import_elliptic,
  export_Ec;
var init_Ec = __esm({
  "../../node_modules/@smithy/signature-v4a/dist-es/elliptic/Ec.js"() {
    init_inject_sigv4a();
    __create = Object.create;
    __defProp = Object.defineProperty;
    __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    __getOwnPropNames2 = Object.getOwnPropertyNames;
    __getProtoOf = Object.getPrototypeOf;
    __hasOwnProp = Object.prototype.hasOwnProperty;
    __commonJS = (cb, mod) =>
      function __require() {
        return mod || (0, cb[__getOwnPropNames2(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
      };
    __copyProps = (to, from, except, desc) => {
      if ((from && typeof from === "object") || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp.call(to, key) && key !== except)
            __defProp(to, key, {
              get: () => from[key],
              enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
            });
      }
      return to;
    };
    __toESM = (mod, isNodeMode, target) => (
      (target = mod != null ? __create(__getProtoOf(mod)) : {}),
      __copyProps(
        isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
        mod
      )
    );
    require_package = __commonJS({
      "../../node_modules/elliptic/package.json"(exports, module) {
        module.exports = {
          name: "elliptic",
          version: "6.5.5",
          description: "EC cryptography",
          main: "lib/elliptic.js",
          files: ["lib"],
          scripts: {
            lint: "eslint lib test",
            "lint:fix": "npm run lint -- --fix",
            unit: "istanbul test _mocha --reporter=spec test/index.js",
            test: "npm run lint && npm run unit",
            version: "grunt dist && git add dist/",
          },
          repository: {
            type: "git",
            url: "git@github.com:indutny/elliptic",
          },
          keywords: ["EC", "Elliptic", "curve", "Cryptography"],
          author: "Fedor Indutny <fedor@indutny.com>",
          license: "MIT",
          bugs: {
            url: "https://github.com/indutny/elliptic/issues",
          },
          homepage: "https://github.com/indutny/elliptic",
          devDependencies: {
            brfs: "^2.0.2",
            coveralls: "^3.1.0",
            eslint: "^7.6.0",
            grunt: "^1.2.1",
            "grunt-browserify": "^5.3.0",
            "grunt-cli": "^1.3.2",
            "grunt-contrib-connect": "^3.0.0",
            "grunt-contrib-copy": "^1.0.0",
            "grunt-contrib-uglify": "^5.0.0",
            "grunt-mocha-istanbul": "^5.0.2",
            "grunt-saucelabs": "^9.0.1",
            istanbul: "^0.4.5",
            mocha: "^8.0.1",
          },
          dependencies: {
            "bn.js": "^4.11.9",
            brorand: "^1.1.0",
            "hash.js": "^1.0.0",
            "hmac-drbg": "^1.0.1",
            inherits: "^2.0.4",
            "minimalistic-assert": "^1.0.1",
            "minimalistic-crypto-utils": "^1.0.1",
          },
        };
      },
    });
    require_buffer = __commonJS({
      "(disabled):../../node_modules/buffer/index.js"() {},
    });
    require_bn = __commonJS({
      "../../node_modules/bn.js/lib/bn.js"(exports, module) {
        (function (module2, exports2) {
          "use strict";
          function assert(val, msg) {
            if (!val) throw new Error(msg || "Assertion failed");
          }
          function inherits(ctor, superCtor) {
            ctor.super_ = superCtor;
            var TempCtor = function () {};
            TempCtor.prototype = superCtor.prototype;
            ctor.prototype = new TempCtor();
            ctor.prototype.constructor = ctor;
          }
          function BN(number, base, endian) {
            if (BN.isBN(number)) {
              return number;
            }
            this.negative = 0;
            this.words = null;
            this.length = 0;
            this.red = null;
            if (number !== null) {
              if (base === "le" || base === "be") {
                endian = base;
                base = 10;
              }
              this._init(number || 0, base || 10, endian || "be");
            }
          }
          if (typeof module2 === "object") {
            module2.exports = BN;
          } else {
            exports2.BN = BN;
          }
          BN.BN = BN;
          BN.wordSize = 26;
          var Buffer2;
          try {
            if (typeof window !== "undefined" && typeof window.Buffer !== "undefined") {
              Buffer2 = window.Buffer;
            } else {
              Buffer2 = require_buffer().Buffer;
            }
          } catch (e) {}
          BN.isBN = function isBN(num) {
            if (num instanceof BN) {
              return true;
            }
            return (
              num !== null &&
              typeof num === "object" &&
              num.constructor.wordSize === BN.wordSize &&
              Array.isArray(num.words)
            );
          };
          BN.max = function max(left, right) {
            if (left.cmp(right) > 0) return left;
            return right;
          };
          BN.min = function min(left, right) {
            if (left.cmp(right) < 0) return left;
            return right;
          };
          BN.prototype._init = function init(number, base, endian) {
            if (typeof number === "number") {
              return this._initNumber(number, base, endian);
            }
            if (typeof number === "object") {
              return this._initArray(number, base, endian);
            }
            if (base === "hex") {
              base = 16;
            }
            assert(base === (base | 0) && base >= 2 && base <= 36);
            number = number.toString().replace(/\s+/g, "");
            var start = 0;
            if (number[0] === "-") {
              start++;
              this.negative = 1;
            }
            if (start < number.length) {
              if (base === 16) {
                this._parseHex(number, start, endian);
              } else {
                this._parseBase(number, base, start);
                if (endian === "le") {
                  this._initArray(this.toArray(), base, endian);
                }
              }
            }
          };
          BN.prototype._initNumber = function _initNumber(number, base, endian) {
            if (number < 0) {
              this.negative = 1;
              number = -number;
            }
            if (number < 67108864) {
              this.words = [number & 67108863];
              this.length = 1;
            } else if (number < 4503599627370496) {
              this.words = [number & 67108863, (number / 67108864) & 67108863];
              this.length = 2;
            } else {
              assert(number < 9007199254740992);
              this.words = [number & 67108863, (number / 67108864) & 67108863, 1];
              this.length = 3;
            }
            if (endian !== "le") return;
            this._initArray(this.toArray(), base, endian);
          };
          BN.prototype._initArray = function _initArray(number, base, endian) {
            assert(typeof number.length === "number");
            if (number.length <= 0) {
              this.words = [0];
              this.length = 1;
              return this;
            }
            this.length = Math.ceil(number.length / 3);
            this.words = new Array(this.length);
            for (var i = 0; i < this.length; i++) {
              this.words[i] = 0;
            }
            var j, w;
            var off = 0;
            if (endian === "be") {
              for (i = number.length - 1, j = 0; i >= 0; i -= 3) {
                w = number[i] | (number[i - 1] << 8) | (number[i - 2] << 16);
                this.words[j] |= (w << off) & 67108863;
                this.words[j + 1] = (w >>> (26 - off)) & 67108863;
                off += 24;
                if (off >= 26) {
                  off -= 26;
                  j++;
                }
              }
            } else if (endian === "le") {
              for (i = 0, j = 0; i < number.length; i += 3) {
                w = number[i] | (number[i + 1] << 8) | (number[i + 2] << 16);
                this.words[j] |= (w << off) & 67108863;
                this.words[j + 1] = (w >>> (26 - off)) & 67108863;
                off += 24;
                if (off >= 26) {
                  off -= 26;
                  j++;
                }
              }
            }
            return this.strip();
          };
          function parseHex4Bits(string, index) {
            var c = string.charCodeAt(index);
            if (c >= 65 && c <= 70) {
              return c - 55;
            } else if (c >= 97 && c <= 102) {
              return c - 87;
            } else {
              return (c - 48) & 15;
            }
          }
          function parseHexByte(string, lowerBound, index) {
            var r = parseHex4Bits(string, index);
            if (index - 1 >= lowerBound) {
              r |= parseHex4Bits(string, index - 1) << 4;
            }
            return r;
          }
          BN.prototype._parseHex = function _parseHex(number, start, endian) {
            this.length = Math.ceil((number.length - start) / 6);
            this.words = new Array(this.length);
            for (var i = 0; i < this.length; i++) {
              this.words[i] = 0;
            }
            var off = 0;
            var j = 0;
            var w;
            if (endian === "be") {
              for (i = number.length - 1; i >= start; i -= 2) {
                w = parseHexByte(number, start, i) << off;
                this.words[j] |= w & 67108863;
                if (off >= 18) {
                  off -= 18;
                  j += 1;
                  this.words[j] |= w >>> 26;
                } else {
                  off += 8;
                }
              }
            } else {
              var parseLength = number.length - start;
              for (i = parseLength % 2 === 0 ? start + 1 : start; i < number.length; i += 2) {
                w = parseHexByte(number, start, i) << off;
                this.words[j] |= w & 67108863;
                if (off >= 18) {
                  off -= 18;
                  j += 1;
                  this.words[j] |= w >>> 26;
                } else {
                  off += 8;
                }
              }
            }
            this.strip();
          };
          function parseBase(str, start, end, mul) {
            var r = 0;
            var len = Math.min(str.length, end);
            for (var i = start; i < len; i++) {
              var c = str.charCodeAt(i) - 48;
              r *= mul;
              if (c >= 49) {
                r += c - 49 + 10;
              } else if (c >= 17) {
                r += c - 17 + 10;
              } else {
                r += c;
              }
            }
            return r;
          }
          BN.prototype._parseBase = function _parseBase(number, base, start) {
            this.words = [0];
            this.length = 1;
            for (var limbLen = 0, limbPow = 1; limbPow <= 67108863; limbPow *= base) {
              limbLen++;
            }
            limbLen--;
            limbPow = (limbPow / base) | 0;
            var total = number.length - start;
            var mod = total % limbLen;
            var end = Math.min(total, total - mod) + start;
            var word = 0;
            for (var i = start; i < end; i += limbLen) {
              word = parseBase(number, i, i + limbLen, base);
              this.imuln(limbPow);
              if (this.words[0] + word < 67108864) {
                this.words[0] += word;
              } else {
                this._iaddn(word);
              }
            }
            if (mod !== 0) {
              var pow = 1;
              word = parseBase(number, i, number.length, base);
              for (i = 0; i < mod; i++) {
                pow *= base;
              }
              this.imuln(pow);
              if (this.words[0] + word < 67108864) {
                this.words[0] += word;
              } else {
                this._iaddn(word);
              }
            }
            this.strip();
          };
          BN.prototype.copy = function copy(dest) {
            dest.words = new Array(this.length);
            for (var i = 0; i < this.length; i++) {
              dest.words[i] = this.words[i];
            }
            dest.length = this.length;
            dest.negative = this.negative;
            dest.red = this.red;
          };
          BN.prototype.clone = function clone() {
            var r = new BN(null);
            this.copy(r);
            return r;
          };
          BN.prototype._expand = function _expand(size) {
            while (this.length < size) {
              this.words[this.length++] = 0;
            }
            return this;
          };
          BN.prototype.strip = function strip() {
            while (this.length > 1 && this.words[this.length - 1] === 0) {
              this.length--;
            }
            return this._normSign();
          };
          BN.prototype._normSign = function _normSign() {
            if (this.length === 1 && this.words[0] === 0) {
              this.negative = 0;
            }
            return this;
          };
          BN.prototype.inspect = function inspect() {
            return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
          };
          var zeros = [
            "",
            "0",
            "00",
            "000",
            "0000",
            "00000",
            "000000",
            "0000000",
            "00000000",
            "000000000",
            "0000000000",
            "00000000000",
            "000000000000",
            "0000000000000",
            "00000000000000",
            "000000000000000",
            "0000000000000000",
            "00000000000000000",
            "000000000000000000",
            "0000000000000000000",
            "00000000000000000000",
            "000000000000000000000",
            "0000000000000000000000",
            "00000000000000000000000",
            "000000000000000000000000",
            "0000000000000000000000000",
          ];
          var groupSizes = [
            0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
            5, 5, 5,
          ];
          var groupBases = [
            0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171,
            35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632,
            6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393,
            45435424, 52521875, 60466176,
          ];
          BN.prototype.toString = function toString(base, padding) {
            base = base || 10;
            padding = padding | 0 || 1;
            var out;
            if (base === 16 || base === "hex") {
              out = "";
              var off = 0;
              var carry = 0;
              for (var i = 0; i < this.length; i++) {
                var w = this.words[i];
                var word = (((w << off) | carry) & 16777215).toString(16);
                carry = (w >>> (24 - off)) & 16777215;
                if (carry !== 0 || i !== this.length - 1) {
                  out = zeros[6 - word.length] + word + out;
                } else {
                  out = word + out;
                }
                off += 2;
                if (off >= 26) {
                  off -= 26;
                  i--;
                }
              }
              if (carry !== 0) {
                out = carry.toString(16) + out;
              }
              while (out.length % padding !== 0) {
                out = "0" + out;
              }
              if (this.negative !== 0) {
                out = "-" + out;
              }
              return out;
            }
            if (base === (base | 0) && base >= 2 && base <= 36) {
              var groupSize = groupSizes[base];
              var groupBase = groupBases[base];
              out = "";
              var c = this.clone();
              c.negative = 0;
              while (!c.isZero()) {
                var r = c.modn(groupBase).toString(base);
                c = c.idivn(groupBase);
                if (!c.isZero()) {
                  out = zeros[groupSize - r.length] + r + out;
                } else {
                  out = r + out;
                }
              }
              if (this.isZero()) {
                out = "0" + out;
              }
              while (out.length % padding !== 0) {
                out = "0" + out;
              }
              if (this.negative !== 0) {
                out = "-" + out;
              }
              return out;
            }
            assert(false, "Base should be between 2 and 36");
          };
          BN.prototype.toNumber = function toNumber() {
            var ret = this.words[0];
            if (this.length === 2) {
              ret += this.words[1] * 67108864;
            } else if (this.length === 3 && this.words[2] === 1) {
              ret += 4503599627370496 + this.words[1] * 67108864;
            } else if (this.length > 2) {
              assert(false, "Number can only safely store up to 53 bits");
            }
            return this.negative !== 0 ? -ret : ret;
          };
          BN.prototype.toJSON = function toJSON() {
            return this.toString(16);
          };
          BN.prototype.toBuffer = function toBuffer(endian, length) {
            assert(typeof Buffer2 !== "undefined");
            return this.toArrayLike(Buffer2, endian, length);
          };
          BN.prototype.toArray = function toArray(endian, length) {
            return this.toArrayLike(Array, endian, length);
          };
          BN.prototype.toArrayLike = function toArrayLike(ArrayType, endian, length) {
            var byteLength = this.byteLength();
            var reqLength = length || Math.max(1, byteLength);
            assert(byteLength <= reqLength, "byte array longer than desired length");
            assert(reqLength > 0, "Requested array length <= 0");
            this.strip();
            var littleEndian = endian === "le";
            var res = new ArrayType(reqLength);
            var b, i;
            var q = this.clone();
            if (!littleEndian) {
              for (i = 0; i < reqLength - byteLength; i++) {
                res[i] = 0;
              }
              for (i = 0; !q.isZero(); i++) {
                b = q.andln(255);
                q.iushrn(8);
                res[reqLength - i - 1] = b;
              }
            } else {
              for (i = 0; !q.isZero(); i++) {
                b = q.andln(255);
                q.iushrn(8);
                res[i] = b;
              }
              for (; i < reqLength; i++) {
                res[i] = 0;
              }
            }
            return res;
          };
          if (Math.clz32) {
            BN.prototype._countBits = function _countBits(w) {
              return 32 - Math.clz32(w);
            };
          } else {
            BN.prototype._countBits = function _countBits(w) {
              var t = w;
              var r = 0;
              if (t >= 4096) {
                r += 13;
                t >>>= 13;
              }
              if (t >= 64) {
                r += 7;
                t >>>= 7;
              }
              if (t >= 8) {
                r += 4;
                t >>>= 4;
              }
              if (t >= 2) {
                r += 2;
                t >>>= 2;
              }
              return r + t;
            };
          }
          BN.prototype._zeroBits = function _zeroBits(w) {
            if (w === 0) return 26;
            var t = w;
            var r = 0;
            if ((t & 8191) === 0) {
              r += 13;
              t >>>= 13;
            }
            if ((t & 127) === 0) {
              r += 7;
              t >>>= 7;
            }
            if ((t & 15) === 0) {
              r += 4;
              t >>>= 4;
            }
            if ((t & 3) === 0) {
              r += 2;
              t >>>= 2;
            }
            if ((t & 1) === 0) {
              r++;
            }
            return r;
          };
          BN.prototype.bitLength = function bitLength() {
            var w = this.words[this.length - 1];
            var hi = this._countBits(w);
            return (this.length - 1) * 26 + hi;
          };
          function toBitArray(num) {
            var w = new Array(num.bitLength());
            for (var bit = 0; bit < w.length; bit++) {
              var off = (bit / 26) | 0;
              var wbit = bit % 26;
              w[bit] = (num.words[off] & (1 << wbit)) >>> wbit;
            }
            return w;
          }
          BN.prototype.zeroBits = function zeroBits() {
            if (this.isZero()) return 0;
            var r = 0;
            for (var i = 0; i < this.length; i++) {
              var b = this._zeroBits(this.words[i]);
              r += b;
              if (b !== 26) break;
            }
            return r;
          };
          BN.prototype.byteLength = function byteLength() {
            return Math.ceil(this.bitLength() / 8);
          };
          BN.prototype.toTwos = function toTwos(width) {
            if (this.negative !== 0) {
              return this.abs().inotn(width).iaddn(1);
            }
            return this.clone();
          };
          BN.prototype.fromTwos = function fromTwos(width) {
            if (this.testn(width - 1)) {
              return this.notn(width).iaddn(1).ineg();
            }
            return this.clone();
          };
          BN.prototype.isNeg = function isNeg() {
            return this.negative !== 0;
          };
          BN.prototype.neg = function neg() {
            return this.clone().ineg();
          };
          BN.prototype.ineg = function ineg() {
            if (!this.isZero()) {
              this.negative ^= 1;
            }
            return this;
          };
          BN.prototype.iuor = function iuor(num) {
            while (this.length < num.length) {
              this.words[this.length++] = 0;
            }
            for (var i = 0; i < num.length; i++) {
              this.words[i] = this.words[i] | num.words[i];
            }
            return this.strip();
          };
          BN.prototype.ior = function ior(num) {
            assert((this.negative | num.negative) === 0);
            return this.iuor(num);
          };
          BN.prototype.or = function or(num) {
            if (this.length > num.length) return this.clone().ior(num);
            return num.clone().ior(this);
          };
          BN.prototype.uor = function uor(num) {
            if (this.length > num.length) return this.clone().iuor(num);
            return num.clone().iuor(this);
          };
          BN.prototype.iuand = function iuand(num) {
            var b;
            if (this.length > num.length) {
              b = num;
            } else {
              b = this;
            }
            for (var i = 0; i < b.length; i++) {
              this.words[i] = this.words[i] & num.words[i];
            }
            this.length = b.length;
            return this.strip();
          };
          BN.prototype.iand = function iand(num) {
            assert((this.negative | num.negative) === 0);
            return this.iuand(num);
          };
          BN.prototype.and = function and(num) {
            if (this.length > num.length) return this.clone().iand(num);
            return num.clone().iand(this);
          };
          BN.prototype.uand = function uand(num) {
            if (this.length > num.length) return this.clone().iuand(num);
            return num.clone().iuand(this);
          };
          BN.prototype.iuxor = function iuxor(num) {
            var a;
            var b;
            if (this.length > num.length) {
              a = this;
              b = num;
            } else {
              a = num;
              b = this;
            }
            for (var i = 0; i < b.length; i++) {
              this.words[i] = a.words[i] ^ b.words[i];
            }
            if (this !== a) {
              for (; i < a.length; i++) {
                this.words[i] = a.words[i];
              }
            }
            this.length = a.length;
            return this.strip();
          };
          BN.prototype.ixor = function ixor(num) {
            assert((this.negative | num.negative) === 0);
            return this.iuxor(num);
          };
          BN.prototype.xor = function xor(num) {
            if (this.length > num.length) return this.clone().ixor(num);
            return num.clone().ixor(this);
          };
          BN.prototype.uxor = function uxor(num) {
            if (this.length > num.length) return this.clone().iuxor(num);
            return num.clone().iuxor(this);
          };
          BN.prototype.inotn = function inotn(width) {
            assert(typeof width === "number" && width >= 0);
            var bytesNeeded = Math.ceil(width / 26) | 0;
            var bitsLeft = width % 26;
            this._expand(bytesNeeded);
            if (bitsLeft > 0) {
              bytesNeeded--;
            }
            for (var i = 0; i < bytesNeeded; i++) {
              this.words[i] = ~this.words[i] & 67108863;
            }
            if (bitsLeft > 0) {
              this.words[i] = ~this.words[i] & (67108863 >> (26 - bitsLeft));
            }
            return this.strip();
          };
          BN.prototype.notn = function notn(width) {
            return this.clone().inotn(width);
          };
          BN.prototype.setn = function setn(bit, val) {
            assert(typeof bit === "number" && bit >= 0);
            var off = (bit / 26) | 0;
            var wbit = bit % 26;
            this._expand(off + 1);
            if (val) {
              this.words[off] = this.words[off] | (1 << wbit);
            } else {
              this.words[off] = this.words[off] & ~(1 << wbit);
            }
            return this.strip();
          };
          BN.prototype.iadd = function iadd(num) {
            var r;
            if (this.negative !== 0 && num.negative === 0) {
              this.negative = 0;
              r = this.isub(num);
              this.negative ^= 1;
              return this._normSign();
            } else if (this.negative === 0 && num.negative !== 0) {
              num.negative = 0;
              r = this.isub(num);
              num.negative = 1;
              return r._normSign();
            }
            var a, b;
            if (this.length > num.length) {
              a = this;
              b = num;
            } else {
              a = num;
              b = this;
            }
            var carry = 0;
            for (var i = 0; i < b.length; i++) {
              r = (a.words[i] | 0) + (b.words[i] | 0) + carry;
              this.words[i] = r & 67108863;
              carry = r >>> 26;
            }
            for (; carry !== 0 && i < a.length; i++) {
              r = (a.words[i] | 0) + carry;
              this.words[i] = r & 67108863;
              carry = r >>> 26;
            }
            this.length = a.length;
            if (carry !== 0) {
              this.words[this.length] = carry;
              this.length++;
            } else if (a !== this) {
              for (; i < a.length; i++) {
                this.words[i] = a.words[i];
              }
            }
            return this;
          };
          BN.prototype.add = function add(num) {
            var res;
            if (num.negative !== 0 && this.negative === 0) {
              num.negative = 0;
              res = this.sub(num);
              num.negative ^= 1;
              return res;
            } else if (num.negative === 0 && this.negative !== 0) {
              this.negative = 0;
              res = num.sub(this);
              this.negative = 1;
              return res;
            }
            if (this.length > num.length) return this.clone().iadd(num);
            return num.clone().iadd(this);
          };
          BN.prototype.isub = function isub(num) {
            if (num.negative !== 0) {
              num.negative = 0;
              var r = this.iadd(num);
              num.negative = 1;
              return r._normSign();
            } else if (this.negative !== 0) {
              this.negative = 0;
              this.iadd(num);
              this.negative = 1;
              return this._normSign();
            }
            var cmp = this.cmp(num);
            if (cmp === 0) {
              this.negative = 0;
              this.length = 1;
              this.words[0] = 0;
              return this;
            }
            var a, b;
            if (cmp > 0) {
              a = this;
              b = num;
            } else {
              a = num;
              b = this;
            }
            var carry = 0;
            for (var i = 0; i < b.length; i++) {
              r = (a.words[i] | 0) - (b.words[i] | 0) + carry;
              carry = r >> 26;
              this.words[i] = r & 67108863;
            }
            for (; carry !== 0 && i < a.length; i++) {
              r = (a.words[i] | 0) + carry;
              carry = r >> 26;
              this.words[i] = r & 67108863;
            }
            if (carry === 0 && i < a.length && a !== this) {
              for (; i < a.length; i++) {
                this.words[i] = a.words[i];
              }
            }
            this.length = Math.max(this.length, i);
            if (a !== this) {
              this.negative = 1;
            }
            return this.strip();
          };
          BN.prototype.sub = function sub(num) {
            return this.clone().isub(num);
          };
          function smallMulTo(self2, num, out) {
            out.negative = num.negative ^ self2.negative;
            var len = (self2.length + num.length) | 0;
            out.length = len;
            len = (len - 1) | 0;
            var a = self2.words[0] | 0;
            var b = num.words[0] | 0;
            var r = a * b;
            var lo = r & 67108863;
            var carry = (r / 67108864) | 0;
            out.words[0] = lo;
            for (var k = 1; k < len; k++) {
              var ncarry = carry >>> 26;
              var rword = carry & 67108863;
              var maxJ = Math.min(k, num.length - 1);
              for (var j = Math.max(0, k - self2.length + 1); j <= maxJ; j++) {
                var i = (k - j) | 0;
                a = self2.words[i] | 0;
                b = num.words[j] | 0;
                r = a * b + rword;
                ncarry += (r / 67108864) | 0;
                rword = r & 67108863;
              }
              out.words[k] = rword | 0;
              carry = ncarry | 0;
            }
            if (carry !== 0) {
              out.words[k] = carry | 0;
            } else {
              out.length--;
            }
            return out.strip();
          }
          var comb10MulTo = function comb10MulTo2(self2, num, out) {
            var a = self2.words;
            var b = num.words;
            var o = out.words;
            var c = 0;
            var lo;
            var mid;
            var hi;
            var a0 = a[0] | 0;
            var al0 = a0 & 8191;
            var ah0 = a0 >>> 13;
            var a1 = a[1] | 0;
            var al1 = a1 & 8191;
            var ah1 = a1 >>> 13;
            var a2 = a[2] | 0;
            var al2 = a2 & 8191;
            var ah2 = a2 >>> 13;
            var a3 = a[3] | 0;
            var al3 = a3 & 8191;
            var ah3 = a3 >>> 13;
            var a4 = a[4] | 0;
            var al4 = a4 & 8191;
            var ah4 = a4 >>> 13;
            var a5 = a[5] | 0;
            var al5 = a5 & 8191;
            var ah5 = a5 >>> 13;
            var a6 = a[6] | 0;
            var al6 = a6 & 8191;
            var ah6 = a6 >>> 13;
            var a7 = a[7] | 0;
            var al7 = a7 & 8191;
            var ah7 = a7 >>> 13;
            var a8 = a[8] | 0;
            var al8 = a8 & 8191;
            var ah8 = a8 >>> 13;
            var a9 = a[9] | 0;
            var al9 = a9 & 8191;
            var ah9 = a9 >>> 13;
            var b0 = b[0] | 0;
            var bl0 = b0 & 8191;
            var bh0 = b0 >>> 13;
            var b1 = b[1] | 0;
            var bl1 = b1 & 8191;
            var bh1 = b1 >>> 13;
            var b2 = b[2] | 0;
            var bl2 = b2 & 8191;
            var bh2 = b2 >>> 13;
            var b3 = b[3] | 0;
            var bl3 = b3 & 8191;
            var bh3 = b3 >>> 13;
            var b4 = b[4] | 0;
            var bl4 = b4 & 8191;
            var bh4 = b4 >>> 13;
            var b5 = b[5] | 0;
            var bl5 = b5 & 8191;
            var bh5 = b5 >>> 13;
            var b6 = b[6] | 0;
            var bl6 = b6 & 8191;
            var bh6 = b6 >>> 13;
            var b7 = b[7] | 0;
            var bl7 = b7 & 8191;
            var bh7 = b7 >>> 13;
            var b8 = b[8] | 0;
            var bl8 = b8 & 8191;
            var bh8 = b8 >>> 13;
            var b9 = b[9] | 0;
            var bl9 = b9 & 8191;
            var bh9 = b9 >>> 13;
            out.negative = self2.negative ^ num.negative;
            out.length = 19;
            lo = Math.imul(al0, bl0);
            mid = Math.imul(al0, bh0);
            mid = (mid + Math.imul(ah0, bl0)) | 0;
            hi = Math.imul(ah0, bh0);
            var w0 = (((c + lo) | 0) + ((mid & 8191) << 13)) | 0;
            c = (((hi + (mid >>> 13)) | 0) + (w0 >>> 26)) | 0;
            w0 &= 67108863;
            lo = Math.imul(al1, bl0);
            mid = Math.imul(al1, bh0);
            mid = (mid + Math.imul(ah1, bl0)) | 0;
            hi = Math.imul(ah1, bh0);
            lo = (lo + Math.imul(al0, bl1)) | 0;
            mid = (mid + Math.imul(al0, bh1)) | 0;
            mid = (mid + Math.imul(ah0, bl1)) | 0;
            hi = (hi + Math.imul(ah0, bh1)) | 0;
            var w1 = (((c + lo) | 0) + ((mid & 8191) << 13)) | 0;
            c = (((hi + (mid >>> 13)) | 0) + (w1 >>> 26)) | 0;
            w1 &= 67108863;
            lo = Math.imul(al2, bl0);
            mid = Math.imul(al2, bh0);
            mid = (mid + Math.imul(ah2, bl0)) | 0;
            hi = Math.imul(ah2, bh0);
            lo = (lo + Math.imul(al1, bl1)) | 0;
            mid = (mid + Math.imul(al1, bh1)) | 0;
            mid = (mid + Math.imul(ah1, bl1)) | 0;
            hi = (hi + Math.imul(ah1, bh1)) | 0;
            lo = (lo + Math.imul(al0, bl2)) | 0;
            mid = (mid + Math.imul(al0, bh2)) | 0;
            mid = (mid + Math.imul(ah0, bl2)) | 0;
            hi = (hi + Math.imul(ah0, bh2)) | 0;
            var w2 = (((c + lo) | 0) + ((mid & 8191) << 13)) | 0;
            c = (((hi + (mid >>> 13)) | 0) + (w2 >>> 26)) | 0;
            w2 &= 67108863;
            lo = Math.imul(al3, bl0);
            mid = Math.imul(al3, bh0);
            mid = (mid + Math.imul(ah3, bl0)) | 0;
            hi = Math.imul(ah3, bh0);
            lo = (lo + Math.imul(al2, bl1)) | 0;
            mid = (mid + Math.imul(al2, bh1)) | 0;
            mid = (mid + Math.imul(ah2, bl1)) | 0;
            hi = (hi + Math.imul(ah2, bh1)) | 0;
            lo = (lo + Math.imul(al1, bl2)) | 0;
            mid = (mid + Math.imul(al1, bh2)) | 0;
            mid = (mid + Math.imul(ah1, bl2)) | 0;
            hi = (hi + Math.imul(ah1, bh2)) | 0;
            lo = (lo + Math.imul(al0, bl3)) | 0;
            mid = (mid + Math.imul(al0, bh3)) | 0;
            mid = (mid + Math.imul(ah0, bl3)) | 0;
            hi = (hi + Math.imul(ah0, bh3)) | 0;
            var w3 = (((c + lo) | 0) + ((mid & 8191) << 13)) | 0;
            c = (((hi + (mid >>> 13)) | 0) + (w3 >>> 26)) | 0;
            w3 &= 67108863;
            lo = Math.imul(al4, bl0);
            mid = Math.imul(al4, bh0);
            mid = (mid + Math.imul(ah4, bl0)) | 0;
            hi = Math.imul(ah4, bh0);
            lo = (lo + Math.imul(al3, bl1)) | 0;
            mid = (mid + Math.imul(al3, bh1)) | 0;
            mid = (mid + Math.imul(ah3, bl1)) | 0;
            hi = (hi + Math.imul(ah3, bh1)) | 0;
            lo = (lo + Math.imul(al2, bl2)) | 0;
            mid = (mid + Math.imul(al2, bh2)) | 0;
            mid = (mid + Math.imul(ah2, bl2)) | 0;
            hi = (hi + Math.imul(ah2, bh2)) | 0;
            lo = (lo + Math.imul(al1, bl3)) | 0;
            mid = (mid + Math.imul(al1, bh3)) | 0;
            mid = (mid + Math.imul(ah1, bl3)) | 0;
            hi = (hi + Math.imul(ah1, bh3)) | 0;
            lo = (lo + Math.imul(al0, bl4)) | 0;
            mid = (mid + Math.imul(al0, bh4)) | 0;
            mid = (mid + Math.imul(ah0, bl4)) | 0;
            hi = (hi + Math.imul(ah0, bh4)) | 0;
            var w4 = (((c + lo) | 0) + ((mid & 8191) << 13)) | 0;
            c = (((hi + (mid >>> 13)) | 0) + (w4 >>> 26)) | 0;
            w4 &= 67108863;
            lo = Math.imul(al5, bl0);
            mid = Math.imul(al5, bh0);
            mid = (mid + Math.imul(ah5, bl0)) | 0;
            hi = Math.imul(ah5, bh0);
            lo = (lo + Math.imul(al4, bl1)) | 0;
            mid = (mid + Math.imul(al4, bh1)) | 0;
            mid = (mid + Math.imul(ah4, bl1)) | 0;
            hi = (hi + Math.imul(ah4, bh1)) | 0;
            lo = (lo + Math.imul(al3, bl2)) | 0;
            mid = (mid + Math.imul(al3, bh2)) | 0;
            mid = (mid + Math.imul(ah3, bl2)) | 0;
            hi = (hi + Math.imul(ah3, bh2)) | 0;
            lo = (lo + Math.imul(al2, bl3)) | 0;
            mid = (mid + Math.imul(al2, bh3)) | 0;
            mid = (mid + Math.imul(ah2, bl3)) | 0;
            hi = (hi + Math.imul(ah2, bh3)) | 0;
            lo = (lo + Math.imul(al1, bl4)) | 0;
            mid = (mid + Math.imul(al1, bh4)) | 0;
            mid = (mid + Math.imul(ah1, bl4)) | 0;
            hi = (hi + Math.imul(ah1, bh4)) | 0;
            lo = (lo + Math.imul(al0, bl5)) | 0;
            mid = (mid + Math.imul(al0, bh5)) | 0;
            mid = (mid + Math.imul(ah0, bl5)) | 0;
            hi = (hi + Math.imul(ah0, bh5)) | 0;
            var w5 = (((c + lo) | 0) + ((mid & 8191) << 13)) | 0;
            c = (((hi + (mid >>> 13)) | 0) + (w5 >>> 26)) | 0;
            w5 &= 67108863;
            lo = Math.imul(al6, bl0);
            mid = Math.imul(al6, bh0);
            mid = (mid + Math.imul(ah6, bl0)) | 0;
            hi = Math.imul(ah6, bh0);
            lo = (lo + Math.imul(al5, bl1)) | 0;
            mid = (mid + Math.imul(al5, bh1)) | 0;
            mid = (mid + Math.imul(ah5, bl1)) | 0;
            hi = (hi + Math.imul(ah5, bh1)) | 0;
            lo = (lo + Math.imul(al4, bl2)) | 0;
            mid = (mid + Math.imul(al4, bh2)) | 0;
            mid = (mid + Math.imul(ah4, bl2)) | 0;
            hi = (hi + Math.imul(ah4, bh2)) | 0;
            lo = (lo + Math.imul(al3, bl3)) | 0;
            mid = (mid + Math.imul(al3, bh3)) | 0;
            mid = (mid + Math.imul(ah3, bl3)) | 0;
            hi = (hi + Math.imul(ah3, bh3)) | 0;
            lo = (lo + Math.imul(al2, bl4)) | 0;
            mid = (mid + Math.imul(al2, bh4)) | 0;
            mid = (mid + Math.imul(ah2, bl4)) | 0;
            hi = (hi + Math.imul(ah2, bh4)) | 0;
            lo = (lo + Math.imul(al1, bl5)) | 0;
            mid = (mid + Math.imul(al1, bh5)) | 0;
            mid = (mid + Math.imul(ah1, bl5)) | 0;
            hi = (hi + Math.imul(ah1, bh5)) | 0;
            lo = (lo + Math.imul(al0, bl6)) | 0;
            mid = (mid + Math.imul(al0, bh6)) | 0;
            mid = (mid + Math.imul(ah0, bl6)) | 0;
            hi = (hi + Math.imul(ah0, bh6)) | 0;
            var w6 = (((c + lo) | 0) + ((mid & 8191) << 13)) | 0;
            c = (((hi + (mid >>> 13)) | 0) + (w6 >>> 26)) | 0;
            w6 &= 67108863;
            lo = Math.imul(al7, bl0);
            mid = Math.imul(al7, bh0);
            mid = (mid + Math.imul(ah7, bl0)) | 0;
            hi = Math.imul(ah7, bh0);
            lo = (lo + Math.imul(al6, bl1)) | 0;
            mid = (mid + Math.imul(al6, bh1)) | 0;
            mid = (mid + Math.imul(ah6, bl1)) | 0;
            hi = (hi + Math.imul(ah6, bh1)) | 0;
            lo = (lo + Math.imul(al5, bl2)) | 0;
            mid = (mid + Math.imul(al5, bh2)) | 0;
            mid = (mid + Math.imul(ah5, bl2)) | 0;
            hi = (hi + Math.imul(ah5, bh2)) | 0;
            lo = (lo + Math.imul(al4, bl3)) | 0;
            mid = (mid + Math.imul(al4, bh3)) | 0;
            mid = (mid + Math.imul(ah4, bl3)) | 0;
            hi = (hi + Math.imul(ah4, bh3)) | 0;
            lo = (lo + Math.imul(al3, bl4)) | 0;
            mid = (mid + Math.imul(al3, bh4)) | 0;
            mid = (mid + Math.imul(ah3, bl4)) | 0;
            hi = (hi + Math.imul(ah3, bh4)) | 0;
            lo = (lo + Math.imul(al2, bl5)) | 0;
            mid = (mid + Math.imul(al2, bh5)) | 0;
            mid = (mid + Math.imul(ah2, bl5)) | 0;
            hi = (hi + Math.imul(ah2, bh5)) | 0;
            lo = (lo + Math.imul(al1, bl6)) | 0;
            mid = (mid + Math.imul(al1, bh6)) | 0;
            mid = (mid + Math.imul(ah1, bl6)) | 0;
            hi = (hi + Math.imul(ah1, bh6)) | 0;
            lo = (lo + Math.imul(al0, bl7)) | 0;
            mid = (mid + Math.imul(al0, bh7)) | 0;
            mid = (mid + Math.imul(ah0, bl7)) | 0;
            hi = (hi + Math.imul(ah0, bh7)) | 0;
            var w7 = (((c + lo) | 0) + ((mid & 8191) << 13)) | 0;
            c = (((hi + (mid >>> 13)) | 0) + (w7 >>> 26)) | 0;
            w7 &= 67108863;
            lo = Math.imul(al8, bl0);
            mid = Math.imul(al8, bh0);
            mid = (mid + Math.imul(ah8, bl0)) | 0;
            hi = Math.imul(ah8, bh0);
            lo = (lo + Math.imul(al7, bl1)) | 0;
            mid = (mid + Math.imul(al7, bh1)) | 0;
            mid = (mid + Math.imul(ah7, bl1)) | 0;
            hi = (hi + Math.imul(ah7, bh1)) | 0;
            lo = (lo + Math.imul(al6, bl2)) | 0;
            mid = (mid + Math.imul(al6, bh2)) | 0;
            mid = (mid + Math.imul(ah6, bl2)) | 0;
            hi = (hi + Math.imul(ah6, bh2)) | 0;
            lo = (lo + Math.imul(al5, bl3)) | 0;
            mid = (mid + Math.imul(al5, bh3)) | 0;
            mid = (mid + Math.imul(ah5, bl3)) | 0;
            hi = (hi + Math.imul(ah5, bh3)) | 0;
            lo = (lo + Math.imul(al4, bl4)) | 0;
            mid = (mid + Math.imul(al4, bh4)) | 0;
            mid = (mid + Math.imul(ah4, bl4)) | 0;
            hi = (hi + Math.imul(ah4, bh4)) | 0;
            lo = (lo + Math.imul(al3, bl5)) | 0;
            mid = (mid + Math.imul(al3, bh5)) | 0;
            mid = (mid + Math.imul(ah3, bl5)) | 0;
            hi = (hi + Math.imul(ah3, bh5)) | 0;
            lo = (lo + Math.imul(al2, bl6)) | 0;
            mid = (mid + Math.imul(al2, bh6)) | 0;
            mid = (mid + Math.imul(ah2, bl6)) | 0;
            hi = (hi + Math.imul(ah2, bh6)) | 0;
            lo = (lo + Math.imul(al1, bl7)) | 0;
            mid = (mid + Math.imul(al1, bh7)) | 0;
            mid = (mid + Math.imul(ah1, bl7)) | 0;
            hi = (hi + Math.imul(ah1, bh7)) | 0;
            lo = (lo + Math.imul(al0, bl8)) | 0;
            mid = (mid + Math.imul(al0, bh8)) | 0;
            mid = (mid + Math.imul(ah0, bl8)) | 0;
            hi = (hi + Math.imul(ah0, bh8)) | 0;
            var w8 = (((c + lo) | 0) + ((mid & 8191) << 13)) | 0;
            c = (((hi + (mid >>> 13)) | 0) + (w8 >>> 26)) | 0;
            w8 &= 67108863;
            lo = Math.imul(al9, bl0);
            mid = Math.imul(al9, bh0);
            mid = (mid + Math.imul(ah9, bl0)) | 0;
            hi = Math.imul(ah9, bh0);
            lo = (lo + Math.imul(al8, bl1)) | 0;
            mid = (mid + Math.imul(al8, bh1)) | 0;
            mid = (mid + Math.imul(ah8, bl1)) | 0;
            hi = (hi + Math.imul(ah8, bh1)) | 0;
            lo = (lo + Math.imul(al7, bl2)) | 0;
            mid = (mid + Math.imul(al7, bh2)) | 0;
            mid = (mid + Math.imul(ah7, bl2)) | 0;
            hi = (hi + Math.imul(ah7, bh2)) | 0;
            lo = (lo + Math.imul(al6, bl3)) | 0;
            mid = (mid + Math.imul(al6, bh3)) | 0;
            mid = (mid + Math.imul(ah6, bl3)) | 0;
            hi = (hi + Math.imul(ah6, bh3)) | 0;
            lo = (lo + Math.imul(al5, bl4)) | 0;
            mid = (mid + Math.imul(al5, bh4)) | 0;
            mid = (mid + Math.imul(ah5, bl4)) | 0;
            hi = (hi + Math.imul(ah5, bh4)) | 0;
            lo = (lo + Math.imul(al4, bl5)) | 0;
            mid = (mid + Math.imul(al4, bh5)) | 0;
            mid = (mid + Math.imul(ah4, bl5)) | 0;
            hi = (hi + Math.imul(ah4, bh5)) | 0;
            lo = (lo + Math.imul(al3, bl6)) | 0;
            mid = (mid + Math.imul(al3, bh6)) | 0;
            mid = (mid + Math.imul(ah3, bl6)) | 0;
            hi = (hi + Math.imul(ah3, bh6)) | 0;
            lo = (lo + Math.imul(al2, bl7)) | 0;
            mid = (mid + Math.imul(al2, bh7)) | 0;
            mid = (mid + Math.imul(ah2, bl7)) | 0;
            hi = (hi + Math.imul(ah2, bh7)) | 0;
            lo = (lo + Math.imul(al1, bl8)) | 0;
            mid = (mid + Math.imul(al1, bh8)) | 0;
            mid = (mid + Math.imul(ah1, bl8)) | 0;
            hi = (hi + Math.imul(ah1, bh8)) | 0;
            lo = (lo + Math.imul(al0, bl9)) | 0;
            mid = (mid + Math.imul(al0, bh9)) | 0;
            mid = (mid + Math.imul(ah0, bl9)) | 0;
            hi = (hi + Math.imul(ah0, bh9)) | 0;
            var w9 = (((c + lo) | 0) + ((mid & 8191) << 13)) | 0;
            c = (((hi + (mid >>> 13)) | 0) + (w9 >>> 26)) | 0;
            w9 &= 67108863;
            lo = Math.imul(al9, bl1);
            mid = Math.imul(al9, bh1);
            mid = (mid + Math.imul(ah9, bl1)) | 0;
            hi = Math.imul(ah9, bh1);
            lo = (lo + Math.imul(al8, bl2)) | 0;
            mid = (mid + Math.imul(al8, bh2)) | 0;
            mid = (mid + Math.imul(ah8, bl2)) | 0;
            hi = (hi + Math.imul(ah8, bh2)) | 0;
            lo = (lo + Math.imul(al7, bl3)) | 0;
            mid = (mid + Math.imul(al7, bh3)) | 0;
            mid = (mid + Math.imul(ah7, bl3)) | 0;
            hi = (hi + Math.imul(ah7, bh3)) | 0;
            lo = (lo + Math.imul(al6, bl4)) | 0;
            mid = (mid + Math.imul(al6, bh4)) | 0;
            mid = (mid + Math.imul(ah6, bl4)) | 0;
            hi = (hi + Math.imul(ah6, bh4)) | 0;
            lo = (lo + Math.imul(al5, bl5)) | 0;
            mid = (mid + Math.imul(al5, bh5)) | 0;
            mid = (mid + Math.imul(ah5, bl5)) | 0;
            hi = (hi + Math.imul(ah5, bh5)) | 0;
            lo = (lo + Math.imul(al4, bl6)) | 0;
            mid = (mid + Math.imul(al4, bh6)) | 0;
            mid = (mid + Math.imul(ah4, bl6)) | 0;
            hi = (hi + Math.imul(ah4, bh6)) | 0;
            lo = (lo + Math.imul(al3, bl7)) | 0;
            mid = (mid + Math.imul(al3, bh7)) | 0;
            mid = (mid + Math.imul(ah3, bl7)) | 0;
            hi = (hi + Math.imul(ah3, bh7)) | 0;
            lo = (lo + Math.imul(al2, bl8)) | 0;
            mid = (mid + Math.imul(al2, bh8)) | 0;
            mid = (mid + Math.imul(ah2, bl8)) | 0;
            hi = (hi + Math.imul(ah2, bh8)) | 0;
            lo = (lo + Math.imul(al1, bl9)) | 0;
            mid = (mid + Math.imul(al1, bh9)) | 0;
            mid = (mid + Math.imul(ah1, bl9)) | 0;
            hi = (hi + Math.imul(ah1, bh9)) | 0;
            var w10 = (((c + lo) | 0) + ((mid & 8191) << 13)) | 0;
            c = (((hi + (mid >>> 13)) | 0) + (w10 >>> 26)) | 0;
            w10 &= 67108863;
            lo = Math.imul(al9, bl2);
            mid = Math.imul(al9, bh2);
            mid = (mid + Math.imul(ah9, bl2)) | 0;
            hi = Math.imul(ah9, bh2);
            lo = (lo + Math.imul(al8, bl3)) | 0;
            mid = (mid + Math.imul(al8, bh3)) | 0;
            mid = (mid + Math.imul(ah8, bl3)) | 0;
            hi = (hi + Math.imul(ah8, bh3)) | 0;
            lo = (lo + Math.imul(al7, bl4)) | 0;
            mid = (mid + Math.imul(al7, bh4)) | 0;
            mid = (mid + Math.imul(ah7, bl4)) | 0;
            hi = (hi + Math.imul(ah7, bh4)) | 0;
            lo = (lo + Math.imul(al6, bl5)) | 0;
            mid = (mid + Math.imul(al6, bh5)) | 0;
            mid = (mid + Math.imul(ah6, bl5)) | 0;
            hi = (hi + Math.imul(ah6, bh5)) | 0;
            lo = (lo + Math.imul(al5, bl6)) | 0;
            mid = (mid + Math.imul(al5, bh6)) | 0;
            mid = (mid + Math.imul(ah5, bl6)) | 0;
            hi = (hi + Math.imul(ah5, bh6)) | 0;
            lo = (lo + Math.imul(al4, bl7)) | 0;
            mid = (mid + Math.imul(al4, bh7)) | 0;
            mid = (mid + Math.imul(ah4, bl7)) | 0;
            hi = (hi + Math.imul(ah4, bh7)) | 0;
            lo = (lo + Math.imul(al3, bl8)) | 0;
            mid = (mid + Math.imul(al3, bh8)) | 0;
            mid = (mid + Math.imul(ah3, bl8)) | 0;
            hi = (hi + Math.imul(ah3, bh8)) | 0;
            lo = (lo + Math.imul(al2, bl9)) | 0;
            mid = (mid + Math.imul(al2, bh9)) | 0;
            mid = (mid + Math.imul(ah2, bl9)) | 0;
            hi = (hi + Math.imul(ah2, bh9)) | 0;
            var w11 = (((c + lo) | 0) + ((mid & 8191) << 13)) | 0;
            c = (((hi + (mid >>> 13)) | 0) + (w11 >>> 26)) | 0;
            w11 &= 67108863;
            lo = Math.imul(al9, bl3);
            mid = Math.imul(al9, bh3);
            mid = (mid + Math.imul(ah9, bl3)) | 0;
            hi = Math.imul(ah9, bh3);
            lo = (lo + Math.imul(al8, bl4)) | 0;
            mid = (mid + Math.imul(al8, bh4)) | 0;
            mid = (mid + Math.imul(ah8, bl4)) | 0;
            hi = (hi + Math.imul(ah8, bh4)) | 0;
            lo = (lo + Math.imul(al7, bl5)) | 0;
            mid = (mid + Math.imul(al7, bh5)) | 0;
            mid = (mid + Math.imul(ah7, bl5)) | 0;
            hi = (hi + Math.imul(ah7, bh5)) | 0;
            lo = (lo + Math.imul(al6, bl6)) | 0;
            mid = (mid + Math.imul(al6, bh6)) | 0;
            mid = (mid + Math.imul(ah6, bl6)) | 0;
            hi = (hi + Math.imul(ah6, bh6)) | 0;
            lo = (lo + Math.imul(al5, bl7)) | 0;
            mid = (mid + Math.imul(al5, bh7)) | 0;
            mid = (mid + Math.imul(ah5, bl7)) | 0;
            hi = (hi + Math.imul(ah5, bh7)) | 0;
            lo = (lo + Math.imul(al4, bl8)) | 0;
            mid = (mid + Math.imul(al4, bh8)) | 0;
            mid = (mid + Math.imul(ah4, bl8)) | 0;
            hi = (hi + Math.imul(ah4, bh8)) | 0;
            lo = (lo + Math.imul(al3, bl9)) | 0;
            mid = (mid + Math.imul(al3, bh9)) | 0;
            mid = (mid + Math.imul(ah3, bl9)) | 0;
            hi = (hi + Math.imul(ah3, bh9)) | 0;
            var w12 = (((c + lo) | 0) + ((mid & 8191) << 13)) | 0;
            c = (((hi + (mid >>> 13)) | 0) + (w12 >>> 26)) | 0;
            w12 &= 67108863;
            lo = Math.imul(al9, bl4);
            mid = Math.imul(al9, bh4);
            mid = (mid + Math.imul(ah9, bl4)) | 0;
            hi = Math.imul(ah9, bh4);
            lo = (lo + Math.imul(al8, bl5)) | 0;
            mid = (mid + Math.imul(al8, bh5)) | 0;
            mid = (mid + Math.imul(ah8, bl5)) | 0;
            hi = (hi + Math.imul(ah8, bh5)) | 0;
            lo = (lo + Math.imul(al7, bl6)) | 0;
            mid = (mid + Math.imul(al7, bh6)) | 0;
            mid = (mid + Math.imul(ah7, bl6)) | 0;
            hi = (hi + Math.imul(ah7, bh6)) | 0;
            lo = (lo + Math.imul(al6, bl7)) | 0;
            mid = (mid + Math.imul(al6, bh7)) | 0;
            mid = (mid + Math.imul(ah6, bl7)) | 0;
            hi = (hi + Math.imul(ah6, bh7)) | 0;
            lo = (lo + Math.imul(al5, bl8)) | 0;
            mid = (mid + Math.imul(al5, bh8)) | 0;
            mid = (mid + Math.imul(ah5, bl8)) | 0;
            hi = (hi + Math.imul(ah5, bh8)) | 0;
            lo = (lo + Math.imul(al4, bl9)) | 0;
            mid = (mid + Math.imul(al4, bh9)) | 0;
            mid = (mid + Math.imul(ah4, bl9)) | 0;
            hi = (hi + Math.imul(ah4, bh9)) | 0;
            var w13 = (((c + lo) | 0) + ((mid & 8191) << 13)) | 0;
            c = (((hi + (mid >>> 13)) | 0) + (w13 >>> 26)) | 0;
            w13 &= 67108863;
            lo = Math.imul(al9, bl5);
            mid = Math.imul(al9, bh5);
            mid = (mid + Math.imul(ah9, bl5)) | 0;
            hi = Math.imul(ah9, bh5);
            lo = (lo + Math.imul(al8, bl6)) | 0;
            mid = (mid + Math.imul(al8, bh6)) | 0;
            mid = (mid + Math.imul(ah8, bl6)) | 0;
            hi = (hi + Math.imul(ah8, bh6)) | 0;
            lo = (lo + Math.imul(al7, bl7)) | 0;
            mid = (mid + Math.imul(al7, bh7)) | 0;
            mid = (mid + Math.imul(ah7, bl7)) | 0;
            hi = (hi + Math.imul(ah7, bh7)) | 0;
            lo = (lo + Math.imul(al6, bl8)) | 0;
            mid = (mid + Math.imul(al6, bh8)) | 0;
            mid = (mid + Math.imul(ah6, bl8)) | 0;
            hi = (hi + Math.imul(ah6, bh8)) | 0;
            lo = (lo + Math.imul(al5, bl9)) | 0;
            mid = (mid + Math.imul(al5, bh9)) | 0;
            mid = (mid + Math.imul(ah5, bl9)) | 0;
            hi = (hi + Math.imul(ah5, bh9)) | 0;
            var w14 = (((c + lo) | 0) + ((mid & 8191) << 13)) | 0;
            c = (((hi + (mid >>> 13)) | 0) + (w14 >>> 26)) | 0;
            w14 &= 67108863;
            lo = Math.imul(al9, bl6);
            mid = Math.imul(al9, bh6);
            mid = (mid + Math.imul(ah9, bl6)) | 0;
            hi = Math.imul(ah9, bh6);
            lo = (lo + Math.imul(al8, bl7)) | 0;
            mid = (mid + Math.imul(al8, bh7)) | 0;
            mid = (mid + Math.imul(ah8, bl7)) | 0;
            hi = (hi + Math.imul(ah8, bh7)) | 0;
            lo = (lo + Math.imul(al7, bl8)) | 0;
            mid = (mid + Math.imul(al7, bh8)) | 0;
            mid = (mid + Math.imul(ah7, bl8)) | 0;
            hi = (hi + Math.imul(ah7, bh8)) | 0;
            lo = (lo + Math.imul(al6, bl9)) | 0;
            mid = (mid + Math.imul(al6, bh9)) | 0;
            mid = (mid + Math.imul(ah6, bl9)) | 0;
            hi = (hi + Math.imul(ah6, bh9)) | 0;
            var w15 = (((c + lo) | 0) + ((mid & 8191) << 13)) | 0;
            c = (((hi + (mid >>> 13)) | 0) + (w15 >>> 26)) | 0;
            w15 &= 67108863;
            lo = Math.imul(al9, bl7);
            mid = Math.imul(al9, bh7);
            mid = (mid + Math.imul(ah9, bl7)) | 0;
            hi = Math.imul(ah9, bh7);
            lo = (lo + Math.imul(al8, bl8)) | 0;
            mid = (mid + Math.imul(al8, bh8)) | 0;
            mid = (mid + Math.imul(ah8, bl8)) | 0;
            hi = (hi + Math.imul(ah8, bh8)) | 0;
            lo = (lo + Math.imul(al7, bl9)) | 0;
            mid = (mid + Math.imul(al7, bh9)) | 0;
            mid = (mid + Math.imul(ah7, bl9)) | 0;
            hi = (hi + Math.imul(ah7, bh9)) | 0;
            var w16 = (((c + lo) | 0) + ((mid & 8191) << 13)) | 0;
            c = (((hi + (mid >>> 13)) | 0) + (w16 >>> 26)) | 0;
            w16 &= 67108863;
            lo = Math.imul(al9, bl8);
            mid = Math.imul(al9, bh8);
            mid = (mid + Math.imul(ah9, bl8)) | 0;
            hi = Math.imul(ah9, bh8);
            lo = (lo + Math.imul(al8, bl9)) | 0;
            mid = (mid + Math.imul(al8, bh9)) | 0;
            mid = (mid + Math.imul(ah8, bl9)) | 0;
            hi = (hi + Math.imul(ah8, bh9)) | 0;
            var w17 = (((c + lo) | 0) + ((mid & 8191) << 13)) | 0;
            c = (((hi + (mid >>> 13)) | 0) + (w17 >>> 26)) | 0;
            w17 &= 67108863;
            lo = Math.imul(al9, bl9);
            mid = Math.imul(al9, bh9);
            mid = (mid + Math.imul(ah9, bl9)) | 0;
            hi = Math.imul(ah9, bh9);
            var w18 = (((c + lo) | 0) + ((mid & 8191) << 13)) | 0;
            c = (((hi + (mid >>> 13)) | 0) + (w18 >>> 26)) | 0;
            w18 &= 67108863;
            o[0] = w0;
            o[1] = w1;
            o[2] = w2;
            o[3] = w3;
            o[4] = w4;
            o[5] = w5;
            o[6] = w6;
            o[7] = w7;
            o[8] = w8;
            o[9] = w9;
            o[10] = w10;
            o[11] = w11;
            o[12] = w12;
            o[13] = w13;
            o[14] = w14;
            o[15] = w15;
            o[16] = w16;
            o[17] = w17;
            o[18] = w18;
            if (c !== 0) {
              o[19] = c;
              out.length++;
            }
            return out;
          };
          if (!Math.imul) {
            comb10MulTo = smallMulTo;
          }
          function bigMulTo(self2, num, out) {
            out.negative = num.negative ^ self2.negative;
            out.length = self2.length + num.length;
            var carry = 0;
            var hncarry = 0;
            for (var k = 0; k < out.length - 1; k++) {
              var ncarry = hncarry;
              hncarry = 0;
              var rword = carry & 67108863;
              var maxJ = Math.min(k, num.length - 1);
              for (var j = Math.max(0, k - self2.length + 1); j <= maxJ; j++) {
                var i = k - j;
                var a = self2.words[i] | 0;
                var b = num.words[j] | 0;
                var r = a * b;
                var lo = r & 67108863;
                ncarry = (ncarry + ((r / 67108864) | 0)) | 0;
                lo = (lo + rword) | 0;
                rword = lo & 67108863;
                ncarry = (ncarry + (lo >>> 26)) | 0;
                hncarry += ncarry >>> 26;
                ncarry &= 67108863;
              }
              out.words[k] = rword;
              carry = ncarry;
              ncarry = hncarry;
            }
            if (carry !== 0) {
              out.words[k] = carry;
            } else {
              out.length--;
            }
            return out.strip();
          }
          function jumboMulTo(self2, num, out) {
            var fftm = new FFTM();
            return fftm.mulp(self2, num, out);
          }
          BN.prototype.mulTo = function mulTo(num, out) {
            var res;
            var len = this.length + num.length;
            if (this.length === 10 && num.length === 10) {
              res = comb10MulTo(this, num, out);
            } else if (len < 63) {
              res = smallMulTo(this, num, out);
            } else if (len < 1024) {
              res = bigMulTo(this, num, out);
            } else {
              res = jumboMulTo(this, num, out);
            }
            return res;
          };
          function FFTM(x, y) {
            this.x = x;
            this.y = y;
          }
          FFTM.prototype.makeRBT = function makeRBT(N) {
            var t = new Array(N);
            var l = BN.prototype._countBits(N) - 1;
            for (var i = 0; i < N; i++) {
              t[i] = this.revBin(i, l, N);
            }
            return t;
          };
          FFTM.prototype.revBin = function revBin(x, l, N) {
            if (x === 0 || x === N - 1) return x;
            var rb = 0;
            for (var i = 0; i < l; i++) {
              rb |= (x & 1) << (l - i - 1);
              x >>= 1;
            }
            return rb;
          };
          FFTM.prototype.permute = function permute(rbt, rws, iws, rtws, itws, N) {
            for (var i = 0; i < N; i++) {
              rtws[i] = rws[rbt[i]];
              itws[i] = iws[rbt[i]];
            }
          };
          FFTM.prototype.transform = function transform(rws, iws, rtws, itws, N, rbt) {
            this.permute(rbt, rws, iws, rtws, itws, N);
            for (var s = 1; s < N; s <<= 1) {
              var l = s << 1;
              var rtwdf = Math.cos((2 * Math.PI) / l);
              var itwdf = Math.sin((2 * Math.PI) / l);
              for (var p = 0; p < N; p += l) {
                var rtwdf_ = rtwdf;
                var itwdf_ = itwdf;
                for (var j = 0; j < s; j++) {
                  var re = rtws[p + j];
                  var ie = itws[p + j];
                  var ro = rtws[p + j + s];
                  var io = itws[p + j + s];
                  var rx = rtwdf_ * ro - itwdf_ * io;
                  io = rtwdf_ * io + itwdf_ * ro;
                  ro = rx;
                  rtws[p + j] = re + ro;
                  itws[p + j] = ie + io;
                  rtws[p + j + s] = re - ro;
                  itws[p + j + s] = ie - io;
                  if (j !== l) {
                    rx = rtwdf * rtwdf_ - itwdf * itwdf_;
                    itwdf_ = rtwdf * itwdf_ + itwdf * rtwdf_;
                    rtwdf_ = rx;
                  }
                }
              }
            }
          };
          FFTM.prototype.guessLen13b = function guessLen13b(n, m) {
            var N = Math.max(m, n) | 1;
            var odd = N & 1;
            var i = 0;
            for (N = (N / 2) | 0; N; N = N >>> 1) {
              i++;
            }
            return 1 << (i + 1 + odd);
          };
          FFTM.prototype.conjugate = function conjugate(rws, iws, N) {
            if (N <= 1) return;
            for (var i = 0; i < N / 2; i++) {
              var t = rws[i];
              rws[i] = rws[N - i - 1];
              rws[N - i - 1] = t;
              t = iws[i];
              iws[i] = -iws[N - i - 1];
              iws[N - i - 1] = -t;
            }
          };
          FFTM.prototype.normalize13b = function normalize13b(ws, N) {
            var carry = 0;
            for (var i = 0; i < N / 2; i++) {
              var w = Math.round(ws[2 * i + 1] / N) * 8192 + Math.round(ws[2 * i] / N) + carry;
              ws[i] = w & 67108863;
              if (w < 67108864) {
                carry = 0;
              } else {
                carry = (w / 67108864) | 0;
              }
            }
            return ws;
          };
          FFTM.prototype.convert13b = function convert13b(ws, len, rws, N) {
            var carry = 0;
            for (var i = 0; i < len; i++) {
              carry = carry + (ws[i] | 0);
              rws[2 * i] = carry & 8191;
              carry = carry >>> 13;
              rws[2 * i + 1] = carry & 8191;
              carry = carry >>> 13;
            }
            for (i = 2 * len; i < N; ++i) {
              rws[i] = 0;
            }
            assert(carry === 0);
            assert((carry & ~8191) === 0);
          };
          FFTM.prototype.stub = function stub(N) {
            var ph = new Array(N);
            for (var i = 0; i < N; i++) {
              ph[i] = 0;
            }
            return ph;
          };
          FFTM.prototype.mulp = function mulp(x, y, out) {
            var N = 2 * this.guessLen13b(x.length, y.length);
            var rbt = this.makeRBT(N);
            var _ = this.stub(N);
            var rws = new Array(N);
            var rwst = new Array(N);
            var iwst = new Array(N);
            var nrws = new Array(N);
            var nrwst = new Array(N);
            var niwst = new Array(N);
            var rmws = out.words;
            rmws.length = N;
            this.convert13b(x.words, x.length, rws, N);
            this.convert13b(y.words, y.length, nrws, N);
            this.transform(rws, _, rwst, iwst, N, rbt);
            this.transform(nrws, _, nrwst, niwst, N, rbt);
            for (var i = 0; i < N; i++) {
              var rx = rwst[i] * nrwst[i] - iwst[i] * niwst[i];
              iwst[i] = rwst[i] * niwst[i] + iwst[i] * nrwst[i];
              rwst[i] = rx;
            }
            this.conjugate(rwst, iwst, N);
            this.transform(rwst, iwst, rmws, _, N, rbt);
            this.conjugate(rmws, _, N);
            this.normalize13b(rmws, N);
            out.negative = x.negative ^ y.negative;
            out.length = x.length + y.length;
            return out.strip();
          };
          BN.prototype.mul = function mul(num) {
            var out = new BN(null);
            out.words = new Array(this.length + num.length);
            return this.mulTo(num, out);
          };
          BN.prototype.mulf = function mulf(num) {
            var out = new BN(null);
            out.words = new Array(this.length + num.length);
            return jumboMulTo(this, num, out);
          };
          BN.prototype.imul = function imul(num) {
            return this.clone().mulTo(num, this);
          };
          BN.prototype.imuln = function imuln(num) {
            assert(typeof num === "number");
            assert(num < 67108864);
            var carry = 0;
            for (var i = 0; i < this.length; i++) {
              var w = (this.words[i] | 0) * num;
              var lo = (w & 67108863) + (carry & 67108863);
              carry >>= 26;
              carry += (w / 67108864) | 0;
              carry += lo >>> 26;
              this.words[i] = lo & 67108863;
            }
            if (carry !== 0) {
              this.words[i] = carry;
              this.length++;
            }
            return this;
          };
          BN.prototype.muln = function muln(num) {
            return this.clone().imuln(num);
          };
          BN.prototype.sqr = function sqr() {
            return this.mul(this);
          };
          BN.prototype.isqr = function isqr() {
            return this.imul(this.clone());
          };
          BN.prototype.pow = function pow(num) {
            var w = toBitArray(num);
            if (w.length === 0) return new BN(1);
            var res = this;
            for (var i = 0; i < w.length; i++, res = res.sqr()) {
              if (w[i] !== 0) break;
            }
            if (++i < w.length) {
              for (var q = res.sqr(); i < w.length; i++, q = q.sqr()) {
                if (w[i] === 0) continue;
                res = res.mul(q);
              }
            }
            return res;
          };
          BN.prototype.iushln = function iushln(bits) {
            assert(typeof bits === "number" && bits >= 0);
            var r = bits % 26;
            var s = (bits - r) / 26;
            var carryMask = (67108863 >>> (26 - r)) << (26 - r);
            var i;
            if (r !== 0) {
              var carry = 0;
              for (i = 0; i < this.length; i++) {
                var newCarry = this.words[i] & carryMask;
                var c = ((this.words[i] | 0) - newCarry) << r;
                this.words[i] = c | carry;
                carry = newCarry >>> (26 - r);
              }
              if (carry) {
                this.words[i] = carry;
                this.length++;
              }
            }
            if (s !== 0) {
              for (i = this.length - 1; i >= 0; i--) {
                this.words[i + s] = this.words[i];
              }
              for (i = 0; i < s; i++) {
                this.words[i] = 0;
              }
              this.length += s;
            }
            return this.strip();
          };
          BN.prototype.ishln = function ishln(bits) {
            assert(this.negative === 0);
            return this.iushln(bits);
          };
          BN.prototype.iushrn = function iushrn(bits, hint, extended) {
            assert(typeof bits === "number" && bits >= 0);
            var h;
            if (hint) {
              h = (hint - (hint % 26)) / 26;
            } else {
              h = 0;
            }
            var r = bits % 26;
            var s = Math.min((bits - r) / 26, this.length);
            var mask = 67108863 ^ ((67108863 >>> r) << r);
            var maskedWords = extended;
            h -= s;
            h = Math.max(0, h);
            if (maskedWords) {
              for (var i = 0; i < s; i++) {
                maskedWords.words[i] = this.words[i];
              }
              maskedWords.length = s;
            }
            if (s === 0) {
            } else if (this.length > s) {
              this.length -= s;
              for (i = 0; i < this.length; i++) {
                this.words[i] = this.words[i + s];
              }
            } else {
              this.words[0] = 0;
              this.length = 1;
            }
            var carry = 0;
            for (i = this.length - 1; i >= 0 && (carry !== 0 || i >= h); i--) {
              var word = this.words[i] | 0;
              this.words[i] = (carry << (26 - r)) | (word >>> r);
              carry = word & mask;
            }
            if (maskedWords && carry !== 0) {
              maskedWords.words[maskedWords.length++] = carry;
            }
            if (this.length === 0) {
              this.words[0] = 0;
              this.length = 1;
            }
            return this.strip();
          };
          BN.prototype.ishrn = function ishrn(bits, hint, extended) {
            assert(this.negative === 0);
            return this.iushrn(bits, hint, extended);
          };
          BN.prototype.shln = function shln(bits) {
            return this.clone().ishln(bits);
          };
          BN.prototype.ushln = function ushln(bits) {
            return this.clone().iushln(bits);
          };
          BN.prototype.shrn = function shrn(bits) {
            return this.clone().ishrn(bits);
          };
          BN.prototype.ushrn = function ushrn(bits) {
            return this.clone().iushrn(bits);
          };
          BN.prototype.testn = function testn(bit) {
            assert(typeof bit === "number" && bit >= 0);
            var r = bit % 26;
            var s = (bit - r) / 26;
            var q = 1 << r;
            if (this.length <= s) return false;
            var w = this.words[s];
            return !!(w & q);
          };
          BN.prototype.imaskn = function imaskn(bits) {
            assert(typeof bits === "number" && bits >= 0);
            var r = bits % 26;
            var s = (bits - r) / 26;
            assert(this.negative === 0, "imaskn works only with positive numbers");
            if (this.length <= s) {
              return this;
            }
            if (r !== 0) {
              s++;
            }
            this.length = Math.min(s, this.length);
            if (r !== 0) {
              var mask = 67108863 ^ ((67108863 >>> r) << r);
              this.words[this.length - 1] &= mask;
            }
            return this.strip();
          };
          BN.prototype.maskn = function maskn(bits) {
            return this.clone().imaskn(bits);
          };
          BN.prototype.iaddn = function iaddn(num) {
            assert(typeof num === "number");
            assert(num < 67108864);
            if (num < 0) return this.isubn(-num);
            if (this.negative !== 0) {
              if (this.length === 1 && (this.words[0] | 0) < num) {
                this.words[0] = num - (this.words[0] | 0);
                this.negative = 0;
                return this;
              }
              this.negative = 0;
              this.isubn(num);
              this.negative = 1;
              return this;
            }
            return this._iaddn(num);
          };
          BN.prototype._iaddn = function _iaddn(num) {
            this.words[0] += num;
            for (var i = 0; i < this.length && this.words[i] >= 67108864; i++) {
              this.words[i] -= 67108864;
              if (i === this.length - 1) {
                this.words[i + 1] = 1;
              } else {
                this.words[i + 1]++;
              }
            }
            this.length = Math.max(this.length, i + 1);
            return this;
          };
          BN.prototype.isubn = function isubn(num) {
            assert(typeof num === "number");
            assert(num < 67108864);
            if (num < 0) return this.iaddn(-num);
            if (this.negative !== 0) {
              this.negative = 0;
              this.iaddn(num);
              this.negative = 1;
              return this;
            }
            this.words[0] -= num;
            if (this.length === 1 && this.words[0] < 0) {
              this.words[0] = -this.words[0];
              this.negative = 1;
            } else {
              for (var i = 0; i < this.length && this.words[i] < 0; i++) {
                this.words[i] += 67108864;
                this.words[i + 1] -= 1;
              }
            }
            return this.strip();
          };
          BN.prototype.addn = function addn(num) {
            return this.clone().iaddn(num);
          };
          BN.prototype.subn = function subn(num) {
            return this.clone().isubn(num);
          };
          BN.prototype.iabs = function iabs() {
            this.negative = 0;
            return this;
          };
          BN.prototype.abs = function abs() {
            return this.clone().iabs();
          };
          BN.prototype._ishlnsubmul = function _ishlnsubmul(num, mul, shift) {
            var len = num.length + shift;
            var i;
            this._expand(len);
            var w;
            var carry = 0;
            for (i = 0; i < num.length; i++) {
              w = (this.words[i + shift] | 0) + carry;
              var right = (num.words[i] | 0) * mul;
              w -= right & 67108863;
              carry = (w >> 26) - ((right / 67108864) | 0);
              this.words[i + shift] = w & 67108863;
            }
            for (; i < this.length - shift; i++) {
              w = (this.words[i + shift] | 0) + carry;
              carry = w >> 26;
              this.words[i + shift] = w & 67108863;
            }
            if (carry === 0) return this.strip();
            assert(carry === -1);
            carry = 0;
            for (i = 0; i < this.length; i++) {
              w = -(this.words[i] | 0) + carry;
              carry = w >> 26;
              this.words[i] = w & 67108863;
            }
            this.negative = 1;
            return this.strip();
          };
          BN.prototype._wordDiv = function _wordDiv(num, mode) {
            var shift = this.length - num.length;
            var a = this.clone();
            var b = num;
            var bhi = b.words[b.length - 1] | 0;
            var bhiBits = this._countBits(bhi);
            shift = 26 - bhiBits;
            if (shift !== 0) {
              b = b.ushln(shift);
              a.iushln(shift);
              bhi = b.words[b.length - 1] | 0;
            }
            var m = a.length - b.length;
            var q;
            if (mode !== "mod") {
              q = new BN(null);
              q.length = m + 1;
              q.words = new Array(q.length);
              for (var i = 0; i < q.length; i++) {
                q.words[i] = 0;
              }
            }
            var diff = a.clone()._ishlnsubmul(b, 1, m);
            if (diff.negative === 0) {
              a = diff;
              if (q) {
                q.words[m] = 1;
              }
            }
            for (var j = m - 1; j >= 0; j--) {
              var qj = (a.words[b.length + j] | 0) * 67108864 + (a.words[b.length + j - 1] | 0);
              qj = Math.min((qj / bhi) | 0, 67108863);
              a._ishlnsubmul(b, qj, j);
              while (a.negative !== 0) {
                qj--;
                a.negative = 0;
                a._ishlnsubmul(b, 1, j);
                if (!a.isZero()) {
                  a.negative ^= 1;
                }
              }
              if (q) {
                q.words[j] = qj;
              }
            }
            if (q) {
              q.strip();
            }
            a.strip();
            if (mode !== "div" && shift !== 0) {
              a.iushrn(shift);
            }
            return {
              div: q || null,
              mod: a,
            };
          };
          BN.prototype.divmod = function divmod(num, mode, positive) {
            assert(!num.isZero());
            if (this.isZero()) {
              return {
                div: new BN(0),
                mod: new BN(0),
              };
            }
            var div, mod, res;
            if (this.negative !== 0 && num.negative === 0) {
              res = this.neg().divmod(num, mode);
              if (mode !== "mod") {
                div = res.div.neg();
              }
              if (mode !== "div") {
                mod = res.mod.neg();
                if (positive && mod.negative !== 0) {
                  mod.iadd(num);
                }
              }
              return {
                div,
                mod,
              };
            }
            if (this.negative === 0 && num.negative !== 0) {
              res = this.divmod(num.neg(), mode);
              if (mode !== "mod") {
                div = res.div.neg();
              }
              return {
                div,
                mod: res.mod,
              };
            }
            if ((this.negative & num.negative) !== 0) {
              res = this.neg().divmod(num.neg(), mode);
              if (mode !== "div") {
                mod = res.mod.neg();
                if (positive && mod.negative !== 0) {
                  mod.isub(num);
                }
              }
              return {
                div: res.div,
                mod,
              };
            }
            if (num.length > this.length || this.cmp(num) < 0) {
              return {
                div: new BN(0),
                mod: this,
              };
            }
            if (num.length === 1) {
              if (mode === "div") {
                return {
                  div: this.divn(num.words[0]),
                  mod: null,
                };
              }
              if (mode === "mod") {
                return {
                  div: null,
                  mod: new BN(this.modn(num.words[0])),
                };
              }
              return {
                div: this.divn(num.words[0]),
                mod: new BN(this.modn(num.words[0])),
              };
            }
            return this._wordDiv(num, mode);
          };
          BN.prototype.div = function div(num) {
            return this.divmod(num, "div", false).div;
          };
          BN.prototype.mod = function mod(num) {
            return this.divmod(num, "mod", false).mod;
          };
          BN.prototype.umod = function umod(num) {
            return this.divmod(num, "mod", true).mod;
          };
          BN.prototype.divRound = function divRound(num) {
            var dm = this.divmod(num);
            if (dm.mod.isZero()) return dm.div;
            var mod = dm.div.negative !== 0 ? dm.mod.isub(num) : dm.mod;
            var half = num.ushrn(1);
            var r2 = num.andln(1);
            var cmp = mod.cmp(half);
            if (cmp < 0 || (r2 === 1 && cmp === 0)) return dm.div;
            return dm.div.negative !== 0 ? dm.div.isubn(1) : dm.div.iaddn(1);
          };
          BN.prototype.modn = function modn(num) {
            assert(num <= 67108863);
            var p = (1 << 26) % num;
            var acc = 0;
            for (var i = this.length - 1; i >= 0; i--) {
              acc = (p * acc + (this.words[i] | 0)) % num;
            }
            return acc;
          };
          BN.prototype.idivn = function idivn(num) {
            assert(num <= 67108863);
            var carry = 0;
            for (var i = this.length - 1; i >= 0; i--) {
              var w = (this.words[i] | 0) + carry * 67108864;
              this.words[i] = (w / num) | 0;
              carry = w % num;
            }
            return this.strip();
          };
          BN.prototype.divn = function divn(num) {
            return this.clone().idivn(num);
          };
          BN.prototype.egcd = function egcd(p) {
            assert(p.negative === 0);
            assert(!p.isZero());
            var x = this;
            var y = p.clone();
            if (x.negative !== 0) {
              x = x.umod(p);
            } else {
              x = x.clone();
            }
            var A = new BN(1);
            var B = new BN(0);
            var C = new BN(0);
            var D = new BN(1);
            var g = 0;
            while (x.isEven() && y.isEven()) {
              x.iushrn(1);
              y.iushrn(1);
              ++g;
            }
            var yp = y.clone();
            var xp = x.clone();
            while (!x.isZero()) {
              for (var i = 0, im = 1; (x.words[0] & im) === 0 && i < 26; ++i, im <<= 1);
              if (i > 0) {
                x.iushrn(i);
                while (i-- > 0) {
                  if (A.isOdd() || B.isOdd()) {
                    A.iadd(yp);
                    B.isub(xp);
                  }
                  A.iushrn(1);
                  B.iushrn(1);
                }
              }
              for (var j = 0, jm = 1; (y.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1);
              if (j > 0) {
                y.iushrn(j);
                while (j-- > 0) {
                  if (C.isOdd() || D.isOdd()) {
                    C.iadd(yp);
                    D.isub(xp);
                  }
                  C.iushrn(1);
                  D.iushrn(1);
                }
              }
              if (x.cmp(y) >= 0) {
                x.isub(y);
                A.isub(C);
                B.isub(D);
              } else {
                y.isub(x);
                C.isub(A);
                D.isub(B);
              }
            }
            return {
              a: C,
              b: D,
              gcd: y.iushln(g),
            };
          };
          BN.prototype._invmp = function _invmp(p) {
            assert(p.negative === 0);
            assert(!p.isZero());
            var a = this;
            var b = p.clone();
            if (a.negative !== 0) {
              a = a.umod(p);
            } else {
              a = a.clone();
            }
            var x1 = new BN(1);
            var x2 = new BN(0);
            var delta = b.clone();
            while (a.cmpn(1) > 0 && b.cmpn(1) > 0) {
              for (var i = 0, im = 1; (a.words[0] & im) === 0 && i < 26; ++i, im <<= 1);
              if (i > 0) {
                a.iushrn(i);
                while (i-- > 0) {
                  if (x1.isOdd()) {
                    x1.iadd(delta);
                  }
                  x1.iushrn(1);
                }
              }
              for (var j = 0, jm = 1; (b.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1);
              if (j > 0) {
                b.iushrn(j);
                while (j-- > 0) {
                  if (x2.isOdd()) {
                    x2.iadd(delta);
                  }
                  x2.iushrn(1);
                }
              }
              if (a.cmp(b) >= 0) {
                a.isub(b);
                x1.isub(x2);
              } else {
                b.isub(a);
                x2.isub(x1);
              }
            }
            var res;
            if (a.cmpn(1) === 0) {
              res = x1;
            } else {
              res = x2;
            }
            if (res.cmpn(0) < 0) {
              res.iadd(p);
            }
            return res;
          };
          BN.prototype.gcd = function gcd(num) {
            if (this.isZero()) return num.abs();
            if (num.isZero()) return this.abs();
            var a = this.clone();
            var b = num.clone();
            a.negative = 0;
            b.negative = 0;
            for (var shift = 0; a.isEven() && b.isEven(); shift++) {
              a.iushrn(1);
              b.iushrn(1);
            }
            do {
              while (a.isEven()) {
                a.iushrn(1);
              }
              while (b.isEven()) {
                b.iushrn(1);
              }
              var r = a.cmp(b);
              if (r < 0) {
                var t = a;
                a = b;
                b = t;
              } else if (r === 0 || b.cmpn(1) === 0) {
                break;
              }
              a.isub(b);
            } while (true);
            return b.iushln(shift);
          };
          BN.prototype.invm = function invm(num) {
            return this.egcd(num).a.umod(num);
          };
          BN.prototype.isEven = function isEven() {
            return (this.words[0] & 1) === 0;
          };
          BN.prototype.isOdd = function isOdd() {
            return (this.words[0] & 1) === 1;
          };
          BN.prototype.andln = function andln(num) {
            return this.words[0] & num;
          };
          BN.prototype.bincn = function bincn(bit) {
            assert(typeof bit === "number");
            var r = bit % 26;
            var s = (bit - r) / 26;
            var q = 1 << r;
            if (this.length <= s) {
              this._expand(s + 1);
              this.words[s] |= q;
              return this;
            }
            var carry = q;
            for (var i = s; carry !== 0 && i < this.length; i++) {
              var w = this.words[i] | 0;
              w += carry;
              carry = w >>> 26;
              w &= 67108863;
              this.words[i] = w;
            }
            if (carry !== 0) {
              this.words[i] = carry;
              this.length++;
            }
            return this;
          };
          BN.prototype.isZero = function isZero() {
            return this.length === 1 && this.words[0] === 0;
          };
          BN.prototype.cmpn = function cmpn(num) {
            var negative = num < 0;
            if (this.negative !== 0 && !negative) return -1;
            if (this.negative === 0 && negative) return 1;
            this.strip();
            var res;
            if (this.length > 1) {
              res = 1;
            } else {
              if (negative) {
                num = -num;
              }
              assert(num <= 67108863, "Number is too big");
              var w = this.words[0] | 0;
              res = w === num ? 0 : w < num ? -1 : 1;
            }
            if (this.negative !== 0) return -res | 0;
            return res;
          };
          BN.prototype.cmp = function cmp(num) {
            if (this.negative !== 0 && num.negative === 0) return -1;
            if (this.negative === 0 && num.negative !== 0) return 1;
            var res = this.ucmp(num);
            if (this.negative !== 0) return -res | 0;
            return res;
          };
          BN.prototype.ucmp = function ucmp(num) {
            if (this.length > num.length) return 1;
            if (this.length < num.length) return -1;
            var res = 0;
            for (var i = this.length - 1; i >= 0; i--) {
              var a = this.words[i] | 0;
              var b = num.words[i] | 0;
              if (a === b) continue;
              if (a < b) {
                res = -1;
              } else if (a > b) {
                res = 1;
              }
              break;
            }
            return res;
          };
          BN.prototype.gtn = function gtn(num) {
            return this.cmpn(num) === 1;
          };
          BN.prototype.gt = function gt(num) {
            return this.cmp(num) === 1;
          };
          BN.prototype.gten = function gten(num) {
            return this.cmpn(num) >= 0;
          };
          BN.prototype.gte = function gte(num) {
            return this.cmp(num) >= 0;
          };
          BN.prototype.ltn = function ltn(num) {
            return this.cmpn(num) === -1;
          };
          BN.prototype.lt = function lt(num) {
            return this.cmp(num) === -1;
          };
          BN.prototype.lten = function lten(num) {
            return this.cmpn(num) <= 0;
          };
          BN.prototype.lte = function lte(num) {
            return this.cmp(num) <= 0;
          };
          BN.prototype.eqn = function eqn(num) {
            return this.cmpn(num) === 0;
          };
          BN.prototype.eq = function eq(num) {
            return this.cmp(num) === 0;
          };
          BN.red = function red(num) {
            return new Red(num);
          };
          BN.prototype.toRed = function toRed(ctx) {
            assert(!this.red, "Already a number in reduction context");
            assert(this.negative === 0, "red works only with positives");
            return ctx.convertTo(this)._forceRed(ctx);
          };
          BN.prototype.fromRed = function fromRed() {
            assert(this.red, "fromRed works only with numbers in reduction context");
            return this.red.convertFrom(this);
          };
          BN.prototype._forceRed = function _forceRed(ctx) {
            this.red = ctx;
            return this;
          };
          BN.prototype.forceRed = function forceRed(ctx) {
            assert(!this.red, "Already a number in reduction context");
            return this._forceRed(ctx);
          };
          BN.prototype.redAdd = function redAdd(num) {
            assert(this.red, "redAdd works only with red numbers");
            return this.red.add(this, num);
          };
          BN.prototype.redIAdd = function redIAdd(num) {
            assert(this.red, "redIAdd works only with red numbers");
            return this.red.iadd(this, num);
          };
          BN.prototype.redSub = function redSub(num) {
            assert(this.red, "redSub works only with red numbers");
            return this.red.sub(this, num);
          };
          BN.prototype.redISub = function redISub(num) {
            assert(this.red, "redISub works only with red numbers");
            return this.red.isub(this, num);
          };
          BN.prototype.redShl = function redShl(num) {
            assert(this.red, "redShl works only with red numbers");
            return this.red.shl(this, num);
          };
          BN.prototype.redMul = function redMul(num) {
            assert(this.red, "redMul works only with red numbers");
            this.red._verify2(this, num);
            return this.red.mul(this, num);
          };
          BN.prototype.redIMul = function redIMul(num) {
            assert(this.red, "redMul works only with red numbers");
            this.red._verify2(this, num);
            return this.red.imul(this, num);
          };
          BN.prototype.redSqr = function redSqr() {
            assert(this.red, "redSqr works only with red numbers");
            this.red._verify1(this);
            return this.red.sqr(this);
          };
          BN.prototype.redISqr = function redISqr() {
            assert(this.red, "redISqr works only with red numbers");
            this.red._verify1(this);
            return this.red.isqr(this);
          };
          BN.prototype.redSqrt = function redSqrt() {
            assert(this.red, "redSqrt works only with red numbers");
            this.red._verify1(this);
            return this.red.sqrt(this);
          };
          BN.prototype.redInvm = function redInvm() {
            assert(this.red, "redInvm works only with red numbers");
            this.red._verify1(this);
            return this.red.invm(this);
          };
          BN.prototype.redNeg = function redNeg() {
            assert(this.red, "redNeg works only with red numbers");
            this.red._verify1(this);
            return this.red.neg(this);
          };
          BN.prototype.redPow = function redPow(num) {
            assert(this.red && !num.red, "redPow(normalNum)");
            this.red._verify1(this);
            return this.red.pow(this, num);
          };
          var primes = {
            k256: null,
            p224: null,
            p192: null,
            p25519: null,
          };
          function MPrime(name, p) {
            this.name = name;
            this.p = new BN(p, 16);
            this.n = this.p.bitLength();
            this.k = new BN(1).iushln(this.n).isub(this.p);
            this.tmp = this._tmp();
          }
          MPrime.prototype._tmp = function _tmp() {
            var tmp = new BN(null);
            tmp.words = new Array(Math.ceil(this.n / 13));
            return tmp;
          };
          MPrime.prototype.ireduce = function ireduce(num) {
            var r = num;
            var rlen;
            do {
              this.split(r, this.tmp);
              r = this.imulK(r);
              r = r.iadd(this.tmp);
              rlen = r.bitLength();
            } while (rlen > this.n);
            var cmp = rlen < this.n ? -1 : r.ucmp(this.p);
            if (cmp === 0) {
              r.words[0] = 0;
              r.length = 1;
            } else if (cmp > 0) {
              r.isub(this.p);
            } else {
              if (r.strip !== void 0) {
                r.strip();
              } else {
                r._strip();
              }
            }
            return r;
          };
          MPrime.prototype.split = function split(input, out) {
            input.iushrn(this.n, 0, out);
          };
          MPrime.prototype.imulK = function imulK(num) {
            return num.imul(this.k);
          };
          function K256() {
            MPrime.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f");
          }
          inherits(K256, MPrime);
          K256.prototype.split = function split(input, output) {
            var mask = 4194303;
            var outLen = Math.min(input.length, 9);
            for (var i = 0; i < outLen; i++) {
              output.words[i] = input.words[i];
            }
            output.length = outLen;
            if (input.length <= 9) {
              input.words[0] = 0;
              input.length = 1;
              return;
            }
            var prev = input.words[9];
            output.words[output.length++] = prev & mask;
            for (i = 10; i < input.length; i++) {
              var next = input.words[i] | 0;
              input.words[i - 10] = ((next & mask) << 4) | (prev >>> 22);
              prev = next;
            }
            prev >>>= 22;
            input.words[i - 10] = prev;
            if (prev === 0 && input.length > 10) {
              input.length -= 10;
            } else {
              input.length -= 9;
            }
          };
          K256.prototype.imulK = function imulK(num) {
            num.words[num.length] = 0;
            num.words[num.length + 1] = 0;
            num.length += 2;
            var lo = 0;
            for (var i = 0; i < num.length; i++) {
              var w = num.words[i] | 0;
              lo += w * 977;
              num.words[i] = lo & 67108863;
              lo = w * 64 + ((lo / 67108864) | 0);
            }
            if (num.words[num.length - 1] === 0) {
              num.length--;
              if (num.words[num.length - 1] === 0) {
                num.length--;
              }
            }
            return num;
          };
          function P224() {
            MPrime.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001");
          }
          inherits(P224, MPrime);
          function P192() {
            MPrime.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff");
          }
          inherits(P192, MPrime);
          function P25519() {
            MPrime.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed");
          }
          inherits(P25519, MPrime);
          P25519.prototype.imulK = function imulK(num) {
            var carry = 0;
            for (var i = 0; i < num.length; i++) {
              var hi = (num.words[i] | 0) * 19 + carry;
              var lo = hi & 67108863;
              hi >>>= 26;
              num.words[i] = lo;
              carry = hi;
            }
            if (carry !== 0) {
              num.words[num.length++] = carry;
            }
            return num;
          };
          BN._prime = function prime(name) {
            if (primes[name]) return primes[name];
            var prime2;
            if (name === "k256") {
              prime2 = new K256();
            } else if (name === "p224") {
              prime2 = new P224();
            } else if (name === "p192") {
              prime2 = new P192();
            } else if (name === "p25519") {
              prime2 = new P25519();
            } else {
              throw new Error("Unknown prime " + name);
            }
            primes[name] = prime2;
            return prime2;
          };
          function Red(m) {
            if (typeof m === "string") {
              var prime = BN._prime(m);
              this.m = prime.p;
              this.prime = prime;
            } else {
              assert(m.gtn(1), "modulus must be greater than 1");
              this.m = m;
              this.prime = null;
            }
          }
          Red.prototype._verify1 = function _verify1(a) {
            assert(a.negative === 0, "red works only with positives");
            assert(a.red, "red works only with red numbers");
          };
          Red.prototype._verify2 = function _verify2(a, b) {
            assert((a.negative | b.negative) === 0, "red works only with positives");
            assert(a.red && a.red === b.red, "red works only with red numbers");
          };
          Red.prototype.imod = function imod(a) {
            if (this.prime) return this.prime.ireduce(a)._forceRed(this);
            return a.umod(this.m)._forceRed(this);
          };
          Red.prototype.neg = function neg(a) {
            if (a.isZero()) {
              return a.clone();
            }
            return this.m.sub(a)._forceRed(this);
          };
          Red.prototype.add = function add(a, b) {
            this._verify2(a, b);
            var res = a.add(b);
            if (res.cmp(this.m) >= 0) {
              res.isub(this.m);
            }
            return res._forceRed(this);
          };
          Red.prototype.iadd = function iadd(a, b) {
            this._verify2(a, b);
            var res = a.iadd(b);
            if (res.cmp(this.m) >= 0) {
              res.isub(this.m);
            }
            return res;
          };
          Red.prototype.sub = function sub(a, b) {
            this._verify2(a, b);
            var res = a.sub(b);
            if (res.cmpn(0) < 0) {
              res.iadd(this.m);
            }
            return res._forceRed(this);
          };
          Red.prototype.isub = function isub(a, b) {
            this._verify2(a, b);
            var res = a.isub(b);
            if (res.cmpn(0) < 0) {
              res.iadd(this.m);
            }
            return res;
          };
          Red.prototype.shl = function shl(a, num) {
            this._verify1(a);
            return this.imod(a.ushln(num));
          };
          Red.prototype.imul = function imul(a, b) {
            this._verify2(a, b);
            return this.imod(a.imul(b));
          };
          Red.prototype.mul = function mul(a, b) {
            this._verify2(a, b);
            return this.imod(a.mul(b));
          };
          Red.prototype.isqr = function isqr(a) {
            return this.imul(a, a.clone());
          };
          Red.prototype.sqr = function sqr(a) {
            return this.mul(a, a);
          };
          Red.prototype.sqrt = function sqrt(a) {
            if (a.isZero()) return a.clone();
            var mod3 = this.m.andln(3);
            assert(mod3 % 2 === 1);
            if (mod3 === 3) {
              var pow = this.m.add(new BN(1)).iushrn(2);
              return this.pow(a, pow);
            }
            var q = this.m.subn(1);
            var s = 0;
            while (!q.isZero() && q.andln(1) === 0) {
              s++;
              q.iushrn(1);
            }
            assert(!q.isZero());
            var one = new BN(1).toRed(this);
            var nOne = one.redNeg();
            var lpow = this.m.subn(1).iushrn(1);
            var z = this.m.bitLength();
            z = new BN(2 * z * z).toRed(this);
            while (this.pow(z, lpow).cmp(nOne) !== 0) {
              z.redIAdd(nOne);
            }
            var c = this.pow(z, q);
            var r = this.pow(a, q.addn(1).iushrn(1));
            var t = this.pow(a, q);
            var m = s;
            while (t.cmp(one) !== 0) {
              var tmp = t;
              for (var i = 0; tmp.cmp(one) !== 0; i++) {
                tmp = tmp.redSqr();
              }
              assert(i < m);
              var b = this.pow(c, new BN(1).iushln(m - i - 1));
              r = r.redMul(b);
              c = b.redSqr();
              t = t.redMul(c);
              m = i;
            }
            return r;
          };
          Red.prototype.invm = function invm(a) {
            var inv = a._invmp(this.m);
            if (inv.negative !== 0) {
              inv.negative = 0;
              return this.imod(inv).redNeg();
            } else {
              return this.imod(inv);
            }
          };
          Red.prototype.pow = function pow(a, num) {
            if (num.isZero()) return new BN(1).toRed(this);
            if (num.cmpn(1) === 0) return a.clone();
            var windowSize = 4;
            var wnd = new Array(1 << windowSize);
            wnd[0] = new BN(1).toRed(this);
            wnd[1] = a;
            for (var i = 2; i < wnd.length; i++) {
              wnd[i] = this.mul(wnd[i - 1], a);
            }
            var res = wnd[0];
            var current = 0;
            var currentLen = 0;
            var start = num.bitLength() % 26;
            if (start === 0) {
              start = 26;
            }
            for (i = num.length - 1; i >= 0; i--) {
              var word = num.words[i];
              for (var j = start - 1; j >= 0; j--) {
                var bit = (word >> j) & 1;
                if (res !== wnd[0]) {
                  res = this.sqr(res);
                }
                if (bit === 0 && current === 0) {
                  currentLen = 0;
                  continue;
                }
                current <<= 1;
                current |= bit;
                currentLen++;
                if (currentLen !== windowSize && (i !== 0 || j !== 0)) continue;
                res = this.mul(res, wnd[current]);
                currentLen = 0;
                current = 0;
              }
              start = 26;
            }
            return res;
          };
          Red.prototype.convertTo = function convertTo(num) {
            var r = num.umod(this.m);
            return r === num ? r.clone() : r;
          };
          Red.prototype.convertFrom = function convertFrom(num) {
            var res = num.clone();
            res.red = null;
            return res;
          };
          BN.mont = function mont(num) {
            return new Mont(num);
          };
          function Mont(m) {
            Red.call(this, m);
            this.shift = this.m.bitLength();
            if (this.shift % 26 !== 0) {
              this.shift += 26 - (this.shift % 26);
            }
            this.r = new BN(1).iushln(this.shift);
            this.r2 = this.imod(this.r.sqr());
            this.rinv = this.r._invmp(this.m);
            this.minv = this.rinv.mul(this.r).isubn(1).div(this.m);
            this.minv = this.minv.umod(this.r);
            this.minv = this.r.sub(this.minv);
          }
          inherits(Mont, Red);
          Mont.prototype.convertTo = function convertTo(num) {
            return this.imod(num.ushln(this.shift));
          };
          Mont.prototype.convertFrom = function convertFrom(num) {
            var r = this.imod(num.mul(this.rinv));
            r.red = null;
            return r;
          };
          Mont.prototype.imul = function imul(a, b) {
            if (a.isZero() || b.isZero()) {
              a.words[0] = 0;
              a.length = 1;
              return a;
            }
            var t = a.imul(b);
            var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
            var u = t.isub(c).iushrn(this.shift);
            var res = u;
            if (u.cmp(this.m) >= 0) {
              res = u.isub(this.m);
            } else if (u.cmpn(0) < 0) {
              res = u.iadd(this.m);
            }
            return res._forceRed(this);
          };
          Mont.prototype.mul = function mul(a, b) {
            if (a.isZero() || b.isZero()) return new BN(0)._forceRed(this);
            var t = a.mul(b);
            var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
            var u = t.isub(c).iushrn(this.shift);
            var res = u;
            if (u.cmp(this.m) >= 0) {
              res = u.isub(this.m);
            } else if (u.cmpn(0) < 0) {
              res = u.iadd(this.m);
            }
            return res._forceRed(this);
          };
          Mont.prototype.invm = function invm(a) {
            var res = this.imod(a._invmp(this.m).mul(this.r2));
            return res._forceRed(this);
          };
        })(typeof module === "undefined" || module, exports);
      },
    });
    require_minimalistic_assert = __commonJS({
      "../../node_modules/minimalistic-assert/index.js"(exports, module) {
        module.exports = assert;
        function assert(val, msg) {
          if (!val) throw new Error(msg || "Assertion failed");
        }
        assert.equal = function assertEqual(l, r, msg) {
          if (l != r) throw new Error(msg || "Assertion failed: " + l + " != " + r);
        };
      },
    });
    require_utils = __commonJS({
      "../../node_modules/minimalistic-crypto-utils/lib/utils.js"(exports) {
        "use strict";
        var utils = exports;
        function toArray(msg, enc) {
          if (Array.isArray(msg)) return msg.slice();
          if (!msg) return [];
          var res = [];
          if (typeof msg !== "string") {
            for (var i = 0; i < msg.length; i++) res[i] = msg[i] | 0;
            return res;
          }
          if (enc === "hex") {
            msg = msg.replace(/[^a-z0-9]+/gi, "");
            if (msg.length % 2 !== 0) msg = "0" + msg;
            for (var i = 0; i < msg.length; i += 2) res.push(parseInt(msg[i] + msg[i + 1], 16));
          } else {
            for (var i = 0; i < msg.length; i++) {
              var c = msg.charCodeAt(i);
              var hi = c >> 8;
              var lo = c & 255;
              if (hi) res.push(hi, lo);
              else res.push(lo);
            }
          }
          return res;
        }
        utils.toArray = toArray;
        function zero2(word) {
          if (word.length === 1) return "0" + word;
          else return word;
        }
        utils.zero2 = zero2;
        function toHex2(msg) {
          var res = "";
          for (var i = 0; i < msg.length; i++) res += zero2(msg[i].toString(16));
          return res;
        }
        utils.toHex = toHex2;
        utils.encode = function encode(arr, enc) {
          if (enc === "hex") return toHex2(arr);
          else return arr;
        };
      },
    });
    require_utils2 = __commonJS({
      "../../node_modules/elliptic/lib/elliptic/utils.js"(exports) {
        "use strict";
        var utils = exports;
        var BN = require_bn();
        var minAssert = require_minimalistic_assert();
        var minUtils = require_utils();
        utils.assert = minAssert;
        utils.toArray = minUtils.toArray;
        utils.zero2 = minUtils.zero2;
        utils.toHex = minUtils.toHex;
        utils.encode = minUtils.encode;
        function getNAF(num, w, bits) {
          var naf = new Array(Math.max(num.bitLength(), bits) + 1);
          var i;
          for (i = 0; i < naf.length; i += 1) {
            naf[i] = 0;
          }
          var ws = 1 << (w + 1);
          var k = num.clone();
          for (i = 0; i < naf.length; i++) {
            var z;
            var mod = k.andln(ws - 1);
            if (k.isOdd()) {
              if (mod > (ws >> 1) - 1) z = (ws >> 1) - mod;
              else z = mod;
              k.isubn(z);
            } else {
              z = 0;
            }
            naf[i] = z;
            k.iushrn(1);
          }
          return naf;
        }
        utils.getNAF = getNAF;
        function getJSF(k1, k2) {
          var jsf = [[], []];
          k1 = k1.clone();
          k2 = k2.clone();
          var d1 = 0;
          var d2 = 0;
          var m8;
          while (k1.cmpn(-d1) > 0 || k2.cmpn(-d2) > 0) {
            var m14 = (k1.andln(3) + d1) & 3;
            var m24 = (k2.andln(3) + d2) & 3;
            if (m14 === 3) m14 = -1;
            if (m24 === 3) m24 = -1;
            var u1;
            if ((m14 & 1) === 0) {
              u1 = 0;
            } else {
              m8 = (k1.andln(7) + d1) & 7;
              if ((m8 === 3 || m8 === 5) && m24 === 2) u1 = -m14;
              else u1 = m14;
            }
            jsf[0].push(u1);
            var u2;
            if ((m24 & 1) === 0) {
              u2 = 0;
            } else {
              m8 = (k2.andln(7) + d2) & 7;
              if ((m8 === 3 || m8 === 5) && m14 === 2) u2 = -m24;
              else u2 = m24;
            }
            jsf[1].push(u2);
            if (2 * d1 === u1 + 1) d1 = 1 - d1;
            if (2 * d2 === u2 + 1) d2 = 1 - d2;
            k1.iushrn(1);
            k2.iushrn(1);
          }
          return jsf;
        }
        utils.getJSF = getJSF;
        function cachedProperty(obj, name, computer) {
          var key = "_" + name;
          obj.prototype[name] = function cachedProperty2() {
            return this[key] !== void 0 ? this[key] : (this[key] = computer.call(this));
          };
        }
        utils.cachedProperty = cachedProperty;
        function parseBytes(bytes) {
          return typeof bytes === "string" ? utils.toArray(bytes, "hex") : bytes;
        }
        utils.parseBytes = parseBytes;
        function intFromLE(bytes) {
          return new BN(bytes, "hex", "le");
        }
        utils.intFromLE = intFromLE;
      },
    });
    require_crypto = __commonJS({
      "(disabled):crypto"() {},
    });
    require_brorand = __commonJS({
      "../../node_modules/brorand/index.js"(exports, module) {
        var r;
        module.exports = function rand(len) {
          if (!r) r = new Rand(null);
          return r.generate(len);
        };
        function Rand(rand) {
          this.rand = rand;
        }
        module.exports.Rand = Rand;
        Rand.prototype.generate = function generate(len) {
          return this._rand(len);
        };
        Rand.prototype._rand = function _rand(n) {
          if (this.rand.getBytes) return this.rand.getBytes(n);
          var res = new Uint8Array(n);
          for (var i = 0; i < res.length; i++) res[i] = this.rand.getByte();
          return res;
        };
        if (typeof self === "object") {
          if (self.crypto && self.crypto.getRandomValues) {
            Rand.prototype._rand = function _rand(n) {
              var arr = new Uint8Array(n);
              self.crypto.getRandomValues(arr);
              return arr;
            };
          } else if (self.msCrypto && self.msCrypto.getRandomValues) {
            Rand.prototype._rand = function _rand(n) {
              var arr = new Uint8Array(n);
              self.msCrypto.getRandomValues(arr);
              return arr;
            };
          } else if (typeof window === "object") {
            Rand.prototype._rand = function () {
              throw new Error("Not implemented yet");
            };
          }
        } else {
          try {
            crypto = require_crypto();
            if (typeof crypto.randomBytes !== "function") throw new Error("Not supported");
            Rand.prototype._rand = function _rand(n) {
              return crypto.randomBytes(n);
            };
          } catch (e) {}
        }
        var crypto;
      },
    });
    require_base = __commonJS({
      "../../node_modules/elliptic/lib/elliptic/curve/base.js"(exports, module) {
        "use strict";
        var BN = require_bn();
        var utils = require_utils2();
        var getNAF = utils.getNAF;
        var getJSF = utils.getJSF;
        var assert = utils.assert;
        function BaseCurve(type, conf) {
          this.type = type;
          this.p = new BN(conf.p, 16);
          this.red = conf.prime ? BN.red(conf.prime) : BN.mont(this.p);
          this.zero = new BN(0).toRed(this.red);
          this.one = new BN(1).toRed(this.red);
          this.two = new BN(2).toRed(this.red);
          this.n = conf.n && new BN(conf.n, 16);
          this.g = conf.g && this.pointFromJSON(conf.g, conf.gRed);
          this._wnafT1 = new Array(4);
          this._wnafT2 = new Array(4);
          this._wnafT3 = new Array(4);
          this._wnafT4 = new Array(4);
          this._bitLength = this.n ? this.n.bitLength() : 0;
          var adjustCount = this.n && this.p.div(this.n);
          if (!adjustCount || adjustCount.cmpn(100) > 0) {
            this.redN = null;
          } else {
            this._maxwellTrick = true;
            this.redN = this.n.toRed(this.red);
          }
        }
        module.exports = BaseCurve;
        BaseCurve.prototype.point = function point() {
          throw new Error("Not implemented");
        };
        BaseCurve.prototype.validate = function validate2() {
          throw new Error("Not implemented");
        };
        BaseCurve.prototype._fixedNafMul = function _fixedNafMul(p, k) {
          assert(p.precomputed);
          var doubles = p._getDoubles();
          var naf = getNAF(k, 1, this._bitLength);
          var I = (1 << (doubles.step + 1)) - (doubles.step % 2 === 0 ? 2 : 1);
          I /= 3;
          var repr = [];
          var j;
          var nafW;
          for (j = 0; j < naf.length; j += doubles.step) {
            nafW = 0;
            for (var l = j + doubles.step - 1; l >= j; l--) nafW = (nafW << 1) + naf[l];
            repr.push(nafW);
          }
          var a = this.jpoint(null, null, null);
          var b = this.jpoint(null, null, null);
          for (var i = I; i > 0; i--) {
            for (j = 0; j < repr.length; j++) {
              nafW = repr[j];
              if (nafW === i) b = b.mixedAdd(doubles.points[j]);
              else if (nafW === -i) b = b.mixedAdd(doubles.points[j].neg());
            }
            a = a.add(b);
          }
          return a.toP();
        };
        BaseCurve.prototype._wnafMul = function _wnafMul(p, k) {
          var w = 4;
          var nafPoints = p._getNAFPoints(w);
          w = nafPoints.wnd;
          var wnd = nafPoints.points;
          var naf = getNAF(k, w, this._bitLength);
          var acc = this.jpoint(null, null, null);
          for (var i = naf.length - 1; i >= 0; i--) {
            for (var l = 0; i >= 0 && naf[i] === 0; i--) l++;
            if (i >= 0) l++;
            acc = acc.dblp(l);
            if (i < 0) break;
            var z = naf[i];
            assert(z !== 0);
            if (p.type === "affine") {
              if (z > 0) acc = acc.mixedAdd(wnd[(z - 1) >> 1]);
              else acc = acc.mixedAdd(wnd[(-z - 1) >> 1].neg());
            } else {
              if (z > 0) acc = acc.add(wnd[(z - 1) >> 1]);
              else acc = acc.add(wnd[(-z - 1) >> 1].neg());
            }
          }
          return p.type === "affine" ? acc.toP() : acc;
        };
        BaseCurve.prototype._wnafMulAdd = function _wnafMulAdd(defW, points, coeffs, len, jacobianResult) {
          var wndWidth = this._wnafT1;
          var wnd = this._wnafT2;
          var naf = this._wnafT3;
          var max = 0;
          var i;
          var j;
          var p;
          for (i = 0; i < len; i++) {
            p = points[i];
            var nafPoints = p._getNAFPoints(defW);
            wndWidth[i] = nafPoints.wnd;
            wnd[i] = nafPoints.points;
          }
          for (i = len - 1; i >= 1; i -= 2) {
            var a = i - 1;
            var b = i;
            if (wndWidth[a] !== 1 || wndWidth[b] !== 1) {
              naf[a] = getNAF(coeffs[a], wndWidth[a], this._bitLength);
              naf[b] = getNAF(coeffs[b], wndWidth[b], this._bitLength);
              max = Math.max(naf[a].length, max);
              max = Math.max(naf[b].length, max);
              continue;
            }
            var comb = [points[a], null, null, points[b]];
            if (points[a].y.cmp(points[b].y) === 0) {
              comb[1] = points[a].add(points[b]);
              comb[2] = points[a].toJ().mixedAdd(points[b].neg());
            } else if (points[a].y.cmp(points[b].y.redNeg()) === 0) {
              comb[1] = points[a].toJ().mixedAdd(points[b]);
              comb[2] = points[a].add(points[b].neg());
            } else {
              comb[1] = points[a].toJ().mixedAdd(points[b]);
              comb[2] = points[a].toJ().mixedAdd(points[b].neg());
            }
            var index = [-3, -1, -5, -7, 0, 7, 5, 1, 3];
            var jsf = getJSF(coeffs[a], coeffs[b]);
            max = Math.max(jsf[0].length, max);
            naf[a] = new Array(max);
            naf[b] = new Array(max);
            for (j = 0; j < max; j++) {
              var ja = jsf[0][j] | 0;
              var jb = jsf[1][j] | 0;
              naf[a][j] = index[(ja + 1) * 3 + (jb + 1)];
              naf[b][j] = 0;
              wnd[a] = comb;
            }
          }
          var acc = this.jpoint(null, null, null);
          var tmp = this._wnafT4;
          for (i = max; i >= 0; i--) {
            var k = 0;
            while (i >= 0) {
              var zero = true;
              for (j = 0; j < len; j++) {
                tmp[j] = naf[j][i] | 0;
                if (tmp[j] !== 0) zero = false;
              }
              if (!zero) break;
              k++;
              i--;
            }
            if (i >= 0) k++;
            acc = acc.dblp(k);
            if (i < 0) break;
            for (j = 0; j < len; j++) {
              var z = tmp[j];
              p;
              if (z === 0) continue;
              else if (z > 0) p = wnd[j][(z - 1) >> 1];
              else if (z < 0) p = wnd[j][(-z - 1) >> 1].neg();
              if (p.type === "affine") acc = acc.mixedAdd(p);
              else acc = acc.add(p);
            }
          }
          for (i = 0; i < len; i++) wnd[i] = null;
          if (jacobianResult) return acc;
          else return acc.toP();
        };
        function BasePoint(curve, type) {
          this.curve = curve;
          this.type = type;
          this.precomputed = null;
        }
        BaseCurve.BasePoint = BasePoint;
        BasePoint.prototype.eq = function eq() {
          throw new Error("Not implemented");
        };
        BasePoint.prototype.validate = function validate2() {
          return this.curve.validate(this);
        };
        BaseCurve.prototype.decodePoint = function decodePoint(bytes, enc) {
          bytes = utils.toArray(bytes, enc);
          var len = this.p.byteLength();
          if ((bytes[0] === 4 || bytes[0] === 6 || bytes[0] === 7) && bytes.length - 1 === 2 * len) {
            if (bytes[0] === 6) assert(bytes[bytes.length - 1] % 2 === 0);
            else if (bytes[0] === 7) assert(bytes[bytes.length - 1] % 2 === 1);
            var res = this.point(bytes.slice(1, 1 + len), bytes.slice(1 + len, 1 + 2 * len));
            return res;
          } else if ((bytes[0] === 2 || bytes[0] === 3) && bytes.length - 1 === len) {
            return this.pointFromX(bytes.slice(1, 1 + len), bytes[0] === 3);
          }
          throw new Error("Unknown point format");
        };
        BasePoint.prototype.encodeCompressed = function encodeCompressed(enc) {
          return this.encode(enc, true);
        };
        BasePoint.prototype._encode = function _encode(compact) {
          var len = this.curve.p.byteLength();
          var x = this.getX().toArray("be", len);
          if (compact) return [this.getY().isEven() ? 2 : 3].concat(x);
          return [4].concat(x, this.getY().toArray("be", len));
        };
        BasePoint.prototype.encode = function encode(enc, compact) {
          return utils.encode(this._encode(compact), enc);
        };
        BasePoint.prototype.precompute = function precompute(power) {
          if (this.precomputed) return this;
          var precomputed = {
            doubles: null,
            naf: null,
            beta: null,
          };
          precomputed.naf = this._getNAFPoints(8);
          precomputed.doubles = this._getDoubles(4, power);
          precomputed.beta = this._getBeta();
          this.precomputed = precomputed;
          return this;
        };
        BasePoint.prototype._hasDoubles = function _hasDoubles(k) {
          if (!this.precomputed) return false;
          var doubles = this.precomputed.doubles;
          if (!doubles) return false;
          return doubles.points.length >= Math.ceil((k.bitLength() + 1) / doubles.step);
        };
        BasePoint.prototype._getDoubles = function _getDoubles(step, power) {
          if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
          var doubles = [this];
          var acc = this;
          for (var i = 0; i < power; i += step) {
            for (var j = 0; j < step; j++) acc = acc.dbl();
            doubles.push(acc);
          }
          return {
            step,
            points: doubles,
          };
        };
        BasePoint.prototype._getNAFPoints = function _getNAFPoints(wnd) {
          if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
          var res = [this];
          var max = (1 << wnd) - 1;
          var dbl = max === 1 ? null : this.dbl();
          for (var i = 1; i < max; i++) res[i] = res[i - 1].add(dbl);
          return {
            wnd,
            points: res,
          };
        };
        BasePoint.prototype._getBeta = function _getBeta() {
          return null;
        };
        BasePoint.prototype.dblp = function dblp(k) {
          var r = this;
          for (var i = 0; i < k; i++) r = r.dbl();
          return r;
        };
      },
    });
    require_shams = __commonJS({
      "../../node_modules/has-symbols/shams.js"(exports, module) {
        "use strict";
        module.exports = function hasSymbols() {
          if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
            return false;
          }
          if (typeof Symbol.iterator === "symbol") {
            return true;
          }
          var obj = {};
          var sym = Symbol("test");
          var symObj = Object(sym);
          if (typeof sym === "string") {
            return false;
          }
          if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
            return false;
          }
          if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
            return false;
          }
          var symVal = 42;
          obj[sym] = symVal;
          for (sym in obj) {
            return false;
          }
          if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
            return false;
          }
          if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
            return false;
          }
          var syms = Object.getOwnPropertySymbols(obj);
          if (syms.length !== 1 || syms[0] !== sym) {
            return false;
          }
          if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
            return false;
          }
          if (typeof Object.getOwnPropertyDescriptor === "function") {
            var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
            if (descriptor.value !== symVal || descriptor.enumerable !== true) {
              return false;
            }
          }
          return true;
        };
      },
    });
    require_shams2 = __commonJS({
      "../../node_modules/has-tostringtag/shams.js"(exports, module) {
        "use strict";
        var hasSymbols = require_shams();
        module.exports = function hasToStringTagShams() {
          return hasSymbols() && !!Symbol.toStringTag;
        };
      },
    });
    require_has_symbols = __commonJS({
      "../../node_modules/has-symbols/index.js"(exports, module) {
        "use strict";
        var origSymbol = typeof Symbol !== "undefined" && Symbol;
        var hasSymbolSham = require_shams();
        module.exports = function hasNativeSymbols() {
          if (typeof origSymbol !== "function") {
            return false;
          }
          if (typeof Symbol !== "function") {
            return false;
          }
          if (typeof origSymbol("foo") !== "symbol") {
            return false;
          }
          if (typeof Symbol("bar") !== "symbol") {
            return false;
          }
          return hasSymbolSham();
        };
      },
    });
    require_implementation = __commonJS({
      "../../node_modules/is-arguments/node_modules/function-bind/implementation.js"(exports, module) {
        "use strict";
        var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
        var slice = Array.prototype.slice;
        var toStr = Object.prototype.toString;
        var funcType = "[object Function]";
        module.exports = function bind(that) {
          var target = this;
          if (typeof target !== "function" || toStr.call(target) !== funcType) {
            throw new TypeError(ERROR_MESSAGE + target);
          }
          var args = slice.call(arguments, 1);
          var bound;
          var binder = function () {
            if (this instanceof bound) {
              var result = target.apply(this, args.concat(slice.call(arguments)));
              if (Object(result) === result) {
                return result;
              }
              return this;
            } else {
              return target.apply(that, args.concat(slice.call(arguments)));
            }
          };
          var boundLength = Math.max(0, target.length - args.length);
          var boundArgs = [];
          for (var i = 0; i < boundLength; i++) {
            boundArgs.push("$" + i);
          }
          bound = Function(
            "binder",
            "return function (" + boundArgs.join(",") + "){ return binder.apply(this,arguments); }"
          )(binder);
          if (target.prototype) {
            var Empty = function Empty2() {};
            Empty.prototype = target.prototype;
            bound.prototype = new Empty();
            Empty.prototype = null;
          }
          return bound;
        };
      },
    });
    require_function_bind = __commonJS({
      "../../node_modules/is-arguments/node_modules/function-bind/index.js"(exports, module) {
        "use strict";
        var implementation = require_implementation();
        module.exports = Function.prototype.bind || implementation;
      },
    });
    require_implementation2 = __commonJS({
      "../../node_modules/has/node_modules/function-bind/implementation.js"(exports, module) {
        "use strict";
        var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
        var slice = Array.prototype.slice;
        var toStr = Object.prototype.toString;
        var funcType = "[object Function]";
        module.exports = function bind(that) {
          var target = this;
          if (typeof target !== "function" || toStr.call(target) !== funcType) {
            throw new TypeError(ERROR_MESSAGE + target);
          }
          var args = slice.call(arguments, 1);
          var bound;
          var binder = function () {
            if (this instanceof bound) {
              var result = target.apply(this, args.concat(slice.call(arguments)));
              if (Object(result) === result) {
                return result;
              }
              return this;
            } else {
              return target.apply(that, args.concat(slice.call(arguments)));
            }
          };
          var boundLength = Math.max(0, target.length - args.length);
          var boundArgs = [];
          for (var i = 0; i < boundLength; i++) {
            boundArgs.push("$" + i);
          }
          bound = Function(
            "binder",
            "return function (" + boundArgs.join(",") + "){ return binder.apply(this,arguments); }"
          )(binder);
          if (target.prototype) {
            var Empty = function Empty2() {};
            Empty.prototype = target.prototype;
            bound.prototype = new Empty();
            Empty.prototype = null;
          }
          return bound;
        };
      },
    });
    require_function_bind2 = __commonJS({
      "../../node_modules/has/node_modules/function-bind/index.js"(exports, module) {
        "use strict";
        var implementation = require_implementation2();
        module.exports = Function.prototype.bind || implementation;
      },
    });
    require_src = __commonJS({
      "../../node_modules/has/src/index.js"(exports, module) {
        "use strict";
        var bind = require_function_bind2();
        module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);
      },
    });
    require_get_intrinsic = __commonJS({
      "../../node_modules/is-arguments/node_modules/get-intrinsic/index.js"(exports, module) {
        "use strict";
        var undefined2;
        var $SyntaxError = SyntaxError;
        var $Function = Function;
        var $TypeError = TypeError;
        var getEvalledConstructor = function (expressionSyntax) {
          try {
            return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
          } catch (e) {}
        };
        var $gOPD = Object.getOwnPropertyDescriptor;
        if ($gOPD) {
          try {
            $gOPD({}, "");
          } catch (e) {
            $gOPD = null;
          }
        }
        var throwTypeError = function () {
          throw new $TypeError();
        };
        var ThrowTypeError = $gOPD
          ? (function () {
              try {
                arguments.callee;
                return throwTypeError;
              } catch (calleeThrows) {
                try {
                  return $gOPD(arguments, "callee").get;
                } catch (gOPDthrows) {
                  return throwTypeError;
                }
              }
            })()
          : throwTypeError;
        var hasSymbols = require_has_symbols()();
        var getProto =
          Object.getPrototypeOf ||
          function (x) {
            return x.__proto__;
          };
        var needsEval = {};
        var TypedArray = typeof Uint8Array === "undefined" ? undefined2 : getProto(Uint8Array);
        var INTRINSICS = {
          "%AggregateError%": typeof AggregateError === "undefined" ? undefined2 : AggregateError,
          "%Array%": Array,
          "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined2 : ArrayBuffer,
          "%ArrayIteratorPrototype%": hasSymbols ? getProto([][Symbol.iterator]()) : undefined2,
          "%AsyncFromSyncIteratorPrototype%": undefined2,
          "%AsyncFunction%": needsEval,
          "%AsyncGenerator%": needsEval,
          "%AsyncGeneratorFunction%": needsEval,
          "%AsyncIteratorPrototype%": needsEval,
          "%Atomics%": typeof Atomics === "undefined" ? undefined2 : Atomics,
          "%BigInt%": typeof BigInt === "undefined" ? undefined2 : BigInt,
          "%BigInt64Array%": typeof BigInt64Array === "undefined" ? undefined2 : BigInt64Array,
          "%BigUint64Array%": typeof BigUint64Array === "undefined" ? undefined2 : BigUint64Array,
          "%Boolean%": Boolean,
          "%DataView%": typeof DataView === "undefined" ? undefined2 : DataView,
          "%Date%": Date,
          "%decodeURI%": decodeURI,
          "%decodeURIComponent%": decodeURIComponent,
          "%encodeURI%": encodeURI,
          "%encodeURIComponent%": encodeURIComponent,
          "%Error%": Error,
          "%eval%": eval,
          "%EvalError%": EvalError,
          "%Float32Array%": typeof Float32Array === "undefined" ? undefined2 : Float32Array,
          "%Float64Array%": typeof Float64Array === "undefined" ? undefined2 : Float64Array,
          "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined2 : FinalizationRegistry,
          "%Function%": $Function,
          "%GeneratorFunction%": needsEval,
          "%Int8Array%": typeof Int8Array === "undefined" ? undefined2 : Int8Array,
          "%Int16Array%": typeof Int16Array === "undefined" ? undefined2 : Int16Array,
          "%Int32Array%": typeof Int32Array === "undefined" ? undefined2 : Int32Array,
          "%isFinite%": isFinite,
          "%isNaN%": isNaN,
          "%IteratorPrototype%": hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined2,
          "%JSON%": typeof JSON === "object" ? JSON : undefined2,
          "%Map%": typeof Map === "undefined" ? undefined2 : Map,
          "%MapIteratorPrototype%":
            typeof Map === "undefined" || !hasSymbols
              ? undefined2
              : getProto(/* @__PURE__ */ new Map()[Symbol.iterator]()),
          "%Math%": Math,
          "%Number%": Number,
          "%Object%": Object,
          "%parseFloat%": parseFloat,
          "%parseInt%": parseInt,
          "%Promise%": typeof Promise === "undefined" ? undefined2 : Promise,
          "%Proxy%": typeof Proxy === "undefined" ? undefined2 : Proxy,
          "%RangeError%": RangeError,
          "%ReferenceError%": ReferenceError,
          "%Reflect%": typeof Reflect === "undefined" ? undefined2 : Reflect,
          "%RegExp%": RegExp,
          "%Set%": typeof Set === "undefined" ? undefined2 : Set,
          "%SetIteratorPrototype%":
            typeof Set === "undefined" || !hasSymbols
              ? undefined2
              : getProto(/* @__PURE__ */ new Set()[Symbol.iterator]()),
          "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined2 : SharedArrayBuffer,
          "%String%": String,
          "%StringIteratorPrototype%": hasSymbols ? getProto(""[Symbol.iterator]()) : undefined2,
          "%Symbol%": hasSymbols ? Symbol : undefined2,
          "%SyntaxError%": $SyntaxError,
          "%ThrowTypeError%": ThrowTypeError,
          "%TypedArray%": TypedArray,
          "%TypeError%": $TypeError,
          "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined2 : Uint8Array,
          "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined2 : Uint8ClampedArray,
          "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined2 : Uint16Array,
          "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined2 : Uint32Array,
          "%URIError%": URIError,
          "%WeakMap%": typeof WeakMap === "undefined" ? undefined2 : WeakMap,
          "%WeakRef%": typeof WeakRef === "undefined" ? undefined2 : WeakRef,
          "%WeakSet%": typeof WeakSet === "undefined" ? undefined2 : WeakSet,
        };
        try {
          null.error;
        } catch (e) {
          errorProto = getProto(getProto(e));
          INTRINSICS["%Error.prototype%"] = errorProto;
        }
        var errorProto;
        var doEval = function doEval2(name) {
          var value;
          if (name === "%AsyncFunction%") {
            value = getEvalledConstructor("async function () {}");
          } else if (name === "%GeneratorFunction%") {
            value = getEvalledConstructor("function* () {}");
          } else if (name === "%AsyncGeneratorFunction%") {
            value = getEvalledConstructor("async function* () {}");
          } else if (name === "%AsyncGenerator%") {
            var fn = doEval2("%AsyncGeneratorFunction%");
            if (fn) {
              value = fn.prototype;
            }
          } else if (name === "%AsyncIteratorPrototype%") {
            var gen = doEval2("%AsyncGenerator%");
            if (gen) {
              value = getProto(gen.prototype);
            }
          }
          INTRINSICS[name] = value;
          return value;
        };
        var LEGACY_ALIASES = {
          "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
          "%ArrayPrototype%": ["Array", "prototype"],
          "%ArrayProto_entries%": ["Array", "prototype", "entries"],
          "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
          "%ArrayProto_keys%": ["Array", "prototype", "keys"],
          "%ArrayProto_values%": ["Array", "prototype", "values"],
          "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
          "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
          "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
          "%BooleanPrototype%": ["Boolean", "prototype"],
          "%DataViewPrototype%": ["DataView", "prototype"],
          "%DatePrototype%": ["Date", "prototype"],
          "%ErrorPrototype%": ["Error", "prototype"],
          "%EvalErrorPrototype%": ["EvalError", "prototype"],
          "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
          "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
          "%FunctionPrototype%": ["Function", "prototype"],
          "%Generator%": ["GeneratorFunction", "prototype"],
          "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
          "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
          "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
          "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
          "%JSONParse%": ["JSON", "parse"],
          "%JSONStringify%": ["JSON", "stringify"],
          "%MapPrototype%": ["Map", "prototype"],
          "%NumberPrototype%": ["Number", "prototype"],
          "%ObjectPrototype%": ["Object", "prototype"],
          "%ObjProto_toString%": ["Object", "prototype", "toString"],
          "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
          "%PromisePrototype%": ["Promise", "prototype"],
          "%PromiseProto_then%": ["Promise", "prototype", "then"],
          "%Promise_all%": ["Promise", "all"],
          "%Promise_reject%": ["Promise", "reject"],
          "%Promise_resolve%": ["Promise", "resolve"],
          "%RangeErrorPrototype%": ["RangeError", "prototype"],
          "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
          "%RegExpPrototype%": ["RegExp", "prototype"],
          "%SetPrototype%": ["Set", "prototype"],
          "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
          "%StringPrototype%": ["String", "prototype"],
          "%SymbolPrototype%": ["Symbol", "prototype"],
          "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
          "%TypedArrayPrototype%": ["TypedArray", "prototype"],
          "%TypeErrorPrototype%": ["TypeError", "prototype"],
          "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
          "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
          "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
          "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
          "%URIErrorPrototype%": ["URIError", "prototype"],
          "%WeakMapPrototype%": ["WeakMap", "prototype"],
          "%WeakSetPrototype%": ["WeakSet", "prototype"],
        };
        var bind = require_function_bind();
        var hasOwn = require_src();
        var $concat = bind.call(Function.call, Array.prototype.concat);
        var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
        var $replace = bind.call(Function.call, String.prototype.replace);
        var $strSlice = bind.call(Function.call, String.prototype.slice);
        var $exec = bind.call(Function.call, RegExp.prototype.exec);
        var rePropName =
          /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
        var reEscapeChar = /\\(\\)?/g;
        var stringToPath = function stringToPath2(string) {
          var first = $strSlice(string, 0, 1);
          var last = $strSlice(string, -1);
          if (first === "%" && last !== "%") {
            throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
          } else if (last === "%" && first !== "%") {
            throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
          }
          var result = [];
          $replace(string, rePropName, function (match, number, quote, subString) {
            result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match;
          });
          return result;
        };
        var getBaseIntrinsic = function getBaseIntrinsic2(name, allowMissing) {
          var intrinsicName = name;
          var alias;
          if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
            alias = LEGACY_ALIASES[intrinsicName];
            intrinsicName = "%" + alias[0] + "%";
          }
          if (hasOwn(INTRINSICS, intrinsicName)) {
            var value = INTRINSICS[intrinsicName];
            if (value === needsEval) {
              value = doEval(intrinsicName);
            }
            if (typeof value === "undefined" && !allowMissing) {
              throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
            }
            return {
              alias,
              name: intrinsicName,
              value,
            };
          }
          throw new $SyntaxError("intrinsic " + name + " does not exist!");
        };
        module.exports = function GetIntrinsic(name, allowMissing) {
          if (typeof name !== "string" || name.length === 0) {
            throw new $TypeError("intrinsic name must be a non-empty string");
          }
          if (arguments.length > 1 && typeof allowMissing !== "boolean") {
            throw new $TypeError('"allowMissing" argument must be a boolean');
          }
          if ($exec(/^%?[^%]*%?$/, name) === null) {
            throw new $SyntaxError(
              "`%` may not be present anywhere but at the beginning and end of the intrinsic name"
            );
          }
          var parts = stringToPath(name);
          var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
          var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
          var intrinsicRealName = intrinsic.name;
          var value = intrinsic.value;
          var skipFurtherCaching = false;
          var alias = intrinsic.alias;
          if (alias) {
            intrinsicBaseName = alias[0];
            $spliceApply(parts, $concat([0, 1], alias));
          }
          for (var i = 1, isOwn = true; i < parts.length; i += 1) {
            var part = parts[i];
            var first = $strSlice(part, 0, 1);
            var last = $strSlice(part, -1);
            if (
              (first === '"' || first === "'" || first === "`" || last === '"' || last === "'" || last === "`") &&
              first !== last
            ) {
              throw new $SyntaxError("property names with quotes must have matching quotes");
            }
            if (part === "constructor" || !isOwn) {
              skipFurtherCaching = true;
            }
            intrinsicBaseName += "." + part;
            intrinsicRealName = "%" + intrinsicBaseName + "%";
            if (hasOwn(INTRINSICS, intrinsicRealName)) {
              value = INTRINSICS[intrinsicRealName];
            } else if (value != null) {
              if (!(part in value)) {
                if (!allowMissing) {
                  throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
                }
                return void 0;
              }
              if ($gOPD && i + 1 >= parts.length) {
                var desc = $gOPD(value, part);
                isOwn = !!desc;
                if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
                  value = desc.get;
                } else {
                  value = value[part];
                }
              } else {
                isOwn = hasOwn(value, part);
                value = value[part];
              }
              if (isOwn && !skipFurtherCaching) {
                INTRINSICS[intrinsicRealName] = value;
              }
            }
          }
          return value;
        };
      },
    });
    require_call_bind = __commonJS({
      "../../node_modules/is-arguments/node_modules/call-bind/index.js"(exports, module) {
        "use strict";
        var bind = require_function_bind();
        var GetIntrinsic = require_get_intrinsic();
        var $apply = GetIntrinsic("%Function.prototype.apply%");
        var $call = GetIntrinsic("%Function.prototype.call%");
        var $reflectApply = GetIntrinsic("%Reflect.apply%", true) || bind.call($call, $apply);
        var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true);
        var $defineProperty = GetIntrinsic("%Object.defineProperty%", true);
        var $max = GetIntrinsic("%Math.max%");
        if ($defineProperty) {
          try {
            $defineProperty({}, "a", { value: 1 });
          } catch (e) {
            $defineProperty = null;
          }
        }
        module.exports = function callBind(originalFunction) {
          var func = $reflectApply(bind, $call, arguments);
          if ($gOPD && $defineProperty) {
            var desc = $gOPD(func, "length");
            if (desc.configurable) {
              $defineProperty(func, "length", { value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) });
            }
          }
          return func;
        };
        var applyBind = function applyBind2() {
          return $reflectApply(bind, $apply, arguments);
        };
        if ($defineProperty) {
          $defineProperty(module.exports, "apply", { value: applyBind });
        } else {
          module.exports.apply = applyBind;
        }
      },
    });
    require_callBound = __commonJS({
      "../../node_modules/is-arguments/node_modules/call-bind/callBound.js"(exports, module) {
        "use strict";
        var GetIntrinsic = require_get_intrinsic();
        var callBind = require_call_bind();
        var $indexOf = callBind(GetIntrinsic("String.prototype.indexOf"));
        module.exports = function callBoundIntrinsic(name, allowMissing) {
          var intrinsic = GetIntrinsic(name, !!allowMissing);
          if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) {
            return callBind(intrinsic);
          }
          return intrinsic;
        };
      },
    });
    require_is_arguments = __commonJS({
      "../../node_modules/is-arguments/index.js"(exports, module) {
        "use strict";
        var hasToStringTag = require_shams2()();
        var callBound = require_callBound();
        var $toString = callBound("Object.prototype.toString");
        var isStandardArguments = function isArguments(value) {
          if (hasToStringTag && value && typeof value === "object" && Symbol.toStringTag in value) {
            return false;
          }
          return $toString(value) === "[object Arguments]";
        };
        var isLegacyArguments = function isArguments(value) {
          if (isStandardArguments(value)) {
            return true;
          }
          return (
            value !== null &&
            typeof value === "object" &&
            typeof value.length === "number" &&
            value.length >= 0 &&
            $toString(value) !== "[object Array]" &&
            $toString(value.callee) === "[object Function]"
          );
        };
        var supportsStandardArguments = (function () {
          return isStandardArguments(arguments);
        })();
        isStandardArguments.isLegacyArguments = isLegacyArguments;
        module.exports = supportsStandardArguments ? isStandardArguments : isLegacyArguments;
      },
    });
    require_is_generator_function = __commonJS({
      "../../node_modules/is-generator-function/index.js"(exports, module) {
        "use strict";
        var toStr = Object.prototype.toString;
        var fnToStr = Function.prototype.toString;
        var isFnRegex = /^\s*(?:function)?\*/;
        var hasToStringTag = require_shams2()();
        var getProto = Object.getPrototypeOf;
        var getGeneratorFunc = function () {
          if (!hasToStringTag) {
            return false;
          }
          try {
            return Function("return function*() {}")();
          } catch (e) {}
        };
        var GeneratorFunction;
        module.exports = function isGeneratorFunction(fn) {
          if (typeof fn !== "function") {
            return false;
          }
          if (isFnRegex.test(fnToStr.call(fn))) {
            return true;
          }
          if (!hasToStringTag) {
            var str = toStr.call(fn);
            return str === "[object GeneratorFunction]";
          }
          if (!getProto) {
            return false;
          }
          if (typeof GeneratorFunction === "undefined") {
            var generatorFunc = getGeneratorFunc();
            GeneratorFunction = generatorFunc ? getProto(generatorFunc) : false;
          }
          return getProto(fn) === GeneratorFunction;
        };
      },
    });
    require_is_callable = __commonJS({
      "../../node_modules/is-callable/index.js"(exports, module) {
        "use strict";
        var fnToStr = Function.prototype.toString;
        var reflectApply = typeof Reflect === "object" && Reflect !== null && Reflect.apply;
        var badArrayLike;
        var isCallableMarker;
        if (typeof reflectApply === "function" && typeof Object.defineProperty === "function") {
          try {
            badArrayLike = Object.defineProperty({}, "length", {
              get: function () {
                throw isCallableMarker;
              },
            });
            isCallableMarker = {};
            reflectApply(
              function () {
                throw 42;
              },
              null,
              badArrayLike
            );
          } catch (_) {
            if (_ !== isCallableMarker) {
              reflectApply = null;
            }
          }
        } else {
          reflectApply = null;
        }
        var constructorRegex = /^\s*class\b/;
        var isES6ClassFn = function isES6ClassFunction(value) {
          try {
            var fnStr = fnToStr.call(value);
            return constructorRegex.test(fnStr);
          } catch (e) {
            return false;
          }
        };
        var tryFunctionObject = function tryFunctionToStr(value) {
          try {
            if (isES6ClassFn(value)) {
              return false;
            }
            fnToStr.call(value);
            return true;
          } catch (e) {
            return false;
          }
        };
        var toStr = Object.prototype.toString;
        var objectClass = "[object Object]";
        var fnClass = "[object Function]";
        var genClass = "[object GeneratorFunction]";
        var ddaClass = "[object HTMLAllCollection]";
        var ddaClass2 = "[object HTML document.all class]";
        var ddaClass3 = "[object HTMLCollection]";
        var hasToStringTag = typeof Symbol === "function" && !!Symbol.toStringTag;
        var isIE68 = !(0 in [,]);
        var isDDA = function isDocumentDotAll() {
          return false;
        };
        if (typeof document === "object") {
          all = document.all;
          if (toStr.call(all) === toStr.call(document.all)) {
            isDDA = function isDocumentDotAll(value) {
              if ((isIE68 || !value) && (typeof value === "undefined" || typeof value === "object")) {
                try {
                  var str = toStr.call(value);
                  return (
                    (str === ddaClass || str === ddaClass2 || str === ddaClass3 || str === objectClass) &&
                    value("") == null
                  );
                } catch (e) {}
              }
              return false;
            };
          }
        }
        var all;
        module.exports = reflectApply
          ? function isCallable(value) {
              if (isDDA(value)) {
                return true;
              }
              if (!value) {
                return false;
              }
              if (typeof value !== "function" && typeof value !== "object") {
                return false;
              }
              try {
                reflectApply(value, null, badArrayLike);
              } catch (e) {
                if (e !== isCallableMarker) {
                  return false;
                }
              }
              return !isES6ClassFn(value) && tryFunctionObject(value);
            }
          : function isCallable(value) {
              if (isDDA(value)) {
                return true;
              }
              if (!value) {
                return false;
              }
              if (typeof value !== "function" && typeof value !== "object") {
                return false;
              }
              if (hasToStringTag) {
                return tryFunctionObject(value);
              }
              if (isES6ClassFn(value)) {
                return false;
              }
              var strClass = toStr.call(value);
              if (strClass !== fnClass && strClass !== genClass && !/^\[object HTML/.test(strClass)) {
                return false;
              }
              return tryFunctionObject(value);
            };
      },
    });
    require_for_each = __commonJS({
      "../../node_modules/for-each/index.js"(exports, module) {
        "use strict";
        var isCallable = require_is_callable();
        var toStr = Object.prototype.toString;
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var forEachArray = function forEachArray2(array, iterator, receiver) {
          for (var i = 0, len = array.length; i < len; i++) {
            if (hasOwnProperty.call(array, i)) {
              if (receiver == null) {
                iterator(array[i], i, array);
              } else {
                iterator.call(receiver, array[i], i, array);
              }
            }
          }
        };
        var forEachString = function forEachString2(string, iterator, receiver) {
          for (var i = 0, len = string.length; i < len; i++) {
            if (receiver == null) {
              iterator(string.charAt(i), i, string);
            } else {
              iterator.call(receiver, string.charAt(i), i, string);
            }
          }
        };
        var forEachObject = function forEachObject2(object, iterator, receiver) {
          for (var k in object) {
            if (hasOwnProperty.call(object, k)) {
              if (receiver == null) {
                iterator(object[k], k, object);
              } else {
                iterator.call(receiver, object[k], k, object);
              }
            }
          }
        };
        var forEach = function forEach2(list, iterator, thisArg) {
          if (!isCallable(iterator)) {
            throw new TypeError("iterator must be a function");
          }
          var receiver;
          if (arguments.length >= 3) {
            receiver = thisArg;
          }
          if (toStr.call(list) === "[object Array]") {
            forEachArray(list, iterator, receiver);
          } else if (typeof list === "string") {
            forEachString(list, iterator, receiver);
          } else {
            forEachObject(list, iterator, receiver);
          }
        };
        module.exports = forEach;
      },
    });
    require_available_typed_arrays = __commonJS({
      "../../node_modules/util/node_modules/available-typed-arrays/index.js"(exports, module) {
        "use strict";
        var possibleNames = [
          "BigInt64Array",
          "BigUint64Array",
          "Float32Array",
          "Float64Array",
          "Int16Array",
          "Int32Array",
          "Int8Array",
          "Uint16Array",
          "Uint32Array",
          "Uint8Array",
          "Uint8ClampedArray",
        ];
        var g = typeof globalThis === "undefined" ? global : globalThis;
        module.exports = function availableTypedArrays() {
          var out = [];
          for (var i = 0; i < possibleNames.length; i++) {
            if (typeof g[possibleNames[i]] === "function") {
              out[out.length] = possibleNames[i];
            }
          }
          return out;
        };
      },
    });
    require_implementation3 = __commonJS({
      "../../node_modules/util/node_modules/function-bind/implementation.js"(exports, module) {
        "use strict";
        var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
        var slice = Array.prototype.slice;
        var toStr = Object.prototype.toString;
        var funcType = "[object Function]";
        module.exports = function bind(that) {
          var target = this;
          if (typeof target !== "function" || toStr.call(target) !== funcType) {
            throw new TypeError(ERROR_MESSAGE + target);
          }
          var args = slice.call(arguments, 1);
          var bound;
          var binder = function () {
            if (this instanceof bound) {
              var result = target.apply(this, args.concat(slice.call(arguments)));
              if (Object(result) === result) {
                return result;
              }
              return this;
            } else {
              return target.apply(that, args.concat(slice.call(arguments)));
            }
          };
          var boundLength = Math.max(0, target.length - args.length);
          var boundArgs = [];
          for (var i = 0; i < boundLength; i++) {
            boundArgs.push("$" + i);
          }
          bound = Function(
            "binder",
            "return function (" + boundArgs.join(",") + "){ return binder.apply(this,arguments); }"
          )(binder);
          if (target.prototype) {
            var Empty = function Empty2() {};
            Empty.prototype = target.prototype;
            bound.prototype = new Empty();
            Empty.prototype = null;
          }
          return bound;
        };
      },
    });
    require_function_bind3 = __commonJS({
      "../../node_modules/util/node_modules/function-bind/index.js"(exports, module) {
        "use strict";
        var implementation = require_implementation3();
        module.exports = Function.prototype.bind || implementation;
      },
    });
    require_get_intrinsic2 = __commonJS({
      "../../node_modules/util/node_modules/get-intrinsic/index.js"(exports, module) {
        "use strict";
        var undefined2;
        var $SyntaxError = SyntaxError;
        var $Function = Function;
        var $TypeError = TypeError;
        var getEvalledConstructor = function (expressionSyntax) {
          try {
            return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
          } catch (e) {}
        };
        var $gOPD = Object.getOwnPropertyDescriptor;
        if ($gOPD) {
          try {
            $gOPD({}, "");
          } catch (e) {
            $gOPD = null;
          }
        }
        var throwTypeError = function () {
          throw new $TypeError();
        };
        var ThrowTypeError = $gOPD
          ? (function () {
              try {
                arguments.callee;
                return throwTypeError;
              } catch (calleeThrows) {
                try {
                  return $gOPD(arguments, "callee").get;
                } catch (gOPDthrows) {
                  return throwTypeError;
                }
              }
            })()
          : throwTypeError;
        var hasSymbols = require_has_symbols()();
        var getProto =
          Object.getPrototypeOf ||
          function (x) {
            return x.__proto__;
          };
        var needsEval = {};
        var TypedArray = typeof Uint8Array === "undefined" ? undefined2 : getProto(Uint8Array);
        var INTRINSICS = {
          "%AggregateError%": typeof AggregateError === "undefined" ? undefined2 : AggregateError,
          "%Array%": Array,
          "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined2 : ArrayBuffer,
          "%ArrayIteratorPrototype%": hasSymbols ? getProto([][Symbol.iterator]()) : undefined2,
          "%AsyncFromSyncIteratorPrototype%": undefined2,
          "%AsyncFunction%": needsEval,
          "%AsyncGenerator%": needsEval,
          "%AsyncGeneratorFunction%": needsEval,
          "%AsyncIteratorPrototype%": needsEval,
          "%Atomics%": typeof Atomics === "undefined" ? undefined2 : Atomics,
          "%BigInt%": typeof BigInt === "undefined" ? undefined2 : BigInt,
          "%BigInt64Array%": typeof BigInt64Array === "undefined" ? undefined2 : BigInt64Array,
          "%BigUint64Array%": typeof BigUint64Array === "undefined" ? undefined2 : BigUint64Array,
          "%Boolean%": Boolean,
          "%DataView%": typeof DataView === "undefined" ? undefined2 : DataView,
          "%Date%": Date,
          "%decodeURI%": decodeURI,
          "%decodeURIComponent%": decodeURIComponent,
          "%encodeURI%": encodeURI,
          "%encodeURIComponent%": encodeURIComponent,
          "%Error%": Error,
          "%eval%": eval,
          "%EvalError%": EvalError,
          "%Float32Array%": typeof Float32Array === "undefined" ? undefined2 : Float32Array,
          "%Float64Array%": typeof Float64Array === "undefined" ? undefined2 : Float64Array,
          "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined2 : FinalizationRegistry,
          "%Function%": $Function,
          "%GeneratorFunction%": needsEval,
          "%Int8Array%": typeof Int8Array === "undefined" ? undefined2 : Int8Array,
          "%Int16Array%": typeof Int16Array === "undefined" ? undefined2 : Int16Array,
          "%Int32Array%": typeof Int32Array === "undefined" ? undefined2 : Int32Array,
          "%isFinite%": isFinite,
          "%isNaN%": isNaN,
          "%IteratorPrototype%": hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined2,
          "%JSON%": typeof JSON === "object" ? JSON : undefined2,
          "%Map%": typeof Map === "undefined" ? undefined2 : Map,
          "%MapIteratorPrototype%":
            typeof Map === "undefined" || !hasSymbols
              ? undefined2
              : getProto(/* @__PURE__ */ new Map()[Symbol.iterator]()),
          "%Math%": Math,
          "%Number%": Number,
          "%Object%": Object,
          "%parseFloat%": parseFloat,
          "%parseInt%": parseInt,
          "%Promise%": typeof Promise === "undefined" ? undefined2 : Promise,
          "%Proxy%": typeof Proxy === "undefined" ? undefined2 : Proxy,
          "%RangeError%": RangeError,
          "%ReferenceError%": ReferenceError,
          "%Reflect%": typeof Reflect === "undefined" ? undefined2 : Reflect,
          "%RegExp%": RegExp,
          "%Set%": typeof Set === "undefined" ? undefined2 : Set,
          "%SetIteratorPrototype%":
            typeof Set === "undefined" || !hasSymbols
              ? undefined2
              : getProto(/* @__PURE__ */ new Set()[Symbol.iterator]()),
          "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined2 : SharedArrayBuffer,
          "%String%": String,
          "%StringIteratorPrototype%": hasSymbols ? getProto(""[Symbol.iterator]()) : undefined2,
          "%Symbol%": hasSymbols ? Symbol : undefined2,
          "%SyntaxError%": $SyntaxError,
          "%ThrowTypeError%": ThrowTypeError,
          "%TypedArray%": TypedArray,
          "%TypeError%": $TypeError,
          "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined2 : Uint8Array,
          "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined2 : Uint8ClampedArray,
          "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined2 : Uint16Array,
          "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined2 : Uint32Array,
          "%URIError%": URIError,
          "%WeakMap%": typeof WeakMap === "undefined" ? undefined2 : WeakMap,
          "%WeakRef%": typeof WeakRef === "undefined" ? undefined2 : WeakRef,
          "%WeakSet%": typeof WeakSet === "undefined" ? undefined2 : WeakSet,
        };
        try {
          null.error;
        } catch (e) {
          errorProto = getProto(getProto(e));
          INTRINSICS["%Error.prototype%"] = errorProto;
        }
        var errorProto;
        var doEval = function doEval2(name) {
          var value;
          if (name === "%AsyncFunction%") {
            value = getEvalledConstructor("async function () {}");
          } else if (name === "%GeneratorFunction%") {
            value = getEvalledConstructor("function* () {}");
          } else if (name === "%AsyncGeneratorFunction%") {
            value = getEvalledConstructor("async function* () {}");
          } else if (name === "%AsyncGenerator%") {
            var fn = doEval2("%AsyncGeneratorFunction%");
            if (fn) {
              value = fn.prototype;
            }
          } else if (name === "%AsyncIteratorPrototype%") {
            var gen = doEval2("%AsyncGenerator%");
            if (gen) {
              value = getProto(gen.prototype);
            }
          }
          INTRINSICS[name] = value;
          return value;
        };
        var LEGACY_ALIASES = {
          "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
          "%ArrayPrototype%": ["Array", "prototype"],
          "%ArrayProto_entries%": ["Array", "prototype", "entries"],
          "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
          "%ArrayProto_keys%": ["Array", "prototype", "keys"],
          "%ArrayProto_values%": ["Array", "prototype", "values"],
          "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
          "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
          "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
          "%BooleanPrototype%": ["Boolean", "prototype"],
          "%DataViewPrototype%": ["DataView", "prototype"],
          "%DatePrototype%": ["Date", "prototype"],
          "%ErrorPrototype%": ["Error", "prototype"],
          "%EvalErrorPrototype%": ["EvalError", "prototype"],
          "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
          "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
          "%FunctionPrototype%": ["Function", "prototype"],
          "%Generator%": ["GeneratorFunction", "prototype"],
          "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
          "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
          "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
          "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
          "%JSONParse%": ["JSON", "parse"],
          "%JSONStringify%": ["JSON", "stringify"],
          "%MapPrototype%": ["Map", "prototype"],
          "%NumberPrototype%": ["Number", "prototype"],
          "%ObjectPrototype%": ["Object", "prototype"],
          "%ObjProto_toString%": ["Object", "prototype", "toString"],
          "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
          "%PromisePrototype%": ["Promise", "prototype"],
          "%PromiseProto_then%": ["Promise", "prototype", "then"],
          "%Promise_all%": ["Promise", "all"],
          "%Promise_reject%": ["Promise", "reject"],
          "%Promise_resolve%": ["Promise", "resolve"],
          "%RangeErrorPrototype%": ["RangeError", "prototype"],
          "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
          "%RegExpPrototype%": ["RegExp", "prototype"],
          "%SetPrototype%": ["Set", "prototype"],
          "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
          "%StringPrototype%": ["String", "prototype"],
          "%SymbolPrototype%": ["Symbol", "prototype"],
          "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
          "%TypedArrayPrototype%": ["TypedArray", "prototype"],
          "%TypeErrorPrototype%": ["TypeError", "prototype"],
          "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
          "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
          "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
          "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
          "%URIErrorPrototype%": ["URIError", "prototype"],
          "%WeakMapPrototype%": ["WeakMap", "prototype"],
          "%WeakSetPrototype%": ["WeakSet", "prototype"],
        };
        var bind = require_function_bind3();
        var hasOwn = require_src();
        var $concat = bind.call(Function.call, Array.prototype.concat);
        var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
        var $replace = bind.call(Function.call, String.prototype.replace);
        var $strSlice = bind.call(Function.call, String.prototype.slice);
        var $exec = bind.call(Function.call, RegExp.prototype.exec);
        var rePropName =
          /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
        var reEscapeChar = /\\(\\)?/g;
        var stringToPath = function stringToPath2(string) {
          var first = $strSlice(string, 0, 1);
          var last = $strSlice(string, -1);
          if (first === "%" && last !== "%") {
            throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
          } else if (last === "%" && first !== "%") {
            throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
          }
          var result = [];
          $replace(string, rePropName, function (match, number, quote, subString) {
            result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match;
          });
          return result;
        };
        var getBaseIntrinsic = function getBaseIntrinsic2(name, allowMissing) {
          var intrinsicName = name;
          var alias;
          if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
            alias = LEGACY_ALIASES[intrinsicName];
            intrinsicName = "%" + alias[0] + "%";
          }
          if (hasOwn(INTRINSICS, intrinsicName)) {
            var value = INTRINSICS[intrinsicName];
            if (value === needsEval) {
              value = doEval(intrinsicName);
            }
            if (typeof value === "undefined" && !allowMissing) {
              throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
            }
            return {
              alias,
              name: intrinsicName,
              value,
            };
          }
          throw new $SyntaxError("intrinsic " + name + " does not exist!");
        };
        module.exports = function GetIntrinsic(name, allowMissing) {
          if (typeof name !== "string" || name.length === 0) {
            throw new $TypeError("intrinsic name must be a non-empty string");
          }
          if (arguments.length > 1 && typeof allowMissing !== "boolean") {
            throw new $TypeError('"allowMissing" argument must be a boolean');
          }
          if ($exec(/^%?[^%]*%?$/, name) === null) {
            throw new $SyntaxError(
              "`%` may not be present anywhere but at the beginning and end of the intrinsic name"
            );
          }
          var parts = stringToPath(name);
          var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
          var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
          var intrinsicRealName = intrinsic.name;
          var value = intrinsic.value;
          var skipFurtherCaching = false;
          var alias = intrinsic.alias;
          if (alias) {
            intrinsicBaseName = alias[0];
            $spliceApply(parts, $concat([0, 1], alias));
          }
          for (var i = 1, isOwn = true; i < parts.length; i += 1) {
            var part = parts[i];
            var first = $strSlice(part, 0, 1);
            var last = $strSlice(part, -1);
            if (
              (first === '"' || first === "'" || first === "`" || last === '"' || last === "'" || last === "`") &&
              first !== last
            ) {
              throw new $SyntaxError("property names with quotes must have matching quotes");
            }
            if (part === "constructor" || !isOwn) {
              skipFurtherCaching = true;
            }
            intrinsicBaseName += "." + part;
            intrinsicRealName = "%" + intrinsicBaseName + "%";
            if (hasOwn(INTRINSICS, intrinsicRealName)) {
              value = INTRINSICS[intrinsicRealName];
            } else if (value != null) {
              if (!(part in value)) {
                if (!allowMissing) {
                  throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
                }
                return void 0;
              }
              if ($gOPD && i + 1 >= parts.length) {
                var desc = $gOPD(value, part);
                isOwn = !!desc;
                if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
                  value = desc.get;
                } else {
                  value = value[part];
                }
              } else {
                isOwn = hasOwn(value, part);
                value = value[part];
              }
              if (isOwn && !skipFurtherCaching) {
                INTRINSICS[intrinsicRealName] = value;
              }
            }
          }
          return value;
        };
      },
    });
    require_call_bind2 = __commonJS({
      "../../node_modules/util/node_modules/call-bind/index.js"(exports, module) {
        "use strict";
        var bind = require_function_bind3();
        var GetIntrinsic = require_get_intrinsic2();
        var $apply = GetIntrinsic("%Function.prototype.apply%");
        var $call = GetIntrinsic("%Function.prototype.call%");
        var $reflectApply = GetIntrinsic("%Reflect.apply%", true) || bind.call($call, $apply);
        var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true);
        var $defineProperty = GetIntrinsic("%Object.defineProperty%", true);
        var $max = GetIntrinsic("%Math.max%");
        if ($defineProperty) {
          try {
            $defineProperty({}, "a", { value: 1 });
          } catch (e) {
            $defineProperty = null;
          }
        }
        module.exports = function callBind(originalFunction) {
          var func = $reflectApply(bind, $call, arguments);
          if ($gOPD && $defineProperty) {
            var desc = $gOPD(func, "length");
            if (desc.configurable) {
              $defineProperty(func, "length", { value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) });
            }
          }
          return func;
        };
        var applyBind = function applyBind2() {
          return $reflectApply(bind, $apply, arguments);
        };
        if ($defineProperty) {
          $defineProperty(module.exports, "apply", { value: applyBind });
        } else {
          module.exports.apply = applyBind;
        }
      },
    });
    require_callBound2 = __commonJS({
      "../../node_modules/util/node_modules/call-bind/callBound.js"(exports, module) {
        "use strict";
        var GetIntrinsic = require_get_intrinsic2();
        var callBind = require_call_bind2();
        var $indexOf = callBind(GetIntrinsic("String.prototype.indexOf"));
        module.exports = function callBoundIntrinsic(name, allowMissing) {
          var intrinsic = GetIntrinsic(name, !!allowMissing);
          if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) {
            return callBind(intrinsic);
          }
          return intrinsic;
        };
      },
    });
    require_implementation4 = __commonJS({
      "../../node_modules/gopd/node_modules/function-bind/implementation.js"(exports, module) {
        "use strict";
        var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
        var slice = Array.prototype.slice;
        var toStr = Object.prototype.toString;
        var funcType = "[object Function]";
        module.exports = function bind(that) {
          var target = this;
          if (typeof target !== "function" || toStr.call(target) !== funcType) {
            throw new TypeError(ERROR_MESSAGE + target);
          }
          var args = slice.call(arguments, 1);
          var bound;
          var binder = function () {
            if (this instanceof bound) {
              var result = target.apply(this, args.concat(slice.call(arguments)));
              if (Object(result) === result) {
                return result;
              }
              return this;
            } else {
              return target.apply(that, args.concat(slice.call(arguments)));
            }
          };
          var boundLength = Math.max(0, target.length - args.length);
          var boundArgs = [];
          for (var i = 0; i < boundLength; i++) {
            boundArgs.push("$" + i);
          }
          bound = Function(
            "binder",
            "return function (" + boundArgs.join(",") + "){ return binder.apply(this,arguments); }"
          )(binder);
          if (target.prototype) {
            var Empty = function Empty2() {};
            Empty.prototype = target.prototype;
            bound.prototype = new Empty();
            Empty.prototype = null;
          }
          return bound;
        };
      },
    });
    require_function_bind4 = __commonJS({
      "../../node_modules/gopd/node_modules/function-bind/index.js"(exports, module) {
        "use strict";
        var implementation = require_implementation4();
        module.exports = Function.prototype.bind || implementation;
      },
    });
    require_get_intrinsic3 = __commonJS({
      "../../node_modules/gopd/node_modules/get-intrinsic/index.js"(exports, module) {
        "use strict";
        var undefined2;
        var $SyntaxError = SyntaxError;
        var $Function = Function;
        var $TypeError = TypeError;
        var getEvalledConstructor = function (expressionSyntax) {
          try {
            return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
          } catch (e) {}
        };
        var $gOPD = Object.getOwnPropertyDescriptor;
        if ($gOPD) {
          try {
            $gOPD({}, "");
          } catch (e) {
            $gOPD = null;
          }
        }
        var throwTypeError = function () {
          throw new $TypeError();
        };
        var ThrowTypeError = $gOPD
          ? (function () {
              try {
                arguments.callee;
                return throwTypeError;
              } catch (calleeThrows) {
                try {
                  return $gOPD(arguments, "callee").get;
                } catch (gOPDthrows) {
                  return throwTypeError;
                }
              }
            })()
          : throwTypeError;
        var hasSymbols = require_has_symbols()();
        var getProto =
          Object.getPrototypeOf ||
          function (x) {
            return x.__proto__;
          };
        var needsEval = {};
        var TypedArray = typeof Uint8Array === "undefined" ? undefined2 : getProto(Uint8Array);
        var INTRINSICS = {
          "%AggregateError%": typeof AggregateError === "undefined" ? undefined2 : AggregateError,
          "%Array%": Array,
          "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined2 : ArrayBuffer,
          "%ArrayIteratorPrototype%": hasSymbols ? getProto([][Symbol.iterator]()) : undefined2,
          "%AsyncFromSyncIteratorPrototype%": undefined2,
          "%AsyncFunction%": needsEval,
          "%AsyncGenerator%": needsEval,
          "%AsyncGeneratorFunction%": needsEval,
          "%AsyncIteratorPrototype%": needsEval,
          "%Atomics%": typeof Atomics === "undefined" ? undefined2 : Atomics,
          "%BigInt%": typeof BigInt === "undefined" ? undefined2 : BigInt,
          "%BigInt64Array%": typeof BigInt64Array === "undefined" ? undefined2 : BigInt64Array,
          "%BigUint64Array%": typeof BigUint64Array === "undefined" ? undefined2 : BigUint64Array,
          "%Boolean%": Boolean,
          "%DataView%": typeof DataView === "undefined" ? undefined2 : DataView,
          "%Date%": Date,
          "%decodeURI%": decodeURI,
          "%decodeURIComponent%": decodeURIComponent,
          "%encodeURI%": encodeURI,
          "%encodeURIComponent%": encodeURIComponent,
          "%Error%": Error,
          "%eval%": eval,
          "%EvalError%": EvalError,
          "%Float32Array%": typeof Float32Array === "undefined" ? undefined2 : Float32Array,
          "%Float64Array%": typeof Float64Array === "undefined" ? undefined2 : Float64Array,
          "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined2 : FinalizationRegistry,
          "%Function%": $Function,
          "%GeneratorFunction%": needsEval,
          "%Int8Array%": typeof Int8Array === "undefined" ? undefined2 : Int8Array,
          "%Int16Array%": typeof Int16Array === "undefined" ? undefined2 : Int16Array,
          "%Int32Array%": typeof Int32Array === "undefined" ? undefined2 : Int32Array,
          "%isFinite%": isFinite,
          "%isNaN%": isNaN,
          "%IteratorPrototype%": hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined2,
          "%JSON%": typeof JSON === "object" ? JSON : undefined2,
          "%Map%": typeof Map === "undefined" ? undefined2 : Map,
          "%MapIteratorPrototype%":
            typeof Map === "undefined" || !hasSymbols
              ? undefined2
              : getProto(/* @__PURE__ */ new Map()[Symbol.iterator]()),
          "%Math%": Math,
          "%Number%": Number,
          "%Object%": Object,
          "%parseFloat%": parseFloat,
          "%parseInt%": parseInt,
          "%Promise%": typeof Promise === "undefined" ? undefined2 : Promise,
          "%Proxy%": typeof Proxy === "undefined" ? undefined2 : Proxy,
          "%RangeError%": RangeError,
          "%ReferenceError%": ReferenceError,
          "%Reflect%": typeof Reflect === "undefined" ? undefined2 : Reflect,
          "%RegExp%": RegExp,
          "%Set%": typeof Set === "undefined" ? undefined2 : Set,
          "%SetIteratorPrototype%":
            typeof Set === "undefined" || !hasSymbols
              ? undefined2
              : getProto(/* @__PURE__ */ new Set()[Symbol.iterator]()),
          "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined2 : SharedArrayBuffer,
          "%String%": String,
          "%StringIteratorPrototype%": hasSymbols ? getProto(""[Symbol.iterator]()) : undefined2,
          "%Symbol%": hasSymbols ? Symbol : undefined2,
          "%SyntaxError%": $SyntaxError,
          "%ThrowTypeError%": ThrowTypeError,
          "%TypedArray%": TypedArray,
          "%TypeError%": $TypeError,
          "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined2 : Uint8Array,
          "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined2 : Uint8ClampedArray,
          "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined2 : Uint16Array,
          "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined2 : Uint32Array,
          "%URIError%": URIError,
          "%WeakMap%": typeof WeakMap === "undefined" ? undefined2 : WeakMap,
          "%WeakRef%": typeof WeakRef === "undefined" ? undefined2 : WeakRef,
          "%WeakSet%": typeof WeakSet === "undefined" ? undefined2 : WeakSet,
        };
        try {
          null.error;
        } catch (e) {
          errorProto = getProto(getProto(e));
          INTRINSICS["%Error.prototype%"] = errorProto;
        }
        var errorProto;
        var doEval = function doEval2(name) {
          var value;
          if (name === "%AsyncFunction%") {
            value = getEvalledConstructor("async function () {}");
          } else if (name === "%GeneratorFunction%") {
            value = getEvalledConstructor("function* () {}");
          } else if (name === "%AsyncGeneratorFunction%") {
            value = getEvalledConstructor("async function* () {}");
          } else if (name === "%AsyncGenerator%") {
            var fn = doEval2("%AsyncGeneratorFunction%");
            if (fn) {
              value = fn.prototype;
            }
          } else if (name === "%AsyncIteratorPrototype%") {
            var gen = doEval2("%AsyncGenerator%");
            if (gen) {
              value = getProto(gen.prototype);
            }
          }
          INTRINSICS[name] = value;
          return value;
        };
        var LEGACY_ALIASES = {
          "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
          "%ArrayPrototype%": ["Array", "prototype"],
          "%ArrayProto_entries%": ["Array", "prototype", "entries"],
          "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
          "%ArrayProto_keys%": ["Array", "prototype", "keys"],
          "%ArrayProto_values%": ["Array", "prototype", "values"],
          "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
          "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
          "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
          "%BooleanPrototype%": ["Boolean", "prototype"],
          "%DataViewPrototype%": ["DataView", "prototype"],
          "%DatePrototype%": ["Date", "prototype"],
          "%ErrorPrototype%": ["Error", "prototype"],
          "%EvalErrorPrototype%": ["EvalError", "prototype"],
          "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
          "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
          "%FunctionPrototype%": ["Function", "prototype"],
          "%Generator%": ["GeneratorFunction", "prototype"],
          "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
          "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
          "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
          "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
          "%JSONParse%": ["JSON", "parse"],
          "%JSONStringify%": ["JSON", "stringify"],
          "%MapPrototype%": ["Map", "prototype"],
          "%NumberPrototype%": ["Number", "prototype"],
          "%ObjectPrototype%": ["Object", "prototype"],
          "%ObjProto_toString%": ["Object", "prototype", "toString"],
          "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
          "%PromisePrototype%": ["Promise", "prototype"],
          "%PromiseProto_then%": ["Promise", "prototype", "then"],
          "%Promise_all%": ["Promise", "all"],
          "%Promise_reject%": ["Promise", "reject"],
          "%Promise_resolve%": ["Promise", "resolve"],
          "%RangeErrorPrototype%": ["RangeError", "prototype"],
          "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
          "%RegExpPrototype%": ["RegExp", "prototype"],
          "%SetPrototype%": ["Set", "prototype"],
          "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
          "%StringPrototype%": ["String", "prototype"],
          "%SymbolPrototype%": ["Symbol", "prototype"],
          "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
          "%TypedArrayPrototype%": ["TypedArray", "prototype"],
          "%TypeErrorPrototype%": ["TypeError", "prototype"],
          "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
          "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
          "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
          "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
          "%URIErrorPrototype%": ["URIError", "prototype"],
          "%WeakMapPrototype%": ["WeakMap", "prototype"],
          "%WeakSetPrototype%": ["WeakSet", "prototype"],
        };
        var bind = require_function_bind4();
        var hasOwn = require_src();
        var $concat = bind.call(Function.call, Array.prototype.concat);
        var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
        var $replace = bind.call(Function.call, String.prototype.replace);
        var $strSlice = bind.call(Function.call, String.prototype.slice);
        var $exec = bind.call(Function.call, RegExp.prototype.exec);
        var rePropName =
          /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
        var reEscapeChar = /\\(\\)?/g;
        var stringToPath = function stringToPath2(string) {
          var first = $strSlice(string, 0, 1);
          var last = $strSlice(string, -1);
          if (first === "%" && last !== "%") {
            throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
          } else if (last === "%" && first !== "%") {
            throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
          }
          var result = [];
          $replace(string, rePropName, function (match, number, quote, subString) {
            result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match;
          });
          return result;
        };
        var getBaseIntrinsic = function getBaseIntrinsic2(name, allowMissing) {
          var intrinsicName = name;
          var alias;
          if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
            alias = LEGACY_ALIASES[intrinsicName];
            intrinsicName = "%" + alias[0] + "%";
          }
          if (hasOwn(INTRINSICS, intrinsicName)) {
            var value = INTRINSICS[intrinsicName];
            if (value === needsEval) {
              value = doEval(intrinsicName);
            }
            if (typeof value === "undefined" && !allowMissing) {
              throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
            }
            return {
              alias,
              name: intrinsicName,
              value,
            };
          }
          throw new $SyntaxError("intrinsic " + name + " does not exist!");
        };
        module.exports = function GetIntrinsic(name, allowMissing) {
          if (typeof name !== "string" || name.length === 0) {
            throw new $TypeError("intrinsic name must be a non-empty string");
          }
          if (arguments.length > 1 && typeof allowMissing !== "boolean") {
            throw new $TypeError('"allowMissing" argument must be a boolean');
          }
          if ($exec(/^%?[^%]*%?$/, name) === null) {
            throw new $SyntaxError(
              "`%` may not be present anywhere but at the beginning and end of the intrinsic name"
            );
          }
          var parts = stringToPath(name);
          var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
          var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
          var intrinsicRealName = intrinsic.name;
          var value = intrinsic.value;
          var skipFurtherCaching = false;
          var alias = intrinsic.alias;
          if (alias) {
            intrinsicBaseName = alias[0];
            $spliceApply(parts, $concat([0, 1], alias));
          }
          for (var i = 1, isOwn = true; i < parts.length; i += 1) {
            var part = parts[i];
            var first = $strSlice(part, 0, 1);
            var last = $strSlice(part, -1);
            if (
              (first === '"' || first === "'" || first === "`" || last === '"' || last === "'" || last === "`") &&
              first !== last
            ) {
              throw new $SyntaxError("property names with quotes must have matching quotes");
            }
            if (part === "constructor" || !isOwn) {
              skipFurtherCaching = true;
            }
            intrinsicBaseName += "." + part;
            intrinsicRealName = "%" + intrinsicBaseName + "%";
            if (hasOwn(INTRINSICS, intrinsicRealName)) {
              value = INTRINSICS[intrinsicRealName];
            } else if (value != null) {
              if (!(part in value)) {
                if (!allowMissing) {
                  throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
                }
                return void 0;
              }
              if ($gOPD && i + 1 >= parts.length) {
                var desc = $gOPD(value, part);
                isOwn = !!desc;
                if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
                  value = desc.get;
                } else {
                  value = value[part];
                }
              } else {
                isOwn = hasOwn(value, part);
                value = value[part];
              }
              if (isOwn && !skipFurtherCaching) {
                INTRINSICS[intrinsicRealName] = value;
              }
            }
          }
          return value;
        };
      },
    });
    require_gopd = __commonJS({
      "../../node_modules/gopd/index.js"(exports, module) {
        "use strict";
        var GetIntrinsic = require_get_intrinsic3();
        var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true);
        if ($gOPD) {
          try {
            $gOPD([], "length");
          } catch (e) {
            $gOPD = null;
          }
        }
        module.exports = $gOPD;
      },
    });
    require_is_typed_array = __commonJS({
      "../../node_modules/util/node_modules/is-typed-array/index.js"(exports, module) {
        "use strict";
        var forEach = require_for_each();
        var availableTypedArrays = require_available_typed_arrays();
        var callBound = require_callBound2();
        var $toString = callBound("Object.prototype.toString");
        var hasToStringTag = require_shams2()();
        var gOPD = require_gopd();
        var g = typeof globalThis === "undefined" ? global : globalThis;
        var typedArrays = availableTypedArrays();
        var $indexOf =
          callBound("Array.prototype.indexOf", true) ||
          function indexOf(array, value) {
            for (var i = 0; i < array.length; i += 1) {
              if (array[i] === value) {
                return i;
              }
            }
            return -1;
          };
        var $slice = callBound("String.prototype.slice");
        var toStrTags = {};
        var getPrototypeOf = Object.getPrototypeOf;
        if (hasToStringTag && gOPD && getPrototypeOf) {
          forEach(typedArrays, function (typedArray) {
            var arr = new g[typedArray]();
            if (Symbol.toStringTag in arr) {
              var proto = getPrototypeOf(arr);
              var descriptor = gOPD(proto, Symbol.toStringTag);
              if (!descriptor) {
                var superProto = getPrototypeOf(proto);
                descriptor = gOPD(superProto, Symbol.toStringTag);
              }
              toStrTags[typedArray] = descriptor.get;
            }
          });
        }
        var tryTypedArrays = function tryAllTypedArrays(value) {
          var anyTrue = false;
          forEach(toStrTags, function (getter, typedArray) {
            if (!anyTrue) {
              try {
                anyTrue = getter.call(value) === typedArray;
              } catch (e) {}
            }
          });
          return anyTrue;
        };
        module.exports = function isTypedArray(value) {
          if (!value || typeof value !== "object") {
            return false;
          }
          if (!hasToStringTag || !(Symbol.toStringTag in value)) {
            var tag = $slice($toString(value), 8, -1);
            return $indexOf(typedArrays, tag) > -1;
          }
          if (!gOPD) {
            return false;
          }
          return tryTypedArrays(value);
        };
      },
    });
    require_which_typed_array = __commonJS({
      "../../node_modules/util/node_modules/which-typed-array/index.js"(exports, module) {
        "use strict";
        var forEach = require_for_each();
        var availableTypedArrays = require_available_typed_arrays();
        var callBound = require_callBound2();
        var gOPD = require_gopd();
        var $toString = callBound("Object.prototype.toString");
        var hasToStringTag = require_shams2()();
        var g = typeof globalThis === "undefined" ? global : globalThis;
        var typedArrays = availableTypedArrays();
        var $slice = callBound("String.prototype.slice");
        var toStrTags = {};
        var getPrototypeOf = Object.getPrototypeOf;
        if (hasToStringTag && gOPD && getPrototypeOf) {
          forEach(typedArrays, function (typedArray) {
            if (typeof g[typedArray] === "function") {
              var arr = new g[typedArray]();
              if (Symbol.toStringTag in arr) {
                var proto = getPrototypeOf(arr);
                var descriptor = gOPD(proto, Symbol.toStringTag);
                if (!descriptor) {
                  var superProto = getPrototypeOf(proto);
                  descriptor = gOPD(superProto, Symbol.toStringTag);
                }
                toStrTags[typedArray] = descriptor.get;
              }
            }
          });
        }
        var tryTypedArrays = function tryAllTypedArrays(value) {
          var foundName = false;
          forEach(toStrTags, function (getter, typedArray) {
            if (!foundName) {
              try {
                var name = getter.call(value);
                if (name === typedArray) {
                  foundName = name;
                }
              } catch (e) {}
            }
          });
          return foundName;
        };
        var isTypedArray = require_is_typed_array();
        module.exports = function whichTypedArray(value) {
          if (!isTypedArray(value)) {
            return false;
          }
          if (!hasToStringTag || !(Symbol.toStringTag in value)) {
            return $slice($toString(value), 8, -1);
          }
          return tryTypedArrays(value);
        };
      },
    });
    require_types = __commonJS({
      "../../node_modules/util/support/types.js"(exports) {
        "use strict";
        var isArgumentsObject = require_is_arguments();
        var isGeneratorFunction = require_is_generator_function();
        var whichTypedArray = require_which_typed_array();
        var isTypedArray = require_is_typed_array();
        function uncurryThis(f) {
          return f.call.bind(f);
        }
        var BigIntSupported = typeof BigInt !== "undefined";
        var SymbolSupported = typeof Symbol !== "undefined";
        var ObjectToString = uncurryThis(Object.prototype.toString);
        var numberValue = uncurryThis(Number.prototype.valueOf);
        var stringValue = uncurryThis(String.prototype.valueOf);
        var booleanValue = uncurryThis(Boolean.prototype.valueOf);
        if (BigIntSupported) {
          bigIntValue = uncurryThis(BigInt.prototype.valueOf);
        }
        var bigIntValue;
        if (SymbolSupported) {
          symbolValue = uncurryThis(Symbol.prototype.valueOf);
        }
        var symbolValue;
        function checkBoxedPrimitive(value, prototypeValueOf) {
          if (typeof value !== "object") {
            return false;
          }
          try {
            prototypeValueOf(value);
            return true;
          } catch (e) {
            return false;
          }
        }
        exports.isArgumentsObject = isArgumentsObject;
        exports.isGeneratorFunction = isGeneratorFunction;
        exports.isTypedArray = isTypedArray;
        function isPromise(input) {
          return (
            (typeof Promise !== "undefined" && input instanceof Promise) ||
            (input !== null &&
              typeof input === "object" &&
              typeof input.then === "function" &&
              typeof input.catch === "function")
          );
        }
        exports.isPromise = isPromise;
        function isArrayBufferView(value) {
          if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
            return ArrayBuffer.isView(value);
          }
          return isTypedArray(value) || isDataView(value);
        }
        exports.isArrayBufferView = isArrayBufferView;
        function isUint8Array(value) {
          return whichTypedArray(value) === "Uint8Array";
        }
        exports.isUint8Array = isUint8Array;
        function isUint8ClampedArray(value) {
          return whichTypedArray(value) === "Uint8ClampedArray";
        }
        exports.isUint8ClampedArray = isUint8ClampedArray;
        function isUint16Array(value) {
          return whichTypedArray(value) === "Uint16Array";
        }
        exports.isUint16Array = isUint16Array;
        function isUint32Array(value) {
          return whichTypedArray(value) === "Uint32Array";
        }
        exports.isUint32Array = isUint32Array;
        function isInt8Array(value) {
          return whichTypedArray(value) === "Int8Array";
        }
        exports.isInt8Array = isInt8Array;
        function isInt16Array(value) {
          return whichTypedArray(value) === "Int16Array";
        }
        exports.isInt16Array = isInt16Array;
        function isInt32Array(value) {
          return whichTypedArray(value) === "Int32Array";
        }
        exports.isInt32Array = isInt32Array;
        function isFloat32Array(value) {
          return whichTypedArray(value) === "Float32Array";
        }
        exports.isFloat32Array = isFloat32Array;
        function isFloat64Array(value) {
          return whichTypedArray(value) === "Float64Array";
        }
        exports.isFloat64Array = isFloat64Array;
        function isBigInt64Array(value) {
          return whichTypedArray(value) === "BigInt64Array";
        }
        exports.isBigInt64Array = isBigInt64Array;
        function isBigUint64Array(value) {
          return whichTypedArray(value) === "BigUint64Array";
        }
        exports.isBigUint64Array = isBigUint64Array;
        function isMapToString(value) {
          return ObjectToString(value) === "[object Map]";
        }
        isMapToString.working = typeof Map !== "undefined" && isMapToString(/* @__PURE__ */ new Map());
        function isMap(value) {
          if (typeof Map === "undefined") {
            return false;
          }
          return isMapToString.working ? isMapToString(value) : value instanceof Map;
        }
        exports.isMap = isMap;
        function isSetToString(value) {
          return ObjectToString(value) === "[object Set]";
        }
        isSetToString.working = typeof Set !== "undefined" && isSetToString(/* @__PURE__ */ new Set());
        function isSet(value) {
          if (typeof Set === "undefined") {
            return false;
          }
          return isSetToString.working ? isSetToString(value) : value instanceof Set;
        }
        exports.isSet = isSet;
        function isWeakMapToString(value) {
          return ObjectToString(value) === "[object WeakMap]";
        }
        isWeakMapToString.working = typeof WeakMap !== "undefined" && isWeakMapToString(/* @__PURE__ */ new WeakMap());
        function isWeakMap(value) {
          if (typeof WeakMap === "undefined") {
            return false;
          }
          return isWeakMapToString.working ? isWeakMapToString(value) : value instanceof WeakMap;
        }
        exports.isWeakMap = isWeakMap;
        function isWeakSetToString(value) {
          return ObjectToString(value) === "[object WeakSet]";
        }
        isWeakSetToString.working = typeof WeakSet !== "undefined" && isWeakSetToString(/* @__PURE__ */ new WeakSet());
        function isWeakSet(value) {
          return isWeakSetToString(value);
        }
        exports.isWeakSet = isWeakSet;
        function isArrayBufferToString(value) {
          return ObjectToString(value) === "[object ArrayBuffer]";
        }
        isArrayBufferToString.working = typeof ArrayBuffer !== "undefined" && isArrayBufferToString(new ArrayBuffer());
        function isArrayBuffer2(value) {
          if (typeof ArrayBuffer === "undefined") {
            return false;
          }
          return isArrayBufferToString.working ? isArrayBufferToString(value) : value instanceof ArrayBuffer;
        }
        exports.isArrayBuffer = isArrayBuffer2;
        function isDataViewToString(value) {
          return ObjectToString(value) === "[object DataView]";
        }
        isDataViewToString.working =
          typeof ArrayBuffer !== "undefined" &&
          typeof DataView !== "undefined" &&
          isDataViewToString(new DataView(new ArrayBuffer(1), 0, 1));
        function isDataView(value) {
          if (typeof DataView === "undefined") {
            return false;
          }
          return isDataViewToString.working ? isDataViewToString(value) : value instanceof DataView;
        }
        exports.isDataView = isDataView;
        var SharedArrayBufferCopy = typeof SharedArrayBuffer !== "undefined" ? SharedArrayBuffer : void 0;
        function isSharedArrayBufferToString(value) {
          return ObjectToString(value) === "[object SharedArrayBuffer]";
        }
        function isSharedArrayBuffer(value) {
          if (typeof SharedArrayBufferCopy === "undefined") {
            return false;
          }
          if (typeof isSharedArrayBufferToString.working === "undefined") {
            isSharedArrayBufferToString.working = isSharedArrayBufferToString(new SharedArrayBufferCopy());
          }
          return isSharedArrayBufferToString.working
            ? isSharedArrayBufferToString(value)
            : value instanceof SharedArrayBufferCopy;
        }
        exports.isSharedArrayBuffer = isSharedArrayBuffer;
        function isAsyncFunction(value) {
          return ObjectToString(value) === "[object AsyncFunction]";
        }
        exports.isAsyncFunction = isAsyncFunction;
        function isMapIterator(value) {
          return ObjectToString(value) === "[object Map Iterator]";
        }
        exports.isMapIterator = isMapIterator;
        function isSetIterator(value) {
          return ObjectToString(value) === "[object Set Iterator]";
        }
        exports.isSetIterator = isSetIterator;
        function isGeneratorObject(value) {
          return ObjectToString(value) === "[object Generator]";
        }
        exports.isGeneratorObject = isGeneratorObject;
        function isWebAssemblyCompiledModule(value) {
          return ObjectToString(value) === "[object WebAssembly.Module]";
        }
        exports.isWebAssemblyCompiledModule = isWebAssemblyCompiledModule;
        function isNumberObject(value) {
          return checkBoxedPrimitive(value, numberValue);
        }
        exports.isNumberObject = isNumberObject;
        function isStringObject(value) {
          return checkBoxedPrimitive(value, stringValue);
        }
        exports.isStringObject = isStringObject;
        function isBooleanObject(value) {
          return checkBoxedPrimitive(value, booleanValue);
        }
        exports.isBooleanObject = isBooleanObject;
        function isBigIntObject(value) {
          return BigIntSupported && checkBoxedPrimitive(value, bigIntValue);
        }
        exports.isBigIntObject = isBigIntObject;
        function isSymbolObject(value) {
          return SymbolSupported && checkBoxedPrimitive(value, symbolValue);
        }
        exports.isSymbolObject = isSymbolObject;
        function isBoxedPrimitive(value) {
          return (
            isNumberObject(value) ||
            isStringObject(value) ||
            isBooleanObject(value) ||
            isBigIntObject(value) ||
            isSymbolObject(value)
          );
        }
        exports.isBoxedPrimitive = isBoxedPrimitive;
        function isAnyArrayBuffer(value) {
          return typeof Uint8Array !== "undefined" && (isArrayBuffer2(value) || isSharedArrayBuffer(value));
        }
        exports.isAnyArrayBuffer = isAnyArrayBuffer;
        ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function (method) {
          Object.defineProperty(exports, method, {
            enumerable: false,
            value: function () {
              throw new Error(method + " is not supported in userland");
            },
          });
        });
      },
    });
    require_isBufferBrowser = __commonJS({
      "../../node_modules/util/support/isBufferBrowser.js"(exports, module) {
        module.exports = function isBuffer(arg) {
          return (
            arg &&
            typeof arg === "object" &&
            typeof arg.copy === "function" &&
            typeof arg.fill === "function" &&
            typeof arg.readUInt8 === "function"
          );
        };
      },
    });
    require_util = __commonJS({
      "../../node_modules/util/util.js"(exports) {
        var getOwnPropertyDescriptors =
          Object.getOwnPropertyDescriptors ||
          function getOwnPropertyDescriptors2(obj) {
            var keys = Object.keys(obj);
            var descriptors = {};
            for (var i = 0; i < keys.length; i++) {
              descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
            }
            return descriptors;
          };
        var formatRegExp = /%[sdj%]/g;
        exports.format = function (f) {
          if (!isString(f)) {
            var objects = [];
            for (var i = 0; i < arguments.length; i++) {
              objects.push(inspect(arguments[i]));
            }
            return objects.join(" ");
          }
          var i = 1;
          var args = arguments;
          var len = args.length;
          var str = String(f).replace(formatRegExp, function (x2) {
            if (x2 === "%%") return "%";
            if (i >= len) return x2;
            switch (x2) {
              case "%s":
                return String(args[i++]);
              case "%d":
                return Number(args[i++]);
              case "%j":
                try {
                  return JSON.stringify(args[i++]);
                } catch (_) {
                  return "[Circular]";
                }
              default:
                return x2;
            }
          });
          for (var x = args[i]; i < len; x = args[++i]) {
            if (isNull(x) || !isObject(x)) {
              str += " " + x;
            } else {
              str += " " + inspect(x);
            }
          }
          return str;
        };
        exports.deprecate = function (fn, msg) {
          if (typeof process !== "undefined" && process.noDeprecation === true) {
            return fn;
          }
          if (typeof process === "undefined") {
            return function () {
              return exports.deprecate(fn, msg).apply(this, arguments);
            };
          }
          var warned = false;
          function deprecated() {
            if (!warned) {
              if (process.throwDeprecation) {
                throw new Error(msg);
              } else if (process.traceDeprecation) {
                console.trace(msg);
              } else {
                console.error(msg);
              }
              warned = true;
            }
            return fn.apply(this, arguments);
          }
          return deprecated;
        };
        var debugs = {};
        var debugEnvRegex = /^$/;
        if (process.env.NODE_DEBUG) {
          debugEnv = process.env.NODE_DEBUG;
          debugEnv = debugEnv
            .replace(/[|\\{}()[\]^$+?.]/g, "\\$&")
            .replace(/\*/g, ".*")
            .replace(/,/g, "$|^")
            .toUpperCase();
          debugEnvRegex = new RegExp("^" + debugEnv + "$", "i");
        }
        var debugEnv;
        exports.debuglog = function (set) {
          set = set.toUpperCase();
          if (!debugs[set]) {
            if (debugEnvRegex.test(set)) {
              var pid = process.pid;
              debugs[set] = function () {
                var msg = exports.format.apply(exports, arguments);
                console.error("%s %d: %s", set, pid, msg);
              };
            } else {
              debugs[set] = function () {};
            }
          }
          return debugs[set];
        };
        function inspect(obj, opts) {
          var ctx = {
            seen: [],
            stylize: stylizeNoColor,
          };
          if (arguments.length >= 3) ctx.depth = arguments[2];
          if (arguments.length >= 4) ctx.colors = arguments[3];
          if (isBoolean(opts)) {
            ctx.showHidden = opts;
          } else if (opts) {
            exports._extend(ctx, opts);
          }
          if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
          if (isUndefined(ctx.depth)) ctx.depth = 2;
          if (isUndefined(ctx.colors)) ctx.colors = false;
          if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
          if (ctx.colors) ctx.stylize = stylizeWithColor;
          return formatValue(ctx, obj, ctx.depth);
        }
        exports.inspect = inspect;
        inspect.colors = {
          bold: [1, 22],
          italic: [3, 23],
          underline: [4, 24],
          inverse: [7, 27],
          white: [37, 39],
          grey: [90, 39],
          black: [30, 39],
          blue: [34, 39],
          cyan: [36, 39],
          green: [32, 39],
          magenta: [35, 39],
          red: [31, 39],
          yellow: [33, 39],
        };
        inspect.styles = {
          special: "cyan",
          number: "yellow",
          boolean: "yellow",
          undefined: "grey",
          null: "bold",
          string: "green",
          date: "magenta",
          regexp: "red",
        };
        function stylizeWithColor(str, styleType) {
          var style = inspect.styles[styleType];
          if (style) {
            return "\x1B[" + inspect.colors[style][0] + "m" + str + "\x1B[" + inspect.colors[style][1] + "m";
          } else {
            return str;
          }
        }
        function stylizeNoColor(str, styleType) {
          return str;
        }
        function arrayToHash(array) {
          var hash = {};
          array.forEach(function (val, idx) {
            hash[val] = true;
          });
          return hash;
        }
        function formatValue(ctx, value, recurseTimes) {
          if (
            ctx.customInspect &&
            value &&
            isFunction(value.inspect) &&
            value.inspect !== exports.inspect &&
            !(value.constructor && value.constructor.prototype === value)
          ) {
            var ret = value.inspect(recurseTimes, ctx);
            if (!isString(ret)) {
              ret = formatValue(ctx, ret, recurseTimes);
            }
            return ret;
          }
          var primitive = formatPrimitive(ctx, value);
          if (primitive) {
            return primitive;
          }
          var keys = Object.keys(value);
          var visibleKeys = arrayToHash(keys);
          if (ctx.showHidden) {
            keys = Object.getOwnPropertyNames(value);
          }
          if (isError(value) && (keys.indexOf("message") >= 0 || keys.indexOf("description") >= 0)) {
            return formatError(value);
          }
          if (keys.length === 0) {
            if (isFunction(value)) {
              var name = value.name ? ": " + value.name : "";
              return ctx.stylize("[Function" + name + "]", "special");
            }
            if (isRegExp(value)) {
              return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
            }
            if (isDate(value)) {
              return ctx.stylize(Date.prototype.toString.call(value), "date");
            }
            if (isError(value)) {
              return formatError(value);
            }
          }
          var base = "",
            array = false,
            braces = ["{", "}"];
          if (isArray(value)) {
            array = true;
            braces = ["[", "]"];
          }
          if (isFunction(value)) {
            var n = value.name ? ": " + value.name : "";
            base = " [Function" + n + "]";
          }
          if (isRegExp(value)) {
            base = " " + RegExp.prototype.toString.call(value);
          }
          if (isDate(value)) {
            base = " " + Date.prototype.toUTCString.call(value);
          }
          if (isError(value)) {
            base = " " + formatError(value);
          }
          if (keys.length === 0 && (!array || value.length == 0)) {
            return braces[0] + base + braces[1];
          }
          if (recurseTimes < 0) {
            if (isRegExp(value)) {
              return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
            } else {
              return ctx.stylize("[Object]", "special");
            }
          }
          ctx.seen.push(value);
          var output;
          if (array) {
            output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
          } else {
            output = keys.map(function (key) {
              return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
            });
          }
          ctx.seen.pop();
          return reduceToSingleString(output, base, braces);
        }
        function formatPrimitive(ctx, value) {
          if (isUndefined(value)) return ctx.stylize("undefined", "undefined");
          if (isString(value)) {
            var simple =
              "'" + JSON.stringify(value).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
            return ctx.stylize(simple, "string");
          }
          if (isNumber(value)) return ctx.stylize("" + value, "number");
          if (isBoolean(value)) return ctx.stylize("" + value, "boolean");
          if (isNull(value)) return ctx.stylize("null", "null");
        }
        function formatError(value) {
          return "[" + Error.prototype.toString.call(value) + "]";
        }
        function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
          var output = [];
          for (var i = 0, l = value.length; i < l; ++i) {
            if (hasOwnProperty(value, String(i))) {
              output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
            } else {
              output.push("");
            }
          }
          keys.forEach(function (key) {
            if (!key.match(/^\d+$/)) {
              output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
            }
          });
          return output;
        }
        function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
          var name, str, desc;
          desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
          if (desc.get) {
            if (desc.set) {
              str = ctx.stylize("[Getter/Setter]", "special");
            } else {
              str = ctx.stylize("[Getter]", "special");
            }
          } else {
            if (desc.set) {
              str = ctx.stylize("[Setter]", "special");
            }
          }
          if (!hasOwnProperty(visibleKeys, key)) {
            name = "[" + key + "]";
          }
          if (!str) {
            if (ctx.seen.indexOf(desc.value) < 0) {
              if (isNull(recurseTimes)) {
                str = formatValue(ctx, desc.value, null);
              } else {
                str = formatValue(ctx, desc.value, recurseTimes - 1);
              }
              if (str.indexOf("\n") > -1) {
                if (array) {
                  str = str
                    .split("\n")
                    .map(function (line) {
                      return "  " + line;
                    })
                    .join("\n")
                    .slice(2);
                } else {
                  str =
                    "\n" +
                    str
                      .split("\n")
                      .map(function (line) {
                        return "   " + line;
                      })
                      .join("\n");
                }
              }
            } else {
              str = ctx.stylize("[Circular]", "special");
            }
          }
          if (isUndefined(name)) {
            if (array && key.match(/^\d+$/)) {
              return str;
            }
            name = JSON.stringify("" + key);
            if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
              name = name.slice(1, -1);
              name = ctx.stylize(name, "name");
            } else {
              name = name
                .replace(/'/g, "\\'")
                .replace(/\\"/g, '"')
                .replace(/(^"|"$)/g, "'");
              name = ctx.stylize(name, "string");
            }
          }
          return name + ": " + str;
        }
        function reduceToSingleString(output, base, braces) {
          var numLinesEst = 0;
          var length = output.reduce(function (prev, cur) {
            numLinesEst++;
            if (cur.indexOf("\n") >= 0) numLinesEst++;
            return prev + cur.replace(/\u001b\[\d\d?m/g, "").length + 1;
          }, 0);
          if (length > 60) {
            return braces[0] + (base === "" ? "" : base + "\n ") + " " + output.join(",\n  ") + " " + braces[1];
          }
          return braces[0] + base + " " + output.join(", ") + " " + braces[1];
        }
        exports.types = require_types();
        function isArray(ar) {
          return Array.isArray(ar);
        }
        exports.isArray = isArray;
        function isBoolean(arg) {
          return typeof arg === "boolean";
        }
        exports.isBoolean = isBoolean;
        function isNull(arg) {
          return arg === null;
        }
        exports.isNull = isNull;
        function isNullOrUndefined(arg) {
          return arg == null;
        }
        exports.isNullOrUndefined = isNullOrUndefined;
        function isNumber(arg) {
          return typeof arg === "number";
        }
        exports.isNumber = isNumber;
        function isString(arg) {
          return typeof arg === "string";
        }
        exports.isString = isString;
        function isSymbol(arg) {
          return typeof arg === "symbol";
        }
        exports.isSymbol = isSymbol;
        function isUndefined(arg) {
          return arg === void 0;
        }
        exports.isUndefined = isUndefined;
        function isRegExp(re) {
          return isObject(re) && objectToString(re) === "[object RegExp]";
        }
        exports.isRegExp = isRegExp;
        exports.types.isRegExp = isRegExp;
        function isObject(arg) {
          return typeof arg === "object" && arg !== null;
        }
        exports.isObject = isObject;
        function isDate(d) {
          return isObject(d) && objectToString(d) === "[object Date]";
        }
        exports.isDate = isDate;
        exports.types.isDate = isDate;
        function isError(e) {
          return isObject(e) && (objectToString(e) === "[object Error]" || e instanceof Error);
        }
        exports.isError = isError;
        exports.types.isNativeError = isError;
        function isFunction(arg) {
          return typeof arg === "function";
        }
        exports.isFunction = isFunction;
        function isPrimitive(arg) {
          return (
            arg === null ||
            typeof arg === "boolean" ||
            typeof arg === "number" ||
            typeof arg === "string" ||
            typeof arg === "symbol" ||
            typeof arg === "undefined"
          );
        }
        exports.isPrimitive = isPrimitive;
        exports.isBuffer = require_isBufferBrowser();
        function objectToString(o) {
          return Object.prototype.toString.call(o);
        }
        function pad(n) {
          return n < 10 ? "0" + n.toString(10) : n.toString(10);
        }
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        function timestamp() {
          var d = /* @__PURE__ */ new Date();
          var time = [pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds())].join(":");
          return [d.getDate(), months[d.getMonth()], time].join(" ");
        }
        exports.log = function () {
          console.log("%s - %s", timestamp(), exports.format.apply(exports, arguments));
        };
        exports.inherits = require_inherits();
        exports._extend = function (origin, add) {
          if (!add || !isObject(add)) return origin;
          var keys = Object.keys(add);
          var i = keys.length;
          while (i--) {
            origin[keys[i]] = add[keys[i]];
          }
          return origin;
        };
        function hasOwnProperty(obj, prop) {
          return Object.prototype.hasOwnProperty.call(obj, prop);
        }
        var kCustomPromisifiedSymbol = typeof Symbol !== "undefined" ? Symbol("util.promisify.custom") : void 0;
        exports.promisify = function promisify(original) {
          if (typeof original !== "function") throw new TypeError('The "original" argument must be of type Function');
          if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
            var fn = original[kCustomPromisifiedSymbol];
            if (typeof fn !== "function") {
              throw new TypeError('The "util.promisify.custom" argument must be of type Function');
            }
            Object.defineProperty(fn, kCustomPromisifiedSymbol, {
              value: fn,
              enumerable: false,
              writable: false,
              configurable: true,
            });
            return fn;
          }
          function fn() {
            var promiseResolve, promiseReject;
            var promise = new Promise(function (resolve, reject) {
              promiseResolve = resolve;
              promiseReject = reject;
            });
            var args = [];
            for (var i = 0; i < arguments.length; i++) {
              args.push(arguments[i]);
            }
            args.push(function (err, value) {
              if (err) {
                promiseReject(err);
              } else {
                promiseResolve(value);
              }
            });
            try {
              original.apply(this, args);
            } catch (err) {
              promiseReject(err);
            }
            return promise;
          }
          Object.setPrototypeOf(fn, Object.getPrototypeOf(original));
          if (kCustomPromisifiedSymbol)
            Object.defineProperty(fn, kCustomPromisifiedSymbol, {
              value: fn,
              enumerable: false,
              writable: false,
              configurable: true,
            });
          return Object.defineProperties(fn, getOwnPropertyDescriptors(original));
        };
        exports.promisify.custom = kCustomPromisifiedSymbol;
        function callbackifyOnRejected(reason, cb) {
          if (!reason) {
            var newReason = new Error("Promise was rejected with a falsy value");
            newReason.reason = reason;
            reason = newReason;
          }
          return cb(reason);
        }
        function callbackify(original) {
          if (typeof original !== "function") {
            throw new TypeError('The "original" argument must be of type Function');
          }
          function callbackified() {
            var args = [];
            for (var i = 0; i < arguments.length; i++) {
              args.push(arguments[i]);
            }
            var maybeCb = args.pop();
            if (typeof maybeCb !== "function") {
              throw new TypeError("The last argument must be of type Function");
            }
            var self2 = this;
            var cb = function () {
              return maybeCb.apply(self2, arguments);
            };
            original.apply(this, args).then(
              function (ret) {
                process.nextTick(cb.bind(null, null, ret));
              },
              function (rej) {
                process.nextTick(callbackifyOnRejected.bind(null, rej, cb));
              }
            );
          }
          Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
          Object.defineProperties(callbackified, getOwnPropertyDescriptors(original));
          return callbackified;
        }
        exports.callbackify = callbackify;
      },
    });
    require_inherits_browser = __commonJS({
      "../../node_modules/inherits/inherits_browser.js"(exports, module) {
        if (typeof Object.create === "function") {
          module.exports = function inherits(ctor, superCtor) {
            if (superCtor) {
              ctor.super_ = superCtor;
              ctor.prototype = Object.create(superCtor.prototype, {
                constructor: {
                  value: ctor,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              });
            }
          };
        } else {
          module.exports = function inherits(ctor, superCtor) {
            if (superCtor) {
              ctor.super_ = superCtor;
              var TempCtor = function () {};
              TempCtor.prototype = superCtor.prototype;
              ctor.prototype = new TempCtor();
              ctor.prototype.constructor = ctor;
            }
          };
        }
      },
    });
    require_inherits = __commonJS({
      "../../node_modules/inherits/inherits.js"(exports, module) {
        try {
          util = require_util();
          if (typeof util.inherits !== "function") throw "";
          module.exports = util.inherits;
        } catch (e) {
          module.exports = require_inherits_browser();
        }
        var util;
      },
    });
    require_short = __commonJS({
      "../../node_modules/elliptic/lib/elliptic/curve/short.js"(exports, module) {
        "use strict";
        var utils = require_utils2();
        var BN = require_bn();
        var inherits = require_inherits();
        var Base = require_base();
        var assert = utils.assert;
        function ShortCurve(conf) {
          Base.call(this, "short", conf);
          this.a = new BN(conf.a, 16).toRed(this.red);
          this.b = new BN(conf.b, 16).toRed(this.red);
          this.tinv = this.two.redInvm();
          this.zeroA = this.a.fromRed().cmpn(0) === 0;
          this.threeA = this.a.fromRed().sub(this.p).cmpn(-3) === 0;
          this.endo = this._getEndomorphism(conf);
          this._endoWnafT1 = new Array(4);
          this._endoWnafT2 = new Array(4);
        }
        inherits(ShortCurve, Base);
        module.exports = ShortCurve;
        ShortCurve.prototype._getEndomorphism = function _getEndomorphism(conf) {
          if (!this.zeroA || !this.g || !this.n || this.p.modn(3) !== 1) return;
          var beta;
          var lambda;
          if (conf.beta) {
            beta = new BN(conf.beta, 16).toRed(this.red);
          } else {
            var betas = this._getEndoRoots(this.p);
            beta = betas[0].cmp(betas[1]) < 0 ? betas[0] : betas[1];
            beta = beta.toRed(this.red);
          }
          if (conf.lambda) {
            lambda = new BN(conf.lambda, 16);
          } else {
            var lambdas = this._getEndoRoots(this.n);
            if (this.g.mul(lambdas[0]).x.cmp(this.g.x.redMul(beta)) === 0) {
              lambda = lambdas[0];
            } else {
              lambda = lambdas[1];
              assert(this.g.mul(lambda).x.cmp(this.g.x.redMul(beta)) === 0);
            }
          }
          var basis;
          if (conf.basis) {
            basis = conf.basis.map(function (vec) {
              return {
                a: new BN(vec.a, 16),
                b: new BN(vec.b, 16),
              };
            });
          } else {
            basis = this._getEndoBasis(lambda);
          }
          return {
            beta,
            lambda,
            basis,
          };
        };
        ShortCurve.prototype._getEndoRoots = function _getEndoRoots(num) {
          var red = num === this.p ? this.red : BN.mont(num);
          var tinv = new BN(2).toRed(red).redInvm();
          var ntinv = tinv.redNeg();
          var s = new BN(3).toRed(red).redNeg().redSqrt().redMul(tinv);
          var l1 = ntinv.redAdd(s).fromRed();
          var l2 = ntinv.redSub(s).fromRed();
          return [l1, l2];
        };
        ShortCurve.prototype._getEndoBasis = function _getEndoBasis(lambda) {
          var aprxSqrt = this.n.ushrn(Math.floor(this.n.bitLength() / 2));
          var u = lambda;
          var v = this.n.clone();
          var x1 = new BN(1);
          var y1 = new BN(0);
          var x2 = new BN(0);
          var y2 = new BN(1);
          var a0;
          var b0;
          var a1;
          var b1;
          var a2;
          var b2;
          var prevR;
          var i = 0;
          var r;
          var x;
          while (u.cmpn(0) !== 0) {
            var q = v.div(u);
            r = v.sub(q.mul(u));
            x = x2.sub(q.mul(x1));
            var y = y2.sub(q.mul(y1));
            if (!a1 && r.cmp(aprxSqrt) < 0) {
              a0 = prevR.neg();
              b0 = x1;
              a1 = r.neg();
              b1 = x;
            } else if (a1 && ++i === 2) {
              break;
            }
            prevR = r;
            v = u;
            u = r;
            x2 = x1;
            x1 = x;
            y2 = y1;
            y1 = y;
          }
          a2 = r.neg();
          b2 = x;
          var len1 = a1.sqr().add(b1.sqr());
          var len2 = a2.sqr().add(b2.sqr());
          if (len2.cmp(len1) >= 0) {
            a2 = a0;
            b2 = b0;
          }
          if (a1.negative) {
            a1 = a1.neg();
            b1 = b1.neg();
          }
          if (a2.negative) {
            a2 = a2.neg();
            b2 = b2.neg();
          }
          return [
            { a: a1, b: b1 },
            { a: a2, b: b2 },
          ];
        };
        ShortCurve.prototype._endoSplit = function _endoSplit(k) {
          var basis = this.endo.basis;
          var v1 = basis[0];
          var v2 = basis[1];
          var c1 = v2.b.mul(k).divRound(this.n);
          var c2 = v1.b.neg().mul(k).divRound(this.n);
          var p1 = c1.mul(v1.a);
          var p2 = c2.mul(v2.a);
          var q1 = c1.mul(v1.b);
          var q2 = c2.mul(v2.b);
          var k1 = k.sub(p1).sub(p2);
          var k2 = q1.add(q2).neg();
          return { k1, k2 };
        };
        ShortCurve.prototype.pointFromX = function pointFromX(x, odd) {
          x = new BN(x, 16);
          if (!x.red) x = x.toRed(this.red);
          var y2 = x.redSqr().redMul(x).redIAdd(x.redMul(this.a)).redIAdd(this.b);
          var y = y2.redSqrt();
          if (y.redSqr().redSub(y2).cmp(this.zero) !== 0) throw new Error("invalid point");
          var isOdd = y.fromRed().isOdd();
          if ((odd && !isOdd) || (!odd && isOdd)) y = y.redNeg();
          return this.point(x, y);
        };
        ShortCurve.prototype.validate = function validate2(point) {
          if (point.inf) return true;
          var x = point.x;
          var y = point.y;
          var ax = this.a.redMul(x);
          var rhs = x.redSqr().redMul(x).redIAdd(ax).redIAdd(this.b);
          return y.redSqr().redISub(rhs).cmpn(0) === 0;
        };
        ShortCurve.prototype._endoWnafMulAdd = function _endoWnafMulAdd(points, coeffs, jacobianResult) {
          var npoints = this._endoWnafT1;
          var ncoeffs = this._endoWnafT2;
          for (var i = 0; i < points.length; i++) {
            var split = this._endoSplit(coeffs[i]);
            var p = points[i];
            var beta = p._getBeta();
            if (split.k1.negative) {
              split.k1.ineg();
              p = p.neg(true);
            }
            if (split.k2.negative) {
              split.k2.ineg();
              beta = beta.neg(true);
            }
            npoints[i * 2] = p;
            npoints[i * 2 + 1] = beta;
            ncoeffs[i * 2] = split.k1;
            ncoeffs[i * 2 + 1] = split.k2;
          }
          var res = this._wnafMulAdd(1, npoints, ncoeffs, i * 2, jacobianResult);
          for (var j = 0; j < i * 2; j++) {
            npoints[j] = null;
            ncoeffs[j] = null;
          }
          return res;
        };
        function Point(curve, x, y, isRed) {
          Base.BasePoint.call(this, curve, "affine");
          if (x === null && y === null) {
            this.x = null;
            this.y = null;
            this.inf = true;
          } else {
            this.x = new BN(x, 16);
            this.y = new BN(y, 16);
            if (isRed) {
              this.x.forceRed(this.curve.red);
              this.y.forceRed(this.curve.red);
            }
            if (!this.x.red) this.x = this.x.toRed(this.curve.red);
            if (!this.y.red) this.y = this.y.toRed(this.curve.red);
            this.inf = false;
          }
        }
        inherits(Point, Base.BasePoint);
        ShortCurve.prototype.point = function point(x, y, isRed) {
          return new Point(this, x, y, isRed);
        };
        ShortCurve.prototype.pointFromJSON = function pointFromJSON(obj, red) {
          return Point.fromJSON(this, obj, red);
        };
        Point.prototype._getBeta = function _getBeta() {
          if (!this.curve.endo) return;
          var pre = this.precomputed;
          if (pre && pre.beta) return pre.beta;
          var beta = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
          if (pre) {
            var curve = this.curve;
            var endoMul = function (p) {
              return curve.point(p.x.redMul(curve.endo.beta), p.y);
            };
            pre.beta = beta;
            beta.precomputed = {
              beta: null,
              naf: pre.naf && {
                wnd: pre.naf.wnd,
                points: pre.naf.points.map(endoMul),
              },
              doubles: pre.doubles && {
                step: pre.doubles.step,
                points: pre.doubles.points.map(endoMul),
              },
            };
          }
          return beta;
        };
        Point.prototype.toJSON = function toJSON() {
          if (!this.precomputed) return [this.x, this.y];
          return [
            this.x,
            this.y,
            this.precomputed && {
              doubles: this.precomputed.doubles && {
                step: this.precomputed.doubles.step,
                points: this.precomputed.doubles.points.slice(1),
              },
              naf: this.precomputed.naf && {
                wnd: this.precomputed.naf.wnd,
                points: this.precomputed.naf.points.slice(1),
              },
            },
          ];
        };
        Point.fromJSON = function fromJSON(curve, obj, red) {
          if (typeof obj === "string") obj = JSON.parse(obj);
          var res = curve.point(obj[0], obj[1], red);
          if (!obj[2]) return res;
          function obj2point(obj2) {
            return curve.point(obj2[0], obj2[1], red);
          }
          var pre = obj[2];
          res.precomputed = {
            beta: null,
            doubles: pre.doubles && {
              step: pre.doubles.step,
              points: [res].concat(pre.doubles.points.map(obj2point)),
            },
            naf: pre.naf && {
              wnd: pre.naf.wnd,
              points: [res].concat(pre.naf.points.map(obj2point)),
            },
          };
          return res;
        };
        Point.prototype.inspect = function inspect() {
          if (this.isInfinity()) return "<EC Point Infinity>";
          return "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">";
        };
        Point.prototype.isInfinity = function isInfinity() {
          return this.inf;
        };
        Point.prototype.add = function add(p) {
          if (this.inf) return p;
          if (p.inf) return this;
          if (this.eq(p)) return this.dbl();
          if (this.neg().eq(p)) return this.curve.point(null, null);
          if (this.x.cmp(p.x) === 0) return this.curve.point(null, null);
          var c = this.y.redSub(p.y);
          if (c.cmpn(0) !== 0) c = c.redMul(this.x.redSub(p.x).redInvm());
          var nx = c.redSqr().redISub(this.x).redISub(p.x);
          var ny = c.redMul(this.x.redSub(nx)).redISub(this.y);
          return this.curve.point(nx, ny);
        };
        Point.prototype.dbl = function dbl() {
          if (this.inf) return this;
          var ys1 = this.y.redAdd(this.y);
          if (ys1.cmpn(0) === 0) return this.curve.point(null, null);
          var a = this.curve.a;
          var x2 = this.x.redSqr();
          var dyinv = ys1.redInvm();
          var c = x2.redAdd(x2).redIAdd(x2).redIAdd(a).redMul(dyinv);
          var nx = c.redSqr().redISub(this.x.redAdd(this.x));
          var ny = c.redMul(this.x.redSub(nx)).redISub(this.y);
          return this.curve.point(nx, ny);
        };
        Point.prototype.getX = function getX() {
          return this.x.fromRed();
        };
        Point.prototype.getY = function getY() {
          return this.y.fromRed();
        };
        Point.prototype.mul = function mul(k) {
          k = new BN(k, 16);
          if (this.isInfinity()) return this;
          else if (this._hasDoubles(k)) return this.curve._fixedNafMul(this, k);
          else if (this.curve.endo) return this.curve._endoWnafMulAdd([this], [k]);
          else return this.curve._wnafMul(this, k);
        };
        Point.prototype.mulAdd = function mulAdd(k1, p2, k2) {
          var points = [this, p2];
          var coeffs = [k1, k2];
          if (this.curve.endo) return this.curve._endoWnafMulAdd(points, coeffs);
          else return this.curve._wnafMulAdd(1, points, coeffs, 2);
        };
        Point.prototype.jmulAdd = function jmulAdd(k1, p2, k2) {
          var points = [this, p2];
          var coeffs = [k1, k2];
          if (this.curve.endo) return this.curve._endoWnafMulAdd(points, coeffs, true);
          else return this.curve._wnafMulAdd(1, points, coeffs, 2, true);
        };
        Point.prototype.eq = function eq(p) {
          return this === p || (this.inf === p.inf && (this.inf || (this.x.cmp(p.x) === 0 && this.y.cmp(p.y) === 0)));
        };
        Point.prototype.neg = function neg(_precompute) {
          if (this.inf) return this;
          var res = this.curve.point(this.x, this.y.redNeg());
          if (_precompute && this.precomputed) {
            var pre = this.precomputed;
            var negate2 = function (p) {
              return p.neg();
            };
            res.precomputed = {
              naf: pre.naf && {
                wnd: pre.naf.wnd,
                points: pre.naf.points.map(negate2),
              },
              doubles: pre.doubles && {
                step: pre.doubles.step,
                points: pre.doubles.points.map(negate2),
              },
            };
          }
          return res;
        };
        Point.prototype.toJ = function toJ() {
          if (this.inf) return this.curve.jpoint(null, null, null);
          var res = this.curve.jpoint(this.x, this.y, this.curve.one);
          return res;
        };
        function JPoint(curve, x, y, z) {
          Base.BasePoint.call(this, curve, "jacobian");
          if (x === null && y === null && z === null) {
            this.x = this.curve.one;
            this.y = this.curve.one;
            this.z = new BN(0);
          } else {
            this.x = new BN(x, 16);
            this.y = new BN(y, 16);
            this.z = new BN(z, 16);
          }
          if (!this.x.red) this.x = this.x.toRed(this.curve.red);
          if (!this.y.red) this.y = this.y.toRed(this.curve.red);
          if (!this.z.red) this.z = this.z.toRed(this.curve.red);
          this.zOne = this.z === this.curve.one;
        }
        inherits(JPoint, Base.BasePoint);
        ShortCurve.prototype.jpoint = function jpoint(x, y, z) {
          return new JPoint(this, x, y, z);
        };
        JPoint.prototype.toP = function toP() {
          if (this.isInfinity()) return this.curve.point(null, null);
          var zinv = this.z.redInvm();
          var zinv2 = zinv.redSqr();
          var ax = this.x.redMul(zinv2);
          var ay = this.y.redMul(zinv2).redMul(zinv);
          return this.curve.point(ax, ay);
        };
        JPoint.prototype.neg = function neg() {
          return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
        };
        JPoint.prototype.add = function add(p) {
          if (this.isInfinity()) return p;
          if (p.isInfinity()) return this;
          var pz2 = p.z.redSqr();
          var z2 = this.z.redSqr();
          var u1 = this.x.redMul(pz2);
          var u2 = p.x.redMul(z2);
          var s1 = this.y.redMul(pz2.redMul(p.z));
          var s2 = p.y.redMul(z2.redMul(this.z));
          var h = u1.redSub(u2);
          var r = s1.redSub(s2);
          if (h.cmpn(0) === 0) {
            if (r.cmpn(0) !== 0) return this.curve.jpoint(null, null, null);
            else return this.dbl();
          }
          var h2 = h.redSqr();
          var h3 = h2.redMul(h);
          var v = u1.redMul(h2);
          var nx = r.redSqr().redIAdd(h3).redISub(v).redISub(v);
          var ny = r.redMul(v.redISub(nx)).redISub(s1.redMul(h3));
          var nz = this.z.redMul(p.z).redMul(h);
          return this.curve.jpoint(nx, ny, nz);
        };
        JPoint.prototype.mixedAdd = function mixedAdd(p) {
          if (this.isInfinity()) return p.toJ();
          if (p.isInfinity()) return this;
          var z2 = this.z.redSqr();
          var u1 = this.x;
          var u2 = p.x.redMul(z2);
          var s1 = this.y;
          var s2 = p.y.redMul(z2).redMul(this.z);
          var h = u1.redSub(u2);
          var r = s1.redSub(s2);
          if (h.cmpn(0) === 0) {
            if (r.cmpn(0) !== 0) return this.curve.jpoint(null, null, null);
            else return this.dbl();
          }
          var h2 = h.redSqr();
          var h3 = h2.redMul(h);
          var v = u1.redMul(h2);
          var nx = r.redSqr().redIAdd(h3).redISub(v).redISub(v);
          var ny = r.redMul(v.redISub(nx)).redISub(s1.redMul(h3));
          var nz = this.z.redMul(h);
          return this.curve.jpoint(nx, ny, nz);
        };
        JPoint.prototype.dblp = function dblp(pow) {
          if (pow === 0) return this;
          if (this.isInfinity()) return this;
          if (!pow) return this.dbl();
          var i;
          if (this.curve.zeroA || this.curve.threeA) {
            var r = this;
            for (i = 0; i < pow; i++) r = r.dbl();
            return r;
          }
          var a = this.curve.a;
          var tinv = this.curve.tinv;
          var jx = this.x;
          var jy = this.y;
          var jz = this.z;
          var jz4 = jz.redSqr().redSqr();
          var jyd = jy.redAdd(jy);
          for (i = 0; i < pow; i++) {
            var jx2 = jx.redSqr();
            var jyd2 = jyd.redSqr();
            var jyd4 = jyd2.redSqr();
            var c = jx2.redAdd(jx2).redIAdd(jx2).redIAdd(a.redMul(jz4));
            var t1 = jx.redMul(jyd2);
            var nx = c.redSqr().redISub(t1.redAdd(t1));
            var t2 = t1.redISub(nx);
            var dny = c.redMul(t2);
            dny = dny.redIAdd(dny).redISub(jyd4);
            var nz = jyd.redMul(jz);
            if (i + 1 < pow) jz4 = jz4.redMul(jyd4);
            jx = nx;
            jz = nz;
            jyd = dny;
          }
          return this.curve.jpoint(jx, jyd.redMul(tinv), jz);
        };
        JPoint.prototype.dbl = function dbl() {
          if (this.isInfinity()) return this;
          if (this.curve.zeroA) return this._zeroDbl();
          else if (this.curve.threeA) return this._threeDbl();
          else return this._dbl();
        };
        JPoint.prototype._zeroDbl = function _zeroDbl() {
          var nx;
          var ny;
          var nz;
          if (this.zOne) {
            var xx = this.x.redSqr();
            var yy = this.y.redSqr();
            var yyyy = yy.redSqr();
            var s = this.x.redAdd(yy).redSqr().redISub(xx).redISub(yyyy);
            s = s.redIAdd(s);
            var m = xx.redAdd(xx).redIAdd(xx);
            var t = m.redSqr().redISub(s).redISub(s);
            var yyyy8 = yyyy.redIAdd(yyyy);
            yyyy8 = yyyy8.redIAdd(yyyy8);
            yyyy8 = yyyy8.redIAdd(yyyy8);
            nx = t;
            ny = m.redMul(s.redISub(t)).redISub(yyyy8);
            nz = this.y.redAdd(this.y);
          } else {
            var a = this.x.redSqr();
            var b = this.y.redSqr();
            var c = b.redSqr();
            var d = this.x.redAdd(b).redSqr().redISub(a).redISub(c);
            d = d.redIAdd(d);
            var e = a.redAdd(a).redIAdd(a);
            var f = e.redSqr();
            var c8 = c.redIAdd(c);
            c8 = c8.redIAdd(c8);
            c8 = c8.redIAdd(c8);
            nx = f.redISub(d).redISub(d);
            ny = e.redMul(d.redISub(nx)).redISub(c8);
            nz = this.y.redMul(this.z);
            nz = nz.redIAdd(nz);
          }
          return this.curve.jpoint(nx, ny, nz);
        };
        JPoint.prototype._threeDbl = function _threeDbl() {
          var nx;
          var ny;
          var nz;
          if (this.zOne) {
            var xx = this.x.redSqr();
            var yy = this.y.redSqr();
            var yyyy = yy.redSqr();
            var s = this.x.redAdd(yy).redSqr().redISub(xx).redISub(yyyy);
            s = s.redIAdd(s);
            var m = xx.redAdd(xx).redIAdd(xx).redIAdd(this.curve.a);
            var t = m.redSqr().redISub(s).redISub(s);
            nx = t;
            var yyyy8 = yyyy.redIAdd(yyyy);
            yyyy8 = yyyy8.redIAdd(yyyy8);
            yyyy8 = yyyy8.redIAdd(yyyy8);
            ny = m.redMul(s.redISub(t)).redISub(yyyy8);
            nz = this.y.redAdd(this.y);
          } else {
            var delta = this.z.redSqr();
            var gamma = this.y.redSqr();
            var beta = this.x.redMul(gamma);
            var alpha = this.x.redSub(delta).redMul(this.x.redAdd(delta));
            alpha = alpha.redAdd(alpha).redIAdd(alpha);
            var beta4 = beta.redIAdd(beta);
            beta4 = beta4.redIAdd(beta4);
            var beta8 = beta4.redAdd(beta4);
            nx = alpha.redSqr().redISub(beta8);
            nz = this.y.redAdd(this.z).redSqr().redISub(gamma).redISub(delta);
            var ggamma8 = gamma.redSqr();
            ggamma8 = ggamma8.redIAdd(ggamma8);
            ggamma8 = ggamma8.redIAdd(ggamma8);
            ggamma8 = ggamma8.redIAdd(ggamma8);
            ny = alpha.redMul(beta4.redISub(nx)).redISub(ggamma8);
          }
          return this.curve.jpoint(nx, ny, nz);
        };
        JPoint.prototype._dbl = function _dbl() {
          var a = this.curve.a;
          var jx = this.x;
          var jy = this.y;
          var jz = this.z;
          var jz4 = jz.redSqr().redSqr();
          var jx2 = jx.redSqr();
          var jy2 = jy.redSqr();
          var c = jx2.redAdd(jx2).redIAdd(jx2).redIAdd(a.redMul(jz4));
          var jxd4 = jx.redAdd(jx);
          jxd4 = jxd4.redIAdd(jxd4);
          var t1 = jxd4.redMul(jy2);
          var nx = c.redSqr().redISub(t1.redAdd(t1));
          var t2 = t1.redISub(nx);
          var jyd8 = jy2.redSqr();
          jyd8 = jyd8.redIAdd(jyd8);
          jyd8 = jyd8.redIAdd(jyd8);
          jyd8 = jyd8.redIAdd(jyd8);
          var ny = c.redMul(t2).redISub(jyd8);
          var nz = jy.redAdd(jy).redMul(jz);
          return this.curve.jpoint(nx, ny, nz);
        };
        JPoint.prototype.trpl = function trpl() {
          if (!this.curve.zeroA) return this.dbl().add(this);
          var xx = this.x.redSqr();
          var yy = this.y.redSqr();
          var zz = this.z.redSqr();
          var yyyy = yy.redSqr();
          var m = xx.redAdd(xx).redIAdd(xx);
          var mm = m.redSqr();
          var e = this.x.redAdd(yy).redSqr().redISub(xx).redISub(yyyy);
          e = e.redIAdd(e);
          e = e.redAdd(e).redIAdd(e);
          e = e.redISub(mm);
          var ee = e.redSqr();
          var t = yyyy.redIAdd(yyyy);
          t = t.redIAdd(t);
          t = t.redIAdd(t);
          t = t.redIAdd(t);
          var u = m.redIAdd(e).redSqr().redISub(mm).redISub(ee).redISub(t);
          var yyu4 = yy.redMul(u);
          yyu4 = yyu4.redIAdd(yyu4);
          yyu4 = yyu4.redIAdd(yyu4);
          var nx = this.x.redMul(ee).redISub(yyu4);
          nx = nx.redIAdd(nx);
          nx = nx.redIAdd(nx);
          var ny = this.y.redMul(u.redMul(t.redISub(u)).redISub(e.redMul(ee)));
          ny = ny.redIAdd(ny);
          ny = ny.redIAdd(ny);
          ny = ny.redIAdd(ny);
          var nz = this.z.redAdd(e).redSqr().redISub(zz).redISub(ee);
          return this.curve.jpoint(nx, ny, nz);
        };
        JPoint.prototype.mul = function mul(k, kbase) {
          k = new BN(k, kbase);
          return this.curve._wnafMul(this, k);
        };
        JPoint.prototype.eq = function eq(p) {
          if (p.type === "affine") return this.eq(p.toJ());
          if (this === p) return true;
          var z2 = this.z.redSqr();
          var pz2 = p.z.redSqr();
          if (this.x.redMul(pz2).redISub(p.x.redMul(z2)).cmpn(0) !== 0) return false;
          var z3 = z2.redMul(this.z);
          var pz3 = pz2.redMul(p.z);
          return this.y.redMul(pz3).redISub(p.y.redMul(z3)).cmpn(0) === 0;
        };
        JPoint.prototype.eqXToP = function eqXToP(x) {
          var zs = this.z.redSqr();
          var rx = x.toRed(this.curve.red).redMul(zs);
          if (this.x.cmp(rx) === 0) return true;
          var xc = x.clone();
          var t = this.curve.redN.redMul(zs);
          for (;;) {
            xc.iadd(this.curve.n);
            if (xc.cmp(this.curve.p) >= 0) return false;
            rx.redIAdd(t);
            if (this.x.cmp(rx) === 0) return true;
          }
        };
        JPoint.prototype.inspect = function inspect() {
          if (this.isInfinity()) return "<EC JPoint Infinity>";
          return (
            "<EC JPoint x: " +
            this.x.toString(16, 2) +
            " y: " +
            this.y.toString(16, 2) +
            " z: " +
            this.z.toString(16, 2) +
            ">"
          );
        };
        JPoint.prototype.isInfinity = function isInfinity() {
          return this.z.cmpn(0) === 0;
        };
      },
    });
    require_mont = __commonJS({
      "../../node_modules/elliptic/lib/elliptic/curve/mont.js"(exports, module) {
        "use strict";
        var BN = require_bn();
        var inherits = require_inherits();
        var Base = require_base();
        var utils = require_utils2();
        function MontCurve(conf) {
          Base.call(this, "mont", conf);
          this.a = new BN(conf.a, 16).toRed(this.red);
          this.b = new BN(conf.b, 16).toRed(this.red);
          this.i4 = new BN(4).toRed(this.red).redInvm();
          this.two = new BN(2).toRed(this.red);
          this.a24 = this.i4.redMul(this.a.redAdd(this.two));
        }
        inherits(MontCurve, Base);
        module.exports = MontCurve;
        MontCurve.prototype.validate = function validate2(point) {
          var x = point.normalize().x;
          var x2 = x.redSqr();
          var rhs = x2.redMul(x).redAdd(x2.redMul(this.a)).redAdd(x);
          var y = rhs.redSqrt();
          return y.redSqr().cmp(rhs) === 0;
        };
        function Point(curve, x, z) {
          Base.BasePoint.call(this, curve, "projective");
          if (x === null && z === null) {
            this.x = this.curve.one;
            this.z = this.curve.zero;
          } else {
            this.x = new BN(x, 16);
            this.z = new BN(z, 16);
            if (!this.x.red) this.x = this.x.toRed(this.curve.red);
            if (!this.z.red) this.z = this.z.toRed(this.curve.red);
          }
        }
        inherits(Point, Base.BasePoint);
        MontCurve.prototype.decodePoint = function decodePoint(bytes, enc) {
          return this.point(utils.toArray(bytes, enc), 1);
        };
        MontCurve.prototype.point = function point(x, z) {
          return new Point(this, x, z);
        };
        MontCurve.prototype.pointFromJSON = function pointFromJSON(obj) {
          return Point.fromJSON(this, obj);
        };
        Point.prototype.precompute = function precompute() {};
        Point.prototype._encode = function _encode() {
          return this.getX().toArray("be", this.curve.p.byteLength());
        };
        Point.fromJSON = function fromJSON(curve, obj) {
          return new Point(curve, obj[0], obj[1] || curve.one);
        };
        Point.prototype.inspect = function inspect() {
          if (this.isInfinity()) return "<EC Point Infinity>";
          return "<EC Point x: " + this.x.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">";
        };
        Point.prototype.isInfinity = function isInfinity() {
          return this.z.cmpn(0) === 0;
        };
        Point.prototype.dbl = function dbl() {
          var a = this.x.redAdd(this.z);
          var aa = a.redSqr();
          var b = this.x.redSub(this.z);
          var bb = b.redSqr();
          var c = aa.redSub(bb);
          var nx = aa.redMul(bb);
          var nz = c.redMul(bb.redAdd(this.curve.a24.redMul(c)));
          return this.curve.point(nx, nz);
        };
        Point.prototype.add = function add() {
          throw new Error("Not supported on Montgomery curve");
        };
        Point.prototype.diffAdd = function diffAdd(p, diff) {
          var a = this.x.redAdd(this.z);
          var b = this.x.redSub(this.z);
          var c = p.x.redAdd(p.z);
          var d = p.x.redSub(p.z);
          var da = d.redMul(a);
          var cb = c.redMul(b);
          var nx = diff.z.redMul(da.redAdd(cb).redSqr());
          var nz = diff.x.redMul(da.redISub(cb).redSqr());
          return this.curve.point(nx, nz);
        };
        Point.prototype.mul = function mul(k) {
          var t = k.clone();
          var a = this;
          var b = this.curve.point(null, null);
          var c = this;
          for (var bits = []; t.cmpn(0) !== 0; t.iushrn(1)) bits.push(t.andln(1));
          for (var i = bits.length - 1; i >= 0; i--) {
            if (bits[i] === 0) {
              a = a.diffAdd(b, c);
              b = b.dbl();
            } else {
              b = a.diffAdd(b, c);
              a = a.dbl();
            }
          }
          return b;
        };
        Point.prototype.mulAdd = function mulAdd() {
          throw new Error("Not supported on Montgomery curve");
        };
        Point.prototype.jumlAdd = function jumlAdd() {
          throw new Error("Not supported on Montgomery curve");
        };
        Point.prototype.eq = function eq(other) {
          return this.getX().cmp(other.getX()) === 0;
        };
        Point.prototype.normalize = function normalize() {
          this.x = this.x.redMul(this.z.redInvm());
          this.z = this.curve.one;
          return this;
        };
        Point.prototype.getX = function getX() {
          this.normalize();
          return this.x.fromRed();
        };
      },
    });
    require_edwards = __commonJS({
      "../../node_modules/elliptic/lib/elliptic/curve/edwards.js"(exports, module) {
        "use strict";
        var utils = require_utils2();
        var BN = require_bn();
        var inherits = require_inherits();
        var Base = require_base();
        var assert = utils.assert;
        function EdwardsCurve(conf) {
          this.twisted = (conf.a | 0) !== 1;
          this.mOneA = this.twisted && (conf.a | 0) === -1;
          this.extended = this.mOneA;
          Base.call(this, "edwards", conf);
          this.a = new BN(conf.a, 16).umod(this.red.m);
          this.a = this.a.toRed(this.red);
          this.c = new BN(conf.c, 16).toRed(this.red);
          this.c2 = this.c.redSqr();
          this.d = new BN(conf.d, 16).toRed(this.red);
          this.dd = this.d.redAdd(this.d);
          assert(!this.twisted || this.c.fromRed().cmpn(1) === 0);
          this.oneC = (conf.c | 0) === 1;
        }
        inherits(EdwardsCurve, Base);
        module.exports = EdwardsCurve;
        EdwardsCurve.prototype._mulA = function _mulA(num) {
          if (this.mOneA) return num.redNeg();
          else return this.a.redMul(num);
        };
        EdwardsCurve.prototype._mulC = function _mulC(num) {
          if (this.oneC) return num;
          else return this.c.redMul(num);
        };
        EdwardsCurve.prototype.jpoint = function jpoint(x, y, z, t) {
          return this.point(x, y, z, t);
        };
        EdwardsCurve.prototype.pointFromX = function pointFromX(x, odd) {
          x = new BN(x, 16);
          if (!x.red) x = x.toRed(this.red);
          var x2 = x.redSqr();
          var rhs = this.c2.redSub(this.a.redMul(x2));
          var lhs = this.one.redSub(this.c2.redMul(this.d).redMul(x2));
          var y2 = rhs.redMul(lhs.redInvm());
          var y = y2.redSqrt();
          if (y.redSqr().redSub(y2).cmp(this.zero) !== 0) throw new Error("invalid point");
          var isOdd = y.fromRed().isOdd();
          if ((odd && !isOdd) || (!odd && isOdd)) y = y.redNeg();
          return this.point(x, y);
        };
        EdwardsCurve.prototype.pointFromY = function pointFromY(y, odd) {
          y = new BN(y, 16);
          if (!y.red) y = y.toRed(this.red);
          var y2 = y.redSqr();
          var lhs = y2.redSub(this.c2);
          var rhs = y2.redMul(this.d).redMul(this.c2).redSub(this.a);
          var x2 = lhs.redMul(rhs.redInvm());
          if (x2.cmp(this.zero) === 0) {
            if (odd) throw new Error("invalid point");
            else return this.point(this.zero, y);
          }
          var x = x2.redSqrt();
          if (x.redSqr().redSub(x2).cmp(this.zero) !== 0) throw new Error("invalid point");
          if (x.fromRed().isOdd() !== odd) x = x.redNeg();
          return this.point(x, y);
        };
        EdwardsCurve.prototype.validate = function validate2(point) {
          if (point.isInfinity()) return true;
          point.normalize();
          var x2 = point.x.redSqr();
          var y2 = point.y.redSqr();
          var lhs = x2.redMul(this.a).redAdd(y2);
          var rhs = this.c2.redMul(this.one.redAdd(this.d.redMul(x2).redMul(y2)));
          return lhs.cmp(rhs) === 0;
        };
        function Point(curve, x, y, z, t) {
          Base.BasePoint.call(this, curve, "projective");
          if (x === null && y === null && z === null) {
            this.x = this.curve.zero;
            this.y = this.curve.one;
            this.z = this.curve.one;
            this.t = this.curve.zero;
            this.zOne = true;
          } else {
            this.x = new BN(x, 16);
            this.y = new BN(y, 16);
            this.z = z ? new BN(z, 16) : this.curve.one;
            this.t = t && new BN(t, 16);
            if (!this.x.red) this.x = this.x.toRed(this.curve.red);
            if (!this.y.red) this.y = this.y.toRed(this.curve.red);
            if (!this.z.red) this.z = this.z.toRed(this.curve.red);
            if (this.t && !this.t.red) this.t = this.t.toRed(this.curve.red);
            this.zOne = this.z === this.curve.one;
            if (this.curve.extended && !this.t) {
              this.t = this.x.redMul(this.y);
              if (!this.zOne) this.t = this.t.redMul(this.z.redInvm());
            }
          }
        }
        inherits(Point, Base.BasePoint);
        EdwardsCurve.prototype.pointFromJSON = function pointFromJSON(obj) {
          return Point.fromJSON(this, obj);
        };
        EdwardsCurve.prototype.point = function point(x, y, z, t) {
          return new Point(this, x, y, z, t);
        };
        Point.fromJSON = function fromJSON(curve, obj) {
          return new Point(curve, obj[0], obj[1], obj[2]);
        };
        Point.prototype.inspect = function inspect() {
          if (this.isInfinity()) return "<EC Point Infinity>";
          return (
            "<EC Point x: " +
            this.x.fromRed().toString(16, 2) +
            " y: " +
            this.y.fromRed().toString(16, 2) +
            " z: " +
            this.z.fromRed().toString(16, 2) +
            ">"
          );
        };
        Point.prototype.isInfinity = function isInfinity() {
          return this.x.cmpn(0) === 0 && (this.y.cmp(this.z) === 0 || (this.zOne && this.y.cmp(this.curve.c) === 0));
        };
        Point.prototype._extDbl = function _extDbl() {
          var a = this.x.redSqr();
          var b = this.y.redSqr();
          var c = this.z.redSqr();
          c = c.redIAdd(c);
          var d = this.curve._mulA(a);
          var e = this.x.redAdd(this.y).redSqr().redISub(a).redISub(b);
          var g = d.redAdd(b);
          var f = g.redSub(c);
          var h = d.redSub(b);
          var nx = e.redMul(f);
          var ny = g.redMul(h);
          var nt = e.redMul(h);
          var nz = f.redMul(g);
          return this.curve.point(nx, ny, nz, nt);
        };
        Point.prototype._projDbl = function _projDbl() {
          var b = this.x.redAdd(this.y).redSqr();
          var c = this.x.redSqr();
          var d = this.y.redSqr();
          var nx;
          var ny;
          var nz;
          var e;
          var h;
          var j;
          if (this.curve.twisted) {
            e = this.curve._mulA(c);
            var f = e.redAdd(d);
            if (this.zOne) {
              nx = b.redSub(c).redSub(d).redMul(f.redSub(this.curve.two));
              ny = f.redMul(e.redSub(d));
              nz = f.redSqr().redSub(f).redSub(f);
            } else {
              h = this.z.redSqr();
              j = f.redSub(h).redISub(h);
              nx = b.redSub(c).redISub(d).redMul(j);
              ny = f.redMul(e.redSub(d));
              nz = f.redMul(j);
            }
          } else {
            e = c.redAdd(d);
            h = this.curve._mulC(this.z).redSqr();
            j = e.redSub(h).redSub(h);
            nx = this.curve._mulC(b.redISub(e)).redMul(j);
            ny = this.curve._mulC(e).redMul(c.redISub(d));
            nz = e.redMul(j);
          }
          return this.curve.point(nx, ny, nz);
        };
        Point.prototype.dbl = function dbl() {
          if (this.isInfinity()) return this;
          if (this.curve.extended) return this._extDbl();
          else return this._projDbl();
        };
        Point.prototype._extAdd = function _extAdd(p) {
          var a = this.y.redSub(this.x).redMul(p.y.redSub(p.x));
          var b = this.y.redAdd(this.x).redMul(p.y.redAdd(p.x));
          var c = this.t.redMul(this.curve.dd).redMul(p.t);
          var d = this.z.redMul(p.z.redAdd(p.z));
          var e = b.redSub(a);
          var f = d.redSub(c);
          var g = d.redAdd(c);
          var h = b.redAdd(a);
          var nx = e.redMul(f);
          var ny = g.redMul(h);
          var nt = e.redMul(h);
          var nz = f.redMul(g);
          return this.curve.point(nx, ny, nz, nt);
        };
        Point.prototype._projAdd = function _projAdd(p) {
          var a = this.z.redMul(p.z);
          var b = a.redSqr();
          var c = this.x.redMul(p.x);
          var d = this.y.redMul(p.y);
          var e = this.curve.d.redMul(c).redMul(d);
          var f = b.redSub(e);
          var g = b.redAdd(e);
          var tmp = this.x.redAdd(this.y).redMul(p.x.redAdd(p.y)).redISub(c).redISub(d);
          var nx = a.redMul(f).redMul(tmp);
          var ny;
          var nz;
          if (this.curve.twisted) {
            ny = a.redMul(g).redMul(d.redSub(this.curve._mulA(c)));
            nz = f.redMul(g);
          } else {
            ny = a.redMul(g).redMul(d.redSub(c));
            nz = this.curve._mulC(f).redMul(g);
          }
          return this.curve.point(nx, ny, nz);
        };
        Point.prototype.add = function add(p) {
          if (this.isInfinity()) return p;
          if (p.isInfinity()) return this;
          if (this.curve.extended) return this._extAdd(p);
          else return this._projAdd(p);
        };
        Point.prototype.mul = function mul(k) {
          if (this._hasDoubles(k)) return this.curve._fixedNafMul(this, k);
          else return this.curve._wnafMul(this, k);
        };
        Point.prototype.mulAdd = function mulAdd(k1, p, k2) {
          return this.curve._wnafMulAdd(1, [this, p], [k1, k2], 2, false);
        };
        Point.prototype.jmulAdd = function jmulAdd(k1, p, k2) {
          return this.curve._wnafMulAdd(1, [this, p], [k1, k2], 2, true);
        };
        Point.prototype.normalize = function normalize() {
          if (this.zOne) return this;
          var zi = this.z.redInvm();
          this.x = this.x.redMul(zi);
          this.y = this.y.redMul(zi);
          if (this.t) this.t = this.t.redMul(zi);
          this.z = this.curve.one;
          this.zOne = true;
          return this;
        };
        Point.prototype.neg = function neg() {
          return this.curve.point(this.x.redNeg(), this.y, this.z, this.t && this.t.redNeg());
        };
        Point.prototype.getX = function getX() {
          this.normalize();
          return this.x.fromRed();
        };
        Point.prototype.getY = function getY() {
          this.normalize();
          return this.y.fromRed();
        };
        Point.prototype.eq = function eq(other) {
          return this === other || (this.getX().cmp(other.getX()) === 0 && this.getY().cmp(other.getY()) === 0);
        };
        Point.prototype.eqXToP = function eqXToP(x) {
          var rx = x.toRed(this.curve.red).redMul(this.z);
          if (this.x.cmp(rx) === 0) return true;
          var xc = x.clone();
          var t = this.curve.redN.redMul(this.z);
          for (;;) {
            xc.iadd(this.curve.n);
            if (xc.cmp(this.curve.p) >= 0) return false;
            rx.redIAdd(t);
            if (this.x.cmp(rx) === 0) return true;
          }
        };
        Point.prototype.toP = Point.prototype.normalize;
        Point.prototype.mixedAdd = Point.prototype.add;
      },
    });
    require_curve = __commonJS({
      "../../node_modules/elliptic/lib/elliptic/curve/index.js"(exports) {
        "use strict";
        var curve = exports;
        curve.base = require_base();
        curve.short = require_short();
        curve.mont = require_mont();
        curve.edwards = require_edwards();
      },
    });
    require_utils3 = __commonJS({
      "../../node_modules/hash.js/lib/hash/utils.js"(exports) {
        "use strict";
        var assert = require_minimalistic_assert();
        var inherits = require_inherits();
        exports.inherits = inherits;
        function isSurrogatePair(msg, i) {
          if ((msg.charCodeAt(i) & 64512) !== 55296) {
            return false;
          }
          if (i < 0 || i + 1 >= msg.length) {
            return false;
          }
          return (msg.charCodeAt(i + 1) & 64512) === 56320;
        }
        function toArray(msg, enc) {
          if (Array.isArray(msg)) return msg.slice();
          if (!msg) return [];
          var res = [];
          if (typeof msg === "string") {
            if (!enc) {
              var p = 0;
              for (var i = 0; i < msg.length; i++) {
                var c = msg.charCodeAt(i);
                if (c < 128) {
                  res[p++] = c;
                } else if (c < 2048) {
                  res[p++] = (c >> 6) | 192;
                  res[p++] = (c & 63) | 128;
                } else if (isSurrogatePair(msg, i)) {
                  c = 65536 + ((c & 1023) << 10) + (msg.charCodeAt(++i) & 1023);
                  res[p++] = (c >> 18) | 240;
                  res[p++] = ((c >> 12) & 63) | 128;
                  res[p++] = ((c >> 6) & 63) | 128;
                  res[p++] = (c & 63) | 128;
                } else {
                  res[p++] = (c >> 12) | 224;
                  res[p++] = ((c >> 6) & 63) | 128;
                  res[p++] = (c & 63) | 128;
                }
              }
            } else if (enc === "hex") {
              msg = msg.replace(/[^a-z0-9]+/gi, "");
              if (msg.length % 2 !== 0) msg = "0" + msg;
              for (i = 0; i < msg.length; i += 2) res.push(parseInt(msg[i] + msg[i + 1], 16));
            }
          } else {
            for (i = 0; i < msg.length; i++) res[i] = msg[i] | 0;
          }
          return res;
        }
        exports.toArray = toArray;
        function toHex2(msg) {
          var res = "";
          for (var i = 0; i < msg.length; i++) res += zero2(msg[i].toString(16));
          return res;
        }
        exports.toHex = toHex2;
        function htonl(w) {
          var res = (w >>> 24) | ((w >>> 8) & 65280) | ((w << 8) & 16711680) | ((w & 255) << 24);
          return res >>> 0;
        }
        exports.htonl = htonl;
        function toHex32(msg, endian) {
          var res = "";
          for (var i = 0; i < msg.length; i++) {
            var w = msg[i];
            if (endian === "little") w = htonl(w);
            res += zero8(w.toString(16));
          }
          return res;
        }
        exports.toHex32 = toHex32;
        function zero2(word) {
          if (word.length === 1) return "0" + word;
          else return word;
        }
        exports.zero2 = zero2;
        function zero8(word) {
          if (word.length === 7) return "0" + word;
          else if (word.length === 6) return "00" + word;
          else if (word.length === 5) return "000" + word;
          else if (word.length === 4) return "0000" + word;
          else if (word.length === 3) return "00000" + word;
          else if (word.length === 2) return "000000" + word;
          else if (word.length === 1) return "0000000" + word;
          else return word;
        }
        exports.zero8 = zero8;
        function join32(msg, start, end, endian) {
          var len = end - start;
          assert(len % 4 === 0);
          var res = new Array(len / 4);
          for (var i = 0, k = start; i < res.length; i++, k += 4) {
            var w;
            if (endian === "big") w = (msg[k] << 24) | (msg[k + 1] << 16) | (msg[k + 2] << 8) | msg[k + 3];
            else w = (msg[k + 3] << 24) | (msg[k + 2] << 16) | (msg[k + 1] << 8) | msg[k];
            res[i] = w >>> 0;
          }
          return res;
        }
        exports.join32 = join32;
        function split32(msg, endian) {
          var res = new Array(msg.length * 4);
          for (var i = 0, k = 0; i < msg.length; i++, k += 4) {
            var m = msg[i];
            if (endian === "big") {
              res[k] = m >>> 24;
              res[k + 1] = (m >>> 16) & 255;
              res[k + 2] = (m >>> 8) & 255;
              res[k + 3] = m & 255;
            } else {
              res[k + 3] = m >>> 24;
              res[k + 2] = (m >>> 16) & 255;
              res[k + 1] = (m >>> 8) & 255;
              res[k] = m & 255;
            }
          }
          return res;
        }
        exports.split32 = split32;
        function rotr32(w, b) {
          return (w >>> b) | (w << (32 - b));
        }
        exports.rotr32 = rotr32;
        function rotl32(w, b) {
          return (w << b) | (w >>> (32 - b));
        }
        exports.rotl32 = rotl32;
        function sum32(a, b) {
          return (a + b) >>> 0;
        }
        exports.sum32 = sum32;
        function sum32_3(a, b, c) {
          return (a + b + c) >>> 0;
        }
        exports.sum32_3 = sum32_3;
        function sum32_4(a, b, c, d) {
          return (a + b + c + d) >>> 0;
        }
        exports.sum32_4 = sum32_4;
        function sum32_5(a, b, c, d, e) {
          return (a + b + c + d + e) >>> 0;
        }
        exports.sum32_5 = sum32_5;
        function sum64(buf, pos, ah, al) {
          var bh = buf[pos];
          var bl = buf[pos + 1];
          var lo = (al + bl) >>> 0;
          var hi = (lo < al ? 1 : 0) + ah + bh;
          buf[pos] = hi >>> 0;
          buf[pos + 1] = lo;
        }
        exports.sum64 = sum64;
        function sum64_hi(ah, al, bh, bl) {
          var lo = (al + bl) >>> 0;
          var hi = (lo < al ? 1 : 0) + ah + bh;
          return hi >>> 0;
        }
        exports.sum64_hi = sum64_hi;
        function sum64_lo(ah, al, bh, bl) {
          var lo = al + bl;
          return lo >>> 0;
        }
        exports.sum64_lo = sum64_lo;
        function sum64_4_hi(ah, al, bh, bl, ch, cl, dh, dl) {
          var carry = 0;
          var lo = al;
          lo = (lo + bl) >>> 0;
          carry += lo < al ? 1 : 0;
          lo = (lo + cl) >>> 0;
          carry += lo < cl ? 1 : 0;
          lo = (lo + dl) >>> 0;
          carry += lo < dl ? 1 : 0;
          var hi = ah + bh + ch + dh + carry;
          return hi >>> 0;
        }
        exports.sum64_4_hi = sum64_4_hi;
        function sum64_4_lo(ah, al, bh, bl, ch, cl, dh, dl) {
          var lo = al + bl + cl + dl;
          return lo >>> 0;
        }
        exports.sum64_4_lo = sum64_4_lo;
        function sum64_5_hi(ah, al, bh, bl, ch, cl, dh, dl, eh, el) {
          var carry = 0;
          var lo = al;
          lo = (lo + bl) >>> 0;
          carry += lo < al ? 1 : 0;
          lo = (lo + cl) >>> 0;
          carry += lo < cl ? 1 : 0;
          lo = (lo + dl) >>> 0;
          carry += lo < dl ? 1 : 0;
          lo = (lo + el) >>> 0;
          carry += lo < el ? 1 : 0;
          var hi = ah + bh + ch + dh + eh + carry;
          return hi >>> 0;
        }
        exports.sum64_5_hi = sum64_5_hi;
        function sum64_5_lo(ah, al, bh, bl, ch, cl, dh, dl, eh, el) {
          var lo = al + bl + cl + dl + el;
          return lo >>> 0;
        }
        exports.sum64_5_lo = sum64_5_lo;
        function rotr64_hi(ah, al, num) {
          var r = (al << (32 - num)) | (ah >>> num);
          return r >>> 0;
        }
        exports.rotr64_hi = rotr64_hi;
        function rotr64_lo(ah, al, num) {
          var r = (ah << (32 - num)) | (al >>> num);
          return r >>> 0;
        }
        exports.rotr64_lo = rotr64_lo;
        function shr64_hi(ah, al, num) {
          return ah >>> num;
        }
        exports.shr64_hi = shr64_hi;
        function shr64_lo(ah, al, num) {
          var r = (ah << (32 - num)) | (al >>> num);
          return r >>> 0;
        }
        exports.shr64_lo = shr64_lo;
      },
    });
    require_common = __commonJS({
      "../../node_modules/hash.js/lib/hash/common.js"(exports) {
        "use strict";
        var utils = require_utils3();
        var assert = require_minimalistic_assert();
        function BlockHash() {
          this.pending = null;
          this.pendingTotal = 0;
          this.blockSize = this.constructor.blockSize;
          this.outSize = this.constructor.outSize;
          this.hmacStrength = this.constructor.hmacStrength;
          this.padLength = this.constructor.padLength / 8;
          this.endian = "big";
          this._delta8 = this.blockSize / 8;
          this._delta32 = this.blockSize / 32;
        }
        exports.BlockHash = BlockHash;
        BlockHash.prototype.update = function update(msg, enc) {
          msg = utils.toArray(msg, enc);
          if (!this.pending) this.pending = msg;
          else this.pending = this.pending.concat(msg);
          this.pendingTotal += msg.length;
          if (this.pending.length >= this._delta8) {
            msg = this.pending;
            var r = msg.length % this._delta8;
            this.pending = msg.slice(msg.length - r, msg.length);
            if (this.pending.length === 0) this.pending = null;
            msg = utils.join32(msg, 0, msg.length - r, this.endian);
            for (var i = 0; i < msg.length; i += this._delta32) this._update(msg, i, i + this._delta32);
          }
          return this;
        };
        BlockHash.prototype.digest = function digest(enc) {
          this.update(this._pad());
          assert(this.pending === null);
          return this._digest(enc);
        };
        BlockHash.prototype._pad = function pad() {
          var len = this.pendingTotal;
          var bytes = this._delta8;
          var k = bytes - ((len + this.padLength) % bytes);
          var res = new Array(k + this.padLength);
          res[0] = 128;
          for (var i = 1; i < k; i++) res[i] = 0;
          len <<= 3;
          if (this.endian === "big") {
            for (var t = 8; t < this.padLength; t++) res[i++] = 0;
            res[i++] = 0;
            res[i++] = 0;
            res[i++] = 0;
            res[i++] = 0;
            res[i++] = (len >>> 24) & 255;
            res[i++] = (len >>> 16) & 255;
            res[i++] = (len >>> 8) & 255;
            res[i++] = len & 255;
          } else {
            res[i++] = len & 255;
            res[i++] = (len >>> 8) & 255;
            res[i++] = (len >>> 16) & 255;
            res[i++] = (len >>> 24) & 255;
            res[i++] = 0;
            res[i++] = 0;
            res[i++] = 0;
            res[i++] = 0;
            for (t = 8; t < this.padLength; t++) res[i++] = 0;
          }
          return res;
        };
      },
    });
    require_common2 = __commonJS({
      "../../node_modules/hash.js/lib/hash/sha/common.js"(exports) {
        "use strict";
        var utils = require_utils3();
        var rotr32 = utils.rotr32;
        function ft_1(s, x, y, z) {
          if (s === 0) return ch32(x, y, z);
          if (s === 1 || s === 3) return p32(x, y, z);
          if (s === 2) return maj32(x, y, z);
        }
        exports.ft_1 = ft_1;
        function ch32(x, y, z) {
          return (x & y) ^ (~x & z);
        }
        exports.ch32 = ch32;
        function maj32(x, y, z) {
          return (x & y) ^ (x & z) ^ (y & z);
        }
        exports.maj32 = maj32;
        function p32(x, y, z) {
          return x ^ y ^ z;
        }
        exports.p32 = p32;
        function s0_256(x) {
          return rotr32(x, 2) ^ rotr32(x, 13) ^ rotr32(x, 22);
        }
        exports.s0_256 = s0_256;
        function s1_256(x) {
          return rotr32(x, 6) ^ rotr32(x, 11) ^ rotr32(x, 25);
        }
        exports.s1_256 = s1_256;
        function g0_256(x) {
          return rotr32(x, 7) ^ rotr32(x, 18) ^ (x >>> 3);
        }
        exports.g0_256 = g0_256;
        function g1_256(x) {
          return rotr32(x, 17) ^ rotr32(x, 19) ^ (x >>> 10);
        }
        exports.g1_256 = g1_256;
      },
    });
    require__ = __commonJS({
      "../../node_modules/hash.js/lib/hash/sha/1.js"(exports, module) {
        "use strict";
        var utils = require_utils3();
        var common = require_common();
        var shaCommon = require_common2();
        var rotl32 = utils.rotl32;
        var sum32 = utils.sum32;
        var sum32_5 = utils.sum32_5;
        var ft_1 = shaCommon.ft_1;
        var BlockHash = common.BlockHash;
        var sha1_K = [1518500249, 1859775393, 2400959708, 3395469782];
        function SHA1() {
          if (!(this instanceof SHA1)) return new SHA1();
          BlockHash.call(this);
          this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
          this.W = new Array(80);
        }
        utils.inherits(SHA1, BlockHash);
        module.exports = SHA1;
        SHA1.blockSize = 512;
        SHA1.outSize = 160;
        SHA1.hmacStrength = 80;
        SHA1.padLength = 64;
        SHA1.prototype._update = function _update(msg, start) {
          var W = this.W;
          for (var i = 0; i < 16; i++) W[i] = msg[start + i];
          for (; i < W.length; i++) W[i] = rotl32(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16], 1);
          var a = this.h[0];
          var b = this.h[1];
          var c = this.h[2];
          var d = this.h[3];
          var e = this.h[4];
          for (i = 0; i < W.length; i++) {
            var s = ~~(i / 20);
            var t = sum32_5(rotl32(a, 5), ft_1(s, b, c, d), e, W[i], sha1_K[s]);
            e = d;
            d = c;
            c = rotl32(b, 30);
            b = a;
            a = t;
          }
          this.h[0] = sum32(this.h[0], a);
          this.h[1] = sum32(this.h[1], b);
          this.h[2] = sum32(this.h[2], c);
          this.h[3] = sum32(this.h[3], d);
          this.h[4] = sum32(this.h[4], e);
        };
        SHA1.prototype._digest = function digest(enc) {
          if (enc === "hex") return utils.toHex32(this.h, "big");
          else return utils.split32(this.h, "big");
        };
      },
    });
    require__2 = __commonJS({
      "../../node_modules/hash.js/lib/hash/sha/256.js"(exports, module) {
        "use strict";
        var utils = require_utils3();
        var common = require_common();
        var shaCommon = require_common2();
        var assert = require_minimalistic_assert();
        var sum32 = utils.sum32;
        var sum32_4 = utils.sum32_4;
        var sum32_5 = utils.sum32_5;
        var ch32 = shaCommon.ch32;
        var maj32 = shaCommon.maj32;
        var s0_256 = shaCommon.s0_256;
        var s1_256 = shaCommon.s1_256;
        var g0_256 = shaCommon.g0_256;
        var g1_256 = shaCommon.g1_256;
        var BlockHash = common.BlockHash;
        var sha256_K = [
          1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080,
          310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
          264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808,
          3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
          1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817,
          3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
          1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479,
          3329325298,
        ];
        function SHA256() {
          if (!(this instanceof SHA256)) return new SHA256();
          BlockHash.call(this);
          this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];
          this.k = sha256_K;
          this.W = new Array(64);
        }
        utils.inherits(SHA256, BlockHash);
        module.exports = SHA256;
        SHA256.blockSize = 512;
        SHA256.outSize = 256;
        SHA256.hmacStrength = 192;
        SHA256.padLength = 64;
        SHA256.prototype._update = function _update(msg, start) {
          var W = this.W;
          for (var i = 0; i < 16; i++) W[i] = msg[start + i];
          for (; i < W.length; i++) W[i] = sum32_4(g1_256(W[i - 2]), W[i - 7], g0_256(W[i - 15]), W[i - 16]);
          var a = this.h[0];
          var b = this.h[1];
          var c = this.h[2];
          var d = this.h[3];
          var e = this.h[4];
          var f = this.h[5];
          var g = this.h[6];
          var h = this.h[7];
          assert(this.k.length === W.length);
          for (i = 0; i < W.length; i++) {
            var T1 = sum32_5(h, s1_256(e), ch32(e, f, g), this.k[i], W[i]);
            var T2 = sum32(s0_256(a), maj32(a, b, c));
            h = g;
            g = f;
            f = e;
            e = sum32(d, T1);
            d = c;
            c = b;
            b = a;
            a = sum32(T1, T2);
          }
          this.h[0] = sum32(this.h[0], a);
          this.h[1] = sum32(this.h[1], b);
          this.h[2] = sum32(this.h[2], c);
          this.h[3] = sum32(this.h[3], d);
          this.h[4] = sum32(this.h[4], e);
          this.h[5] = sum32(this.h[5], f);
          this.h[6] = sum32(this.h[6], g);
          this.h[7] = sum32(this.h[7], h);
        };
        SHA256.prototype._digest = function digest(enc) {
          if (enc === "hex") return utils.toHex32(this.h, "big");
          else return utils.split32(this.h, "big");
        };
      },
    });
    require__3 = __commonJS({
      "../../node_modules/hash.js/lib/hash/sha/224.js"(exports, module) {
        "use strict";
        var utils = require_utils3();
        var SHA256 = require__2();
        function SHA224() {
          if (!(this instanceof SHA224)) return new SHA224();
          SHA256.call(this);
          this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428];
        }
        utils.inherits(SHA224, SHA256);
        module.exports = SHA224;
        SHA224.blockSize = 512;
        SHA224.outSize = 224;
        SHA224.hmacStrength = 192;
        SHA224.padLength = 64;
        SHA224.prototype._digest = function digest(enc) {
          if (enc === "hex") return utils.toHex32(this.h.slice(0, 7), "big");
          else return utils.split32(this.h.slice(0, 7), "big");
        };
      },
    });
    require__4 = __commonJS({
      "../../node_modules/hash.js/lib/hash/sha/512.js"(exports, module) {
        "use strict";
        var utils = require_utils3();
        var common = require_common();
        var assert = require_minimalistic_assert();
        var rotr64_hi = utils.rotr64_hi;
        var rotr64_lo = utils.rotr64_lo;
        var shr64_hi = utils.shr64_hi;
        var shr64_lo = utils.shr64_lo;
        var sum64 = utils.sum64;
        var sum64_hi = utils.sum64_hi;
        var sum64_lo = utils.sum64_lo;
        var sum64_4_hi = utils.sum64_4_hi;
        var sum64_4_lo = utils.sum64_4_lo;
        var sum64_5_hi = utils.sum64_5_hi;
        var sum64_5_lo = utils.sum64_5_lo;
        var BlockHash = common.BlockHash;
        var sha512_K = [
          1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163,
          4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394,
          310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206,
          991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139,
          264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692,
          3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879,
          3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895,
          168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823,
          1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921,
          1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344,
          3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616,
          1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403,
          1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452,
          2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573,
          3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271,
          4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315,
          685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470,
          3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591,
        ];
        function SHA512() {
          if (!(this instanceof SHA512)) return new SHA512();
          BlockHash.call(this);
          this.h = [
            1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119,
            2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209,
          ];
          this.k = sha512_K;
          this.W = new Array(160);
        }
        utils.inherits(SHA512, BlockHash);
        module.exports = SHA512;
        SHA512.blockSize = 1024;
        SHA512.outSize = 512;
        SHA512.hmacStrength = 192;
        SHA512.padLength = 128;
        SHA512.prototype._prepareBlock = function _prepareBlock(msg, start) {
          var W = this.W;
          for (var i = 0; i < 32; i++) W[i] = msg[start + i];
          for (; i < W.length; i += 2) {
            var c0_hi = g1_512_hi(W[i - 4], W[i - 3]);
            var c0_lo = g1_512_lo(W[i - 4], W[i - 3]);
            var c1_hi = W[i - 14];
            var c1_lo = W[i - 13];
            var c2_hi = g0_512_hi(W[i - 30], W[i - 29]);
            var c2_lo = g0_512_lo(W[i - 30], W[i - 29]);
            var c3_hi = W[i - 32];
            var c3_lo = W[i - 31];
            W[i] = sum64_4_hi(c0_hi, c0_lo, c1_hi, c1_lo, c2_hi, c2_lo, c3_hi, c3_lo);
            W[i + 1] = sum64_4_lo(c0_hi, c0_lo, c1_hi, c1_lo, c2_hi, c2_lo, c3_hi, c3_lo);
          }
        };
        SHA512.prototype._update = function _update(msg, start) {
          this._prepareBlock(msg, start);
          var W = this.W;
          var ah = this.h[0];
          var al = this.h[1];
          var bh = this.h[2];
          var bl = this.h[3];
          var ch = this.h[4];
          var cl = this.h[5];
          var dh = this.h[6];
          var dl = this.h[7];
          var eh = this.h[8];
          var el = this.h[9];
          var fh = this.h[10];
          var fl = this.h[11];
          var gh = this.h[12];
          var gl = this.h[13];
          var hh = this.h[14];
          var hl = this.h[15];
          assert(this.k.length === W.length);
          for (var i = 0; i < W.length; i += 2) {
            var c0_hi = hh;
            var c0_lo = hl;
            var c1_hi = s1_512_hi(eh, el);
            var c1_lo = s1_512_lo(eh, el);
            var c2_hi = ch64_hi(eh, el, fh, fl, gh, gl);
            var c2_lo = ch64_lo(eh, el, fh, fl, gh, gl);
            var c3_hi = this.k[i];
            var c3_lo = this.k[i + 1];
            var c4_hi = W[i];
            var c4_lo = W[i + 1];
            var T1_hi = sum64_5_hi(c0_hi, c0_lo, c1_hi, c1_lo, c2_hi, c2_lo, c3_hi, c3_lo, c4_hi, c4_lo);
            var T1_lo = sum64_5_lo(c0_hi, c0_lo, c1_hi, c1_lo, c2_hi, c2_lo, c3_hi, c3_lo, c4_hi, c4_lo);
            c0_hi = s0_512_hi(ah, al);
            c0_lo = s0_512_lo(ah, al);
            c1_hi = maj64_hi(ah, al, bh, bl, ch, cl);
            c1_lo = maj64_lo(ah, al, bh, bl, ch, cl);
            var T2_hi = sum64_hi(c0_hi, c0_lo, c1_hi, c1_lo);
            var T2_lo = sum64_lo(c0_hi, c0_lo, c1_hi, c1_lo);
            hh = gh;
            hl = gl;
            gh = fh;
            gl = fl;
            fh = eh;
            fl = el;
            eh = sum64_hi(dh, dl, T1_hi, T1_lo);
            el = sum64_lo(dl, dl, T1_hi, T1_lo);
            dh = ch;
            dl = cl;
            ch = bh;
            cl = bl;
            bh = ah;
            bl = al;
            ah = sum64_hi(T1_hi, T1_lo, T2_hi, T2_lo);
            al = sum64_lo(T1_hi, T1_lo, T2_hi, T2_lo);
          }
          sum64(this.h, 0, ah, al);
          sum64(this.h, 2, bh, bl);
          sum64(this.h, 4, ch, cl);
          sum64(this.h, 6, dh, dl);
          sum64(this.h, 8, eh, el);
          sum64(this.h, 10, fh, fl);
          sum64(this.h, 12, gh, gl);
          sum64(this.h, 14, hh, hl);
        };
        SHA512.prototype._digest = function digest(enc) {
          if (enc === "hex") return utils.toHex32(this.h, "big");
          else return utils.split32(this.h, "big");
        };
        function ch64_hi(xh, xl, yh, yl, zh) {
          var r = (xh & yh) ^ (~xh & zh);
          if (r < 0) r += 4294967296;
          return r;
        }
        function ch64_lo(xh, xl, yh, yl, zh, zl) {
          var r = (xl & yl) ^ (~xl & zl);
          if (r < 0) r += 4294967296;
          return r;
        }
        function maj64_hi(xh, xl, yh, yl, zh) {
          var r = (xh & yh) ^ (xh & zh) ^ (yh & zh);
          if (r < 0) r += 4294967296;
          return r;
        }
        function maj64_lo(xh, xl, yh, yl, zh, zl) {
          var r = (xl & yl) ^ (xl & zl) ^ (yl & zl);
          if (r < 0) r += 4294967296;
          return r;
        }
        function s0_512_hi(xh, xl) {
          var c0_hi = rotr64_hi(xh, xl, 28);
          var c1_hi = rotr64_hi(xl, xh, 2);
          var c2_hi = rotr64_hi(xl, xh, 7);
          var r = c0_hi ^ c1_hi ^ c2_hi;
          if (r < 0) r += 4294967296;
          return r;
        }
        function s0_512_lo(xh, xl) {
          var c0_lo = rotr64_lo(xh, xl, 28);
          var c1_lo = rotr64_lo(xl, xh, 2);
          var c2_lo = rotr64_lo(xl, xh, 7);
          var r = c0_lo ^ c1_lo ^ c2_lo;
          if (r < 0) r += 4294967296;
          return r;
        }
        function s1_512_hi(xh, xl) {
          var c0_hi = rotr64_hi(xh, xl, 14);
          var c1_hi = rotr64_hi(xh, xl, 18);
          var c2_hi = rotr64_hi(xl, xh, 9);
          var r = c0_hi ^ c1_hi ^ c2_hi;
          if (r < 0) r += 4294967296;
          return r;
        }
        function s1_512_lo(xh, xl) {
          var c0_lo = rotr64_lo(xh, xl, 14);
          var c1_lo = rotr64_lo(xh, xl, 18);
          var c2_lo = rotr64_lo(xl, xh, 9);
          var r = c0_lo ^ c1_lo ^ c2_lo;
          if (r < 0) r += 4294967296;
          return r;
        }
        function g0_512_hi(xh, xl) {
          var c0_hi = rotr64_hi(xh, xl, 1);
          var c1_hi = rotr64_hi(xh, xl, 8);
          var c2_hi = shr64_hi(xh, xl, 7);
          var r = c0_hi ^ c1_hi ^ c2_hi;
          if (r < 0) r += 4294967296;
          return r;
        }
        function g0_512_lo(xh, xl) {
          var c0_lo = rotr64_lo(xh, xl, 1);
          var c1_lo = rotr64_lo(xh, xl, 8);
          var c2_lo = shr64_lo(xh, xl, 7);
          var r = c0_lo ^ c1_lo ^ c2_lo;
          if (r < 0) r += 4294967296;
          return r;
        }
        function g1_512_hi(xh, xl) {
          var c0_hi = rotr64_hi(xh, xl, 19);
          var c1_hi = rotr64_hi(xl, xh, 29);
          var c2_hi = shr64_hi(xh, xl, 6);
          var r = c0_hi ^ c1_hi ^ c2_hi;
          if (r < 0) r += 4294967296;
          return r;
        }
        function g1_512_lo(xh, xl) {
          var c0_lo = rotr64_lo(xh, xl, 19);
          var c1_lo = rotr64_lo(xl, xh, 29);
          var c2_lo = shr64_lo(xh, xl, 6);
          var r = c0_lo ^ c1_lo ^ c2_lo;
          if (r < 0) r += 4294967296;
          return r;
        }
      },
    });
    require__5 = __commonJS({
      "../../node_modules/hash.js/lib/hash/sha/384.js"(exports, module) {
        "use strict";
        var utils = require_utils3();
        var SHA512 = require__4();
        function SHA384() {
          if (!(this instanceof SHA384)) return new SHA384();
          SHA512.call(this);
          this.h = [
            3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415,
            4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428,
          ];
        }
        utils.inherits(SHA384, SHA512);
        module.exports = SHA384;
        SHA384.blockSize = 1024;
        SHA384.outSize = 384;
        SHA384.hmacStrength = 192;
        SHA384.padLength = 128;
        SHA384.prototype._digest = function digest(enc) {
          if (enc === "hex") return utils.toHex32(this.h.slice(0, 12), "big");
          else return utils.split32(this.h.slice(0, 12), "big");
        };
      },
    });
    require_sha = __commonJS({
      "../../node_modules/hash.js/lib/hash/sha.js"(exports) {
        "use strict";
        exports.sha1 = require__();
        exports.sha224 = require__3();
        exports.sha256 = require__2();
        exports.sha384 = require__5();
        exports.sha512 = require__4();
      },
    });
    require_ripemd = __commonJS({
      "../../node_modules/hash.js/lib/hash/ripemd.js"(exports) {
        "use strict";
        var utils = require_utils3();
        var common = require_common();
        var rotl32 = utils.rotl32;
        var sum32 = utils.sum32;
        var sum32_3 = utils.sum32_3;
        var sum32_4 = utils.sum32_4;
        var BlockHash = common.BlockHash;
        function RIPEMD160() {
          if (!(this instanceof RIPEMD160)) return new RIPEMD160();
          BlockHash.call(this);
          this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
          this.endian = "little";
        }
        utils.inherits(RIPEMD160, BlockHash);
        exports.ripemd160 = RIPEMD160;
        RIPEMD160.blockSize = 512;
        RIPEMD160.outSize = 160;
        RIPEMD160.hmacStrength = 192;
        RIPEMD160.padLength = 64;
        RIPEMD160.prototype._update = function update(msg, start) {
          var A = this.h[0];
          var B = this.h[1];
          var C = this.h[2];
          var D = this.h[3];
          var E = this.h[4];
          var Ah = A;
          var Bh = B;
          var Ch = C;
          var Dh = D;
          var Eh = E;
          for (var j = 0; j < 80; j++) {
            var T = sum32(rotl32(sum32_4(A, f(j, B, C, D), msg[r[j] + start], K(j)), s[j]), E);
            A = E;
            E = D;
            D = rotl32(C, 10);
            C = B;
            B = T;
            T = sum32(rotl32(sum32_4(Ah, f(79 - j, Bh, Ch, Dh), msg[rh[j] + start], Kh(j)), sh[j]), Eh);
            Ah = Eh;
            Eh = Dh;
            Dh = rotl32(Ch, 10);
            Ch = Bh;
            Bh = T;
          }
          T = sum32_3(this.h[1], C, Dh);
          this.h[1] = sum32_3(this.h[2], D, Eh);
          this.h[2] = sum32_3(this.h[3], E, Ah);
          this.h[3] = sum32_3(this.h[4], A, Bh);
          this.h[4] = sum32_3(this.h[0], B, Ch);
          this.h[0] = T;
        };
        RIPEMD160.prototype._digest = function digest(enc) {
          if (enc === "hex") return utils.toHex32(this.h, "little");
          else return utils.split32(this.h, "little");
        };
        function f(j, x, y, z) {
          if (j <= 15) return x ^ y ^ z;
          else if (j <= 31) return (x & y) | (~x & z);
          else if (j <= 47) return (x | ~y) ^ z;
          else if (j <= 63) return (x & z) | (y & ~z);
          else return x ^ (y | ~z);
        }
        function K(j) {
          if (j <= 15) return 0;
          else if (j <= 31) return 1518500249;
          else if (j <= 47) return 1859775393;
          else if (j <= 63) return 2400959708;
          else return 2840853838;
        }
        function Kh(j) {
          if (j <= 15) return 1352829926;
          else if (j <= 31) return 1548603684;
          else if (j <= 47) return 1836072691;
          else if (j <= 63) return 2053994217;
          else return 0;
        }
        var r = [
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3,
          10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0,
          5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13,
        ];
        var rh = [
          5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2,
          15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14,
          12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11,
        ];
        var s = [
          11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13,
          12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6,
          5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6,
        ];
        var sh = [
          8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13,
          11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5,
          15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11,
        ];
      },
    });
    require_hmac = __commonJS({
      "../../node_modules/hash.js/lib/hash/hmac.js"(exports, module) {
        "use strict";
        var utils = require_utils3();
        var assert = require_minimalistic_assert();
        function Hmac(hash, key, enc) {
          if (!(this instanceof Hmac)) return new Hmac(hash, key, enc);
          this.Hash = hash;
          this.blockSize = hash.blockSize / 8;
          this.outSize = hash.outSize / 8;
          this.inner = null;
          this.outer = null;
          this._init(utils.toArray(key, enc));
        }
        module.exports = Hmac;
        Hmac.prototype._init = function init(key) {
          if (key.length > this.blockSize) key = new this.Hash().update(key).digest();
          assert(key.length <= this.blockSize);
          for (var i = key.length; i < this.blockSize; i++) key.push(0);
          for (i = 0; i < key.length; i++) key[i] ^= 54;
          this.inner = new this.Hash().update(key);
          for (i = 0; i < key.length; i++) key[i] ^= 106;
          this.outer = new this.Hash().update(key);
        };
        Hmac.prototype.update = function update(msg, enc) {
          this.inner.update(msg, enc);
          return this;
        };
        Hmac.prototype.digest = function digest(enc) {
          this.outer.update(this.inner.digest());
          return this.outer.digest(enc);
        };
      },
    });
    require_hash = __commonJS({
      "../../node_modules/hash.js/lib/hash.js"(exports) {
        var hash = exports;
        hash.utils = require_utils3();
        hash.common = require_common();
        hash.sha = require_sha();
        hash.ripemd = require_ripemd();
        hash.hmac = require_hmac();
        hash.sha1 = hash.sha.sha1;
        hash.sha256 = hash.sha.sha256;
        hash.sha224 = hash.sha.sha224;
        hash.sha384 = hash.sha.sha384;
        hash.sha512 = hash.sha.sha512;
        hash.ripemd160 = hash.ripemd.ripemd160;
      },
    });
    require_secp256k1 = __commonJS({
      "../../node_modules/elliptic/lib/elliptic/precomputed/secp256k1.js"(exports, module) {
        module.exports = {
          doubles: {
            step: 4,
            points: [
              [
                "e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a",
                "f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821",
              ],
              [
                "8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508",
                "11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf",
              ],
              [
                "175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739",
                "d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695",
              ],
              [
                "363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640",
                "4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9",
              ],
              [
                "8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c",
                "4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36",
              ],
              [
                "723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda",
                "96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f",
              ],
              [
                "eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa",
                "5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999",
              ],
              [
                "100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0",
                "cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09",
              ],
              [
                "e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d",
                "9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d",
              ],
              [
                "feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d",
                "e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088",
              ],
              [
                "da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1",
                "9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d",
              ],
              [
                "53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0",
                "5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8",
              ],
              [
                "8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047",
                "10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a",
              ],
              [
                "385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862",
                "283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453",
              ],
              [
                "6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7",
                "7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160",
              ],
              [
                "3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd",
                "56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0",
              ],
              [
                "85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83",
                "7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6",
              ],
              [
                "948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a",
                "53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589",
              ],
              [
                "6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8",
                "bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17",
              ],
              [
                "e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d",
                "4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda",
              ],
              [
                "e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725",
                "7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd",
              ],
              [
                "213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754",
                "4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2",
              ],
              [
                "4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c",
                "17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6",
              ],
              [
                "fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6",
                "6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f",
              ],
              [
                "76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39",
                "c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01",
              ],
              [
                "c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891",
                "893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3",
              ],
              [
                "d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b",
                "febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f",
              ],
              [
                "b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03",
                "2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7",
              ],
              [
                "e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d",
                "eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78",
              ],
              [
                "a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070",
                "7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1",
              ],
              [
                "90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4",
                "e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150",
              ],
              [
                "8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da",
                "662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82",
              ],
              [
                "e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11",
                "1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc",
              ],
              [
                "8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e",
                "efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b",
              ],
              [
                "e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41",
                "2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51",
              ],
              [
                "b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef",
                "67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45",
              ],
              [
                "d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8",
                "db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120",
              ],
              [
                "324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d",
                "648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84",
              ],
              [
                "4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96",
                "35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d",
              ],
              [
                "9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd",
                "ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d",
              ],
              [
                "6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5",
                "9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8",
              ],
              [
                "a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266",
                "40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8",
              ],
              [
                "7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71",
                "34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac",
              ],
              [
                "928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac",
                "c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f",
              ],
              [
                "85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751",
                "1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962",
              ],
              [
                "ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e",
                "493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907",
              ],
              [
                "827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241",
                "c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec",
              ],
              [
                "eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3",
                "be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d",
              ],
              [
                "e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f",
                "4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414",
              ],
              [
                "1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19",
                "aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd",
              ],
              [
                "146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be",
                "b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0",
              ],
              [
                "fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9",
                "6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811",
              ],
              [
                "da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2",
                "8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1",
              ],
              [
                "a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13",
                "7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c",
              ],
              [
                "174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c",
                "ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73",
              ],
              [
                "959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba",
                "2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd",
              ],
              [
                "d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151",
                "e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405",
              ],
              [
                "64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073",
                "d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589",
              ],
              [
                "8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458",
                "38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e",
              ],
              [
                "13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b",
                "69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27",
              ],
              [
                "bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366",
                "d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1",
              ],
              [
                "8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa",
                "40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482",
              ],
              [
                "8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0",
                "620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945",
              ],
              [
                "dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787",
                "7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573",
              ],
              [
                "f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e",
                "ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82",
              ],
            ],
          },
          naf: {
            wnd: 7,
            points: [
              [
                "f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9",
                "388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672",
              ],
              [
                "2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4",
                "d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6",
              ],
              [
                "5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc",
                "6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da",
              ],
              [
                "acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe",
                "cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37",
              ],
              [
                "774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb",
                "d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b",
              ],
              [
                "f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8",
                "ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81",
              ],
              [
                "d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e",
                "581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58",
              ],
              [
                "defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34",
                "4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77",
              ],
              [
                "2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c",
                "85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a",
              ],
              [
                "352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5",
                "321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c",
              ],
              [
                "2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f",
                "2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67",
              ],
              [
                "9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714",
                "73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402",
              ],
              [
                "daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729",
                "a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55",
              ],
              [
                "c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db",
                "2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482",
              ],
              [
                "6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4",
                "e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82",
              ],
              [
                "1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5",
                "b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396",
              ],
              [
                "605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479",
                "2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49",
              ],
              [
                "62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d",
                "80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf",
              ],
              [
                "80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f",
                "1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a",
              ],
              [
                "7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb",
                "d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7",
              ],
              [
                "d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9",
                "eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933",
              ],
              [
                "49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963",
                "758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a",
              ],
              [
                "77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74",
                "958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6",
              ],
              [
                "f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530",
                "e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37",
              ],
              [
                "463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b",
                "5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e",
              ],
              [
                "f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247",
                "cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6",
              ],
              [
                "caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1",
                "cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476",
              ],
              [
                "2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120",
                "4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40",
              ],
              [
                "7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435",
                "91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61",
              ],
              [
                "754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18",
                "673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683",
              ],
              [
                "e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8",
                "59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5",
              ],
              [
                "186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb",
                "3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b",
              ],
              [
                "df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f",
                "55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417",
              ],
              [
                "5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143",
                "efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868",
              ],
              [
                "290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba",
                "e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a",
              ],
              [
                "af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45",
                "f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6",
              ],
              [
                "766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a",
                "744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996",
              ],
              [
                "59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e",
                "c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e",
              ],
              [
                "f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8",
                "e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d",
              ],
              [
                "7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c",
                "30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2",
              ],
              [
                "948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519",
                "e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e",
              ],
              [
                "7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab",
                "100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437",
              ],
              [
                "3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca",
                "ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311",
              ],
              [
                "d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf",
                "8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4",
              ],
              [
                "1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610",
                "68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575",
              ],
              [
                "733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4",
                "f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d",
              ],
              [
                "15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c",
                "d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d",
              ],
              [
                "a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940",
                "edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629",
              ],
              [
                "e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980",
                "a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06",
              ],
              [
                "311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3",
                "66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374",
              ],
              [
                "34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf",
                "9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee",
              ],
              [
                "f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63",
                "4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1",
              ],
              [
                "d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448",
                "fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b",
              ],
              [
                "32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf",
                "5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661",
              ],
              [
                "7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5",
                "8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6",
              ],
              [
                "ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6",
                "8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e",
              ],
              [
                "16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5",
                "5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d",
              ],
              [
                "eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99",
                "f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc",
              ],
              [
                "78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51",
                "f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4",
              ],
              [
                "494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5",
                "42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c",
              ],
              [
                "a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5",
                "204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b",
              ],
              [
                "c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997",
                "4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913",
              ],
              [
                "841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881",
                "73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154",
              ],
              [
                "5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5",
                "39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865",
              ],
              [
                "36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66",
                "d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc",
              ],
              [
                "336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726",
                "ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224",
              ],
              [
                "8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede",
                "6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e",
              ],
              [
                "1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94",
                "60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6",
              ],
              [
                "85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31",
                "3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511",
              ],
              [
                "29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51",
                "b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b",
              ],
              [
                "a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252",
                "ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2",
              ],
              [
                "4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5",
                "cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c",
              ],
              [
                "d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b",
                "6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3",
              ],
              [
                "ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4",
                "322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d",
              ],
              [
                "af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f",
                "6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700",
              ],
              [
                "e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889",
                "2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4",
              ],
              [
                "591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246",
                "b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196",
              ],
              [
                "11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984",
                "998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4",
              ],
              [
                "3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a",
                "b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257",
              ],
              [
                "cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030",
                "bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13",
              ],
              [
                "c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197",
                "6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096",
              ],
              [
                "c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593",
                "c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38",
              ],
              [
                "a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef",
                "21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f",
              ],
              [
                "347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38",
                "60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448",
              ],
              [
                "da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a",
                "49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a",
              ],
              [
                "c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111",
                "5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4",
              ],
              [
                "4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502",
                "7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437",
              ],
              [
                "3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea",
                "be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7",
              ],
              [
                "cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26",
                "8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d",
              ],
              [
                "b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986",
                "39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a",
              ],
              [
                "d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e",
                "62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54",
              ],
              [
                "48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4",
                "25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77",
              ],
              [
                "dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda",
                "ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517",
              ],
              [
                "6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859",
                "cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10",
              ],
              [
                "e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f",
                "f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125",
              ],
              [
                "eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c",
                "6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e",
              ],
              [
                "13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942",
                "fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1",
              ],
              [
                "ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a",
                "1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2",
              ],
              [
                "b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80",
                "5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423",
              ],
              [
                "ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d",
                "438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8",
              ],
              [
                "8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1",
                "cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758",
              ],
              [
                "52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63",
                "c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375",
              ],
              [
                "e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352",
                "6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d",
              ],
              [
                "7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193",
                "ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec",
              ],
              [
                "5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00",
                "9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0",
              ],
              [
                "32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58",
                "ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c",
              ],
              [
                "e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7",
                "d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4",
              ],
              [
                "8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8",
                "c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f",
              ],
              [
                "4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e",
                "67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649",
              ],
              [
                "3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d",
                "cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826",
              ],
              [
                "674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b",
                "299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5",
              ],
              [
                "d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f",
                "f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87",
              ],
              [
                "30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6",
                "462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b",
              ],
              [
                "be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297",
                "62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc",
              ],
              [
                "93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a",
                "7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c",
              ],
              [
                "b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c",
                "ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f",
              ],
              [
                "d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52",
                "4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a",
              ],
              [
                "d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb",
                "bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46",
              ],
              [
                "463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065",
                "bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f",
              ],
              [
                "7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917",
                "603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03",
              ],
              [
                "74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9",
                "cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08",
              ],
              [
                "30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3",
                "553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8",
              ],
              [
                "9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57",
                "712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373",
              ],
              [
                "176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66",
                "ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3",
              ],
              [
                "75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8",
                "9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8",
              ],
              [
                "809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721",
                "9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1",
              ],
              [
                "1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180",
                "4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9",
              ],
            ],
          },
        };
      },
    });
    require_curves = __commonJS({
      "../../node_modules/elliptic/lib/elliptic/curves.js"(exports) {
        "use strict";
        var curves = exports;
        var hash = require_hash();
        var curve = require_curve();
        var utils = require_utils2();
        var assert = utils.assert;
        function PresetCurve(options) {
          if (options.type === "short") this.curve = new curve.short(options);
          else if (options.type === "edwards") this.curve = new curve.edwards(options);
          else this.curve = new curve.mont(options);
          this.g = this.curve.g;
          this.n = this.curve.n;
          this.hash = options.hash;
          assert(this.g.validate(), "Invalid curve");
          assert(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
        }
        curves.PresetCurve = PresetCurve;
        function defineCurve(name, options) {
          Object.defineProperty(curves, name, {
            configurable: true,
            enumerable: true,
            get: function () {
              var curve2 = new PresetCurve(options);
              Object.defineProperty(curves, name, {
                configurable: true,
                enumerable: true,
                value: curve2,
              });
              return curve2;
            },
          });
        }
        defineCurve("p192", {
          type: "short",
          prime: "p192",
          p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
          a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
          b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
          n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
          hash: hash.sha256,
          gRed: false,
          g: [
            "188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012",
            "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811",
          ],
        });
        defineCurve("p224", {
          type: "short",
          prime: "p224",
          p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
          a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
          b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
          n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
          hash: hash.sha256,
          gRed: false,
          g: [
            "b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21",
            "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34",
          ],
        });
        defineCurve("p256", {
          type: "short",
          prime: null,
          p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
          a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
          b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
          n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
          hash: hash.sha256,
          gRed: false,
          g: [
            "6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296",
            "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5",
          ],
        });
        defineCurve("p384", {
          type: "short",
          prime: null,
          p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
          a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
          b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
          n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
          hash: hash.sha384,
          gRed: false,
          g: [
            "aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7",
            "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f",
          ],
        });
        defineCurve("p521", {
          type: "short",
          prime: null,
          p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
          a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
          b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
          n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
          hash: hash.sha512,
          gRed: false,
          g: [
            "000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66",
            "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650",
          ],
        });
        defineCurve("curve25519", {
          type: "mont",
          prime: "p25519",
          p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
          a: "76d06",
          b: "1",
          n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
          hash: hash.sha256,
          gRed: false,
          g: ["9"],
        });
        defineCurve("ed25519", {
          type: "edwards",
          prime: "p25519",
          p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
          a: "-1",
          c: "1",
          d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
          n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
          hash: hash.sha256,
          gRed: false,
          g: [
            "216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a",
            "6666666666666666666666666666666666666666666666666666666666666658",
          ],
        });
        var pre;
        try {
          pre = require_secp256k1();
        } catch (e) {
          pre = void 0;
        }
        defineCurve("secp256k1", {
          type: "short",
          prime: "k256",
          p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
          a: "0",
          b: "7",
          n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
          h: "1",
          hash: hash.sha256,
          beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
          lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
          basis: [
            {
              a: "3086d221a7d46bcde86c90e49284eb15",
              b: "-e4437ed6010e88286f547fa90abfe4c3",
            },
            {
              a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
              b: "3086d221a7d46bcde86c90e49284eb15",
            },
          ],
          gRed: false,
          g: [
            "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
            "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",
            pre,
          ],
        });
      },
    });
    require_hmac_drbg = __commonJS({
      "../../node_modules/hmac-drbg/lib/hmac-drbg.js"(exports, module) {
        "use strict";
        var hash = require_hash();
        var utils = require_utils();
        var assert = require_minimalistic_assert();
        function HmacDRBG(options) {
          if (!(this instanceof HmacDRBG)) return new HmacDRBG(options);
          this.hash = options.hash;
          this.predResist = !!options.predResist;
          this.outLen = this.hash.outSize;
          this.minEntropy = options.minEntropy || this.hash.hmacStrength;
          this._reseed = null;
          this.reseedInterval = null;
          this.K = null;
          this.V = null;
          var entropy = utils.toArray(options.entropy, options.entropyEnc || "hex");
          var nonce = utils.toArray(options.nonce, options.nonceEnc || "hex");
          var pers = utils.toArray(options.pers, options.persEnc || "hex");
          assert(entropy.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits");
          this._init(entropy, nonce, pers);
        }
        module.exports = HmacDRBG;
        HmacDRBG.prototype._init = function init(entropy, nonce, pers) {
          var seed = entropy.concat(nonce).concat(pers);
          this.K = new Array(this.outLen / 8);
          this.V = new Array(this.outLen / 8);
          for (var i = 0; i < this.V.length; i++) {
            this.K[i] = 0;
            this.V[i] = 1;
          }
          this._update(seed);
          this._reseed = 1;
          this.reseedInterval = 281474976710656;
        };
        HmacDRBG.prototype._hmac = function hmac2() {
          return new hash.hmac(this.hash, this.K);
        };
        HmacDRBG.prototype._update = function update(seed) {
          var kmac = this._hmac().update(this.V).update([0]);
          if (seed) kmac = kmac.update(seed);
          this.K = kmac.digest();
          this.V = this._hmac().update(this.V).digest();
          if (!seed) return;
          this.K = this._hmac().update(this.V).update([1]).update(seed).digest();
          this.V = this._hmac().update(this.V).digest();
        };
        HmacDRBG.prototype.reseed = function reseed(entropy, entropyEnc, add, addEnc) {
          if (typeof entropyEnc !== "string") {
            addEnc = add;
            add = entropyEnc;
            entropyEnc = null;
          }
          entropy = utils.toArray(entropy, entropyEnc);
          add = utils.toArray(add, addEnc);
          assert(entropy.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits");
          this._update(entropy.concat(add || []));
          this._reseed = 1;
        };
        HmacDRBG.prototype.generate = function generate(len, enc, add, addEnc) {
          if (this._reseed > this.reseedInterval) throw new Error("Reseed is required");
          if (typeof enc !== "string") {
            addEnc = add;
            add = enc;
            enc = null;
          }
          if (add) {
            add = utils.toArray(add, addEnc || "hex");
            this._update(add);
          }
          var temp = [];
          while (temp.length < len) {
            this.V = this._hmac().update(this.V).digest();
            temp = temp.concat(this.V);
          }
          var res = temp.slice(0, len);
          this._update(add);
          this._reseed++;
          return utils.encode(res, enc);
        };
      },
    });
    require_key = __commonJS({
      "../../node_modules/elliptic/lib/elliptic/ec/key.js"(exports, module) {
        "use strict";
        var BN = require_bn();
        var utils = require_utils2();
        var assert = utils.assert;
        function KeyPair(ec2, options) {
          this.ec = ec2;
          this.priv = null;
          this.pub = null;
          if (options.priv) this._importPrivate(options.priv, options.privEnc);
          if (options.pub) this._importPublic(options.pub, options.pubEnc);
        }
        module.exports = KeyPair;
        KeyPair.fromPublic = function fromPublic(ec2, pub, enc) {
          if (pub instanceof KeyPair) return pub;
          return new KeyPair(ec2, {
            pub,
            pubEnc: enc,
          });
        };
        KeyPair.fromPrivate = function fromPrivate(ec2, priv, enc) {
          if (priv instanceof KeyPair) return priv;
          return new KeyPair(ec2, {
            priv,
            privEnc: enc,
          });
        };
        KeyPair.prototype.validate = function validate2() {
          var pub = this.getPublic();
          if (pub.isInfinity()) return { result: false, reason: "Invalid public key" };
          if (!pub.validate()) return { result: false, reason: "Public key is not a point" };
          if (!pub.mul(this.ec.curve.n).isInfinity()) return { result: false, reason: "Public key * N != O" };
          return { result: true, reason: null };
        };
        KeyPair.prototype.getPublic = function getPublic(compact, enc) {
          if (typeof compact === "string") {
            enc = compact;
            compact = null;
          }
          if (!this.pub) this.pub = this.ec.g.mul(this.priv);
          if (!enc) return this.pub;
          return this.pub.encode(enc, compact);
        };
        KeyPair.prototype.getPrivate = function getPrivate(enc) {
          if (enc === "hex") return this.priv.toString(16, 2);
          else return this.priv;
        };
        KeyPair.prototype._importPrivate = function _importPrivate(key, enc) {
          this.priv = new BN(key, enc || 16);
          this.priv = this.priv.umod(this.ec.curve.n);
        };
        KeyPair.prototype._importPublic = function _importPublic(key, enc) {
          if (key.x || key.y) {
            if (this.ec.curve.type === "mont") {
              assert(key.x, "Need x coordinate");
            } else if (this.ec.curve.type === "short" || this.ec.curve.type === "edwards") {
              assert(key.x && key.y, "Need both x and y coordinate");
            }
            this.pub = this.ec.curve.point(key.x, key.y);
            return;
          }
          this.pub = this.ec.curve.decodePoint(key, enc);
        };
        KeyPair.prototype.derive = function derive(pub) {
          if (!pub.validate()) {
            assert(pub.validate(), "public point not validated");
          }
          return pub.mul(this.priv).getX();
        };
        KeyPair.prototype.sign = function sign(msg, enc, options) {
          return this.ec.sign(msg, this, enc, options);
        };
        KeyPair.prototype.verify = function verify(msg, signature) {
          return this.ec.verify(msg, signature, this);
        };
        KeyPair.prototype.inspect = function inspect() {
          return (
            "<Key priv: " +
            (this.priv && this.priv.toString(16, 2)) +
            " pub: " +
            (this.pub && this.pub.inspect()) +
            " >"
          );
        };
      },
    });
    require_signature = __commonJS({
      "../../node_modules/elliptic/lib/elliptic/ec/signature.js"(exports, module) {
        "use strict";
        var BN = require_bn();
        var utils = require_utils2();
        var assert = utils.assert;
        function Signature(options, enc) {
          if (options instanceof Signature) return options;
          if (this._importDER(options, enc)) return;
          assert(options.r && options.s, "Signature without r or s");
          this.r = new BN(options.r, 16);
          this.s = new BN(options.s, 16);
          if (options.recoveryParam === void 0) this.recoveryParam = null;
          else this.recoveryParam = options.recoveryParam;
        }
        module.exports = Signature;
        function Position() {
          this.place = 0;
        }
        function getLength(buf, p) {
          var initial = buf[p.place++];
          if (!(initial & 128)) {
            return initial;
          }
          var octetLen = initial & 15;
          if (octetLen === 0 || octetLen > 4) {
            return false;
          }
          var val = 0;
          for (var i = 0, off = p.place; i < octetLen; i++, off++) {
            val <<= 8;
            val |= buf[off];
            val >>>= 0;
          }
          if (val <= 127) {
            return false;
          }
          p.place = off;
          return val;
        }
        function rmPadding(buf) {
          var i = 0;
          var len = buf.length - 1;
          while (!buf[i] && !(buf[i + 1] & 128) && i < len) {
            i++;
          }
          if (i === 0) {
            return buf;
          }
          return buf.slice(i);
        }
        Signature.prototype._importDER = function _importDER(data, enc) {
          data = utils.toArray(data, enc);
          var p = new Position();
          if (data[p.place++] !== 48) {
            return false;
          }
          var len = getLength(data, p);
          if (len === false) {
            return false;
          }
          if (len + p.place !== data.length) {
            return false;
          }
          if (data[p.place++] !== 2) {
            return false;
          }
          var rlen = getLength(data, p);
          if (rlen === false) {
            return false;
          }
          var r = data.slice(p.place, rlen + p.place);
          p.place += rlen;
          if (data[p.place++] !== 2) {
            return false;
          }
          var slen = getLength(data, p);
          if (slen === false) {
            return false;
          }
          if (data.length !== slen + p.place) {
            return false;
          }
          var s = data.slice(p.place, slen + p.place);
          if (r[0] === 0) {
            if (r[1] & 128) {
              r = r.slice(1);
            } else {
              return false;
            }
          }
          if (s[0] === 0) {
            if (s[1] & 128) {
              s = s.slice(1);
            } else {
              return false;
            }
          }
          this.r = new BN(r);
          this.s = new BN(s);
          this.recoveryParam = null;
          return true;
        };
        function constructLength(arr, len) {
          if (len < 128) {
            arr.push(len);
            return;
          }
          var octets = 1 + ((Math.log(len) / Math.LN2) >>> 3);
          arr.push(octets | 128);
          while (--octets) {
            arr.push((len >>> (octets << 3)) & 255);
          }
          arr.push(len);
        }
        Signature.prototype.toDER = function toDER(enc) {
          var r = this.r.toArray();
          var s = this.s.toArray();
          if (r[0] & 128) r = [0].concat(r);
          if (s[0] & 128) s = [0].concat(s);
          r = rmPadding(r);
          s = rmPadding(s);
          while (!s[0] && !(s[1] & 128)) {
            s = s.slice(1);
          }
          var arr = [2];
          constructLength(arr, r.length);
          arr = arr.concat(r);
          arr.push(2);
          constructLength(arr, s.length);
          var backHalf = arr.concat(s);
          var res = [48];
          constructLength(res, backHalf.length);
          res = res.concat(backHalf);
          return utils.encode(res, enc);
        };
      },
    });
    require_ec = __commonJS({
      "../../node_modules/elliptic/lib/elliptic/ec/index.js"(exports, module) {
        "use strict";
        var BN = require_bn();
        var HmacDRBG = require_hmac_drbg();
        var utils = require_utils2();
        var curves = require_curves();
        var rand = require_brorand();
        var assert = utils.assert;
        var KeyPair = require_key();
        var Signature = require_signature();
        function EC(options) {
          if (!(this instanceof EC)) return new EC(options);
          if (typeof options === "string") {
            assert(Object.prototype.hasOwnProperty.call(curves, options), "Unknown curve " + options);
            options = curves[options];
          }
          if (options instanceof curves.PresetCurve) options = { curve: options };
          this.curve = options.curve.curve;
          this.n = this.curve.n;
          this.nh = this.n.ushrn(1);
          this.g = this.curve.g;
          this.g = options.curve.g;
          this.g.precompute(options.curve.n.bitLength() + 1);
          this.hash = options.hash || options.curve.hash;
        }
        module.exports = EC;
        EC.prototype.keyPair = function keyPair(options) {
          return new KeyPair(this, options);
        };
        EC.prototype.keyFromPrivate = function keyFromPrivate(priv, enc) {
          return KeyPair.fromPrivate(this, priv, enc);
        };
        EC.prototype.keyFromPublic = function keyFromPublic(pub, enc) {
          return KeyPair.fromPublic(this, pub, enc);
        };
        EC.prototype.genKeyPair = function genKeyPair(options) {
          if (!options) options = {};
          var drbg = new HmacDRBG({
            hash: this.hash,
            pers: options.pers,
            persEnc: options.persEnc || "utf8",
            entropy: options.entropy || rand(this.hash.hmacStrength),
            entropyEnc: (options.entropy && options.entropyEnc) || "utf8",
            nonce: this.n.toArray(),
          });
          var bytes = this.n.byteLength();
          var ns2 = this.n.sub(new BN(2));
          for (;;) {
            var priv = new BN(drbg.generate(bytes));
            if (priv.cmp(ns2) > 0) continue;
            priv.iaddn(1);
            return this.keyFromPrivate(priv);
          }
        };
        EC.prototype._truncateToN = function _truncateToN(msg, truncOnly) {
          var delta = msg.byteLength() * 8 - this.n.bitLength();
          if (delta > 0) msg = msg.ushrn(delta);
          if (!truncOnly && msg.cmp(this.n) >= 0) return msg.sub(this.n);
          else return msg;
        };
        EC.prototype.sign = function sign(msg, key, enc, options) {
          if (typeof enc === "object") {
            options = enc;
            enc = null;
          }
          if (!options) options = {};
          key = this.keyFromPrivate(key, enc);
          msg = this._truncateToN(new BN(msg, 16));
          var bytes = this.n.byteLength();
          var bkey = key.getPrivate().toArray("be", bytes);
          var nonce = msg.toArray("be", bytes);
          var drbg = new HmacDRBG({
            hash: this.hash,
            entropy: bkey,
            nonce,
            pers: options.pers,
            persEnc: options.persEnc || "utf8",
          });
          var ns1 = this.n.sub(new BN(1));
          for (var iter = 0; ; iter++) {
            var k = options.k ? options.k(iter) : new BN(drbg.generate(this.n.byteLength()));
            k = this._truncateToN(k, true);
            if (k.cmpn(1) <= 0 || k.cmp(ns1) >= 0) continue;
            var kp = this.g.mul(k);
            if (kp.isInfinity()) continue;
            var kpX = kp.getX();
            var r = kpX.umod(this.n);
            if (r.cmpn(0) === 0) continue;
            var s = k.invm(this.n).mul(r.mul(key.getPrivate()).iadd(msg));
            s = s.umod(this.n);
            if (s.cmpn(0) === 0) continue;
            var recoveryParam = (kp.getY().isOdd() ? 1 : 0) | (kpX.cmp(r) !== 0 ? 2 : 0);
            if (options.canonical && s.cmp(this.nh) > 0) {
              s = this.n.sub(s);
              recoveryParam ^= 1;
            }
            return new Signature({ r, s, recoveryParam });
          }
        };
        EC.prototype.verify = function verify(msg, signature, key, enc) {
          msg = this._truncateToN(new BN(msg, 16));
          key = this.keyFromPublic(key, enc);
          signature = new Signature(signature, "hex");
          var r = signature.r;
          var s = signature.s;
          if (r.cmpn(1) < 0 || r.cmp(this.n) >= 0) return false;
          if (s.cmpn(1) < 0 || s.cmp(this.n) >= 0) return false;
          var sinv = s.invm(this.n);
          var u1 = sinv.mul(msg).umod(this.n);
          var u2 = sinv.mul(r).umod(this.n);
          var p;
          if (!this.curve._maxwellTrick) {
            p = this.g.mulAdd(u1, key.getPublic(), u2);
            if (p.isInfinity()) return false;
            return p.getX().umod(this.n).cmp(r) === 0;
          }
          p = this.g.jmulAdd(u1, key.getPublic(), u2);
          if (p.isInfinity()) return false;
          return p.eqXToP(r);
        };
        EC.prototype.recoverPubKey = function (msg, signature, j, enc) {
          assert((3 & j) === j, "The recovery param is more than two bits");
          signature = new Signature(signature, enc);
          var n = this.n;
          var e = new BN(msg);
          var r = signature.r;
          var s = signature.s;
          var isYOdd = j & 1;
          var isSecondKey = j >> 1;
          if (r.cmp(this.curve.p.umod(this.curve.n)) >= 0 && isSecondKey)
            throw new Error("Unable to find sencond key candinate");
          if (isSecondKey) r = this.curve.pointFromX(r.add(this.curve.n), isYOdd);
          else r = this.curve.pointFromX(r, isYOdd);
          var rInv = signature.r.invm(n);
          var s1 = n.sub(e).mul(rInv).umod(n);
          var s2 = s.mul(rInv).umod(n);
          return this.g.mulAdd(s1, r, s2);
        };
        EC.prototype.getKeyRecoveryParam = function (e, signature, Q, enc) {
          signature = new Signature(signature, enc);
          if (signature.recoveryParam !== null) return signature.recoveryParam;
          for (var i = 0; i < 4; i++) {
            var Qprime;
            try {
              Qprime = this.recoverPubKey(e, signature, i);
            } catch (e2) {
              continue;
            }
            if (Qprime.eq(Q)) return i;
          }
          throw new Error("Unable to find valid recovery factor");
        };
      },
    });
    require_key2 = __commonJS({
      "../../node_modules/elliptic/lib/elliptic/eddsa/key.js"(exports, module) {
        "use strict";
        var utils = require_utils2();
        var assert = utils.assert;
        var parseBytes = utils.parseBytes;
        var cachedProperty = utils.cachedProperty;
        function KeyPair(eddsa, params) {
          this.eddsa = eddsa;
          this._secret = parseBytes(params.secret);
          if (eddsa.isPoint(params.pub)) this._pub = params.pub;
          else this._pubBytes = parseBytes(params.pub);
        }
        KeyPair.fromPublic = function fromPublic(eddsa, pub) {
          if (pub instanceof KeyPair) return pub;
          return new KeyPair(eddsa, { pub });
        };
        KeyPair.fromSecret = function fromSecret(eddsa, secret) {
          if (secret instanceof KeyPair) return secret;
          return new KeyPair(eddsa, { secret });
        };
        KeyPair.prototype.secret = function secret() {
          return this._secret;
        };
        cachedProperty(KeyPair, "pubBytes", function pubBytes() {
          return this.eddsa.encodePoint(this.pub());
        });
        cachedProperty(KeyPair, "pub", function pub() {
          if (this._pubBytes) return this.eddsa.decodePoint(this._pubBytes);
          return this.eddsa.g.mul(this.priv());
        });
        cachedProperty(KeyPair, "privBytes", function privBytes() {
          var eddsa = this.eddsa;
          var hash = this.hash();
          var lastIx = eddsa.encodingLength - 1;
          var a = hash.slice(0, eddsa.encodingLength);
          a[0] &= 248;
          a[lastIx] &= 127;
          a[lastIx] |= 64;
          return a;
        });
        cachedProperty(KeyPair, "priv", function priv() {
          return this.eddsa.decodeInt(this.privBytes());
        });
        cachedProperty(KeyPair, "hash", function hash() {
          return this.eddsa.hash().update(this.secret()).digest();
        });
        cachedProperty(KeyPair, "messagePrefix", function messagePrefix() {
          return this.hash().slice(this.eddsa.encodingLength);
        });
        KeyPair.prototype.sign = function sign(message) {
          assert(this._secret, "KeyPair can only verify");
          return this.eddsa.sign(message, this);
        };
        KeyPair.prototype.verify = function verify(message, sig) {
          return this.eddsa.verify(message, sig, this);
        };
        KeyPair.prototype.getSecret = function getSecret(enc) {
          assert(this._secret, "KeyPair is public only");
          return utils.encode(this.secret(), enc);
        };
        KeyPair.prototype.getPublic = function getPublic(enc) {
          return utils.encode(this.pubBytes(), enc);
        };
        module.exports = KeyPair;
      },
    });
    require_signature2 = __commonJS({
      "../../node_modules/elliptic/lib/elliptic/eddsa/signature.js"(exports, module) {
        "use strict";
        var BN = require_bn();
        var utils = require_utils2();
        var assert = utils.assert;
        var cachedProperty = utils.cachedProperty;
        var parseBytes = utils.parseBytes;
        function Signature(eddsa, sig) {
          this.eddsa = eddsa;
          if (typeof sig !== "object") sig = parseBytes(sig);
          if (Array.isArray(sig)) {
            sig = {
              R: sig.slice(0, eddsa.encodingLength),
              S: sig.slice(eddsa.encodingLength),
            };
          }
          assert(sig.R && sig.S, "Signature without R or S");
          if (eddsa.isPoint(sig.R)) this._R = sig.R;
          if (sig.S instanceof BN) this._S = sig.S;
          this._Rencoded = Array.isArray(sig.R) ? sig.R : sig.Rencoded;
          this._Sencoded = Array.isArray(sig.S) ? sig.S : sig.Sencoded;
        }
        cachedProperty(Signature, "S", function S() {
          return this.eddsa.decodeInt(this.Sencoded());
        });
        cachedProperty(Signature, "R", function R() {
          return this.eddsa.decodePoint(this.Rencoded());
        });
        cachedProperty(Signature, "Rencoded", function Rencoded() {
          return this.eddsa.encodePoint(this.R());
        });
        cachedProperty(Signature, "Sencoded", function Sencoded() {
          return this.eddsa.encodeInt(this.S());
        });
        Signature.prototype.toBytes = function toBytes() {
          return this.Rencoded().concat(this.Sencoded());
        };
        Signature.prototype.toHex = function toHex2() {
          return utils.encode(this.toBytes(), "hex").toUpperCase();
        };
        module.exports = Signature;
      },
    });
    require_eddsa = __commonJS({
      "../../node_modules/elliptic/lib/elliptic/eddsa/index.js"(exports, module) {
        "use strict";
        var hash = require_hash();
        var curves = require_curves();
        var utils = require_utils2();
        var assert = utils.assert;
        var parseBytes = utils.parseBytes;
        var KeyPair = require_key2();
        var Signature = require_signature2();
        function EDDSA(curve) {
          assert(curve === "ed25519", "only tested with ed25519 so far");
          if (!(this instanceof EDDSA)) return new EDDSA(curve);
          curve = curves[curve].curve;
          this.curve = curve;
          this.g = curve.g;
          this.g.precompute(curve.n.bitLength() + 1);
          this.pointClass = curve.point().constructor;
          this.encodingLength = Math.ceil(curve.n.bitLength() / 8);
          this.hash = hash.sha512;
        }
        module.exports = EDDSA;
        EDDSA.prototype.sign = function sign(message, secret) {
          message = parseBytes(message);
          var key = this.keyFromSecret(secret);
          var r = this.hashInt(key.messagePrefix(), message);
          var R = this.g.mul(r);
          var Rencoded = this.encodePoint(R);
          var s_ = this.hashInt(Rencoded, key.pubBytes(), message).mul(key.priv());
          var S = r.add(s_).umod(this.curve.n);
          return this.makeSignature({ R, S, Rencoded });
        };
        EDDSA.prototype.verify = function verify(message, sig, pub) {
          message = parseBytes(message);
          sig = this.makeSignature(sig);
          var key = this.keyFromPublic(pub);
          var h = this.hashInt(sig.Rencoded(), key.pubBytes(), message);
          var SG = this.g.mul(sig.S());
          var RplusAh = sig.R().add(key.pub().mul(h));
          return RplusAh.eq(SG);
        };
        EDDSA.prototype.hashInt = function hashInt() {
          var hash2 = this.hash();
          for (var i = 0; i < arguments.length; i++) hash2.update(arguments[i]);
          return utils.intFromLE(hash2.digest()).umod(this.curve.n);
        };
        EDDSA.prototype.keyFromPublic = function keyFromPublic(pub) {
          return KeyPair.fromPublic(this, pub);
        };
        EDDSA.prototype.keyFromSecret = function keyFromSecret(secret) {
          return KeyPair.fromSecret(this, secret);
        };
        EDDSA.prototype.makeSignature = function makeSignature(sig) {
          if (sig instanceof Signature) return sig;
          return new Signature(this, sig);
        };
        EDDSA.prototype.encodePoint = function encodePoint(point) {
          var enc = point.getY().toArray("le", this.encodingLength);
          enc[this.encodingLength - 1] |= point.getX().isOdd() ? 128 : 0;
          return enc;
        };
        EDDSA.prototype.decodePoint = function decodePoint(bytes) {
          bytes = utils.parseBytes(bytes);
          var lastIx = bytes.length - 1;
          var normed = bytes.slice(0, lastIx).concat(bytes[lastIx] & ~128);
          var xIsOdd = (bytes[lastIx] & 128) !== 0;
          var y = utils.intFromLE(normed);
          return this.curve.pointFromY(y, xIsOdd);
        };
        EDDSA.prototype.encodeInt = function encodeInt(num) {
          return num.toArray("le", this.encodingLength);
        };
        EDDSA.prototype.decodeInt = function decodeInt(bytes) {
          return utils.intFromLE(bytes);
        };
        EDDSA.prototype.isPoint = function isPoint(val) {
          return val instanceof this.pointClass;
        };
      },
    });
    require_elliptic = __commonJS({
      "../../node_modules/elliptic/lib/elliptic.js"(exports) {
        "use strict";
        var elliptic = exports;
        elliptic.version = require_package().version;
        elliptic.utils = require_utils2();
        elliptic.rand = require_brorand();
        elliptic.curve = require_curve();
        elliptic.curves = require_curves();
        elliptic.ec = require_ec();
        elliptic.eddsa = require_eddsa();
      },
    });
    import_elliptic = __toESM(require_elliptic());
    export_Ec = import_elliptic.ec;
  },
});

// ../../node_modules/@smithy/signature-v4a/dist-es/SignatureV4a.js
var SignatureV4a;
var init_SignatureV4a = __esm({
  "../../node_modules/@smithy/signature-v4a/dist-es/SignatureV4a.js"() {
    init_inject_sigv4a();
    init_dist_es8();
    init_dist_es8();
    init_dist_es8();
    init_dist_es8();
    init_dist_es8();
    init_dist_es8();
    init_dist_es();
    init_dist_es2();
    init_constants2();
    init_credentialDerivation2();
    init_Ec();
    SignatureV4a = class extends SignatureV4Base {
      constructor({ applyChecksum, credentials, region, service, sha256, uriEscapePath = true }) {
        super({
          applyChecksum,
          credentials,
          region,
          service,
          sha256,
          uriEscapePath,
        });
      }
      async sign(toSign, options) {
        return this.signRequest(toSign, options);
      }
      async signRequest(
        requestToSign,
        {
          signingDate = /* @__PURE__ */ new Date(),
          signableHeaders,
          unsignableHeaders,
          signingRegion,
          signingService,
        } = {}
      ) {
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion ?? (await this.regionProvider());
        const request = prepareRequest(requestToSign);
        const { longDate, shortDate } = this.formatDate(signingDate);
        const scope = createSigV4aScope(shortDate, signingService ?? this.service);
        const pKey = await getSigV4aSigningKey(this.sha256, credentials.accessKeyId, credentials.secretAccessKey);
        request.headers[AMZ_DATE_HEADER] = longDate;
        if (credentials.sessionToken) {
          request.headers[TOKEN_HEADER] = credentials.sessionToken;
        }
        request.headers[REGION_HEADER] = region;
        const payloadHash = await getPayloadHash(request, this.sha256);
        if (!hasHeader(SHA256_HEADER, request.headers) && this.applyChecksum) {
          request.headers[SHA256_HEADER] = payloadHash;
        }
        const canonicalHeaders = getCanonicalHeaders(request, unsignableHeaders, signableHeaders);
        const canonicalRequest = this.createCanonicalRequest(request, canonicalHeaders, payloadHash);
        const stringToSign = await this.createStringToSign(longDate, scope, canonicalRequest, ALGORITHM_IDENTIFIER_V4A);
        const signature = await this.GetSignature(pKey, stringToSign);
        request.headers[AUTH_HEADER] = `${ALGORITHM_IDENTIFIER_V4A} Credential=${
          credentials.accessKeyId
        }/${scope}, SignedHeaders=${this.getCanonicalHeaderList(canonicalHeaders)}, Signature=${signature}`;
        return request;
      }
      async GetSignature(privateKey, stringToSign) {
        const ecdsa = new export_Ec("p256");
        const key = ecdsa.keyFromPrivate(privateKey);
        const hash = new this.sha256();
        hash.update(toUint8Array(stringToSign));
        const hashResult = await hash.digest();
        const signature = key.sign(hashResult);
        return toHex(new Uint8Array(signature.toDER()));
      }
    };
  },
});

// ../../node_modules/@smithy/signature-v4a/dist-es/index.js
var init_dist_es9 = __esm({
  "../../node_modules/@smithy/signature-v4a/dist-es/index.js"() {
    init_inject_sigv4a();
    init_dist_es8();
    init_SignatureV4a();
    init_SignatureV4a();
    signatureV4aContainer.SignatureV4a = SignatureV4a;
  },
});

// src/browser-build/inject-sigv4a.js
var init_inject_sigv4a = __esm({
  "src/browser-build/inject-sigv4a.js"() {
    "use strict";
    init_dist_es9();
  },
});

// dist-es/index.js
init_inject_sigv4a();

// dist-es/SignatureV4MultiRegion.js
init_inject_sigv4a();

// ../middleware-sdk-s3/dist-es/index.js
init_inject_sigv4a();

// ../middleware-sdk-s3/dist-es/check-content-length-header.js
init_inject_sigv4a();
init_dist_es5();

// ../../node_modules/@smithy/smithy-client/dist-es/index.js
init_inject_sigv4a();

// ../../node_modules/@smithy/smithy-client/dist-es/client.js
init_inject_sigv4a();

// ../../node_modules/@smithy/middleware-stack/dist-es/index.js
init_inject_sigv4a();

// ../../node_modules/@smithy/middleware-stack/dist-es/MiddlewareStack.js
init_inject_sigv4a();

// ../../node_modules/@smithy/smithy-client/dist-es/collect-stream-body.js
init_inject_sigv4a();

// ../../node_modules/@smithy/core/dist-es/submodules/protocols/index.js
init_inject_sigv4a();

// ../../node_modules/@smithy/core/dist-es/submodules/protocols/collect-stream-body.js
init_inject_sigv4a();

// ../../node_modules/@smithy/util-stream/dist-es/index.js
init_inject_sigv4a();

// ../../node_modules/@smithy/util-stream/dist-es/blob/Uint8ArrayBlobAdapter.js
init_inject_sigv4a();

// ../../node_modules/@smithy/util-stream/dist-es/blob/transforms.js
init_inject_sigv4a();

// ../../node_modules/@smithy/util-base64/dist-es/index.js
init_inject_sigv4a();

// ../../node_modules/@smithy/util-base64/dist-es/fromBase64.browser.js
init_inject_sigv4a();

// ../../node_modules/@smithy/util-base64/dist-es/constants.browser.js
init_inject_sigv4a();
var alphabetByEncoding = {};
var alphabetByValue = new Array(64);
for (let i = 0, start = "A".charCodeAt(0), limit = "Z".charCodeAt(0); i + start <= limit; i++) {
  const char = String.fromCharCode(i + start);
  alphabetByEncoding[char] = i;
  alphabetByValue[i] = char;
}
for (let i = 0, start = "a".charCodeAt(0), limit = "z".charCodeAt(0); i + start <= limit; i++) {
  const char = String.fromCharCode(i + start);
  const index = i + 26;
  alphabetByEncoding[char] = index;
  alphabetByValue[index] = char;
}
for (let i = 0; i < 10; i++) {
  alphabetByEncoding[i.toString(10)] = i + 52;
  const char = i.toString(10);
  const index = i + 52;
  alphabetByEncoding[char] = index;
  alphabetByValue[index] = char;
}
alphabetByEncoding["+"] = 62;
alphabetByValue[62] = "+";
alphabetByEncoding["/"] = 63;
alphabetByValue[63] = "/";

// ../../node_modules/@smithy/util-base64/dist-es/toBase64.browser.js
init_inject_sigv4a();
init_dist_es2();

// ../../node_modules/@smithy/util-stream/dist-es/blob/transforms.js
init_dist_es2();

// ../../node_modules/@smithy/util-stream/dist-es/checksum/ChecksumStream.browser.js
init_inject_sigv4a();

// ../../node_modules/@smithy/util-stream/dist-es/checksum/createChecksumStream.browser.js
init_inject_sigv4a();

// ../../node_modules/@smithy/util-stream/dist-es/stream-type-check.js
init_inject_sigv4a();

// ../../node_modules/@smithy/util-stream/dist-es/createBufferedReadableStream.js
init_inject_sigv4a();

// ../../node_modules/@smithy/util-stream/dist-es/ByteArrayCollector.js
init_inject_sigv4a();

// ../../node_modules/@smithy/util-stream/dist-es/getAwsChunkedEncodingStream.browser.js
init_inject_sigv4a();

// ../../node_modules/@smithy/util-stream/dist-es/headStream.browser.js
init_inject_sigv4a();

// ../../node_modules/@smithy/util-stream/dist-es/sdk-stream-mixin.browser.js
init_inject_sigv4a();

// ../../node_modules/@smithy/fetch-http-handler/dist-es/index.js
init_inject_sigv4a();

// ../../node_modules/@smithy/fetch-http-handler/dist-es/fetch-http-handler.js
init_inject_sigv4a();
init_dist_es5();

// ../../node_modules/@smithy/querystring-builder/dist-es/index.js
init_inject_sigv4a();
init_dist_es7();

// ../../node_modules/@smithy/fetch-http-handler/dist-es/create-request.js
init_inject_sigv4a();

// ../../node_modules/@smithy/fetch-http-handler/dist-es/request-timeout.js
init_inject_sigv4a();

// ../../node_modules/@smithy/fetch-http-handler/dist-es/stream-collector.js
init_inject_sigv4a();

// ../../node_modules/@smithy/util-stream/dist-es/sdk-stream-mixin.browser.js
init_dist_es();
init_dist_es2();

// ../../node_modules/@smithy/util-stream/dist-es/splitStream.browser.js
init_inject_sigv4a();

// ../../node_modules/@smithy/core/dist-es/submodules/protocols/extended-encode-uri-component.js
init_inject_sigv4a();

// ../../node_modules/@smithy/core/dist-es/submodules/protocols/requestBuilder.js
init_inject_sigv4a();
init_dist_es5();

// ../../node_modules/@smithy/core/dist-es/submodules/protocols/resolve-path.js
init_inject_sigv4a();

// ../../node_modules/@smithy/smithy-client/dist-es/command.js
init_inject_sigv4a();
init_dist_es4();

// ../../node_modules/@smithy/smithy-client/dist-es/constants.js
init_inject_sigv4a();

// ../../node_modules/@smithy/smithy-client/dist-es/create-aggregated-client.js
init_inject_sigv4a();

// ../../node_modules/@smithy/smithy-client/dist-es/date-utils.js
init_inject_sigv4a();

// ../../node_modules/@smithy/smithy-client/dist-es/parse-utils.js
init_inject_sigv4a();
var MAX_FLOAT = Math.ceil(2 ** 127 * (2 - 2 ** -23));

// ../../node_modules/@smithy/smithy-client/dist-es/date-utils.js
var RFC3339 = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?[zZ]$/);
var RFC3339_WITH_OFFSET = new RegExp(
  /^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}\:\d{2})|[zZ])$/
);
var IMF_FIXDATE = new RegExp(
  /^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/
);
var RFC_850_DATE = new RegExp(
  /^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/
);
var ASC_TIME = new RegExp(
  /^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})$/
);
var FIFTY_YEARS_IN_MILLIS = 50 * 365 * 24 * 60 * 60 * 1e3;

// ../../node_modules/@smithy/smithy-client/dist-es/default-error-handler.js
init_inject_sigv4a();

// ../../node_modules/@smithy/smithy-client/dist-es/exceptions.js
init_inject_sigv4a();

// ../../node_modules/@smithy/smithy-client/dist-es/defaults-mode.js
init_inject_sigv4a();

// ../../node_modules/@smithy/smithy-client/dist-es/emitWarningIfUnsupportedVersion.js
init_inject_sigv4a();

// ../../node_modules/@smithy/smithy-client/dist-es/extended-encode-uri-component.js
init_inject_sigv4a();

// ../../node_modules/@smithy/smithy-client/dist-es/extensions/index.js
init_inject_sigv4a();

// ../../node_modules/@smithy/smithy-client/dist-es/extensions/defaultExtensionConfiguration.js
init_inject_sigv4a();

// ../../node_modules/@smithy/smithy-client/dist-es/extensions/checksum.js
init_inject_sigv4a();
init_dist_es4();

// ../../node_modules/@smithy/smithy-client/dist-es/extensions/retry.js
init_inject_sigv4a();

// ../../node_modules/@smithy/smithy-client/dist-es/get-array-if-single-item.js
init_inject_sigv4a();

// ../../node_modules/@smithy/smithy-client/dist-es/get-value-from-text-node.js
init_inject_sigv4a();

// ../../node_modules/@smithy/smithy-client/dist-es/is-serializable-header-value.js
init_inject_sigv4a();

// ../../node_modules/@smithy/smithy-client/dist-es/lazy-json.js
init_inject_sigv4a();
var LazyJsonString = function LazyJsonString2(val) {
  const str = Object.assign(new String(val), {
    deserializeJSON() {
      return JSON.parse(String(val));
    },
    toString() {
      return String(val);
    },
    toJSON() {
      return String(val);
    },
  });
  return str;
};
LazyJsonString.from = (object) => {
  if (object && typeof object === "object" && (object instanceof LazyJsonString || "deserializeJSON" in object)) {
    return object;
  } else if (typeof object === "string" || Object.getPrototypeOf(object) === String.prototype) {
    return LazyJsonString(String(object));
  }
  return LazyJsonString(JSON.stringify(object));
};
LazyJsonString.fromObject = LazyJsonString.from;

// ../../node_modules/@smithy/smithy-client/dist-es/NoOpLogger.js
init_inject_sigv4a();

// ../../node_modules/@smithy/smithy-client/dist-es/object-mapping.js
init_inject_sigv4a();

// ../../node_modules/@smithy/smithy-client/dist-es/quote-header.js
init_inject_sigv4a();

// ../../node_modules/@smithy/smithy-client/dist-es/resolve-path.js
init_inject_sigv4a();

// ../../node_modules/@smithy/smithy-client/dist-es/ser-utils.js
init_inject_sigv4a();

// ../../node_modules/@smithy/smithy-client/dist-es/serde-json.js
init_inject_sigv4a();

// ../../node_modules/@smithy/smithy-client/dist-es/split-every.js
init_inject_sigv4a();

// ../../node_modules/@smithy/smithy-client/dist-es/split-header.js
init_inject_sigv4a();

// ../middleware-sdk-s3/dist-es/region-redirect-endpoint-middleware.js
init_inject_sigv4a();

// ../middleware-sdk-s3/dist-es/region-redirect-middleware.js
init_inject_sigv4a();

// ../middleware-sdk-s3/dist-es/s3-expires-middleware.js
init_inject_sigv4a();
init_dist_es5();

// ../middleware-sdk-s3/dist-es/s3-express/index.js
init_inject_sigv4a();

// ../middleware-sdk-s3/dist-es/s3-express/classes/S3ExpressIdentityCache.js
init_inject_sigv4a();

// ../middleware-sdk-s3/dist-es/s3-express/classes/S3ExpressIdentityCacheEntry.js
init_inject_sigv4a();

// ../middleware-sdk-s3/dist-es/s3-express/classes/S3ExpressIdentityProviderImpl.js
init_inject_sigv4a();

// ../middleware-sdk-s3/dist-es/s3-express/classes/SignatureV4S3Express.js
init_inject_sigv4a();
init_dist_es8();

// ../middleware-sdk-s3/dist-es/s3-express/constants.js
init_inject_sigv4a();

// ../../node_modules/@smithy/util-config-provider/dist-es/index.js
init_inject_sigv4a();

// ../../node_modules/@smithy/util-config-provider/dist-es/booleanSelector.js
init_inject_sigv4a();

// ../../node_modules/@smithy/util-config-provider/dist-es/numberSelector.js
init_inject_sigv4a();

// ../../node_modules/@smithy/util-config-provider/dist-es/types.js
init_inject_sigv4a();
var SelectorType;
(function (SelectorType2) {
  SelectorType2["ENV"] = "env";
  SelectorType2["CONFIG"] = "shared config entry";
})(SelectorType || (SelectorType = {}));

// ../middleware-sdk-s3/dist-es/s3-express/constants.js
var SESSION_TOKEN_QUERY_PARAM = "X-Amz-S3session-Token";
var SESSION_TOKEN_HEADER = SESSION_TOKEN_QUERY_PARAM.toLowerCase();

// ../middleware-sdk-s3/dist-es/s3-express/classes/SignatureV4S3Express.js
var SignatureV4S3Express = class extends SignatureV4 {
  async signWithCredentials(requestToSign, credentials, options) {
    const credentialsWithoutSessionToken = getCredentialsWithoutSessionToken(credentials);
    requestToSign.headers[SESSION_TOKEN_HEADER] = credentials.sessionToken;
    const privateAccess = this;
    setSingleOverride(privateAccess, credentialsWithoutSessionToken);
    return privateAccess.signRequest(requestToSign, options ?? {});
  }
  async presignWithCredentials(requestToSign, credentials, options) {
    const credentialsWithoutSessionToken = getCredentialsWithoutSessionToken(credentials);
    delete requestToSign.headers[SESSION_TOKEN_HEADER];
    requestToSign.headers[SESSION_TOKEN_QUERY_PARAM] = credentials.sessionToken;
    requestToSign.query = requestToSign.query ?? {};
    requestToSign.query[SESSION_TOKEN_QUERY_PARAM] = credentials.sessionToken;
    const privateAccess = this;
    setSingleOverride(privateAccess, credentialsWithoutSessionToken);
    return this.presign(requestToSign, options);
  }
};
function getCredentialsWithoutSessionToken(credentials) {
  const credentialsWithoutSessionToken = {
    accessKeyId: credentials.accessKeyId,
    secretAccessKey: credentials.secretAccessKey,
    expiration: credentials.expiration,
  };
  return credentialsWithoutSessionToken;
}
function setSingleOverride(privateAccess, credentialsWithoutSessionToken) {
  const id = setTimeout(() => {
    throw new Error("SignatureV4S3Express credential override was created but not called.");
  }, 10);
  const currentCredentialProvider = privateAccess.credentialProvider;
  const overrideCredentialsProviderOnce = () => {
    clearTimeout(id);
    privateAccess.credentialProvider = currentCredentialProvider;
    return Promise.resolve(credentialsWithoutSessionToken);
  };
  privateAccess.credentialProvider = overrideCredentialsProviderOnce;
}

// ../middleware-sdk-s3/dist-es/s3-express/functions/s3ExpressMiddleware.js
init_inject_sigv4a();

// ../../node_modules/@smithy/core/dist-es/index.js
init_inject_sigv4a();

// ../../node_modules/@smithy/core/dist-es/getSmithyContext.js
init_inject_sigv4a();
init_dist_es4();

// ../../node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/index.js
init_inject_sigv4a();

// ../../node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/httpAuthSchemeMiddleware.js
init_inject_sigv4a();
init_dist_es4();
init_dist_es6();

// ../../node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemeEndpointRuleSetPlugin.js
init_inject_sigv4a();

// ../../node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemePlugin.js
init_inject_sigv4a();

// ../../node_modules/@smithy/middleware-serde/dist-es/index.js
init_inject_sigv4a();

// ../../node_modules/@smithy/middleware-serde/dist-es/deserializerMiddleware.js
init_inject_sigv4a();

// ../../node_modules/@smithy/middleware-serde/dist-es/serdePlugin.js
init_inject_sigv4a();

// ../../node_modules/@smithy/middleware-serde/dist-es/serializerMiddleware.js
init_inject_sigv4a();

// ../../node_modules/@smithy/middleware-serde/dist-es/serdePlugin.js
var serializerMiddlewareOption = {
  name: "serializerMiddleware",
  step: "serialize",
  tags: ["SERIALIZER"],
  override: true,
};

// ../../node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemePlugin.js
var httpAuthSchemeMiddlewareOptions = {
  step: "serialize",
  tags: ["HTTP_AUTH_SCHEME"],
  name: "httpAuthSchemeMiddleware",
  override: true,
  relation: "before",
  toMiddleware: serializerMiddlewareOption.name,
};

// ../../node_modules/@smithy/core/dist-es/middleware-http-signing/index.js
init_inject_sigv4a();

// ../../node_modules/@smithy/core/dist-es/middleware-http-signing/httpSigningMiddleware.js
init_inject_sigv4a();
init_dist_es5();
init_dist_es4();
init_dist_es6();

// ../../node_modules/@smithy/core/dist-es/middleware-http-signing/getHttpSigningMiddleware.js
init_inject_sigv4a();

// ../../node_modules/@smithy/core/dist-es/normalizeProvider.js
init_inject_sigv4a();

// ../../node_modules/@smithy/core/dist-es/pagination/createPaginator.js
init_inject_sigv4a();

// ../../node_modules/@smithy/core/dist-es/protocols/requestBuilder.js
init_inject_sigv4a();

// ../../node_modules/@smithy/core/dist-es/setFeature.js
init_inject_sigv4a();

// ../../node_modules/@smithy/core/dist-es/util-identity-and-auth/index.js
init_inject_sigv4a();

// ../../node_modules/@smithy/core/dist-es/util-identity-and-auth/DefaultIdentityProviderConfig.js
init_inject_sigv4a();

// ../../node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/index.js
init_inject_sigv4a();

// ../../node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/httpApiKeyAuth.js
init_inject_sigv4a();
init_dist_es5();
init_dist_es4();

// ../../node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/httpBearerAuth.js
init_inject_sigv4a();
init_dist_es5();

// ../../node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/noAuth.js
init_inject_sigv4a();

// ../../node_modules/@smithy/core/dist-es/util-identity-and-auth/memoizeIdentityProvider.js
init_inject_sigv4a();
var createIsIdentityExpiredFunction = (expirationMs) => (identity) =>
  doesIdentityRequireRefresh(identity) && identity.expiration.getTime() - Date.now() < expirationMs;
var EXPIRATION_MS = 3e5;
var isIdentityExpired = createIsIdentityExpiredFunction(EXPIRATION_MS);
var doesIdentityRequireRefresh = (identity) => identity.expiration !== void 0;

// ../middleware-sdk-s3/dist-es/s3-express/functions/s3ExpressMiddleware.js
init_dist_es5();

// ../middleware-sdk-s3/dist-es/s3-express/functions/s3ExpressHttpSigningMiddleware.js
init_inject_sigv4a();
init_dist_es5();
init_dist_es4();
init_dist_es6();

// ../middleware-sdk-s3/dist-es/s3-express/functions/signS3Express.js
init_inject_sigv4a();

// ../middleware-sdk-s3/dist-es/s3Configuration.js
init_inject_sigv4a();

// ../middleware-sdk-s3/dist-es/throw-200-exceptions.js
init_inject_sigv4a();
init_dist_es5();

// ../middleware-sdk-s3/dist-es/validate-bucket-name.js
init_inject_sigv4a();

// ../util-arn-parser/dist-es/index.js
init_inject_sigv4a();

// ../middleware-sdk-s3/dist-es/bucket-endpoint-middleware.js
init_inject_sigv4a();

// dist-es/SignatureV4MultiRegion.js
init_dist_es8();

// dist-es/signature-v4-crt-container.js
init_inject_sigv4a();
var signatureV4CrtContainer = {
  CrtSignerV4: null,
};

// dist-es/SignatureV4MultiRegion.js
var SignatureV4MultiRegion = class {
  sigv4aSigner;
  sigv4Signer;
  signerOptions;
  constructor(options) {
    this.sigv4Signer = new SignatureV4S3Express(options);
    this.signerOptions = options;
  }
  async sign(requestToSign, options = {}) {
    if (options.signingRegion === "*") {
      return this.getSigv4aSigner().sign(requestToSign, options);
    }
    return this.sigv4Signer.sign(requestToSign, options);
  }
  async signWithCredentials(requestToSign, credentials, options = {}) {
    if (options.signingRegion === "*") {
      const signer = this.getSigv4aSigner();
      const CrtSignerV4 = signatureV4CrtContainer.CrtSignerV4;
      if (CrtSignerV4 && signer instanceof CrtSignerV4) {
        return signer.signWithCredentials(requestToSign, credentials, options);
      } else {
        throw new Error(
          `signWithCredentials with signingRegion '*' is only supported when using the CRT dependency @aws-sdk/signature-v4-crt. Please check whether you have installed the "@aws-sdk/signature-v4-crt" package explicitly. You must also register the package by calling [require("@aws-sdk/signature-v4-crt");] or an ESM equivalent such as [import "@aws-sdk/signature-v4-crt";]. For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt`
        );
      }
    }
    return this.sigv4Signer.signWithCredentials(requestToSign, credentials, options);
  }
  async presign(originalRequest, options = {}) {
    if (options.signingRegion === "*") {
      const signer = this.getSigv4aSigner();
      const CrtSignerV4 = signatureV4CrtContainer.CrtSignerV4;
      if (CrtSignerV4 && signer instanceof CrtSignerV4) {
        return signer.presign(originalRequest, options);
      } else {
        throw new Error(
          `presign with signingRegion '*' is only supported when using the CRT dependency @aws-sdk/signature-v4-crt. Please check whether you have installed the "@aws-sdk/signature-v4-crt" package explicitly. You must also register the package by calling [require("@aws-sdk/signature-v4-crt");] or an ESM equivalent such as [import "@aws-sdk/signature-v4-crt";]. For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt`
        );
      }
    }
    return this.sigv4Signer.presign(originalRequest, options);
  }
  async presignWithCredentials(originalRequest, credentials, options = {}) {
    if (options.signingRegion === "*") {
      throw new Error("Method presignWithCredentials is not supported for [signingRegion=*].");
    }
    return this.sigv4Signer.presignWithCredentials(originalRequest, credentials, options);
  }
  getSigv4aSigner() {
    if (!this.sigv4aSigner) {
      const CrtSignerV4 = signatureV4CrtContainer.CrtSignerV4;
      const JsSigV4aSigner = signatureV4aContainer.SignatureV4a;
      if (this.signerOptions.runtime === "node") {
        if (!CrtSignerV4 && !JsSigV4aSigner) {
          throw new Error(
            "Neither CRT nor JS SigV4a implementation is available. Please load either @aws-sdk/signature-v4-crt or @smithy/signature-v4a. For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt"
          );
        }
        if (CrtSignerV4 && typeof CrtSignerV4 === "function") {
          this.sigv4aSigner = new CrtSignerV4({
            ...this.signerOptions,
            signingAlgorithm: 1,
          });
        } else if (JsSigV4aSigner && typeof JsSigV4aSigner === "function") {
          this.sigv4aSigner = new JsSigV4aSigner({
            ...this.signerOptions,
          });
        } else {
          throw new Error(
            "Available SigV4a implementation is not a valid constructor. Please ensure you've properly imported @aws-sdk/signature-v4-crt or @smithy/signature-v4a.For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt"
          );
        }
      } else {
        if (!JsSigV4aSigner || typeof JsSigV4aSigner !== "function") {
          throw new Error(
            "JS SigV4a implementation is not available or not a valid constructor. Please check whether you have installed the @smithy/signature-v4a package explicitly. The CRT implementation is not available for browsers. You must also register the package by calling [require('@smithy/signature-v4a');] or an ESM equivalent such as [import '@smithy/signature-v4a';]. For more information please go to https://github.com/aws/aws-sdk-js-v3#using-javascript-non-crt-implementation-of-sigv4a"
          );
        }
        this.sigv4aSigner = new JsSigV4aSigner({
          ...this.signerOptions,
        });
      }
    }
    return this.sigv4aSigner;
  }
};
export { SignatureV4MultiRegion, signatureV4CrtContainer };
