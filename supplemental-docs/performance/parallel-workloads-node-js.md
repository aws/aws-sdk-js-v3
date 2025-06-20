# Performance > Parallel workloads in Node.js

Other sections such as bundle sizing, dependency count, and dynamic imports
cover aspects of performance related to the initial startup of your application.

This section focuses on post-startup performance of request throughput. Specifically,
we cover performance configuration of the AWS SDK for JavaScript (v3)
in Node.js using HTTP/1.1 and the `node:https` module via the SDK's requestHandler
dependency, `@smithy/node-http-handler`.

## What is a parallel workload?

A parallel workload is any time you make more than one request
before the first request has completed.

In single-threaded JavaScript, this is accomplished via the asynchronicity of `Promise`s.

## Configuration options related to throughput

Here is an example containing SDK Client configuration options that have
an effect on request throughput.

```ts
// example: configuring an SDK client for throughput.
import { S3 } from "@aws-sdk/client-s3";
import { NodeHttpHandler } from "@smithy/node-http-handler";
import { Agent } from "node:https";

const s3 = new S3({
  /**
   * Default is false. Setting this to true caches
   * middleware resolution and prevents modifications
   * to the middlewareStack from taking effect.
   *
   * Use only if you are not adding custom middleware.
   */
  cacheMiddleware: true,
  requestHandler: new NodeHttpHandler({
    httpsAgent: new Agent({
      /**
       * Default is true. This should be left as true
       * generally speaking, unless you have very specific
       * use-case needing the alternative.
       */
      keepAlive: true,
      /**
       * See expanded note below about sockets.
       * You should use a number that is the size
       * of your parallel workload batch.
       */
      maxSockets: 50,
    }),
  }),
});

// shorthand syntax available since v3.521.0
const client = new S3({
  requestHandler: {
    requestTimeout: 3_000,
    httpsAgent: { maxSockets: 50 },
  },
});
```

## Client instances

In this SDK, much functionality is cached for performance reasons, but
the cache is usually associated with the client instance. In particular,
the following are cached on the client instance:

- credentials fetched by async function calls
  - if your client is configured to source credentials from a provider that includes
    a network request and/or file-system read, this work is done once per client until
    expiration of the credentials. If you instantiate a new client for every request,
    this will slow things down substantially.
- middleware function stack when `cacheMiddleware=true`
- `node:https` Agent and its socket pool

If you do need multiple instances of an SDK client, but don't want to
have separate credentials and socket pools, you can share
credentials and requestHandlers between clients.

```ts
// example: credential and socket pool sharing from primary client.
import { S3 } from "@aws-sdk/client-s3";

const s3_east = new S3({ region: "us-east-1" });

const { credentials, requestHandler } = s3_east.config;

const s3_west = new S3({
  region: "us-west-2",
  credentials,
  requestHandler,
});
```

```ts
// example: credential and socket pool sharing from user instantiated objects.
import { S3 } from "@aws-sdk/client-s3";
import { fromNodeProviderChain } from "@aws-sdk/credential-providers";
import { NodeHttpHandler } from "@smithy/node-http-handler";

const credentials = fromNodeProviderChain();
const requestHandler = new NodeHttpHandler({
  httpsAgent: {
    maxSockets: 100,
  },
});

const s3_east = new S3({ region: "us-east-1", credentials, requestHandler });
const s3_west = new S3({ region: "us-west-2", credentials, requestHandler });
```

## Node.js Sockets

The `node:https` Agent class manages sockets on your behalf. The most impactful configuration you can make for parallel workloads is to set
the value of `maxSockets`.

Configuring the `maxSockets` value for the SDK's requestHandler should
be based on the parallelism or parallel workload batch size of your application
and usage scenario.

- Configuring too few sockets leads to a slowdown as this is equivalent to
  setting a lower cap on the parallel workload batch size.
- Configuring too many sockets can _also_ slow down your application. This is
  because the application may open a new socket, which takes some CPU time, when
  an existing socket was about to become free for reuse.
  - configuring too many sockets can cause you to hit the file descriptor limit of the
    operating system. This can manifest as `Error: EMFILE, too many open files`
    in Node.js.

## Avoiding Streaming Deadlock

Because streaming responses stay open until you completely read or abandon the open stream connection, 
the socket limit which you configure and how you handle streams can lead to a deadlock scenario.

#### Example deadlock

In this example, the max socket count is 1. When the Promise concurrency tries to `await`
two simultaneous `getObject` requests, it fails because the streaming response of the first request
is **not** read to completion, while the second `getObject` request is blocked indefinitely. 

This can cause your application to time out or the Node.js process to exit with code 13.

```ts
// example: response stream deadlock
const s3 = new S3Client({
  requestHandler: {
    httpsAgent: {
      maxSockets: 1,
    },
  },
});

// opens connection in parallel,
// but this await is dangerously placed.
const responses = await Promise.all([
  s3.getObject({ Bucket, Key: "1" }),
  s3.getObject({ Bucket, Key: "2" }),
]);

// reads streaming body in parallel
await responses.map(get => get.Body.transformToByteArray());
```

#### Recommendation

This doesn't necessarily mean you need to de-parallelize your program.
You can continue to use a socket count lower than your maxmimum parallel load, as long
as the requests do not block each other.

In this example, reading of the body streams is done in a non-blocking way.

```ts
// example: parallel streaming without deadlock
const s3 = new S3Client({
  requestHandler: {
    httpsAgent: {
      maxSockets: 1,
    },
  },
});

const responses = ([
  s3.getObject({ Bucket, Key: "1" }),
  s3.getObject({ Bucket, Key: "2" }),
]);
const objects = responses.map(get => get.Body.transformToByteArray());

// `await` is placed after the stream-handling pipeline has been established.
// because of the socket limit of 1, the two streams will be handled
// sequentially via queueing.
await Promise.all(objects);
```

## Batch Workload Example Scenario

You have 10,000 files to upload to S3.

- Uploading one at a time is too slow.
- Uploading all at once risks crashing your application process, or
  being throttled by the server.

#### Recommendataion

Test your application to determine the right level of parallel request traffic.
After that, configure the `maxSockets` value to be equal to the batch size, or
a factor of it.

```ts
// example: workload of 10,000 files, batch size of 100.
import { S3 } from "@aws-sdk/client-s3";

const files = [
  /*... */
];
const BATCH_SIZE = 100;

const s3 = new S3({
  requestHandler: {
    httpsAgent: { maxSockets: 100 },
  },
});

const promises = [];
while (files.length) {
  promises.push(
    ...files.slice(0, BATCH_SIZE).map((file) => {
      return s3.putObject({
        Bucket: "...",
        Key: file.name,
        Body: file.contents,
      });
    })
  );
  await Promise.all(promises);
  promises.length = 0;
}
```

In this example we've adhered to the best practices mentioned in this section:

- use one client instance for repeated requests
- set a `maxSockets` value that is a factor of the batch size
