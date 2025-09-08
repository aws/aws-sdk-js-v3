# Effective Practices

This section contains general recommendations from the AWS SDK for JavaScript team.

The code examples are using imports from the AWS SDK S3 client.

```ts
import type { S3ClientConfig, S3ClientResolvedConfig } from "@aws-sdk/client-s3";
import {
  CreateBucketCommand,
  ListObjectsV2Command,
  PutObjectCommand,
  GetObjectCommand,
  ListDirectoryBucketsCommand,
  S3Client,
} from "@aws-sdk/client-s3";
```

## Table of Contents

<!-- TOC start (generated with https://github.com/derlin/bitdowntoc) -->

- [(1) Minimize creating new copies of AWS SDK Clients for multiple operation calls](#1-minimize-creating-new-copies-of-aws-sdk-clients-for-multiple-operation-calls)
- [(2) Avoid reading or mutating the AWS SDK client configuration object after instantiating the client](#2-avoid-reading-or-mutating-the-aws-sdk-client-configuration-object-after-instantiating-the-client)
  - [Incompatible write](#incompatible-write)
  - [Incompatible read](#incompatible-read)
  - [Recommended alternatives](#recommended-alternatives)
- [(3) Always read streaming responses to completion or discard them](#3-always-read-streaming-responses-to-completion-or-discard-them)
- [(4) Allow more time to establish connections when making requests cross-region](#4-allow-more-time-to-establish-connections-when-making-requests-cross-region)

<!-- TOC end -->

### (1) Minimize creating new copies of AWS SDK Clients for multiple operation calls

The following example creates a new client in every iteration of the loop.

```ts
// ⚠️
for (const item of items) {
  const client = new S3Client({
    region,
    credentials,
  });
  await client.send(new PutObjectCommand(item));
}
```

In cases where the operations being called are to the same client configuration, i.e. the same region
and with the same credentials, creating a new client is not necessary. It increases work for the calling program,
since the client may need to re-compute credentials, endpoints, and other components needed to make a request.

Our recommended way is to create one client per set of credentials and region, and reuse it for
multiple commands.

```ts
// ✅
const client = new S3Client({
  region,
  credentials,
});

await client.send(new CreateBucketCommand({ Bucket }));

for (const item of items) {
  await client.send(new PutObjectCommand(item));
}

const objects = await client.send(new ListObjectsV2Command({ Bucket }));
```

If you need to create a new client because of capacity issues with a single client,
see [parallel workloads in Node.js](./performance/parallel-workloads-node-js.md).

### (2) Avoid reading or mutating the AWS SDK client configuration object after instantiating the client

Although the TypeScript interface of AWS SDK Clients contain a `public readonly config` field,
we discourage making use of this field in any way, including reading and writing values.

For backwards compatibility, we cannot make the field `private` or recursively `readonly`, but we'll explain
below why the field should be ignored.

#### Incompatible write

```ts
// ⚠️
import { ListObjectsV2Command } from "@aws-sdk/client-s3";

const client = new S3Client({
  region,
  credentials,
});

// ⚠️ incompatible mutation, will cause an error to be thrown later when calling operations.
client.config.region = "us-west-2";

await client.send(new ListObjectsV2Command({ Bucket }));
// ⚠️ Uncaught TypeError: config.region is not a function
```

The `client.config` field is not a direct reference to the object that you pass into the S3Client constructor.
It undergoes a process we call config resolution, in which many input fields are wrapped in normalizing functions.

Whereas the constructor input has the type `S3ClientConfig`, the `client.config` object has the type
`S3ClientResolvedConfig`, which is substantially transformed.

For example, a `region` string of `"us-east-1"` becomes a function, or "provider", in the form of:

```ts
config.region = async () => "us-east-1";
```

Even more complex transforms are applied to config fields such as `credentials` and `signer`. Therefore, many
`config` values which would be valid as constructor inputs cannot be written to the `client.config` object.

#### Incompatible read

Another example is attempting to determine an AWS service endpoint by using a client configured with a region.

```ts
// ⚠️
const client = new S3Client({
  region,
  credentials,
});

// ⚠️ incompatible reading, will throw an error: Uncaught TypeError: client.config.endpoint is not a function
const endpoint = await client.config.endpoint();
```

This may seem initially reasonable, since each regional AWS service typically has a set of endpoints of the pattern
`{service}.{region}.amazonaws.com`. However, AWS services can configure endpoints that differ based on many factors,
including down to the distinct operation being called and its inputs. Therefore, the canonical endpoint cannot be
accurately given before the operation and operation inputs are known.

For example, the AWS SDK's S3 client uses the bucket name in the hostname, an operation level parameter, and the
DynamoDB client may try to use the account ID in the hostname, a value that is not known until credentials are resolved
during the first request. Endpoint variations are not limited to these examples.

#### Recommended alternatives

If you need to change regions, instantiate additional clients per region. They can share credentials to avoid duplicate
credential resolution calls.

```ts
// ✅
import { fromTemporaryCredentials } from "@aws-sdk/credential-providers";

const credentialProvider = fromTemporaryCredentials();

const s3 = {
  east: new S3Client({ region: "us-east-1", credentials: credentialProvider }),
  west: new S3Client({ region: "us-west-2", credentials: credentialProvider }),
};

const directoryEast = await s3.east.send(new ListDirectoryBucketsCommand());
const directoryWest = await s3.west.send(new ListDirectoryBucketsCommand());
```

If you want to know the resolved endpoint for an SDK operation, use the following helper function.
You must provide the same Command constructor and input parameters as you would call, since those values are involved in
determining the endpoint.

```ts
import { getEndpointFromInstructions } from "@smithy/middleware-endpoint";

// ✅
const operationParams = {
  Bucket,
  Key,
};
const config = {
  region: "us-west-2",
  useDualstackEndpoint: false,
  useFipsEndpoint: false,
};
const client = new S3Client(config);

const endpoint = await getEndpointFromInstructions(operationParams, GetObjectCommand, config, {
  // logger: console,
});

console.log(endpoint.url.toString());
```

### (3) Always read streaming responses to completion or discard them

Some operations, the most common of which
is [GetObjectCommand](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/GetObjectCommand/),
return a byte stream.

Although awaiting such a request will return an HTTP status code and response headers,

```ts
const getObjectResponse = await client.send(GetObjectCommand({ Bucket, Key }));

console.log(getObjectResponse.$metadata.httpStatusCode);
// ⚠️ byte stream is unhandled, leaving a socket in use.
```

Although the API call is performed and you have access to response, the connection will remain open until the byte stream, or payload, is read or discarded.
Not doing so will leave the connection open, and in Node.js this can lead to a condition we call socket exhaustion. In
the worst cases this can cause your application to slow, leak memory, and/or deadlock.

We cannot automatically handle this for you. Since handling of the byte stream is application-dependent, we cannot infer
your application's intent. In some cases there is an intentional delay in reading the byte stream, so we will not throw
an Error if the stream is not immediately read.

To handle the byte stream, use one of our built-in collection methods, pipe it somewhere such as a file or another S3
destination, or discard the stream.

```ts
// Caution: only do one of the following, because streams can only be read once:
if (case1) {
  // ✅ buffer the stream
  const bytes = await getObjectResponse.Body.transformToByteArray();
} else if (case2) {
  // ✅ pipe the stream elsewhere
  await s3Client.send(
    new PutObjectCommand({
      Bucket,
      Key,
      Body: getObjectResponse.Body,
    })
  );
} else {
  // ✅ discard the stream
  // because our stream type varies depending on your runtime platform,
  // .destroy() is used for Node.js Readable.
  // .cancel() is used for Web Streams' ReadableStream.
  await(getObjectResponse.destroy?.() ?? getObjectResponse.cancel?.());
}
```

### (4) Allow more time to establish connections when making requests cross-region

This is outside the AWS SDK interfaces but an important consideration when making cross-region requests in AWS when
using the Node.js runtime. For Node.js v20 and later, there is an
option for TCP connections called `autoSelectFamilyAttemptTimeout <number>`.

The [documentation](https://nodejs.org/dist/latest-v20.x/docs/api/net.html#netsetdefaultautoselectfamilyattempttimeoutvalue)
states:

> The amount of time in milliseconds to wait for a connection attempt to finish before trying the next address

The default value of 250ms may be too low for some cross-region pairs within AWS, like those that are on
opposite sides of the world, or simply in conditions of low network speed. This may manifest as an `AggregateError` with
code `ETIMEDOUT` in Node.js.

To increase this value within your application, use a `node` launch parameter such as `--network-family-autoselection-attempt-timeout=500` or
the `node:net` API:

```ts
import net from "node:net";

net.setDefaultAutoSelectFamilyAttemptTimeout(500);
```

The content of this item is based on the author's reading of this reported issue: https://github.com/nodejs/node/issues/54359.
