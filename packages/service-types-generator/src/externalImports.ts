import { Import } from "@aws-sdk/build-types";

/**
 * @internal
 */
export const EXTERNAL_IMPORTS: { [key: string]: Import } = {
  crc32: {
    package: "@aws-crypto/crc32",
    version: "^0.1.0-preview.1"
  },
  "ie11-detection": {
    package: "@aws-crypto/ie11-detection",
    version: "^0.1.0-preview.1"
  },
  "random-source-browser": {
    package: "@aws-crypto/random-source-browser",
    version: "^0.1.0-preview.1"
  },
  "random-source-node": {
    package: "@aws-crypto/random-source-node",
    version: "^0.1.0-preview.1"
  },
  "random-source-universal": {
    package: "@aws-crypto/random-source-universal",
    version: "^0.1.0-preview.1"
  },
  "sha256-browser": {
    package: "@aws-crypto/sha256-browser",
    version: "^0.1.0-preview.1"
  },
  "sha256-js": {
    package: "@aws-crypto/sha256-js",
    version: "^0.1.0-preview.1"
  },
  "sha256-universal": {
    package: "@aws-crypto/sha256-universal",
    version: "^0.1.0-preview.1"
  },
  "supports-webCrypto": {
    package: "@aws-crypto/supports-webCrypto",
    version: "^0.1.0-preview.1"
  }
};
