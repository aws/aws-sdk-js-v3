# Using the AWS SDK for JavaScript (v3) on AWS Lambda Node.js runtimes

## AWS Lambda provided AWS SDK

Several AWS Lambda runtimes, including those for Node.js, include the AWS SDK at various versions.

The SDK is provided as a convenience for development. For greater control of the SDK version and its runtime characteristics such as
JavaScript bundling, create an AWS Lambda layer containing your AWS SDK dependencies or
upload your selection of the AWS SDK as part of your function code.

To check the version of the SDK that is installed, you can log the package.json metadata of a package that you are using.

```js
// Example: discovering the installed AWS SDK version.
const pkgJson = require("@aws-sdk/client-s3/package.json");

exports.handler = function (event) {
  console.log(pkgJson);
  return JSON.stringify(pkgJson);
};
```

## Creating an AWS Lambda layer

With layers, you can create a shared set of dependencies for your AWS Lambda functions that can be imported
as if they were included in the functions themselves. 

The benefits of doing this include finer control over the version of the AWS SDK you are using, and not
having to upload the AWS SDK as part of your individual functions' code.

This information was taken from https://docs.aws.amazon.com/lambda/latest/dg/nodejs-layers.html.

### Create the content for your Layer

In a clean folder, create a `package.json` with your required dependencies.

```json5
// package.json
{
  "dependencies": {
    "@aws-sdk/client-s3": "<=3.750.0",
    "@aws-sdk/client-dynamodb": "<=3.750.0",
    "@aws-sdk/lib-dynamodb": "<=3.750.0",
    "@aws-sdk/client-lambda": "<=3.750.0"
  }
}
```

In this example we've used the `<=` version range to ensure the AWS SDK dependencies use the same transitive dependency, 
i.e., core package versions. Run `npm install` or equivalent to create the `node_modules` folder, and then zip the contents
into the following structure:

```
layer_content.zip
└ nodejs
  └ node_modules
    └ @aws-sdk/etc.
```

### Deploying the AWS Lambda layer to your account

```js
// example: deploying the AWS Lambda layer.
import { Lambda } from "@aws-sdk/client-lambda";
import fs from "node:fs";

const lambda = new Lambda();

await lambda.publishLayerVersion({
  LayerName: "AWS-SDK-JavaScript-v3.750.0-layer",
  Description: "Contains AWS SDK dependencies to use in my AWS Lambda functions",
  Content: {
    // read the layer zip file as a buffer.
    ZipFile: fs.readFileSync("./path/to/layer_content.zip"),
  },
  // Confirm from SDK package.json engines field that version supports each runtime.
  // It usually does, if Lambda hasn't blocked function create for the runtime.
  CompatibleRuntimes: ["nodejs18.x", "nodejs20.x", "nodejs22.x"],
  CompatibleArchitectures: ["x86_64", "arm64"],
});
```

### Using the AWS Lambda layer in your functions

If you have a lot of layers, you may need to paginate the `listLayers` request or
find the ARN another way.

```js
// example: looking up the layer's ARN by using its name from earlier.
import { Lambda } from "@aws-sdk/client-lambda";

const lambda = new Lambda();

const listLayers = await lambda.listLayers({});
const layerArn = listLayers.Layers.find(
  (l) => l.LayerName === "AWS-SDK-JavaScript-v3.750.0-layer"
).LatestMatchingVersion.LayerVersionArn;
```

Adding the layer to an existing function or creating a new function with the layer:

```js
await lambda.updateFunctionConfiguration({
  FunctionName: "FUNCTION_NAME",
  Layers: [layerArn],
});

// or:

await lambda.createFunction({
  FunctionName: "FUNCTION_NAME",
  Role: "Role.Arn",
  Code: {
    ZipFile: Buffer.from("..."),
  },
  Runtime: Runtime.nodejs22x,
  Description: `my new function using a layer`,
  Timeout: 45,
  Layers: [layerArn],
  Handler: `./index.handler`,
});
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
