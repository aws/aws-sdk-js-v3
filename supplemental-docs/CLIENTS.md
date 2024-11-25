# SDK Clients

This document will outline some of the most common configurable constructor parameters of each AWS SDK Client class.

As a refresher, the basic usage of an SDK Client is of this form, using Amazon S3 as an example:

```ts
// Example: sending a command (tree-shaking compatible).
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";

const s3Client = new S3Client({});

await s3Client.send(
  new GetObjectCommand({
    Bucket: "",
    Key: "",
  })
);
```

```ts
// Example: calling an equivalent method (no tree-shaking).
import { S3 } from "@aws-sdk/client-s3";

const s3 = new S3({});

await s3.getObject({
  Bucket: "",
  Key: "",
});
```

## Preface

Before we begin, make note that typically the only required
inputs to an SDK Client are credentials and a region. And, even these can be supplied
from environment variables or a configuration file such that your code initialization
does not necessarily need to include them.

See https://docs.aws.amazon.com/sdkref/latest/guide/file-format.html.

```ts
// region and credentials may be supplied by the
// ~/.aws/config and ~/.aws/credentials files.
new S3Client({});
```

All constructor parameters described in this document shall be optional.

## Common Client Constructor Parameters

### Region `region`

Regions are a core AWS concept,
see https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html.

In this SDK, the region may be supplied as a string or an async function
returning a string.

```ts
// Example: setting the client region.
new S3Client({
  region: "us-west-2",
});
```

For region, the function option may rarely be needed,
but as with many SDK constructor parameters, an `async` function returning the
same type is also accepted.

```ts
// Example: setting the client region with a function.
new S3Client({
  region: async () => "us-west-2",
});
```

One important consideration: some credential providers use separate clients,
and will usually expose a field called `clientConfig`. It's best to pass
a consistent region to both your `Client` and the credential provider.

For a list of credential providers, see https://www.npmjs.com/package/@aws-sdk/credential-providers.

```ts
// Example: setting inner credential client configuration region.
import { fromCognitoIdentity } from "@aws-sdk/credential-providers";

new S3Client({
  // region for S3.
  region: "us-west-2",

  credentials: fromCognitoIdentity({
    clientConfig: {
      // region for the Cognito client (inner).
      region: "us-west-2",
    },
  }),
});
```

### Credentials `credentials`

AWS Credentials are needed by the SDK to perform requests against the correct
account. They are usually made of fields including an access key and secret key.

Our **credential providers** are functions that enable the retrieval of AWS credentials
from a list of sources. See https://www.npmjs.com/package/@aws-sdk/credential-providers for the complete list.

When you initialize a client without any particular provider specified,
the `Node.js` default credential provider chain is used (also described in the above link). For browsers, there is no default credential provider.

At the simplest level, you can provide a literal object containing your credentials, but
you would only do this in testing. **Avoid saving your actual credentials in any code that may be shared.**

```ts
// Example: providing literal credentials.
import { fromCognitoIdentity } from "@aws-sdk/credential-providers";

const client = new S3Client({
  credentials: {
    accessKeyId: "...",
    secretAccessKey: "...",
    sessionToken: "...",
  },
});
```

In addition, any `async` function can be given that resolves to the same type of object.
This is what the SDK's credential provider factory functions do.

```ts
// Example: providing function resolver for credentials.
import { fromCognitoIdentity } from "@aws-sdk/credential-providers";

const client = new S3Client({
  credentials: async () => {
    // get credentials from any source.
    const credentials = {
      /* ... */
    };
    return {
      accessKeyId: credentials.accessKeyId,
      secretAccessKey: "etc.",
      sessionToken: "etc.",
      // 1. You can set an expiration near which this function will be called again.
      // 2. You can use the expiration given by your upstream credentials provider, if it exists.
      // 3. Omitting an expiration will result in this function not being called more than once.
      expiration: new Date(),
    };
  },
});
```

### Custom Endpoint `endpoint`

Each SDK client, by default, resolves the target endpoint with rule-based system
described by the service model.

- Refer to https://smithy.io/2.0/additional-specs/rules-engine/specification.html

