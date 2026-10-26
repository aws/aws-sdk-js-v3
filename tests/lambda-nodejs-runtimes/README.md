# Lambda layer e2e test

Publishes the assembled payload as a Lambda layer, invokes a function whose code carries
no `node_modules`, and asserts a `DynamoDBDocument` round trip completed inside it.

The assembler's gates (`scripts/generate-lambda-provided-sdk/verify-payload.mjs`) run
against the payload directory before it is zipped. This covers the rest: the zip round
trip, the root `@smithy` symlink surviving unzip, and resolution from a function
directory. A layer resolves from `/opt/nodejs/node_modules` rather than the runtime's own
path, so the prefix differs from production but the tree does not.

## Running it

Opt in, since assembling the payload takes several minutes:

```console
LAMBDA_NODEJS_RUNTIMES_E2E=1 yarn test:e2e
```

| Variable | Purpose |
| --- | --- |
| `LAMBDA_NODEJS_RUNTIMES_E2E` | Required. Runs the suite. |
| `LAMBDA_NODEJS_RUNTIMES_PAYLOAD` | An assembled payload directory. Skips the build. |
| `LAMBDA_NODEJS_RUNTIMES_RUNTIME` | Runtime to test. Defaults to `nodejs26.x`. |
| `AWS_SMOKE_TEST_LAMBDA_EXECUTION_ROLE_ARN` | Required. From `SdkReleaseV3IntegTestResourcesStack`. |

## Requirements

`zip` on `PATH`, and credentials for the account holding
`SdkReleaseV3IntegTestResourcesStack`, which supplies the function execution role.

The test creates a layer version, a function, and a table, each named
`js-sdk-lambda-layer-test-<uuid>`, and deletes all three in `afterAll`.
