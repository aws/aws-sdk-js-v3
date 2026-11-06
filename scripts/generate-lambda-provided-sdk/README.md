# AWS SDK for JavaScript v3 provided by Lambda Node.js runtimes

Builds the `node_modules` tree that the Lambda managed Node.js runtimes ship, so customer
functions can `require("@aws-sdk/client-s3")` without bundling the SDK. The output is a
zip of every publishable SDK package plus its runtime dependency closure, assembled from
the local workspace.

This directory holds four scripts:

| Script                     | Purpose                                                         |
| -------------------------- | --------------------------------------------------------------- |
| `index.mjs`                | assembles the payload and writes the zip and checksum           |
| `verify-payload.mjs`       | re-runs the verification gates against an already-built payload |
| `scan-payload.mjs`         | scans an already-built payload for known vulnerabilities        |
| `extract-shim-targets.mjs` | maintenance tool; rebuilds `shim-targets.json`                  |

## Prerequisites

- Dependencies installed with `yarn`.
- **The workspace must be built.** The assembler copies each package's published files, so
  a package without `dist-cjs` fails the main-entry gate. Run `yarn build:all`, or build
  just what is missing with `node ./scripts/turbo build -F=@aws-sdk/<package>`.
- `zip` and `sha256sum` on `PATH`.
- `trivy` on `PATH` for `scan-payload.mjs` only. See
  [installation](https://trivy.dev/latest/getting-started/installation/).

## Assembling the payload

```
  --out         Output directory       [string] [default: ./lambda-provided-sdk]
  --zip-name    Name of the zip
                      [string] [default: aws-sdk-js-v3-lambda-nodejs-runtimes.zip]
  --tree-only   Assemble the tree, skip the zip and checksum          [boolean]
  --skip-legacy Skip the deprecated forwarders and declared deps      [boolean]
```

```console
# from project root
yarn generate:lambda-provided-sdk --out /tmp/payload
```

Write the output somewhere with room for it: the tree is ~130 MB before zipping, and the
assembler deletes `--out` before writing to it.

The run prints a numbered step for each stage. Steps `4b` and `5b` through `5d` are the
verification gates; any of them failing aborts the build before the zip is written.

```console
1. 514 publishable workspace packages
2. copied 70399 published files; stripped workspace: from 506 manifests
3. copied runtime closure: 101 external packages
4. 46 forwarders generated, 43 declared packages copied
4b. verified 47 deprecated packages against their recorded exports
5. layout applied (@aws-sdk/node_modules + root @smithy symlink)
5a. trimmed 1208 dist-es/dist-types dirs (281.9 MB reclaimed)
5b. tree is self-contained: 4343 dependency edges across 752 packages
5c. 172 subpaths across 27 packages resolve
5d. 736 main entries load from the tree (16 exempt)
    smoke test passed: 4 packages
6. metadata.json  sdkVersion 3.1157.0, commit 7b0fa8722
7. aws-sdk-js-v3-lambda-nodejs-runtimes.zip  32.9 MB
8. aws-sdk-js-v3-lambda-nodejs-runtimes.zip.sha256  54bfa91f...
```

`--tree-only` is the fast path while iterating. `--skip-legacy` produces an incomplete tree
and is for debugging only.

### Output

```
aws-sdk-js-v3-lambda-nodejs-runtimes.zip
aws-sdk-js-v3-lambda-nodejs-runtimes.zip.sha256   sha256sum format
metadata.json                       sdkVersion, gitCommit, builtAt, package counts
shim-targets.json                   the deprecated-package mapping, for auditing
```

Inside the zip, `@aws-sdk` packages sit at the root, everything else is nested under
`@aws-sdk/node_modules`, and `@smithy` at the root is a symlink into that. Extract with a
tool that preserves symlinks; standard `unzip` does.

## Verifying a built payload

Runs the same gates the assembler runs, against a payload that already exists. Step `4b`
is not included: it asserts the pre-layout tree, which a finished payload is not.

```
  --tree  Payload directory, or its node_modules           [string] [required]
```

```console
node ./scripts/generate-lambda-provided-sdk/verify-payload.mjs --tree /tmp/payload
```

Exits non-zero and names the offending packages if a gate fails.

## Scanning for vulnerabilities

A thin wrapper over `trivy rootfs`. Extra arguments pass through to trivy, and trivy's
exit code is returned unchanged.

```
  --tree   Payload directory, or its node_modules          [string] [required]
  --trivy  Path to the trivy binary     [string] [default: trivy, or $TRIVY_BIN]
```

```console
node ./scripts/generate-lambda-provided-sdk/scan-payload.mjs --tree /tmp/payload
node ./scripts/generate-lambda-provided-sdk/scan-payload.mjs --tree /tmp/payload --severity HIGH,CRITICAL
```

The `rootfs` subcommand matters: the payload ships no lockfile, so `trivy fs` finds no
language files and exits 0, making a clean result and a scan of nothing look identical.

## Rebuilding `shim-targets.json`

Maintenance only. `shim-targets.json` maps each deprecated `@aws-sdk/*` package to the
`@smithy/*` package that replaced it, and records the exports each one must deliver. The
assembler generates a one-line re-export forwarder for every entry.

Those packages were deleted from this repo, so the commit that rewrote them to
`export * from "<target>"` is the only record of the mapping. Run this only when the
mapping changes.

```
  --snapshot  Path to the cumulative API snapshot JSON      [string] [required]
  --commit    Commit holding the re-export mapping   [string] [default: bb2232f76f4]
```

```console
node ./scripts/generate-lambda-provided-sdk/extract-shim-targets.mjs \
  --snapshot /path/to/api-snapshot.json
make format
```

The generator writes expanded JSON arrays, which the repo formatter collapses, so run
`make format` afterwards or the format check fails.

## Troubleshooting

**`N packages cannot be required by name`** — a package was copied without the `dist-cjs`
its `main` points at, almost always an unbuilt workspace package. Build the packages named
in the error and re-run.

**`the assembled tree is not self-contained`** — a dependency is missing from the tree. If
it is a registry package that nothing in this workspace imports, declare it in
`private/aws-lambda-provided-sdk-deps` and run `yarn install`.

**`deprecated packages are not usable as recorded`** — a forwarder does not deliver the
exports `shim-targets.json` records, usually after a version bump moved the target.
