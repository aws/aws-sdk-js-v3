# vendor/

Packages the assembler cannot obtain from anywhere else.

Everything else in the payload comes from the release workspace: the publishable
`@aws-sdk/*` packages are copied out of the repo, and their runtime dependency closure is
copied out of the root `node_modules` that `yarn install` produced. These are the
exception, for one of two reasons:

1. The package is the re-export target of a deprecated `@aws-sdk/*` package (see
   `shim-targets.json`) that nothing in the modern SDK depends on. Because the dependency
   walk never reaches it, it is absent from the assembled tree even when `yarn install`
   happened to fetch it. `@smithy/md5-js` is typical: the SDK moved to CRC32 and SHA-256
   checksums, but code written against `@aws-sdk/md5-js` still has to work.
2. `@aws-sdk/middleware-sdk-eventbridge` ships real code rather than a forwarder, so it
   cannot be generated.

## Selection is verified, not assumed

The list is derived by assembling the tree with `--skip-legacy` — workspace packages and
their closure only — and vendoring every re-export target missing from it. Presence in the
workspace's own `node_modules` is not the test: `yarn install` fetches far more than the
dependency walk reaches.

## This directory is static

These are frozen versions of packages that are themselves deprecated. Nothing refreshes
them, by design. Changing one is a deliberate edit with a reason.

Three are pinned below the version the workspace carries (`@smithy/is-array-buffer` 2.2.0, `@smithy/util-buffer-from` 2.2.0, `@smithy/util-utf8` 2.3.0),
because those are the versions the payload ships today and the recorded API snapshot was
captured against them.

## dist-cjs only

Lambda executes CommonJS, and P1 minimization deletes `dist-es` and `dist-types` from the
payload anyway. These keys were therefore removed from the vendored manifests where
Which directory holds that build varies — `@smithy` packages use `dist-cjs`, `@aws-crypto`
packages use `build/main` — so it is derived from each manifest's `main` rather than
assumed. Entry-point keys pointing outside the kept directory are removed, because they
would reference build output that is not here. `@aws-crypto` keeps `types`, whose
declarations sit inside `build/main` alongside the JavaScript. Manifests are otherwise as
published.

## Provenance

Copied out of a payload that the assembler built back when it obtained these packages
with a pinned `npm install --save-exact`, so these are the versions the payload has been
shipping. That install no longer exists; `shim-targets.json` is now the only declarative
record of which deprecated packages the payload carries.

| package | version | files | bytes |
|---|---|---|---|
| `@aws-crypto/crc32` | 5.2.0 | 9 | 23,001 |
| `@aws-crypto/util` | 5.2.0 | 18 | 18,953 |
| `@aws-sdk/middleware-sdk-eventbridge` | 3.193.0 | 5 | 15,559 |
| `@smithy/abort-controller` | 4.1.1 | 6 | 15,807 |
| `@smithy/config-resolver` | 4.4.6 | 4 | 22,371 |
| `@smithy/eventstream-codec` | 4.1.1 | 15 | 29,387 |
| `@smithy/eventstream-serde-browser` | 4.1.1 | 7 | 17,567 |
| `@smithy/eventstream-serde-config-resolver` | 4.2.1 | 5 | 15,208 |
| `@smithy/eventstream-serde-node` | 4.1.1 | 7 | 16,697 |
| `@smithy/eventstream-serde-universal` | 4.1.1 | 8 | 20,989 |
| `@smithy/hash-node` | 4.1.1 | 4 | 15,982 |
| `@smithy/hash-stream-node` | 4.1.1 | 7 | 17,175 |
| `@smithy/invalid-dependency` | 4.1.1 | 6 | 15,134 |
| `@smithy/is-array-buffer` | 2.2.0 | 4 | 14,834 |
| `@smithy/md5-js` | 4.1.1 | 5 | 22,465 |
| `@smithy/middleware-content-length` | 4.1.1 | 4 | 16,315 |
| `@smithy/middleware-endpoint` | 4.2.4 | 18 | 28,406 |
| `@smithy/middleware-retry` | 4.3.0 | 16 | 32,542 |
| `@smithy/middleware-serde` | 4.1.1 | 7 | 18,407 |
| `@smithy/middleware-stack` | 4.1.1 | 6 | 28,228 |
| `@smithy/node-config-provider` | 4.2.2 | 9 | 18,161 |
| `@smithy/property-provider` | 4.1.1 | 10 | 18,526 |
| `@smithy/protocol-http` | 5.2.1 | 13 | 21,353 |
| `@smithy/querystring-builder` | 4.1.1 | 4 | 15,429 |
| `@smithy/querystring-parser` | 4.1.1 | 4 | 15,332 |
| `@smithy/service-error-classification` | 4.1.2 | 5 | 18,096 |
| `@smithy/shared-ini-file-loader` | 4.2.0 | 20 | 28,331 |
| `@smithy/smithy-client` | 4.6.4 | 27 | 38,543 |
| `@smithy/url-parser` | 4.1.1 | 4 | 15,159 |
| `@smithy/util-base64` | 4.1.0 | 9 | 20,779 |
| `@smithy/util-body-length-node` | 4.1.0 | 5 | 15,699 |
| `@smithy/util-buffer-from` | 2.2.0 | 4 | 15,479 |
| `@smithy/util-config-provider` | 4.1.0 | 7 | 15,821 |
| `@smithy/util-defaults-mode-node` | 4.1.4 | 7 | 18,944 |
| `@smithy/util-endpoints` | 3.1.2 | 47 | 33,979 |
| `@smithy/util-hex-encoding` | 4.1.0 | 4 | 15,648 |
| `@smithy/util-middleware` | 4.1.1 | 6 | 15,500 |
| `@smithy/util-retry` | 4.1.2 | 13 | 29,323 |
| `@smithy/util-stream` | 4.3.2 | 22 | 43,221 |
| `@smithy/util-uri-escape` | 4.1.0 | 6 | 15,207 |
| `@smithy/util-utf8` | 2.3.0 | 9 | 15,925 |
| `@smithy/util-waiter` | 4.1.1 | 10 | 21,330 |
| `@smithy/uuid` | 1.0.0 | 8 | 16,054 |

**43 packages, 414 files, 0.85 MB.**
