<!-- generated file, do not edit directly -->

# @aws-sdk/aws-protocoltests-json-10-schema

## Description

AWS SDK for JavaScript JSONRPC10 Client for Node.js, Browser and React Native.

## Installing

To install this package, simply type add or install @aws-sdk/aws-protocoltests-json-10-schema
using your favorite package manager:

- `npm install @aws-sdk/aws-protocoltests-json-10-schema`
- `yarn add @aws-sdk/aws-protocoltests-json-10-schema`
- `pnpm add @aws-sdk/aws-protocoltests-json-10-schema`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `JSONRPC10Client` and
the commands you need, for example `JsonUnionsCommand`:

```js
// ES5 example
const { JSONRPC10Client, JsonUnionsCommand } = require("@aws-sdk/aws-protocoltests-json-10-schema");
```

```ts
// ES6+ example
import { JSONRPC10Client, JsonUnionsCommand } from "@aws-sdk/aws-protocoltests-json-10-schema";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new JSONRPC10Client({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new JsonUnionsCommand(params);
```

#### Async/await

We recommend using [await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
operator to wait for the promise returned by send operation as follows:

```js
// async/await.
try {
  const data = await client.send(command);
  // process data.
} catch (error) {
  // error handling.
} finally {
  // finally.
}
```

Async-await is clean, concise, intuitive, easy to debug and has better error handling
as compared to using Promise chains or callbacks.

#### Promises

You can also use [Promise chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#chaining)
to execute send operation.

```js
client.send(command).then(
  (data) => {
    // process data.
  },
  (error) => {
    // error handling.
  }
);
```

Promises can also be called using `.catch()` and `.finally()` as follows:

```js
client
  .send(command)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  })
  .finally(() => {
    // finally.
  });
```

#### Callbacks

We do not recommend using callbacks because of [callback hell](http://callbackhell.com/),
but they are supported by the send operation.

```js
// callbacks.
client.send(command, (err, data) => {
  // process err and data.
});
```

#### v2 compatible style

The client can also send requests using v2 compatible style.
However, it results in a bigger bundle size and may be dropped in next major version. More details in the blog post
on [modular packages in AWS SDK for JavaScript](https://aws.amazon.com/blogs/developer/modular-packages-in-aws-sdk-for-javascript/)

```ts
import * as AWS from "@aws-sdk/aws-protocoltests-json-10-schema";
const client = new AWS.JSONRPC10({ region: "REGION" });

// async/await.
try {
  const data = await client.jsonUnions(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .jsonUnions(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.jsonUnions(params, (err, data) => {
  // process err and data.
});
```

### Troubleshooting

When the service returns an exception, the error will include the exception information,
as well as response metadata (e.g. request id).

```js
try {
  const data = await client.send(command);
  // process data.
} catch (error) {
  const { requestId, cfId, extendedRequestId } = error.$metadata;
  console.log({ requestId, cfId, extendedRequestId });
  /**
   * The keys within exceptions are also parsed.
   * You can access them by specifying exception names:
   * if (error.name === 'SomeServiceException') {
   *     const value = error.specialKeyInException;
   * }
   */
}
```

## Getting Help

Please use these community resources for getting help.
We use the GitHub issues for tracking bugs and feature requests, but have limited bandwidth to address them.

- Visit [Developer Guide](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/welcome.html)
  or [API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/index.html).
- Check out the blog posts tagged with [`aws-sdk-js`](https://aws.amazon.com/blogs/developer/tag/aws-sdk-js/)
  on AWS Developer Blog.
- Ask a question on [StackOverflow](https://stackoverflow.com/questions/tagged/aws-sdk-js) and tag it with `aws-sdk-js`.
- Join the AWS JavaScript community on [gitter](https://gitter.im/aws/aws-sdk-js-v3).
- If it turns out that you may have found a bug, please [open an issue](https://github.com/aws/aws-sdk-js-v3/issues/new/choose).

To test your universal JavaScript code in Node.js, browser and react-native environments,
visit our [code samples repo](https://github.com/aws-samples/aws-sdk-js-tests).

## Contributing

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/aws-protocoltests-json-10-schema` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
DatetimeOffsets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/DatetimeOffsetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/DatetimeOffsetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/DatetimeOffsetsCommandOutput/)

</details>
<details>
<summary>
EmptyInputAndEmptyOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/EmptyInputAndEmptyOutputCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/EmptyInputAndEmptyOutputCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/EmptyInputAndEmptyOutputCommandOutput/)

</details>
<details>
<summary>
EndpointOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/EndpointOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/EndpointOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/EndpointOperationCommandOutput/)

</details>
<details>
<summary>
EndpointWithHostLabelOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/EndpointWithHostLabelOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/EndpointWithHostLabelOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/EndpointWithHostLabelOperationCommandOutput/)

</details>
<details>
<summary>
FractionalSeconds
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/FractionalSecondsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/FractionalSecondsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/FractionalSecondsCommandOutput/)

</details>
<details>
<summary>
GreetingWithErrors
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/GreetingWithErrorsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/GreetingWithErrorsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/GreetingWithErrorsCommandOutput/)

</details>
<details>
<summary>
HostWithPathOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/HostWithPathOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HostWithPathOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HostWithPathOperationCommandOutput/)

</details>
<details>
<summary>
IgnoresWrappingXmlName
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/IgnoresWrappingXmlNameCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/IgnoresWrappingXmlNameCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/IgnoresWrappingXmlNameCommandOutput/)

</details>
<details>
<summary>
NestedStructures
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/NestedStructuresCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/NestedStructuresCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/NestedStructuresCommandOutput/)

</details>
<details>
<summary>
NoInputAndOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/NoInputAndOutputCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/NoInputAndOutputCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/NoInputAndOutputCommandOutput/)

</details>
<details>
<summary>
PutWithContentEncoding
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/PutWithContentEncodingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/PutWithContentEncodingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/PutWithContentEncodingCommandOutput/)

</details>
<details>
<summary>
QueryIdempotencyTokenAutoFill
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/QueryIdempotencyTokenAutoFillCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/QueryIdempotencyTokenAutoFillCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/QueryIdempotencyTokenAutoFillCommandOutput/)

</details>
<details>
<summary>
QueryLists
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/QueryListsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/QueryListsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/QueryListsCommandOutput/)

</details>
<details>
<summary>
QueryTimestamps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/QueryTimestampsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/QueryTimestampsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/QueryTimestampsCommandOutput/)

</details>
<details>
<summary>
RecursiveXmlShapes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/RecursiveXmlShapesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/RecursiveXmlShapesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/RecursiveXmlShapesCommandOutput/)

</details>
<details>
<summary>
SimpleInputParams
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/SimpleInputParamsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/SimpleInputParamsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/SimpleInputParamsCommandOutput/)

</details>
<details>
<summary>
SimpleScalarXmlProperties
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/SimpleScalarXmlPropertiesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/SimpleScalarXmlPropertiesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/SimpleScalarXmlPropertiesCommandOutput/)

</details>
<details>
<summary>
XmlBlobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/XmlBlobsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/XmlBlobsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/XmlBlobsCommandOutput/)

</details>
<details>
<summary>
XmlEmptyBlobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/XmlEmptyBlobsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/XmlEmptyBlobsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/XmlEmptyBlobsCommandOutput/)

</details>
<details>
<summary>
XmlEmptyLists
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/XmlEmptyListsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/XmlEmptyListsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/XmlEmptyListsCommandOutput/)

</details>
<details>
<summary>
XmlEnums
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/XmlEnumsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/XmlEnumsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/XmlEnumsCommandOutput/)

</details>
<details>
<summary>
XmlIntEnums
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/XmlIntEnumsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/XmlIntEnumsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/XmlIntEnumsCommandOutput/)

</details>
<details>
<summary>
XmlLists
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/XmlListsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/XmlListsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/XmlListsCommandOutput/)

</details>
<details>
<summary>
XmlNamespaces
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/XmlNamespacesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/XmlNamespacesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/XmlNamespacesCommandOutput/)

</details>
<details>
<summary>
XmlTimestamps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/XmlTimestampsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/XmlTimestampsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/XmlTimestampsCommandOutput/)

</details>
<details>
<summary>
ContentTypeParameters
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/ContentTypeParametersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/ContentTypeParametersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/ContentTypeParametersCommandOutput/)

</details>
<details>
<summary>
DatetimeOffsets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/DatetimeOffsetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/DatetimeOffsetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/DatetimeOffsetsCommandOutput/)

</details>
<details>
<summary>
EmptyOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/EmptyOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/EmptyOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/EmptyOperationCommandOutput/)

</details>
<details>
<summary>
EndpointOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/EndpointOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/EndpointOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/EndpointOperationCommandOutput/)

</details>
<details>
<summary>
EndpointWithHostLabelOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/EndpointWithHostLabelOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/EndpointWithHostLabelOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/EndpointWithHostLabelOperationCommandOutput/)

</details>
<details>
<summary>
FractionalSeconds
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/FractionalSecondsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/FractionalSecondsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/FractionalSecondsCommandOutput/)

</details>
<details>
<summary>
GreetingWithErrors
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/GreetingWithErrorsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/GreetingWithErrorsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/GreetingWithErrorsCommandOutput/)

</details>
<details>
<summary>
HostWithPathOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/HostWithPathOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HostWithPathOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HostWithPathOperationCommandOutput/)

</details>
<details>
<summary>
JsonEnums
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/JsonEnumsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/JsonEnumsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/JsonEnumsCommandOutput/)

</details>
<details>
<summary>
JsonIntEnums
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/JsonIntEnumsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/JsonIntEnumsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/JsonIntEnumsCommandOutput/)

</details>
<details>
<summary>
JsonUnions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/JsonUnionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/JsonUnionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/JsonUnionsCommandOutput/)

</details>
<details>
<summary>
KitchenSinkOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/KitchenSinkOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/KitchenSinkOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/KitchenSinkOperationCommandOutput/)

</details>
<details>
<summary>
NullOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/NullOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/NullOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/NullOperationCommandOutput/)

</details>
<details>
<summary>
OperationWithOptionalInputOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/OperationWithOptionalInputOutputCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/OperationWithOptionalInputOutputCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/OperationWithOptionalInputOutputCommandOutput/)

</details>
<details>
<summary>
PutAndGetInlineDocuments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/PutAndGetInlineDocumentsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/PutAndGetInlineDocumentsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/PutAndGetInlineDocumentsCommandOutput/)

</details>
<details>
<summary>
PutWithContentEncoding
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/PutWithContentEncodingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/PutWithContentEncodingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/PutWithContentEncodingCommandOutput/)

</details>
<details>
<summary>
SimpleScalarProperties
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/SimpleScalarPropertiesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/SimpleScalarPropertiesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/SimpleScalarPropertiesCommandOutput/)

</details>
<details>
<summary>
SparseNullsOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/SparseNullsOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/SparseNullsOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/SparseNullsOperationCommandOutput/)

</details>
<details>
<summary>
ContentTypeParameters
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/ContentTypeParametersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/ContentTypeParametersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/ContentTypeParametersCommandOutput/)

</details>
<details>
<summary>
EmptyInputAndEmptyOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/EmptyInputAndEmptyOutputCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/EmptyInputAndEmptyOutputCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/EmptyInputAndEmptyOutputCommandOutput/)

</details>
<details>
<summary>
EndpointOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/EndpointOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/EndpointOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/EndpointOperationCommandOutput/)

</details>
<details>
<summary>
EndpointWithHostLabelOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/EndpointWithHostLabelOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/EndpointWithHostLabelOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/EndpointWithHostLabelOperationCommandOutput/)

</details>
<details>
<summary>
GreetingWithErrors
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/GreetingWithErrorsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/GreetingWithErrorsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/GreetingWithErrorsCommandOutput/)

</details>
<details>
<summary>
HostWithPathOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/HostWithPathOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HostWithPathOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HostWithPathOperationCommandOutput/)

</details>
<details>
<summary>
JsonUnions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/JsonUnionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/JsonUnionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/JsonUnionsCommandOutput/)

</details>
<details>
<summary>
NoInputAndNoOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/NoInputAndNoOutputCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/NoInputAndNoOutputCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/NoInputAndNoOutputCommandOutput/)

</details>
<details>
<summary>
NoInputAndOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/NoInputAndOutputCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/NoInputAndOutputCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/NoInputAndOutputCommandOutput/)

</details>
<details>
<summary>
OperationWithDefaults
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/OperationWithDefaultsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/OperationWithDefaultsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/OperationWithDefaultsCommandOutput/)

</details>
<details>
<summary>
OperationWithNestedStructure
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/OperationWithNestedStructureCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/OperationWithNestedStructureCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/OperationWithNestedStructureCommandOutput/)

</details>
<details>
<summary>
OperationWithRequiredMembers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/OperationWithRequiredMembersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/OperationWithRequiredMembersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/OperationWithRequiredMembersCommandOutput/)

</details>
<details>
<summary>
OperationWithRequiredMembersWithDefaults
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/OperationWithRequiredMembersWithDefaultsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/OperationWithRequiredMembersWithDefaultsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/OperationWithRequiredMembersWithDefaultsCommandOutput/)

</details>
<details>
<summary>
PutWithContentEncoding
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/PutWithContentEncodingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/PutWithContentEncodingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/PutWithContentEncodingCommandOutput/)

</details>
<details>
<summary>
QueryCompatibleOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/QueryCompatibleOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/QueryCompatibleOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/QueryCompatibleOperationCommandOutput/)

</details>
<details>
<summary>
QueryIncompatibleOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/QueryIncompatibleOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/QueryIncompatibleOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/QueryIncompatibleOperationCommandOutput/)

</details>
<details>
<summary>
SimpleScalarProperties
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/SimpleScalarPropertiesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/SimpleScalarPropertiesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/SimpleScalarPropertiesCommandOutput/)

</details>
<details>
<summary>
AcceptHeaderStarService
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/AcceptHeaderStarServiceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/AcceptHeaderStarServiceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/AcceptHeaderStarServiceCommandOutput/)

</details>
<details>
<summary>
DatetimeOffsets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/DatetimeOffsetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/DatetimeOffsetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/DatetimeOffsetsCommandOutput/)

</details>
<details>
<summary>
EmptyInputAndEmptyOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/EmptyInputAndEmptyOutputCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/EmptyInputAndEmptyOutputCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/EmptyInputAndEmptyOutputCommandOutput/)

</details>
<details>
<summary>
EndpointOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/EndpointOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/EndpointOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/EndpointOperationCommandOutput/)

</details>
<details>
<summary>
EndpointWithHostLabelOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/EndpointWithHostLabelOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/EndpointWithHostLabelOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/EndpointWithHostLabelOperationCommandOutput/)

</details>
<details>
<summary>
FlattenedXmlMap
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/FlattenedXmlMapCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/FlattenedXmlMapCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/FlattenedXmlMapCommandOutput/)

</details>
<details>
<summary>
FlattenedXmlMapWithXmlName
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/FlattenedXmlMapWithXmlNameCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/FlattenedXmlMapWithXmlNameCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/FlattenedXmlMapWithXmlNameCommandOutput/)

</details>
<details>
<summary>
FlattenedXmlMapWithXmlNamespace
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/FlattenedXmlMapWithXmlNamespaceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/FlattenedXmlMapWithXmlNamespaceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/FlattenedXmlMapWithXmlNamespaceCommandOutput/)

</details>
<details>
<summary>
FractionalSeconds
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/FractionalSecondsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/FractionalSecondsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/FractionalSecondsCommandOutput/)

</details>
<details>
<summary>
GreetingWithErrors
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/GreetingWithErrorsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/GreetingWithErrorsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/GreetingWithErrorsCommandOutput/)

</details>
<details>
<summary>
HostWithPathOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/HostWithPathOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HostWithPathOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HostWithPathOperationCommandOutput/)

</details>
<details>
<summary>
IgnoresWrappingXmlName
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/IgnoresWrappingXmlNameCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/IgnoresWrappingXmlNameCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/IgnoresWrappingXmlNameCommandOutput/)

</details>
<details>
<summary>
NestedStructures
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/NestedStructuresCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/NestedStructuresCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/NestedStructuresCommandOutput/)

</details>
<details>
<summary>
NoInputAndNoOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/NoInputAndNoOutputCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/NoInputAndNoOutputCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/NoInputAndNoOutputCommandOutput/)

</details>
<details>
<summary>
NoInputAndOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/NoInputAndOutputCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/NoInputAndOutputCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/NoInputAndOutputCommandOutput/)

</details>
<details>
<summary>
PutWithContentEncoding
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/PutWithContentEncodingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/PutWithContentEncodingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/PutWithContentEncodingCommandOutput/)

</details>
<details>
<summary>
QueryIdempotencyTokenAutoFill
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/QueryIdempotencyTokenAutoFillCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/QueryIdempotencyTokenAutoFillCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/QueryIdempotencyTokenAutoFillCommandOutput/)

</details>
<details>
<summary>
QueryLists
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/QueryListsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/QueryListsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/QueryListsCommandOutput/)

</details>
<details>
<summary>
QueryMaps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/QueryMapsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/QueryMapsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/QueryMapsCommandOutput/)

</details>
<details>
<summary>
QueryTimestamps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/QueryTimestampsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/QueryTimestampsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/QueryTimestampsCommandOutput/)

</details>
<details>
<summary>
RecursiveXmlShapes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/RecursiveXmlShapesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/RecursiveXmlShapesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/RecursiveXmlShapesCommandOutput/)

</details>
<details>
<summary>
SimpleInputParams
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/SimpleInputParamsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/SimpleInputParamsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/SimpleInputParamsCommandOutput/)

</details>
<details>
<summary>
SimpleScalarXmlProperties
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/SimpleScalarXmlPropertiesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/SimpleScalarXmlPropertiesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/SimpleScalarXmlPropertiesCommandOutput/)

</details>
<details>
<summary>
XmlBlobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/XmlBlobsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/XmlBlobsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/XmlBlobsCommandOutput/)

</details>
<details>
<summary>
XmlEmptyBlobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/XmlEmptyBlobsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/XmlEmptyBlobsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/XmlEmptyBlobsCommandOutput/)

</details>
<details>
<summary>
XmlEmptyLists
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/XmlEmptyListsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/XmlEmptyListsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/XmlEmptyListsCommandOutput/)

</details>
<details>
<summary>
XmlEmptyMaps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/XmlEmptyMapsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/XmlEmptyMapsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/XmlEmptyMapsCommandOutput/)

</details>
<details>
<summary>
XmlEnums
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/XmlEnumsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/XmlEnumsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/XmlEnumsCommandOutput/)

</details>
<details>
<summary>
XmlIntEnums
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/XmlIntEnumsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/XmlIntEnumsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/XmlIntEnumsCommandOutput/)

</details>
<details>
<summary>
XmlLists
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/XmlListsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/XmlListsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/XmlListsCommandOutput/)

</details>
<details>
<summary>
XmlMaps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/XmlMapsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/XmlMapsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/XmlMapsCommandOutput/)

</details>
<details>
<summary>
XmlMapsXmlName
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/XmlMapsXmlNameCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/XmlMapsXmlNameCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/XmlMapsXmlNameCommandOutput/)

</details>
<details>
<summary>
XmlNamespaces
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/XmlNamespacesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/XmlNamespacesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/XmlNamespacesCommandOutput/)

</details>
<details>
<summary>
XmlTimestamps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/XmlTimestampsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/XmlTimestampsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/XmlTimestampsCommandOutput/)

</details>
<details>
<summary>
AllQueryStringTypes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/AllQueryStringTypesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/AllQueryStringTypesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/AllQueryStringTypesCommandOutput/)

</details>
<details>
<summary>
ConstantAndVariableQueryString
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/ConstantAndVariableQueryStringCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/ConstantAndVariableQueryStringCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/ConstantAndVariableQueryStringCommandOutput/)

</details>
<details>
<summary>
ConstantQueryString
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/ConstantQueryStringCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/ConstantQueryStringCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/ConstantQueryStringCommandOutput/)

</details>
<details>
<summary>
ContentTypeParameters
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/ContentTypeParametersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/ContentTypeParametersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/ContentTypeParametersCommandOutput/)

</details>
<details>
<summary>
DatetimeOffsets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/DatetimeOffsetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/DatetimeOffsetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/DatetimeOffsetsCommandOutput/)

</details>
<details>
<summary>
DocumentType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/DocumentTypeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/DocumentTypeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/DocumentTypeCommandOutput/)

</details>
<details>
<summary>
DocumentTypeAsMapValue
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/DocumentTypeAsMapValueCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/DocumentTypeAsMapValueCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/DocumentTypeAsMapValueCommandOutput/)

</details>
<details>
<summary>
DocumentTypeAsPayload
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/DocumentTypeAsPayloadCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/DocumentTypeAsPayloadCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/DocumentTypeAsPayloadCommandOutput/)

</details>
<details>
<summary>
DuplexStream
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/DuplexStreamCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/DuplexStreamCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/DuplexStreamCommandOutput/)

</details>
<details>
<summary>
DuplexStreamWithDistinctStreams
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/DuplexStreamWithDistinctStreamsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/DuplexStreamWithDistinctStreamsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/DuplexStreamWithDistinctStreamsCommandOutput/)

</details>
<details>
<summary>
DuplexStreamWithInitialMessages
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/DuplexStreamWithInitialMessagesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/DuplexStreamWithInitialMessagesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/DuplexStreamWithInitialMessagesCommandOutput/)

</details>
<details>
<summary>
EmptyInputAndEmptyOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/EmptyInputAndEmptyOutputCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/EmptyInputAndEmptyOutputCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/EmptyInputAndEmptyOutputCommandOutput/)

</details>
<details>
<summary>
EndpointOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/EndpointOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/EndpointOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/EndpointOperationCommandOutput/)

</details>
<details>
<summary>
EndpointWithHostLabelOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/EndpointWithHostLabelOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/EndpointWithHostLabelOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/EndpointWithHostLabelOperationCommandOutput/)

</details>
<details>
<summary>
FractionalSeconds
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/FractionalSecondsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/FractionalSecondsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/FractionalSecondsCommandOutput/)

</details>
<details>
<summary>
GreetingWithErrors
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/GreetingWithErrorsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/GreetingWithErrorsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/GreetingWithErrorsCommandOutput/)

</details>
<details>
<summary>
HostWithPathOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/HostWithPathOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HostWithPathOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HostWithPathOperationCommandOutput/)

</details>
<details>
<summary>
HttpChecksumRequired
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/HttpChecksumRequiredCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HttpChecksumRequiredCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HttpChecksumRequiredCommandOutput/)

</details>
<details>
<summary>
HttpEmptyPrefixHeaders
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/HttpEmptyPrefixHeadersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HttpEmptyPrefixHeadersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HttpEmptyPrefixHeadersCommandOutput/)

</details>
<details>
<summary>
HttpEnumPayload
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/HttpEnumPayloadCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HttpEnumPayloadCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HttpEnumPayloadCommandOutput/)

</details>
<details>
<summary>
HttpPayloadTraits
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/HttpPayloadTraitsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HttpPayloadTraitsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HttpPayloadTraitsCommandOutput/)

</details>
<details>
<summary>
HttpPayloadTraitsWithMediaType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/HttpPayloadTraitsWithMediaTypeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HttpPayloadTraitsWithMediaTypeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HttpPayloadTraitsWithMediaTypeCommandOutput/)

</details>
<details>
<summary>
HttpPayloadWithStructure
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/HttpPayloadWithStructureCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HttpPayloadWithStructureCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HttpPayloadWithStructureCommandOutput/)

</details>
<details>
<summary>
HttpPayloadWithUnion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/HttpPayloadWithUnionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HttpPayloadWithUnionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HttpPayloadWithUnionCommandOutput/)

</details>
<details>
<summary>
HttpPrefixHeaders
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/HttpPrefixHeadersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HttpPrefixHeadersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HttpPrefixHeadersCommandOutput/)

</details>
<details>
<summary>
HttpPrefixHeadersInResponse
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/HttpPrefixHeadersInResponseCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HttpPrefixHeadersInResponseCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HttpPrefixHeadersInResponseCommandOutput/)

</details>
<details>
<summary>
HttpQueryParamsOnlyOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/HttpQueryParamsOnlyOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HttpQueryParamsOnlyOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HttpQueryParamsOnlyOperationCommandOutput/)

</details>
<details>
<summary>
HttpRequestWithFloatLabels
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/HttpRequestWithFloatLabelsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HttpRequestWithFloatLabelsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HttpRequestWithFloatLabelsCommandOutput/)

</details>
<details>
<summary>
HttpRequestWithGreedyLabelInPath
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/HttpRequestWithGreedyLabelInPathCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HttpRequestWithGreedyLabelInPathCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HttpRequestWithGreedyLabelInPathCommandOutput/)

</details>
<details>
<summary>
HttpRequestWithLabels
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/HttpRequestWithLabelsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HttpRequestWithLabelsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HttpRequestWithLabelsCommandOutput/)

</details>
<details>
<summary>
HttpRequestWithLabelsAndTimestampFormat
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/HttpRequestWithLabelsAndTimestampFormatCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HttpRequestWithLabelsAndTimestampFormatCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HttpRequestWithLabelsAndTimestampFormatCommandOutput/)

</details>
<details>
<summary>
HttpRequestWithRegexLiteral
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/HttpRequestWithRegexLiteralCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HttpRequestWithRegexLiteralCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HttpRequestWithRegexLiteralCommandOutput/)

</details>
<details>
<summary>
HttpResponseCode
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/HttpResponseCodeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HttpResponseCodeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HttpResponseCodeCommandOutput/)

</details>
<details>
<summary>
HttpStringPayload
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/HttpStringPayloadCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HttpStringPayloadCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HttpStringPayloadCommandOutput/)

</details>
<details>
<summary>
IgnoreQueryParamsInResponse
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/IgnoreQueryParamsInResponseCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/IgnoreQueryParamsInResponseCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/IgnoreQueryParamsInResponseCommandOutput/)

</details>
<details>
<summary>
InputAndOutputWithHeaders
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/InputAndOutputWithHeadersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/InputAndOutputWithHeadersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/InputAndOutputWithHeadersCommandOutput/)

</details>
<details>
<summary>
InputStream
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/InputStreamCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/InputStreamCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/InputStreamCommandOutput/)

</details>
<details>
<summary>
InputStreamWithInitialRequest
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/InputStreamWithInitialRequestCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/InputStreamWithInitialRequestCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/InputStreamWithInitialRequestCommandOutput/)

</details>
<details>
<summary>
JsonBlobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/JsonBlobsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/JsonBlobsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/JsonBlobsCommandOutput/)

</details>
<details>
<summary>
JsonEnums
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/JsonEnumsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/JsonEnumsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/JsonEnumsCommandOutput/)

</details>
<details>
<summary>
JsonIntEnums
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/JsonIntEnumsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/JsonIntEnumsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/JsonIntEnumsCommandOutput/)

</details>
<details>
<summary>
JsonLists
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/JsonListsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/JsonListsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/JsonListsCommandOutput/)

</details>
<details>
<summary>
JsonMaps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/JsonMapsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/JsonMapsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/JsonMapsCommandOutput/)

</details>
<details>
<summary>
JsonTimestamps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/JsonTimestampsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/JsonTimestampsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/JsonTimestampsCommandOutput/)

</details>
<details>
<summary>
JsonUnions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/JsonUnionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/JsonUnionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/JsonUnionsCommandOutput/)

</details>
<details>
<summary>
MalformedAcceptWithBody
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/MalformedAcceptWithBodyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedAcceptWithBodyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedAcceptWithBodyCommandOutput/)

</details>
<details>
<summary>
MalformedAcceptWithGenericString
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/MalformedAcceptWithGenericStringCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedAcceptWithGenericStringCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedAcceptWithGenericStringCommandOutput/)

</details>
<details>
<summary>
MalformedAcceptWithPayload
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/MalformedAcceptWithPayloadCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedAcceptWithPayloadCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedAcceptWithPayloadCommandOutput/)

</details>
<details>
<summary>
MalformedBlob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/MalformedBlobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedBlobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedBlobCommandOutput/)

</details>
<details>
<summary>
MalformedBoolean
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/MalformedBooleanCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedBooleanCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedBooleanCommandOutput/)

</details>
<details>
<summary>
MalformedByte
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/MalformedByteCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedByteCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedByteCommandOutput/)

</details>
<details>
<summary>
MalformedContentTypeWithBody
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/MalformedContentTypeWithBodyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedContentTypeWithBodyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedContentTypeWithBodyCommandOutput/)

</details>
<details>
<summary>
MalformedContentTypeWithGenericString
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/MalformedContentTypeWithGenericStringCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedContentTypeWithGenericStringCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedContentTypeWithGenericStringCommandOutput/)

</details>
<details>
<summary>
MalformedContentTypeWithoutBody
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/MalformedContentTypeWithoutBodyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedContentTypeWithoutBodyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedContentTypeWithoutBodyCommandOutput/)

</details>
<details>
<summary>
MalformedContentTypeWithoutBodyEmptyInput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/MalformedContentTypeWithoutBodyEmptyInputCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedContentTypeWithoutBodyEmptyInputCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedContentTypeWithoutBodyEmptyInputCommandOutput/)

</details>
<details>
<summary>
MalformedContentTypeWithPayload
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/MalformedContentTypeWithPayloadCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedContentTypeWithPayloadCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedContentTypeWithPayloadCommandOutput/)

</details>
<details>
<summary>
MalformedDouble
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/MalformedDoubleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedDoubleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedDoubleCommandOutput/)

</details>
<details>
<summary>
MalformedFloat
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/MalformedFloatCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedFloatCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedFloatCommandOutput/)

</details>
<details>
<summary>
MalformedInteger
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/MalformedIntegerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedIntegerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedIntegerCommandOutput/)

</details>
<details>
<summary>
MalformedList
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/MalformedListCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedListCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedListCommandOutput/)

</details>
<details>
<summary>
MalformedLong
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/MalformedLongCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedLongCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedLongCommandOutput/)

</details>
<details>
<summary>
MalformedMap
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/MalformedMapCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedMapCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedMapCommandOutput/)

</details>
<details>
<summary>
MalformedRequestBody
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/MalformedRequestBodyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedRequestBodyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedRequestBodyCommandOutput/)

</details>
<details>
<summary>
MalformedShort
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/MalformedShortCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedShortCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedShortCommandOutput/)

</details>
<details>
<summary>
MalformedString
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/MalformedStringCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedStringCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedStringCommandOutput/)

</details>
<details>
<summary>
MalformedTimestampBodyDateTime
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/MalformedTimestampBodyDateTimeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedTimestampBodyDateTimeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedTimestampBodyDateTimeCommandOutput/)

</details>
<details>
<summary>
MalformedTimestampBodyDefault
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/MalformedTimestampBodyDefaultCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedTimestampBodyDefaultCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedTimestampBodyDefaultCommandOutput/)

</details>
<details>
<summary>
MalformedTimestampBodyHttpDate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/MalformedTimestampBodyHttpDateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedTimestampBodyHttpDateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedTimestampBodyHttpDateCommandOutput/)

</details>
<details>
<summary>
MalformedTimestampHeaderDateTime
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/MalformedTimestampHeaderDateTimeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedTimestampHeaderDateTimeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedTimestampHeaderDateTimeCommandOutput/)

</details>
<details>
<summary>
MalformedTimestampHeaderDefault
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/MalformedTimestampHeaderDefaultCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedTimestampHeaderDefaultCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedTimestampHeaderDefaultCommandOutput/)

</details>
<details>
<summary>
MalformedTimestampHeaderEpoch
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/MalformedTimestampHeaderEpochCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedTimestampHeaderEpochCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedTimestampHeaderEpochCommandOutput/)

</details>
<details>
<summary>
MalformedTimestampPathDefault
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/MalformedTimestampPathDefaultCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedTimestampPathDefaultCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedTimestampPathDefaultCommandOutput/)

</details>
<details>
<summary>
MalformedTimestampPathEpoch
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/MalformedTimestampPathEpochCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedTimestampPathEpochCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedTimestampPathEpochCommandOutput/)

</details>
<details>
<summary>
MalformedTimestampPathHttpDate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/MalformedTimestampPathHttpDateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedTimestampPathHttpDateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedTimestampPathHttpDateCommandOutput/)

</details>
<details>
<summary>
MalformedTimestampQueryDefault
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/MalformedTimestampQueryDefaultCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedTimestampQueryDefaultCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedTimestampQueryDefaultCommandOutput/)

</details>
<details>
<summary>
MalformedTimestampQueryEpoch
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/MalformedTimestampQueryEpochCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedTimestampQueryEpochCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedTimestampQueryEpochCommandOutput/)

</details>
<details>
<summary>
MalformedTimestampQueryHttpDate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/MalformedTimestampQueryHttpDateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedTimestampQueryHttpDateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedTimestampQueryHttpDateCommandOutput/)

</details>
<details>
<summary>
MalformedUnion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/MalformedUnionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedUnionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedUnionCommandOutput/)

</details>
<details>
<summary>
MediaTypeHeader
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/MediaTypeHeaderCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MediaTypeHeaderCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MediaTypeHeaderCommandOutput/)

</details>
<details>
<summary>
NoInputAndNoOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/NoInputAndNoOutputCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/NoInputAndNoOutputCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/NoInputAndNoOutputCommandOutput/)

</details>
<details>
<summary>
NoInputAndOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/NoInputAndOutputCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/NoInputAndOutputCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/NoInputAndOutputCommandOutput/)

</details>
<details>
<summary>
NullAndEmptyHeadersClient
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/NullAndEmptyHeadersClientCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/NullAndEmptyHeadersClientCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/NullAndEmptyHeadersClientCommandOutput/)

</details>
<details>
<summary>
NullAndEmptyHeadersServer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/NullAndEmptyHeadersServerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/NullAndEmptyHeadersServerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/NullAndEmptyHeadersServerCommandOutput/)

</details>
<details>
<summary>
OmitsNullSerializesEmptyString
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/OmitsNullSerializesEmptyStringCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/OmitsNullSerializesEmptyStringCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/OmitsNullSerializesEmptyStringCommandOutput/)

</details>
<details>
<summary>
OmitsSerializingEmptyLists
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/OmitsSerializingEmptyListsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/OmitsSerializingEmptyListsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/OmitsSerializingEmptyListsCommandOutput/)

</details>
<details>
<summary>
OperationWithDefaults
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/OperationWithDefaultsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/OperationWithDefaultsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/OperationWithDefaultsCommandOutput/)

</details>
<details>
<summary>
OperationWithNestedStructure
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/OperationWithNestedStructureCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/OperationWithNestedStructureCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/OperationWithNestedStructureCommandOutput/)

</details>
<details>
<summary>
OutputStream
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/OutputStreamCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/OutputStreamCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/OutputStreamCommandOutput/)

</details>
<details>
<summary>
OutputStreamWithInitialResponse
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/OutputStreamWithInitialResponseCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/OutputStreamWithInitialResponseCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/OutputStreamWithInitialResponseCommandOutput/)

</details>
<details>
<summary>
PostPlayerAction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/PostPlayerActionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/PostPlayerActionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/PostPlayerActionCommandOutput/)

</details>
<details>
<summary>
PostUnionWithJsonName
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/PostUnionWithJsonNameCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/PostUnionWithJsonNameCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/PostUnionWithJsonNameCommandOutput/)

</details>
<details>
<summary>
PutWithContentEncoding
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/PutWithContentEncodingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/PutWithContentEncodingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/PutWithContentEncodingCommandOutput/)

</details>
<details>
<summary>
QueryIdempotencyTokenAutoFill
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/QueryIdempotencyTokenAutoFillCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/QueryIdempotencyTokenAutoFillCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/QueryIdempotencyTokenAutoFillCommandOutput/)

</details>
<details>
<summary>
QueryParamsAsStringListMap
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/QueryParamsAsStringListMapCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/QueryParamsAsStringListMapCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/QueryParamsAsStringListMapCommandOutput/)

</details>
<details>
<summary>
QueryPrecedence
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/QueryPrecedenceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/QueryPrecedenceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/QueryPrecedenceCommandOutput/)

</details>
<details>
<summary>
RecursiveShapes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/RecursiveShapesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/RecursiveShapesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/RecursiveShapesCommandOutput/)

</details>
<details>
<summary>
ResponseCodeHttpFallback
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/ResponseCodeHttpFallbackCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/ResponseCodeHttpFallbackCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/ResponseCodeHttpFallbackCommandOutput/)

</details>
<details>
<summary>
ResponseCodeRequired
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/ResponseCodeRequiredCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/ResponseCodeRequiredCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/ResponseCodeRequiredCommandOutput/)

</details>
<details>
<summary>
SimpleScalarProperties
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/SimpleScalarPropertiesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/SimpleScalarPropertiesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/SimpleScalarPropertiesCommandOutput/)

</details>
<details>
<summary>
SparseJsonLists
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/SparseJsonListsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/SparseJsonListsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/SparseJsonListsCommandOutput/)

</details>
<details>
<summary>
SparseJsonMaps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/SparseJsonMapsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/SparseJsonMapsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/SparseJsonMapsCommandOutput/)

</details>
<details>
<summary>
StreamingTraits
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/StreamingTraitsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/StreamingTraitsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/StreamingTraitsCommandOutput/)

</details>
<details>
<summary>
StreamingTraitsRequireLength
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/StreamingTraitsRequireLengthCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/StreamingTraitsRequireLengthCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/StreamingTraitsRequireLengthCommandOutput/)

</details>
<details>
<summary>
StreamingTraitsWithMediaType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/StreamingTraitsWithMediaTypeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/StreamingTraitsWithMediaTypeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/StreamingTraitsWithMediaTypeCommandOutput/)

</details>
<details>
<summary>
TestBodyStructure
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/TestBodyStructureCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/TestBodyStructureCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/TestBodyStructureCommandOutput/)

</details>
<details>
<summary>
TestGetNoInputNoPayload
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/TestGetNoInputNoPayloadCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/TestGetNoInputNoPayloadCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/TestGetNoInputNoPayloadCommandOutput/)

</details>
<details>
<summary>
TestGetNoPayload
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/TestGetNoPayloadCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/TestGetNoPayloadCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/TestGetNoPayloadCommandOutput/)

</details>
<details>
<summary>
TestPayloadBlob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/TestPayloadBlobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/TestPayloadBlobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/TestPayloadBlobCommandOutput/)

</details>
<details>
<summary>
TestPayloadStructure
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/TestPayloadStructureCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/TestPayloadStructureCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/TestPayloadStructureCommandOutput/)

</details>
<details>
<summary>
TestPostNoInputNoPayload
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/TestPostNoInputNoPayloadCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/TestPostNoInputNoPayloadCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/TestPostNoInputNoPayloadCommandOutput/)

</details>
<details>
<summary>
TestPostNoPayload
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/TestPostNoPayloadCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/TestPostNoPayloadCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/TestPostNoPayloadCommandOutput/)

</details>
<details>
<summary>
TimestampFormatHeaders
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/TimestampFormatHeadersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/TimestampFormatHeadersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/TimestampFormatHeadersCommandOutput/)

</details>
<details>
<summary>
UnitInputAndOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/UnitInputAndOutputCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/UnitInputAndOutputCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/UnitInputAndOutputCommandOutput/)

</details>
<details>
<summary>
MalformedEnum
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/MalformedEnumCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedEnumCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedEnumCommandOutput/)

</details>
<details>
<summary>
MalformedLength
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/MalformedLengthCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedLengthCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedLengthCommandOutput/)

</details>
<details>
<summary>
MalformedLengthOverride
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/MalformedLengthOverrideCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedLengthOverrideCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedLengthOverrideCommandOutput/)

</details>
<details>
<summary>
MalformedLengthQueryString
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/MalformedLengthQueryStringCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedLengthQueryStringCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedLengthQueryStringCommandOutput/)

</details>
<details>
<summary>
MalformedPattern
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/MalformedPatternCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedPatternCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedPatternCommandOutput/)

</details>
<details>
<summary>
MalformedPatternOverride
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/MalformedPatternOverrideCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedPatternOverrideCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedPatternOverrideCommandOutput/)

</details>
<details>
<summary>
MalformedRange
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/MalformedRangeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedRangeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedRangeCommandOutput/)

</details>
<details>
<summary>
MalformedRangeOverride
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/MalformedRangeOverrideCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedRangeOverrideCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedRangeOverrideCommandOutput/)

</details>
<details>
<summary>
MalformedRequired
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/MalformedRequiredCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedRequiredCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedRequiredCommandOutput/)

</details>
<details>
<summary>
MalformedUniqueItems
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/MalformedUniqueItemsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedUniqueItemsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/MalformedUniqueItemsCommandOutput/)

</details>
<details>
<summary>
RecursiveStructures
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/RecursiveStructuresCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/RecursiveStructuresCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/RecursiveStructuresCommandOutput/)

</details>
<details>
<summary>
SensitiveValidation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/SensitiveValidationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/SensitiveValidationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/SensitiveValidationCommandOutput/)

</details>
<details>
<summary>
AllQueryStringTypes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/AllQueryStringTypesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/AllQueryStringTypesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/AllQueryStringTypesCommandOutput/)

</details>
<details>
<summary>
BodyWithXmlName
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/BodyWithXmlNameCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/BodyWithXmlNameCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/BodyWithXmlNameCommandOutput/)

</details>
<details>
<summary>
ConstantAndVariableQueryString
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/ConstantAndVariableQueryStringCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/ConstantAndVariableQueryStringCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/ConstantAndVariableQueryStringCommandOutput/)

</details>
<details>
<summary>
ConstantQueryString
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/ConstantQueryStringCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/ConstantQueryStringCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/ConstantQueryStringCommandOutput/)

</details>
<details>
<summary>
ContentTypeParameters
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/ContentTypeParametersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/ContentTypeParametersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/ContentTypeParametersCommandOutput/)

</details>
<details>
<summary>
DatetimeOffsets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/DatetimeOffsetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/DatetimeOffsetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/DatetimeOffsetsCommandOutput/)

</details>
<details>
<summary>
EmptyInputAndEmptyOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/EmptyInputAndEmptyOutputCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/EmptyInputAndEmptyOutputCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/EmptyInputAndEmptyOutputCommandOutput/)

</details>
<details>
<summary>
EndpointOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/EndpointOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/EndpointOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/EndpointOperationCommandOutput/)

</details>
<details>
<summary>
EndpointWithHostLabelHeaderOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/EndpointWithHostLabelHeaderOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/EndpointWithHostLabelHeaderOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/EndpointWithHostLabelHeaderOperationCommandOutput/)

</details>
<details>
<summary>
EndpointWithHostLabelOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/EndpointWithHostLabelOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/EndpointWithHostLabelOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/EndpointWithHostLabelOperationCommandOutput/)

</details>
<details>
<summary>
FlattenedXmlMap
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/FlattenedXmlMapCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/FlattenedXmlMapCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/FlattenedXmlMapCommandOutput/)

</details>
<details>
<summary>
FlattenedXmlMapWithXmlName
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/FlattenedXmlMapWithXmlNameCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/FlattenedXmlMapWithXmlNameCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/FlattenedXmlMapWithXmlNameCommandOutput/)

</details>
<details>
<summary>
FlattenedXmlMapWithXmlNamespace
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/FlattenedXmlMapWithXmlNamespaceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/FlattenedXmlMapWithXmlNamespaceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/FlattenedXmlMapWithXmlNamespaceCommandOutput/)

</details>
<details>
<summary>
FractionalSeconds
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/FractionalSecondsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/FractionalSecondsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/FractionalSecondsCommandOutput/)

</details>
<details>
<summary>
GreetingWithErrors
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/GreetingWithErrorsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/GreetingWithErrorsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/GreetingWithErrorsCommandOutput/)

</details>
<details>
<summary>
HttpEmptyPrefixHeaders
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/HttpEmptyPrefixHeadersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HttpEmptyPrefixHeadersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HttpEmptyPrefixHeadersCommandOutput/)

</details>
<details>
<summary>
HttpEnumPayload
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/HttpEnumPayloadCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HttpEnumPayloadCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HttpEnumPayloadCommandOutput/)

</details>
<details>
<summary>
HttpPayloadTraits
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/HttpPayloadTraitsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HttpPayloadTraitsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HttpPayloadTraitsCommandOutput/)

</details>
<details>
<summary>
HttpPayloadTraitsWithMediaType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/HttpPayloadTraitsWithMediaTypeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HttpPayloadTraitsWithMediaTypeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HttpPayloadTraitsWithMediaTypeCommandOutput/)

</details>
<details>
<summary>
HttpPayloadWithMemberXmlName
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/HttpPayloadWithMemberXmlNameCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HttpPayloadWithMemberXmlNameCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HttpPayloadWithMemberXmlNameCommandOutput/)

</details>
<details>
<summary>
HttpPayloadWithStructure
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/HttpPayloadWithStructureCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HttpPayloadWithStructureCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HttpPayloadWithStructureCommandOutput/)

</details>
<details>
<summary>
HttpPayloadWithUnion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/HttpPayloadWithUnionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HttpPayloadWithUnionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HttpPayloadWithUnionCommandOutput/)

</details>
<details>
<summary>
HttpPayloadWithXmlName
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/HttpPayloadWithXmlNameCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HttpPayloadWithXmlNameCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HttpPayloadWithXmlNameCommandOutput/)

</details>
<details>
<summary>
HttpPayloadWithXmlNamespace
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/HttpPayloadWithXmlNamespaceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HttpPayloadWithXmlNamespaceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HttpPayloadWithXmlNamespaceCommandOutput/)

</details>
<details>
<summary>
HttpPayloadWithXmlNamespaceAndPrefix
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/HttpPayloadWithXmlNamespaceAndPrefixCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HttpPayloadWithXmlNamespaceAndPrefixCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HttpPayloadWithXmlNamespaceAndPrefixCommandOutput/)

</details>
<details>
<summary>
HttpPrefixHeaders
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/HttpPrefixHeadersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HttpPrefixHeadersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HttpPrefixHeadersCommandOutput/)

</details>
<details>
<summary>
HttpRequestWithFloatLabels
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/HttpRequestWithFloatLabelsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HttpRequestWithFloatLabelsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HttpRequestWithFloatLabelsCommandOutput/)

</details>
<details>
<summary>
HttpRequestWithGreedyLabelInPath
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/HttpRequestWithGreedyLabelInPathCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HttpRequestWithGreedyLabelInPathCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HttpRequestWithGreedyLabelInPathCommandOutput/)

</details>
<details>
<summary>
HttpRequestWithLabels
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/HttpRequestWithLabelsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HttpRequestWithLabelsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HttpRequestWithLabelsCommandOutput/)

</details>
<details>
<summary>
HttpRequestWithLabelsAndTimestampFormat
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/HttpRequestWithLabelsAndTimestampFormatCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HttpRequestWithLabelsAndTimestampFormatCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HttpRequestWithLabelsAndTimestampFormatCommandOutput/)

</details>
<details>
<summary>
HttpResponseCode
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/HttpResponseCodeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HttpResponseCodeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HttpResponseCodeCommandOutput/)

</details>
<details>
<summary>
HttpStringPayload
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/HttpStringPayloadCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HttpStringPayloadCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/HttpStringPayloadCommandOutput/)

</details>
<details>
<summary>
IgnoreQueryParamsInResponse
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/IgnoreQueryParamsInResponseCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/IgnoreQueryParamsInResponseCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/IgnoreQueryParamsInResponseCommandOutput/)

</details>
<details>
<summary>
InputAndOutputWithHeaders
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/InputAndOutputWithHeadersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/InputAndOutputWithHeadersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/InputAndOutputWithHeadersCommandOutput/)

</details>
<details>
<summary>
NestedXmlMaps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/NestedXmlMapsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/NestedXmlMapsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/NestedXmlMapsCommandOutput/)

</details>
<details>
<summary>
NestedXmlMapWithXmlName
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/NestedXmlMapWithXmlNameCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/NestedXmlMapWithXmlNameCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/NestedXmlMapWithXmlNameCommandOutput/)

</details>
<details>
<summary>
NoInputAndNoOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/NoInputAndNoOutputCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/NoInputAndNoOutputCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/NoInputAndNoOutputCommandOutput/)

</details>
<details>
<summary>
NoInputAndOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/NoInputAndOutputCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/NoInputAndOutputCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/NoInputAndOutputCommandOutput/)

</details>
<details>
<summary>
NullAndEmptyHeadersClient
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/NullAndEmptyHeadersClientCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/NullAndEmptyHeadersClientCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/NullAndEmptyHeadersClientCommandOutput/)

</details>
<details>
<summary>
NullAndEmptyHeadersServer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/NullAndEmptyHeadersServerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/NullAndEmptyHeadersServerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/NullAndEmptyHeadersServerCommandOutput/)

</details>
<details>
<summary>
OmitsNullSerializesEmptyString
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/OmitsNullSerializesEmptyStringCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/OmitsNullSerializesEmptyStringCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/OmitsNullSerializesEmptyStringCommandOutput/)

</details>
<details>
<summary>
PutWithContentEncoding
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/PutWithContentEncodingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/PutWithContentEncodingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/PutWithContentEncodingCommandOutput/)

</details>
<details>
<summary>
QueryIdempotencyTokenAutoFill
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/QueryIdempotencyTokenAutoFillCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/QueryIdempotencyTokenAutoFillCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/QueryIdempotencyTokenAutoFillCommandOutput/)

</details>
<details>
<summary>
QueryParamsAsStringListMap
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/QueryParamsAsStringListMapCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/QueryParamsAsStringListMapCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/QueryParamsAsStringListMapCommandOutput/)

</details>
<details>
<summary>
QueryPrecedence
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/QueryPrecedenceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/QueryPrecedenceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/QueryPrecedenceCommandOutput/)

</details>
<details>
<summary>
RecursiveShapes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/RecursiveShapesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/RecursiveShapesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/RecursiveShapesCommandOutput/)

</details>
<details>
<summary>
SimpleScalarProperties
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/SimpleScalarPropertiesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/SimpleScalarPropertiesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/SimpleScalarPropertiesCommandOutput/)

</details>
<details>
<summary>
TimestampFormatHeaders
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/TimestampFormatHeadersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/TimestampFormatHeadersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/TimestampFormatHeadersCommandOutput/)

</details>
<details>
<summary>
XmlAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/XmlAttributesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/XmlAttributesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/XmlAttributesCommandOutput/)

</details>
<details>
<summary>
XmlAttributesOnPayload
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/XmlAttributesOnPayloadCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/XmlAttributesOnPayloadCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/XmlAttributesOnPayloadCommandOutput/)

</details>
<details>
<summary>
XmlBlobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/XmlBlobsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/XmlBlobsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/XmlBlobsCommandOutput/)

</details>
<details>
<summary>
XmlEmptyBlobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/XmlEmptyBlobsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/XmlEmptyBlobsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/XmlEmptyBlobsCommandOutput/)

</details>
<details>
<summary>
XmlEmptyLists
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/XmlEmptyListsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/XmlEmptyListsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/XmlEmptyListsCommandOutput/)

</details>
<details>
<summary>
XmlEmptyMaps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/XmlEmptyMapsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/XmlEmptyMapsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/XmlEmptyMapsCommandOutput/)

</details>
<details>
<summary>
XmlEmptyStrings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/XmlEmptyStringsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/XmlEmptyStringsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/XmlEmptyStringsCommandOutput/)

</details>
<details>
<summary>
XmlEnums
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/XmlEnumsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/XmlEnumsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/XmlEnumsCommandOutput/)

</details>
<details>
<summary>
XmlIntEnums
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/XmlIntEnumsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/XmlIntEnumsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/XmlIntEnumsCommandOutput/)

</details>
<details>
<summary>
XmlLists
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/XmlListsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/XmlListsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/XmlListsCommandOutput/)

</details>
<details>
<summary>
XmlMaps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/XmlMapsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/XmlMapsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/XmlMapsCommandOutput/)

</details>
<details>
<summary>
XmlMapsXmlName
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/XmlMapsXmlNameCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/XmlMapsXmlNameCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/XmlMapsXmlNameCommandOutput/)

</details>
<details>
<summary>
XmlMapWithXmlNamespace
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/XmlMapWithXmlNamespaceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/XmlMapWithXmlNamespaceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/XmlMapWithXmlNamespaceCommandOutput/)

</details>
<details>
<summary>
XmlNamespaces
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/XmlNamespacesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/XmlNamespacesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/XmlNamespacesCommandOutput/)

</details>
<details>
<summary>
XmlTimestamps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/XmlTimestampsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/XmlTimestampsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/XmlTimestampsCommandOutput/)

</details>
<details>
<summary>
XmlUnions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/XmlUnionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/XmlUnionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/XmlUnionsCommandOutput/)

</details>
<details>
<summary>
SimpleScalarProperties
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/SimpleScalarPropertiesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/SimpleScalarPropertiesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/SimpleScalarPropertiesCommandOutput/)

</details>
<details>
<summary>
NonQueryCompatibleOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/NonQueryCompatibleOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/NonQueryCompatibleOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/NonQueryCompatibleOperationCommandOutput/)

</details>
<details>
<summary>
QueryCompatibleOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/QueryCompatibleOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/QueryCompatibleOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/QueryCompatibleOperationCommandOutput/)

</details>
<details>
<summary>
GetRestApis
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/GetRestApisCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/GetRestApisCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/GetRestApisCommandOutput/)

</details>
<details>
<summary>
UploadArchive
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/UploadArchiveCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/UploadArchiveCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/UploadArchiveCommandOutput/)

</details>
<details>
<summary>
UploadMultipartPart
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/UploadMultipartPartCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/UploadMultipartPartCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/UploadMultipartPartCommandOutput/)

</details>
<details>
<summary>
Predict
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/PredictCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/PredictCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/PredictCommandOutput/)

</details>
<details>
<summary>
DeleteObjectTagging
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/DeleteObjectTaggingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/DeleteObjectTaggingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/DeleteObjectTaggingCommandOutput/)

</details>
<details>
<summary>
GetBucketLocation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/GetBucketLocationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/GetBucketLocationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/GetBucketLocationCommandOutput/)

</details>
<details>
<summary>
GetObject
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/GetObjectCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/GetObjectCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/GetObjectCommandOutput/)

</details>
<details>
<summary>
ListObjectsV2
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/ListObjectsV2Command/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/ListObjectsV2CommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/ListObjectsV2CommandOutput/)

</details>
<details>
<summary>
EmptyInputOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/EmptyInputOutputCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/EmptyInputOutputCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/EmptyInputOutputCommandOutput/)

</details>
<details>
<summary>
Float16
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/Float16Command/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/Float16CommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/Float16CommandOutput/)

</details>
<details>
<summary>
FractionalSeconds
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/FractionalSecondsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/FractionalSecondsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/FractionalSecondsCommandOutput/)

</details>
<details>
<summary>
GreetingWithErrors
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/GreetingWithErrorsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/GreetingWithErrorsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/GreetingWithErrorsCommandOutput/)

</details>
<details>
<summary>
NoInputOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/NoInputOutputCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/NoInputOutputCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/NoInputOutputCommandOutput/)

</details>
<details>
<summary>
OperationWithDefaults
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/OperationWithDefaultsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/OperationWithDefaultsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/OperationWithDefaultsCommandOutput/)

</details>
<details>
<summary>
OptionalInputOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/OptionalInputOutputCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/OptionalInputOutputCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/OptionalInputOutputCommandOutput/)

</details>
<details>
<summary>
RecursiveShapes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/RecursiveShapesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/RecursiveShapesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/RecursiveShapesCommandOutput/)

</details>
<details>
<summary>
RpcV2CborDenseMaps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/RpcV2CborDenseMapsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/RpcV2CborDenseMapsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/RpcV2CborDenseMapsCommandOutput/)

</details>
<details>
<summary>
RpcV2CborLists
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/RpcV2CborListsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/RpcV2CborListsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/RpcV2CborListsCommandOutput/)

</details>
<details>
<summary>
RpcV2CborSparseMaps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/RpcV2CborSparseMapsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/RpcV2CborSparseMapsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/RpcV2CborSparseMapsCommandOutput/)

</details>
<details>
<summary>
SimpleScalarProperties
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/SimpleScalarPropertiesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/SimpleScalarPropertiesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/SimpleScalarPropertiesCommandOutput/)

</details>
<details>
<summary>
SparseNullsOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/json-rpc-10/command/SparseNullsOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/SparseNullsOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-json-rpc-10/Interface/SparseNullsOperationCommandOutput/)

</details>