At runtime, many sources of data are read to resolve the final endpoint.

Sources include the region, FIPS/dual-stack options as mentioned further below,
the operation, and in some cases even request-specific parameters.

You may override all that logic by providing a custom endpoint to the Client
constructor. The simplest form is a URL string.

```ts
// Example: setting a custom endpoint.
new S3Client({
  endpoint: "http://localhost:8888",
});
```

Additional types include [Endpoint](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-smithy-types/Interface/Endpoint/) and [EndpointV2](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-smithy-types/Interface/EndpointV2/), or an
`async` function returning either.

```ts
// Example: setting a custom endpoint with a function that returns an Endpoint (type).
new S3Client({
  endpoint: async () => {
    return {
      hostname: "localhost",
      path: "/",
      protocol: "http",
      port: 8888,
    };
  },
});
```

For more information about these structural alternative endpoint types,
use your IDE's type hints or refer to the API documentation linked above.

#### Retrieving the endpoint without making a request

If you would like to know the endpoint of an SDK operation without making a request,
you can make ad hoc use of our internal endpoint resolver.

**This interface is not public/stable**. Do not use this in production, or be prepared
to verify it every time you upgrade the SDK version.

```ts
// Example: resolving an endpoint without a request.
import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getEndpointFromInstructions } from "@smithy/middleware-endpoint";

// Initialize your client with whatever parameters you would
// use. They may have an effect on the resolved endpoint,
// especially in case of the AWS region.
const client = new S3Client({
  region: "us-east-1",
});

// Minimally, 3 bits of information are needed
// to resolve the endpoint.

/**
 * @internal do not directly use in production.
 */
const endpoint = await getEndpointFromInstructions(
  { Key: "foo", Bucket: "bar" }, // 1. the command's input.
  GetObjectCommand, // 2. the Command class.
  client.config // 3. the client config.
);
```

### Request Handler `requestHandler`

The requestHandler is used in the final step of sending an SDK request and the first receiver of
the response before it is parsed. The default requestHandler differs between
`Node.js` runtime and browsers.

#### Node.js `requestHandler`

The Node.js default SDK requestHandler uses the `node:http` and `node:https` modules.
For wider support, this is the case even if Node.js `fetch` is implemented in your environment.

Commonly configured options include the number of maxSockets, and timeouts.

For maxSockets in Node.js, see also: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/node-configuring-maxsockets.html

```ts
// Example: setting maxSockets and timeouts.
import { NodeHttpHandler } from "@smithy/node-http-handler";
import https from "https";

new S3Client({
  requestHandler: new NodeHttpHandler({
    httpsAgent: new https.Agent({
      keepAlive: true,
      maxSockets: 200, // default is 50 per client.
    }),

    // time limit (ms) for receiving response.
    requestTimeout: 15_000,

    // time limit (ms) for establishing connection.
    connectionTimeout: 6_000,
  }),
});
```

A note on **socket exhaustion**: 

The SDK may emit the following warning when detecting socket exhaustion:

```
@smithy/node-http-handler:WARN - socket usage at capacity=${socketsInUse} and ${requestsEnqueued} additional requests are enqueued.
```

Socket exhaustion detection is not an exact determination. 
We only warn on this when there is a high count of `requestsEnqueued`, 
because running at socket capacity may be intentional and normal in your application.

If you encounter the above warning or an error that indicates
you have run out of sockets due to a high volume of requests flowing through
your SDK Client, there are two things to check:

1. Ensure that the number value of `maxSockets` is high enough for your
   throughput needs.
2. Because `keepAlive` is defaulted to `true`, if you acquire a streaming response,
   such as `S3::getObject`'s `Body` field. You must read the stream to completion
   in order for the socket to close naturally. You can also destroy the stream in Node.js with
   e.g. `(await s3.getObject(...)).Body.destroy()` if it is a Node.js Readable stream.
   Specifically in the case of S3, if you don't need the object body,
   consider whether the object metadata can be retrieved with another operation such as
   `HeadObject` or `GetObjectMetadata`.

