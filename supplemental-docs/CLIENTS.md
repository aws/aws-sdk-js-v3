# SDK Clients

This document will outline some of the most common configurable constructor parameters of each AWS SDK Client class.

As a refresher, the basic usage of an SDK Client is of this form, using Amazon S3 as an example:

```ts
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";

const s3Client = new S3Client({});

await s3Client.send(
  new GetObjectCommand({
    Bucket: "",
    Key: "",
  })
);
```

## Preface

Before we begin, make note that typically the only required
inputs to an SDK Client are credentials and a region. And, even these can be supplied
from environment variables or a configuration file such that your code initialization
does not necessarily need to include them.

See https://docs.aws.amazon.com/sdkref/latest/guide/file-format.html.

```ts
// region and credentials may be supplied by the ~/.aws/config file.
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
new S3Client({
  region: "us-west-2",
});
```

For region, the function option may rarely be needed,
but as with many SDK constructor parameters, an `async` function returning the
same type is also accepted.

```ts
new S3Client({
  region: async () => "us-west-2",
});
```

One important consideration: some credential providers use separate clients,
and will usually expose a field called `clientConfig`. It's best to pass
a consistent region to both your `Client` and the credential provider.

For a list of credential providers, see https://www.npmjs.com/package/@aws-sdk/credential-providers.

```ts
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
import { fromCognitoIdentity } from "@aws-sdk/credential-providers";

const client = new S3Client({
  credentials: async () => {
    // get credentials from any source.
    return {
      accessKeyId: "...",
      secretAccessKey: "...",
      sessionToken: "...",
    };
  },
});
```

### Custom Endpoint `endpoint`

Each SDK client, by default, resolves the target endpoint with rule-based system
whose base template for any given operation is included in the service model or schema.
At runtime any and all inputs are potentially read to resolve the final endpoint.

Inputs used to resolve the endpoint for an operation include the region, FIPS/dual-stack options as mentioned above, and in some cases even request-specific parameters.

You may override all that logic by providing a custom endpoint to the Client
constructor. The simplest form is a URL string.

```ts
new S3Client({
  endpoint: "http://localhost:8888",
});
```

Additional types include [Endpoint](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-smithy-types/Interface/Endpoint/) and [EndpointV2](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-smithy-types/Interface/EndpointV2/), or an
`async` function returning either.

```ts
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

### Request Handler `requestHandler`

TODO

### Retry Strategy `retryStrategy`, `retryMode`, `maxAttempts`

TODO

### Logger `logger`

TODO

### Signer `signer`

TODO

### Dual-stack `useDualstackEndpoint`

TODO

### Federal Information Processing Standard (FIPS) `useFipsEndpoint`

TODO

### (Smithy) Runtime Extensions `extensions`

TODO

## Other constructor parameters not listed here

There are also many `@internal` constructor parameters that are not described
in this document.

**You should not modify or use them**, but are overridable for advanced use-cases.
`@internal` fields may be subject to change.

Some examples you may encounter include dependency injection for default
implementations of components such as:

- base64 encode/decode
- sha1 / sha256 / md5 hashing functions
- stream decoder
- utf8 encode/decode
- default credential provider
- default endpoint resolver
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

TODO e.g. `followRegionRedirects`

### SQS

TODO e.g. `useQueueUrlAsEndpoint`
