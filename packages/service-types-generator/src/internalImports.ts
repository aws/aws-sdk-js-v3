import { Import } from "@aws-sdk/build-types";

/**
 * @internal
 */
export const IMPORTS: { [key: string]: Import } = {
  "abort-controller": {
    package: "@aws-sdk/abort-controller",
    version: "^0.1.0-preview.6"
  },
  "add-glacier-checksum-headers-browser": {
    package: "@aws-sdk/add-glacier-checksum-headers-browser",
    version: "^0.1.0-preview.8"
  },
  "add-glacier-checksum-headers-node": {
    package: "@aws-sdk/add-glacier-checksum-headers-node",
    version: "^0.1.0-preview.8"
  },
  "add-glacier-checksum-headers-universal": {
    package: "@aws-sdk/add-glacier-checksum-headers-universal",
    version: "^0.1.0-preview.8"
  },
  "apply-body-checksum-middleware": {
    package: "@aws-sdk/apply-body-checksum-middleware",
    version: "^0.1.0-preview.6"
  },
  "bucket-endpoint-middleware": {
    package: "@aws-sdk/bucket-endpoint-middleware",
    version: "^0.1.0-preview.6"
  },
  "build-types": {
    package: "@aws-sdk/build-types",
    version: "^0.1.0-preview.6"
  },
  "chunked-blob-reader": {
    package: "@aws-sdk/chunked-blob-reader",
    version: "^0.1.0-preview.3"
  },
  "chunked-stream-reader-node": {
    package: "@aws-sdk/chunked-stream-reader-node",
    version: "^0.1.0-preview.4"
  },
  "client-documentation-generator": {
    package: "@aws-sdk/client-documentation-generator",
    version: "^0.1.0-preview.3"
  },
  "config-resolver": {
    package: "@aws-sdk/config-resolver",
    version: "^0.1.0-preview.6"
  },
  "core-handler": {
    package: "@aws-sdk/core-handler",
    version: "^0.1.0-preview.6"
  },
  "credential-provider-cognito-identity": {
    package: "@aws-sdk/credential-provider-cognito-identity",
    version: "^0.1.0-preview.8"
  },
  "credential-provider-env": {
    package: "@aws-sdk/credential-provider-env",
    version: "^0.1.0-preview.7"
  },
  "credential-provider-imds": {
    package: "@aws-sdk/credential-provider-imds",
    version: "^0.1.0-preview.6"
  },
  "credential-provider-ini": {
    package: "@aws-sdk/credential-provider-ini",
    version: "^0.1.0-preview.6"
  },
  "credential-provider-node": {
    package: "@aws-sdk/credential-provider-node",
    version: "^0.1.0-preview.8"
  },
  "credential-provider-process": {
    package: "@aws-sdk/credential-provider-process",
    version: "^0.1.0-preview.4"
  },
  "ec2-error-unmarshaller": {
    package: "@aws-sdk/ec2-error-unmarshaller",
    version: "^0.1.0-preview.7"
  },
  "eventstream-marshaller": {
    package: "@aws-sdk/eventstream-marshaller",
    version: "^0.1.0-preview.8"
  },
  "fetch-http-handler": {
    package: "@aws-sdk/fetch-http-handler",
    version: "^0.1.0-preview.6"
  },
  "hash-blob-browser": {
    package: "@aws-sdk/hash-blob-browser",
    version: "^0.1.0-preview.7"
  },
  "hash-node": {
    package: "@aws-sdk/hash-node",
    version: "^0.1.0-preview.7"
  },
  "hash-stream-node": {
    package: "@aws-sdk/hash-stream-node",
    version: "^0.1.0-preview.8"
  },
  "http-headers": {
    package: "@aws-sdk/http-headers",
    version: "^0.1.0-preview.6"
  },
  "http-serialization": {
    package: "@aws-sdk/http-serialization",
    version: "^0.1.0-preview.6"
  },
  "invalid-dependency": {
    package: "@aws-sdk/invalid-dependency",
    version: "^0.1.0-preview.1"
  },
  "is-array-buffer": {
    package: "@aws-sdk/is-array-buffer",
    version: "^0.1.0-preview.3"
  },
  "is-iterable": {
    package: "@aws-sdk/is-iterable",
    version: "^0.1.0-preview.3"
  },
  "is-node": {
    package: "@aws-sdk/is-node",
    version: "^0.1.0-preview.3"
  },
  "json-builder": {
    package: "@aws-sdk/json-builder",
    version: "^0.1.0-preview.6"
  },
  "json-error-unmarshaller": {
    package: "@aws-sdk/json-error-unmarshaller",
    version: "^0.1.0-preview.7"
  },
  "json-parser": {
    package: "@aws-sdk/json-parser",
    version: "^0.1.0-preview.6"
  },
  "karma-credential-loader": {
    package: "@aws-sdk/karma-credential-loader",
    version: "^0.1.0-preview.8"
  },
  "location-constraint-middleware": {
    package: "@aws-sdk/location-constraint-middleware",
    version: "^0.1.0-preview.6"
  },
  logger: {
    package: "@aws-sdk/logger",
    version: "^0.1.0-preview.6"
  },
  "md5-js": {
    package: "@aws-sdk/md5-js",
    version: "^0.1.0-preview.7"
  },
  "md5-universal": {
    package: "@aws-sdk/md5-universal",
    version: "^0.1.0-preview.7"
  },
  "middleware-content-length": {
    package: "@aws-sdk/middleware-content-length",
    version: "^0.1.0-preview.6"
  },
  "middleware-deserializer": {
    package: "@aws-sdk/middleware-deserializer",
    version: "^0.1.0-preview.1"
  },
  "middleware-ec2-copysnapshot": {
    package: "@aws-sdk/middleware-ec2-copysnapshot",
    version: "^0.1.0-preview.8"
  },
  "middleware-expect-continue": {
    package: "@aws-sdk/middleware-expect-continue",
    version: "^0.1.0-preview.6"
  },
  "middleware-header-default": {
    package: "@aws-sdk/middleware-header-default",
    version: "^0.1.0-preview.6"
  },
  "middleware-input-default": {
    package: "@aws-sdk/middleware-input-default",
    version: "^0.1.0-preview.6"
  },
  "middleware-operation-logging": {
    package: "@aws-sdk/middleware-operation-logging",
    version: "^0.1.0-preview.6"
  },
  "middleware-rds-presignedurl": {
    package: "@aws-sdk/middleware-rds-presignedurl",
    version: "^0.1.0-preview.8"
  },
  "middleware-sdk-api-gateway": {
    package: "@aws-sdk/middleware-sdk-api-gateway",
    version: "^0.1.0-preview.6"
  },
  "middleware-sdk-glacier": {
    package: "@aws-sdk/middleware-sdk-glacier",
    version: "^0.1.0-preview.8"
  },
  "middleware-sdk-s3": {
    package: "@aws-sdk/middleware-sdk-s3",
    version: "^0.1.0-preview.3"
  },
  "middleware-serializer": {
    package: "@aws-sdk/middleware-serializer",
    version: "^0.1.0-preview.6"
  },
  "middleware-stack": {
    package: "@aws-sdk/middleware-stack",
    version: "^0.1.0-preview.7"
  },
  "modeled-endpoint-middleware": {
    package: "@aws-sdk/modeled-endpoint-middleware",
    version: "^0.1.0-preview.7"
  },
  "node-http-handler": {
    package: "@aws-sdk/node-http-handler",
    version: "^0.1.0-preview.7"
  },
  "package-generator": {
    package: "@aws-sdk/package-generator",
    version: "^0.1.0-preview.10"
  },
  "property-provider": {
    package: "@aws-sdk/property-provider",
    version: "^0.1.0-preview.6"
  },
  "protocol-http": {
    package: "@aws-sdk/protocol-http",
    version: "^0.1.0-preview.1"
  },
  "protocol-query": {
    package: "@aws-sdk/protocol-query",
    version: "^0.1.0-preview.7"
  },
  "protocol-rest": {
    package: "@aws-sdk/protocol-rest",
    version: "^0.1.0-preview.8"
  },
  "protocol-rest-json": {
    package: "@aws-sdk/protocol-rest-json",
    version: "^0.1.0-preview.5"
  },
  "protocol-timestamp": {
    package: "@aws-sdk/protocol-timestamp",
    version: "^0.1.0-preview.6"
  },
  "query-builder": {
    package: "@aws-sdk/query-builder",
    version: "^0.1.0-preview.6"
  },
  "query-error-unmarshaller": {
    package: "@aws-sdk/query-error-unmarshaller",
    version: "^0.1.0-preview.7"
  },
  "query-request-presigner": {
    package: "@aws-sdk/query-request-presigner",
    version: "^0.1.0-preview.8"
  },
  "querystring-builder": {
    package: "@aws-sdk/querystring-builder",
    version: "^0.1.0-preview.6"
  },
  "querystring-parser": {
    package: "@aws-sdk/querystring-parser",
    version: "^0.1.0-preview.6"
  },
  "region-provider": {
    package: "@aws-sdk/region-provider",
    version: "^0.1.0-preview.6"
  },
  "remove-sensitive-logs": {
    package: "@aws-sdk/remove-sensitive-logs",
    version: "^0.1.0-preview.6"
  },
  "response-metadata-extractor": {
    package: "@aws-sdk/response-metadata-extractor",
    version: "^0.1.0-preview.7"
  },
  "middleware-retry": {
    package: "@aws-sdk/middleware-retry",
    version: "^0.1.0-preview.5"
  },
  "route53-id-normalizer-middleware": {
    package: "@aws-sdk/route53-id-normalizer-middleware",
    version: "^0.1.0-preview.6"
  },
  "s3-error-unmarshaller": {
    package: "@aws-sdk/s3-error-unmarshaller",
    version: "^0.1.0-preview.4"
  },
  "s3-request-presigner": {
    package: "@aws-sdk/s3-request-presigner",
    version: "^0.1.0-preview.5"
  },
  "service-error-classification": {
    package: "@aws-sdk/service-error-classification",
    version: "^0.1.0-preview.3"
  },
  "service-model": {
    package: "@aws-sdk/service-model",
    version: "^0.1.0-preview.8"
  },
  "service-types-generator": {
    package: "@aws-sdk/service-types-generator",
    version: "^0.1.0-preview.9"
  },
  "sha256-tree-hash": {
    package: "@aws-sdk/sha256-tree-hash",
    version: "^0.1.0-preview.8"
  },
  "shared-ini-file-loader": {
    package: "@aws-sdk/shared-ini-file-loader",
    version: "^0.1.0-preview.3"
  },
  "signature-v4": {
    package: "@aws-sdk/signature-v4",
    version: "^0.1.0-preview.8"
  },
  "signature-v4-browser": {
    package: "@aws-sdk/signature-v4-browser",
    version: "^0.1.0-preview.8"
  },
  "signature-v4-node": {
    package: "@aws-sdk/signature-v4-node",
    version: "^0.1.0-preview.8"
  },
  "signature-v4-universal": {
    package: "@aws-sdk/signature-v4-universal",
    version: "^0.1.0-preview.8"
  },
  "middleware-signing": {
    package: "@aws-sdk/middleware-signing",
    version: "^0.1.0-preview.7"
  },
  "ssec-middleware": {
    package: "@aws-sdk/ssec-middleware",
    version: "^0.1.0-preview.6"
  },
  "stream-collector-browser": {
    package: "@aws-sdk/stream-collector-browser",
    version: "^0.1.0-preview.6"
  },
  "stream-collector-node": {
    package: "@aws-sdk/stream-collector-node",
    version: "^0.1.0-preview.7"
  },
  "test-protocol-rest-json": {
    package: "@aws-sdk/test-protocol-rest-json",
    version: "^0.1.0-preview.7"
  },
  "test-protocol-rest-xml": {
    package: "@aws-sdk/test-protocol-rest-xml",
    version: "^0.1.0-preview.8"
  },
  types: {
    package: "@aws-sdk/types",
    version: "^0.1.0-preview.6"
  },
  "url-parser-browser": {
    package: "@aws-sdk/url-parser-browser",
    version: "^0.1.0-preview.6"
  },
  "url-parser-node": {
    package: "@aws-sdk/url-parser-node",
    version: "^0.1.0-preview.7"
  },
  "url-parser-universal": {
    package: "@aws-sdk/url-parser-universal",
    version: "^0.1.0-preview.7"
  },
  "util-base64-browser": {
    package: "@aws-sdk/util-base64-browser",
    version: "^0.1.0-preview.3"
  },
  "util-base64-node": {
    package: "@aws-sdk/util-base64-node",
    version: "^0.1.0-preview.4"
  },
  "util-base64-universal": {
    package: "@aws-sdk/util-base64-universal",
    version: "^0.1.0-preview.4"
  },
  "util-body-length-browser": {
    package: "@aws-sdk/util-body-length-browser",
    version: "^0.1.0-preview.3"
  },
  "util-body-length-node": {
    package: "@aws-sdk/util-body-length-node",
    version: "^0.1.0-preview.5"
  },
  "util-buffer-from": {
    package: "@aws-sdk/util-buffer-from",
    version: "^0.1.0-preview.3"
  },
  "util-create-request": {
    package: "@aws-sdk/util-create-request",
    version: "^0.1.0-preview.4"
  },
  "util-error-constructor": {
    package: "@aws-sdk/util-error-constructor",
    version: "^0.1.0-preview.6"
  },
  "util-format-url": {
    package: "@aws-sdk/util-format-url",
    version: "^0.1.0-preview.6"
  },
  "util-hex-encoding": {
    package: "@aws-sdk/util-hex-encoding",
    version: "^0.1.0-preview.3"
  },
  "util-locate-window": {
    package: "@aws-sdk/util-locate-window",
    version: "^0.1.0-preview.3"
  },
  "util-uri-escape": {
    package: "@aws-sdk/util-uri-escape",
    version: "^0.1.0-preview.3"
  },
  "util-user-agent-browser": {
    package: "@aws-sdk/util-user-agent-browser",
    version: "^0.1.0-preview.7"
  },
  "util-user-agent-node": {
    package: "@aws-sdk/util-user-agent-node",
    version: "^0.1.0-preview.8"
  },
  "util-utf8-browser": {
    package: "@aws-sdk/util-utf8-browser",
    version: "^0.1.0-preview.3"
  },
  "util-utf8-node": {
    package: "@aws-sdk/util-utf8-node",
    version: "^0.1.0-preview.4"
  },
  "util-utf8-universal": {
    package: "@aws-sdk/util-utf8-universal",
    version: "^0.1.0-preview.4"
  },
  "xml-body-builder": {
    package: "@aws-sdk/xml-body-builder",
    version: "^0.1.0-preview.6"
  },
  "xml-body-parser": {
    package: "@aws-sdk/xml-body-parser",
    version: "^0.1.0-preview.7"
  },
  "xml-builder": {
    package: "@aws-sdk/xml-builder",
    version: "^0.1.0-preview.3"
  },
  "client-rds-data": {
    package: "@aws-sdk/client-rds-data",
    version: "^0.1.0-preview.1"
  }
};