```ts
// Example: reading a stream to allow socket closure.
import { S3 } from "@aws-sdk/client-s3";

const s3 = new S3({});

const getObjectResult = await s3.getObject({
  Bucket: "...",
  Key: "...",
});

const bodyStream = getObjectResult.Body;

// one-time transform. Reads the stream and allows socket to close.
const bodyAsString = await bodyStream.transformToString();

// throws an error on 2nd call, stream cannot be rewound.
const __error__ = await bodyStream.transformToString();
```

#### Browsers' `requestHandler`

The default browser requestHandler is `@aws-sdk/fetch-http-handler` and uses
the global `fetch` implementation. There is an alternate handler `@aws-sdk/xhr-http-handler`,
and some SDK clients use a WebSocket handler as well.

```ts
// Example: browser request options.
import { FetchHttpHandler } from "@smithy/fetch-http-handler";

new S3Client({
  requestHandler: new FetchHttpHandler({
    requestTimeout: 30_000,
  }),
});
```

XHR may be used as an alternative. It has only been tested with S3, and the known
use-case is when needing finer-grain event data for uploading files.

```ts
// Example: XHR event listener.
// XHR http handler is from @aws-sdk, while fetch-http-handler is from @smithy.
import { XhrHttpHandler } from "@aws-sdk/xhr-http-handler";

const xhrRequestHandler = new XhrHttpHandler({
  requestTimeout: 30_000,
});

xhrRequestHandler.on(XhrHttpHandler.EVENTS.UPLOAD_PROGRESS, (event) => {
  // ...
});

new S3Client({
  requestHandler: xhrRequestHandler,
});
```

#### New in [v3.521.0](https://github.com/aws/aws-sdk-js-v3/releases/tag/v3.521.0)

