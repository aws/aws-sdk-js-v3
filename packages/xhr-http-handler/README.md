# @aws-sdk/xhr-http-handler

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/xhr-http-handler/latest.svg)](https://www.npmjs.com/package/@aws-sdk/xhr-http-handler)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/xhr-http-handler.svg)](https://www.npmjs.com/package/@aws-sdk/xhr-http-handler)

This `HttpHandler` is based on `XMLHttpRequest` and can be substituted if
requiring a specific use case not covered by `fetch`.

## Warning :warning:

The recommended `HttpHandler` for browser-like environments is `@smithy/fetch-http-handler`,
which is the default.
This alternative has only been tested against `S3` in browsers.

## Polyfills

The following global-scope implementations are accessed by this package:

- `XMLHttpRequest`
- `TextEncoder`
- `TransformStream`
- `Blob`

You will have to supply polyfills, for example for `TextEncoder` and `TransformStream`, for environments
that do not implement them natively.

### Use case: XMLHttpRequest upload progress events

Use the `Upload` class from the `@aws-sdk/lib-storage` package as normal, except supplying a different
`HttpHandler` when creating the `S3Client` or `S3` object(s).

See also: [lib-storage/README.md](https://github.com/aws/aws-sdk-js-v3/blob/main/lib/lib-storage/README.md).

```javascript
import { XhrHttpHandler } from "@aws-sdk/xhr-http-handler";
import { S3Client } from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";

const client = new S3Client({
  requestHandler: new XhrHttpHandler({}), // overrides default FetchHttpHandler in browsers.
});

const upload = new Upload({
  client,
  params: {
    /* ... */
  },
});

upload.on("httpUploadProgress", (progress) => {
  // Note, this event will be emitted much more frequently when using the XhrHttpHandler.
  // Your application should be ready to throttle the event listener if it is
  // computationally expensive.

  // The default FetchHttpHandler only emits this event upon the completion of each
  // part, a minimum of 5 MB. Using XHR will emit this event continuously, including
  // for files smaller than the chunk size, which use single-part upload.
  console.log(progress);

  console.log(
    progress.loaded, // Bytes uploaded so far.
    progress.total // Total bytes. Divide these two for progress percentage.
  );
});

const completeMultiPartUpload = await upload.done();
```

### Use case: XMLHttpRequest download progress and other events

`XhrHttpHandler` extends `EventEmitter`.

##### Download progress

```javascript
import { XhrHttpHandler } from "@aws-sdk/xhr-http-handler";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";

const handler = new XhrHttpHandler({});

handler.on(XhrHttpHandler.EVENTS.PROGRESS, (progress, request) => {
  if (progress.lengthComputable) {
    console.log(
      progress.loaded, // bytes
      progress.total // bytes
    );
    console.log(
      request // contains the request information to differentiate
      // requests from the same handler.
    );
  }
});

const client = new S3Client({
  requestHandler: handler,
});

await client.send(new GetObjectCommand(/*...*/));
```

##### Accessing the `XMLHttpRequest` object.

You can access the `XMLHttpRequest` object to inspect it or to
attach addiional event listeners.

```javascript
import { XhrHttpHandler } from "@aws-sdk/xhr-http-handler";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";

const handler = new XhrHttpHandler({});

handler.on(XhrHttpHandler.EVENTS.XHR_INSTANTIATED, (xhr) => {
  // a new XMLHttpRequest is created for each command sent.
  // this is immediately after instantiation.
});

handler.on(XhrHttpHandler.EVENTS.BEFORE_XHR_SEND, (xhr) => {
  // a new XMLHttpRequest is created for each command sent.
  // this is immediately before calling `xhr.send(body)`.
});

const client = new S3Client({
  requestHandler: handler,
});

await client.send(new GetObjectCommand(/*...*/));
```

You can check the source `.ts` file or published `.d.ts` file
for the full list of events, or inspect the `XhrHttpHandler.EVENTS`
object at runtime.
