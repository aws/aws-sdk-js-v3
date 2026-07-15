# ts-compat

Verifies that one client per protocol compiles on every TypeScript version
listed in [`typescript-versions.json`](./typescript-versions.json).

The clients in this repository support a range of TypeScript versions (types are
downleveled for older releases). This test guards that support by type-checking a
small fixture that imports and uses one client per wire protocol against each
version.

## What it does

For every version in `typescript-versions.json`, the runner:

1. Installs that TypeScript version in isolation (under `.tmp/`).
2. Type-checks [`fixtures/index.ts`](./fixtures/index.ts) against it.

The clients' published `.d.ts` are parsed (so downlevel _syntax_ incompatibilities
surface), while `skipLibCheck` avoids failing on their internal Node references
(see [`tsconfig.json`](./tsconfig.json)). Work is parallelized across a pool of
worker threads sized to the number of available processors.

## Running

This suite runs as part of the `test-typescript` Make target:

```bash
make test-typescript
```

You can also run it directly:

```bash
cd tests/ts-compat && npm install && node ./run.mjs
```

Either way assumes the referenced clients are already built (their `dist-types`
are present). `run.mjs` errors with guidance if they are not. It runs in
isolation with its own dependency installs.

For versions below TypeScript 4.5, the clients resolve their types to the
downleveled `dist-types/ts3.4` declarations via each client's `typesVersions`
(`"<4.5"`) entry. Those declarations are produced by a separate build step
(`yarn build:types:downlevel` in the client), so they must exist too.

## Protocol coverage

| Protocol   | Client                            |
| ---------- | --------------------------------- |
| awsJson1_0 | `@aws-sdk/client-dynamodb`        |
| awsJson1_1 | `@aws-sdk/client-cloudwatch-logs` |
| awsQuery   | `@aws-sdk/client-sts`             |
| ec2Query   | `@aws-sdk/client-ec2`             |
| restJson1  | `@aws-sdk/client-lambda`          |
| restXml    | `@aws-sdk/client-s3`              |

No shipping client currently uses the smithy `rpcv2Cbor` protocol; add one to the
fixture once such a client is published.

## Updating the supported versions

Edit `typescript-versions.json`. Each entry is `{ version, tscArgs? }`:

- `version` — any spec npm accepts (a bare minor like `"5.4"` installs its latest patch).
- `tscArgs` — optional compiler flags for that version, passed on the command line
  to override `tsconfig.json` when an option changed. For example, `moduleResolution:
node` (node10) became a deprecation error in TS 6.0 and was removed in TS 7.0.