As of version [v3.521.0](https://github.com/aws/aws-sdk-js-v3/releases/tag/v3.521.0) of our clients, you can use a shortened syntax
to configure the requestHandler.

The following are equivalent in Node.js:

```ts
// Example: long form requestHandler configuration.
import https from "node:https";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { NodeHttpHandler } from "@smithy/node-http-handler";

const client = new DynamoDBClient({
  requestHandler: new NodeHttpHandler({
    requestTimeout: 3_000,
    httpsAgent: new https.Agent({
      maxSockets: 25,
    }),
  }),
});
```

```ts
// Example: short form requestHandler configuration.
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({
  requestHandler: {
    requestTimeout: 3_000,
    httpsAgent: { maxSockets: 25 },
  },
});
```

You can instead pass the constructor parameters directly. The default requestHandler for the platform and service will be used.
For Node.js, most services use `NodeHttpHandler`. For browsers, most services use `FetchHttpHandler`.

Kinesis, Lex Runtime v2, QBusiness, TranscribeStreaming use `NodeHttp2Handler` by default instead in Node.js.
RekognitionStreaming and TranscribeStreaming use the `WebSocketFetchHandler` by default instead in browsers.

This list may change over time. Check the corresponding client's `src/runtimeConfig.ts` source file for up-to-date information.

### Retry Strategy `retryStrategy`, `retryMode`, `maxAttempts`

The SDK's default retry strategy is based on exponential backoff, and only retries
what we consider transient errors. The two basic configuration options are
the `maxAttempts` count and the computation of the retry delay.

See also: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-smithy-util-retry/

Please keep in mind, when specifying a `retryStrategy`, the values for
`retryMode` and `maxAttempts` will be ignored, since the `retryStrategy`
contains values for those two concepts.

```ts
// Example: setting maxAttempts
import { StandardRetryStrategy } from "@smithy/util-retry";

// the two following are equivalent:
new S3Client({
  maxAttempts: 5,
});
new S3Client({
  retryStrategy: new StandardRetryStrategy(5),
});
```

```ts
// Example: setting maxAttempts and backoff computation
import { ConfiguredRetryStrategy } from "@smithy/util-retry";

new S3Client({
  retryStrategy: new ConfiguredRetryStrategy(
    // attempts
    5,

    // backoff 1 additional second per attempt
    (attempt: number) => 500 + attempt * 1_000
  ),
});
```

A known shortcoming is that in the SDK's specification for retries, the underlying
error is not exposed to the `RetryStrategy`. We want to improve this in the future,
but for now, use a custom retry wrapper if you need to check precise details
of the SDK's error object.

```ts
// Example: building your own retry wrapper

import { S3, S3ServiceException } from "@aws-sdk/client-s3";

const s3 = new S3({});

const retryWrapper = async <I, O>(operation: (input: I) => Promise<O>): typeof operation => {
  return async (input: I) => {
    let attempts = 5;
    let lastError: S3ServiceException;
    while (--attempts > 0) {
      try {
        return await operation(input);
      } catch (e: unknown) {
        lastError = e as S3ServiceException;

        const httpStatusCode = lastError.$metadata.httpStatusCode;
        const errorCode = lastError.name;
        // you decide conditions to throw or retry
      }
    }
    return operation(input);
  };
};

const getObject = retryWrapper(async (params: Parameters<typeof s3.getObject>[0]) => s3.getObject(params));

await getObject({
  Bucket: "...",
  Key: "...",
});
```

As for `retryMode`, you should rarely need to use this option.
The only two options are `STANDARD`, which is default and does not need
to be specified, and `ADAPTIVE`, which is equivalent to using the `AdaptiveRetryStrategy`.

```ts
// Example: setting retryMode
import { AdaptiveRetryStrategy } from "@smithy/util-retry";

// the following two are equivalent:
new S3Client({
  retryMode: "ADAPTIVE",
});
new S3Client({
  retryStrategy: new AdaptiveRetryStrategy(async () => 5 // maxAttempts),
});
```

The `AdaptiveRetryStrategy` is similar to the `StandardRetryStrategy`, but
contains an additional `RateLimiter`. For details, inspect the source code at
https://github.com/smithy-lang/smithy-typescript/blob/main/packages/util-retry/src/AdaptiveRetryStrategy.ts.

### Logger `logger`

```ts
// Example: turning on SDK client logging, ignoring trace and debug output
//          by using console methods but overriding trace/debug to empty functions.
new S3Client({
  logger: {
    ...console,
    debug(...args) {},
    trace(...args) {},
  },
});
```

Note: our logging interface may contain multiple arguments per invocation,
which is common to the JavaScript console object. If your logger only accepts
one argument, concatenate the arguments before passing them through.

```ts
// Example: concatenating log parameters
new S3Client({
  logger: {
    ...console,
    info(...args) {
      return yourLogger.info(args.join(" "));
    },
  },
});
```

For request data and metadata logging, if the SDK's log outputs are not enough,
use middleware to log as much request information as you need.

```ts
// Example: logging full request data and metadata.
import { S3 } from "@aws-sdk/client-s3";

const client = new S3({ region: "us-west-2" });

client.middlewareStack.add(
  (next, context) => async (args) => {
    console.log("AWS SDK context", context.clientName, context.commandName);
    // console.log("AWS SDK request input", args.input);
    console.log("AWS SDK raw request", args.request);
    const result = await next(args);
    console.log("AWS SDK raw response", result.response);
    console.log("AWS SDK response metadata:", result.output.$metadata);
    // console.log("AWS SDK request output:", result.output);
    return result;
  },
  {
    name: "MyMiddleware",
    step: "build",
    override: true,
  }
);

await client.listBuckets({});
```

### Middleware Caching `cacheMiddleware`.

> Available only in [v3.649.0](https://github.com/aws/aws-sdk-js-v3/releases/tag/v3.649.0) and later.

By default (false), the middleware function stack is resolved every request,
because the user may modify the middleware stack by adding middleware to the
`client` or `command` instances at any time.

By contrast, when `cacheMiddleware=true`, the creation of the middleware function stack
is cached on a per-client, per-command-class basis.

In the following example, the S3 HeadObject Command is called 10 times, but
its middleware function stack is only created once, instead of once per request.

```ts
// example: middleware caching
import { S3Client, HeadObjectCommand } from "@aws-sdk/client-s3";

const client = new S3Client({ cacheMiddleware: true });

for (let i = 0; i < 10; ++i) {
  await client.send(
    new HeadObjectCommand({
      Bucket: "...",
      Key: String(i),
    })
  );
}
```

This caches the combination of `S3Client+HeadObjectCommand`'s resolved
`middlewareStack` upon the first request. This has two key effects:

- request creation time is reduced by (up to) a few milliseconds per request
- modifying the middleware stack after requests have begun will have no effect.

**Only enable this feature if you need the marginal increaese to
request performance, and are aware of its side-effects.**

### Dual-stack `useDualstackEndpoint`

This is a simple `boolean` setting that is present in most SDK Clients.
It is used in endpoint resolution.

```ts
// Example: setting useDualstackEndpoint
new S3Client({
  useDualstackEndpoint: false,
});
```

Refer to:

- https://docs.aws.amazon.com/whitepapers/latest/ipv6-on-aws/scaling-the-dual-stack-network-design-in-aws.html
- https://docs.aws.amazon.com/vpc/latest/userguide/aws-ipv6-support.html

### Federal Information Processing Standard (FIPS) `useFipsEndpoint`

This is a simple `boolean` setting that is present in most SDK Clients.
It is used in endpoint resolution.

```ts
// Example: setting useDualstackEndpoint
new S3Client({
  useFipsEndpoint: false,
});
```

Refer to:

- https://aws.amazon.com/compliance/fips/

### User Agent Application ID `userAgentAppId`

Application ID or AppId is an optional application specific identifier that can be set. When set it will be appended to the User-Agent header of every request in the form of App/{AppId}. This variable is sourced from environment variable AWS_SDK_UA_APP_ID or the shared config profile attribute sdk_ua_app_id. See https://docs.aws.amazon.com/sdkref/latest/guide/settings-reference.html for more information on environment variables and shared config settings.

```ts
// Example: setting userAgentAppId
new S3Client({
  userAgentAppId: "testApp",
});
```

### (Smithy) Runtime Extensions `extensions`

TODO

## Other constructor parameters not listed here

There are also many `@internal` constructor parameters that are not described
in this document.

**You should not modify or use them**, but they are overridable for advanced use-cases.
`@internal` fields may be subject to change.

Some examples include dependency injection for default
implementations of components such as:

- base64 encode/decode
- sha1 / sha256 / md5 hashing functions
- stream decoder
- utf8 encode/decode
- default credential provider
- default endpoint resolver
- default signer implementations (sigv4, sigv4a)
- URL parser

Additional metadata and bookkeeping systems like:

- strings for default user agent, apiVersion, serviceId, runtime name
- system clock offset

## Service-specific constructor parameters

Some AWS services have customized behavior when used with the AWS SDK. These
are implemented using the same middleware stacks present on clients that is
available to users for adding custom behavior or logging, as well as
by expanding the Client constructors with additional options as needed.

See also https://aws.amazon.com/blogs/developer/middleware-stack-modular-aws-sdk-js/.

### S3

`followRegionRedirects`:
This feature was previously called the S3 Global Client. Setting this option to true enables failed requests to be retried with a corrected region when receiving a permanent redirect error with status 301. Note that this can result in additional latency owing to the retried request. This feature should only be used as a last resort if you do not know the region of your bucket(s) ahead of time.

```ts
// Example: setting followRegionRedirect
new S3Client({
  followRegionRedirects: true,
});
```

### SQS

#### Using Queue Names with SQS Client

When using the SQS client, set the `useQueueUrlAsEndpoint` configuration to `false` to allow for providing the `QueueUrl` parameter as a queue name rather than a full queue URL.

```js
import { SQSClient, SendMessageCommand } from "@aws-sdk/client-sqs";

const sqs = new SQSClient({
  region: "us-east-1",
  useQueueUrlAsEndpoint: false,
});

const QueueName = "foo"; // directly use the queue name
// const QueueUrl = "https://sqs.us-east-1.amazonaws.com/123456789012/foo"; // full URL for reference

try {
  await sqs.send(
    new SendMessageCommand({
      QueueUrl: QueueName,
      MessageBody: "Sample message",
    })
  );
  console.log("message sent successfully");
} catch (error) {
  console.log("SendMessage Failure", error);
}
```
