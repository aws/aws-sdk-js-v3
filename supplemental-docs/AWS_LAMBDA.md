# Using the AWS SDK for JavaScript (v3) on AWS Lambda Node.js runtimes

## AWS Lambda provided AWS SDK

Several AWS Lambda runtimes, including those for Node.js, include the AWS SDK at various versions.

The SDK is provided as a convenience for development. For greater control of the SDK version and its runtime characteristics such as
JavaScript bundling, upload your selection of the AWS SDK as part of your function code.

To check the version of the SDK that is installed, you can log the package.json metadata of a package that you are using.

```js
// Example: discovering the installed AWS SDK version.
const pkgJson = require("@aws-sdk/client-s3/package.json");

exports.handler = function (event) {
  console.log(pkgJson);
  return JSON.stringify(pkgJson);
};
```

## Best practices for initializing AWS SDK Clients in AWS Lambda

Suppose that you have an `async` function called, for example `prepare`, that you need to initialize only once.
You do not want to execute it for every function invocation.

```js
// Example: one-time initialization in the handler code path.

import { DynamoDB } from "@aws-sdk/client-dynamodb";

async function prepare() {
  // do one-time setup, fetch credentials, secrets, initialize SDK clients, etc.
}

export async function handler(event) {
  // ...
}
```

You may be tempted to call this function outside the handler like so:

```js
// Example: call prepare outside of handler.

const ready = prepare();

export async function handler(event) {
  await ready;
  // ...
}
```

There is a potential complication with this style. This is a peculiarity of AWS Lambda's cold/warm states and provisioned concurrency.
If you make network requests in the `prepare()` function, they may be frozen pre-flight as part of early provisioning. In a certain
edge case, time-sensitive signed requests may become invalid due to the delay between provisioning and execution.

Therefore, we recommend that you perform one-time setup inside the handler. This does **not** mean that you need
to execute the preparation code redundantly. Here is how:

```js
// Example: call prepare inside handler, but only once.

let ready = false;

export async function handler(event) {
  if (!ready) {
    await prepare();
    ready = true;
  }
  // ...
}
```

A more practical example:

```ts
import { fromTemporaryCredentials } from "@aws-sdk/credential-providers";
import { DynamoDB } from "@aws-sdk/client-dynamodb";

async function prepare() {
  const credentials = fromTemporaryCredentials({})();
  const dynamodb = new DynamoDB({ credentials });
  return dynamodb;
}

let client: DynamoDB | null = null;

export async function handler(event) {
  if (!client) client = await prepare();

  return client.getItem({
    TableName: "my-table",
    Key: { id: { S: "1" } },
  });
}
```

## Parallel request workloads with the AWS SDK on AWS Lambda

See also the section about parallel workloads in Node.js, which is
applicable to AWS Lambda:
[Performance/Parallel Workloads in Node.js](./performance//parallel-workloads-node-js.md).
