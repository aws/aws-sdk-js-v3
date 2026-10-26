# Lambda layer e2e test

Publishes the assembled payload as a Lambda layer, invokes a function whose code carries
no `node_modules`, and asserts a `DynamoDBDocument` round trip completed inside it.

The assembler's gates (`scripts/generate-lambda-provided-sdk/verify-payload.mjs`) run
against the payload directory before it is zipped. This covers the rest: the zip round
trip, the root `@smithy` symlink surviving unzip, and resolution from a function
directory. A layer resolves from `/opt/nodejs/node_modules` rather than the runtime's own
path, so the prefix differs from production but the tree does not.

## Running it

Runs as part of the e2e suite, which assembles a payload first, so allow a few minutes:

```console
yarn test:e2e
```

| Variable | Purpose |
| --- | --- |
| `LAMBDA_NODEJS_RUNTIMES_PAYLOAD` | An assembled payload directory. Skips the build. |
| `LAMBDA_NODEJS_RUNTIMES_RUNTIME` | Runtime to test. Defaults to `nodejs26.x`. |
| `AWS_SMOKE_TEST_LAMBDA_EXECUTION_ROLE_ARN` | Overrides the execution role lookup. |

## Requirements

`zip` on `PATH`, and credentials for the account holding
`SdkReleaseV3IntegTestResourcesStack`. The function's execution role is read from that
stack, so deploy `tests/e2e/IntegTestResourcesStack.template.json` if it is missing.

The test creates a layer version, a function, and a table, each named
`js-sdk-lambda-layer-test-<uuid>`, and deletes all three in `afterAll`.
