<!-- generated file, do not edit directly -->

# @aws-sdk/aws-protocoltests-restxml

## Description

AWS SDK for JavaScript RestXmlProtocol Client for Node.js, Browser and React Native.

A REST XML service that sends XML requests and responses.

## Installing

To install this package, simply type add or install @aws-sdk/aws-protocoltests-restxml
using your favorite package manager:

- `npm install @aws-sdk/aws-protocoltests-restxml`
- `yarn add @aws-sdk/aws-protocoltests-restxml`
- `pnpm add @aws-sdk/aws-protocoltests-restxml`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `RestXmlProtocolClient` and
the commands you need, for example `XmlBlobsCommand`:

```js
// ES5 example
const { RestXmlProtocolClient, XmlBlobsCommand } = require("@aws-sdk/aws-protocoltests-restxml");
```

```ts
// ES6+ example
import { RestXmlProtocolClient, XmlBlobsCommand } from "@aws-sdk/aws-protocoltests-restxml";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new RestXmlProtocolClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new XmlBlobsCommand(params);
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
import * as AWS from "@aws-sdk/aws-protocoltests-restxml";
const client = new AWS.RestXmlProtocol({ region: "REGION" });

// async/await.
try {
  const data = await client.xmlBlobs(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .xmlBlobs(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.xmlBlobs(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/aws-protocoltests-restxml` package is updated.
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

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/DatetimeOffsetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/DatetimeOffsetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/DatetimeOffsetsCommandOutput/)

</details>
<details>
<summary>
EmptyInputAndEmptyOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/EmptyInputAndEmptyOutputCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/EmptyInputAndEmptyOutputCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/EmptyInputAndEmptyOutputCommandOutput/)

</details>
<details>
<summary>
EndpointOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/EndpointOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/EndpointOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/EndpointOperationCommandOutput/)

</details>
<details>
<summary>
EndpointWithHostLabelOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/EndpointWithHostLabelOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/EndpointWithHostLabelOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/EndpointWithHostLabelOperationCommandOutput/)

</details>
<details>
<summary>
FractionalSeconds
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/FractionalSecondsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/FractionalSecondsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/FractionalSecondsCommandOutput/)

</details>
<details>
<summary>
GreetingWithErrors
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/GreetingWithErrorsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/GreetingWithErrorsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/GreetingWithErrorsCommandOutput/)

</details>
<details>
<summary>
HostWithPathOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/HostWithPathOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HostWithPathOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HostWithPathOperationCommandOutput/)

</details>
<details>
<summary>
IgnoresWrappingXmlName
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/IgnoresWrappingXmlNameCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/IgnoresWrappingXmlNameCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/IgnoresWrappingXmlNameCommandOutput/)

</details>
<details>
<summary>
NestedStructures
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/NestedStructuresCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/NestedStructuresCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/NestedStructuresCommandOutput/)

</details>
<details>
<summary>
NoInputAndOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/NoInputAndOutputCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/NoInputAndOutputCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/NoInputAndOutputCommandOutput/)

</details>
<details>
<summary>
PutWithContentEncoding
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/PutWithContentEncodingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/PutWithContentEncodingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/PutWithContentEncodingCommandOutput/)

</details>
<details>
<summary>
QueryIdempotencyTokenAutoFill
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/QueryIdempotencyTokenAutoFillCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/QueryIdempotencyTokenAutoFillCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/QueryIdempotencyTokenAutoFillCommandOutput/)

</details>
<details>
<summary>
QueryLists
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/QueryListsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/QueryListsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/QueryListsCommandOutput/)

</details>
<details>
<summary>
QueryTimestamps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/QueryTimestampsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/QueryTimestampsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/QueryTimestampsCommandOutput/)

</details>
<details>
<summary>
RecursiveXmlShapes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/RecursiveXmlShapesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/RecursiveXmlShapesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/RecursiveXmlShapesCommandOutput/)

</details>
<details>
<summary>
SimpleInputParams
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/SimpleInputParamsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/SimpleInputParamsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/SimpleInputParamsCommandOutput/)

</details>
<details>
<summary>
SimpleScalarXmlProperties
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/SimpleScalarXmlPropertiesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/SimpleScalarXmlPropertiesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/SimpleScalarXmlPropertiesCommandOutput/)

</details>
<details>
<summary>
XmlBlobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/XmlBlobsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/XmlBlobsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/XmlBlobsCommandOutput/)

</details>
<details>
<summary>
XmlEmptyBlobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/XmlEmptyBlobsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/XmlEmptyBlobsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/XmlEmptyBlobsCommandOutput/)

</details>
<details>
<summary>
XmlEmptyLists
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/XmlEmptyListsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/XmlEmptyListsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/XmlEmptyListsCommandOutput/)

</details>
<details>
<summary>
XmlEnums
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/XmlEnumsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/XmlEnumsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/XmlEnumsCommandOutput/)

</details>
<details>
<summary>
XmlIntEnums
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/XmlIntEnumsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/XmlIntEnumsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/XmlIntEnumsCommandOutput/)

</details>
<details>
<summary>
XmlLists
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/XmlListsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/XmlListsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/XmlListsCommandOutput/)

</details>
<details>
<summary>
XmlNamespaces
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/XmlNamespacesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/XmlNamespacesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/XmlNamespacesCommandOutput/)

</details>
<details>
<summary>
XmlTimestamps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/XmlTimestampsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/XmlTimestampsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/XmlTimestampsCommandOutput/)

</details>
<details>
<summary>
ContentTypeParameters
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/ContentTypeParametersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/ContentTypeParametersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/ContentTypeParametersCommandOutput/)

</details>
<details>
<summary>
DatetimeOffsets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/DatetimeOffsetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/DatetimeOffsetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/DatetimeOffsetsCommandOutput/)

</details>
<details>
<summary>
EmptyOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/EmptyOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/EmptyOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/EmptyOperationCommandOutput/)

</details>
<details>
<summary>
EndpointOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/EndpointOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/EndpointOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/EndpointOperationCommandOutput/)

</details>
<details>
<summary>
EndpointWithHostLabelOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/EndpointWithHostLabelOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/EndpointWithHostLabelOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/EndpointWithHostLabelOperationCommandOutput/)

</details>
<details>
<summary>
FractionalSeconds
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/FractionalSecondsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/FractionalSecondsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/FractionalSecondsCommandOutput/)

</details>
<details>
<summary>
GreetingWithErrors
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/GreetingWithErrorsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/GreetingWithErrorsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/GreetingWithErrorsCommandOutput/)

</details>
<details>
<summary>
HostWithPathOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/HostWithPathOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HostWithPathOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HostWithPathOperationCommandOutput/)

</details>
<details>
<summary>
JsonEnums
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/JsonEnumsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/JsonEnumsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/JsonEnumsCommandOutput/)

</details>
<details>
<summary>
JsonIntEnums
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/JsonIntEnumsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/JsonIntEnumsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/JsonIntEnumsCommandOutput/)

</details>
<details>
<summary>
JsonUnions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/JsonUnionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/JsonUnionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/JsonUnionsCommandOutput/)

</details>
<details>
<summary>
KitchenSinkOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/KitchenSinkOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/KitchenSinkOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/KitchenSinkOperationCommandOutput/)

</details>
<details>
<summary>
NullOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/NullOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/NullOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/NullOperationCommandOutput/)

</details>
<details>
<summary>
OperationWithOptionalInputOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/OperationWithOptionalInputOutputCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/OperationWithOptionalInputOutputCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/OperationWithOptionalInputOutputCommandOutput/)

</details>
<details>
<summary>
PutAndGetInlineDocuments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/PutAndGetInlineDocumentsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/PutAndGetInlineDocumentsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/PutAndGetInlineDocumentsCommandOutput/)

</details>
<details>
<summary>
PutWithContentEncoding
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/PutWithContentEncodingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/PutWithContentEncodingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/PutWithContentEncodingCommandOutput/)

</details>
<details>
<summary>
SimpleScalarProperties
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/SimpleScalarPropertiesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/SimpleScalarPropertiesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/SimpleScalarPropertiesCommandOutput/)

</details>
<details>
<summary>
SparseNullsOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/SparseNullsOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/SparseNullsOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/SparseNullsOperationCommandOutput/)

</details>
<details>
<summary>
ContentTypeParameters
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/ContentTypeParametersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/ContentTypeParametersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/ContentTypeParametersCommandOutput/)

</details>
<details>
<summary>
EmptyInputAndEmptyOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/EmptyInputAndEmptyOutputCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/EmptyInputAndEmptyOutputCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/EmptyInputAndEmptyOutputCommandOutput/)

</details>
<details>
<summary>
EndpointOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/EndpointOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/EndpointOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/EndpointOperationCommandOutput/)

</details>
<details>
<summary>
EndpointWithHostLabelOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/EndpointWithHostLabelOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/EndpointWithHostLabelOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/EndpointWithHostLabelOperationCommandOutput/)

</details>
<details>
<summary>
GreetingWithErrors
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/GreetingWithErrorsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/GreetingWithErrorsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/GreetingWithErrorsCommandOutput/)

</details>
<details>
<summary>
HostWithPathOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/HostWithPathOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HostWithPathOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HostWithPathOperationCommandOutput/)

</details>
<details>
<summary>
JsonUnions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/JsonUnionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/JsonUnionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/JsonUnionsCommandOutput/)

</details>
<details>
<summary>
NoInputAndNoOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/NoInputAndNoOutputCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/NoInputAndNoOutputCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/NoInputAndNoOutputCommandOutput/)

</details>
<details>
<summary>
NoInputAndOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/NoInputAndOutputCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/NoInputAndOutputCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/NoInputAndOutputCommandOutput/)

</details>
<details>
<summary>
OperationWithDefaults
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/OperationWithDefaultsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/OperationWithDefaultsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/OperationWithDefaultsCommandOutput/)

</details>
<details>
<summary>
OperationWithNestedStructure
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/OperationWithNestedStructureCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/OperationWithNestedStructureCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/OperationWithNestedStructureCommandOutput/)

</details>
<details>
<summary>
OperationWithRequiredMembers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/OperationWithRequiredMembersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/OperationWithRequiredMembersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/OperationWithRequiredMembersCommandOutput/)

</details>
<details>
<summary>
OperationWithRequiredMembersWithDefaults
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/OperationWithRequiredMembersWithDefaultsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/OperationWithRequiredMembersWithDefaultsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/OperationWithRequiredMembersWithDefaultsCommandOutput/)

</details>
<details>
<summary>
PutWithContentEncoding
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/PutWithContentEncodingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/PutWithContentEncodingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/PutWithContentEncodingCommandOutput/)

</details>
<details>
<summary>
SimpleScalarProperties
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/SimpleScalarPropertiesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/SimpleScalarPropertiesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/SimpleScalarPropertiesCommandOutput/)

</details>
<details>
<summary>
AcceptHeaderStarService
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/AcceptHeaderStarServiceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/AcceptHeaderStarServiceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/AcceptHeaderStarServiceCommandOutput/)

</details>
<details>
<summary>
DatetimeOffsets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/DatetimeOffsetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/DatetimeOffsetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/DatetimeOffsetsCommandOutput/)

</details>
<details>
<summary>
EmptyInputAndEmptyOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/EmptyInputAndEmptyOutputCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/EmptyInputAndEmptyOutputCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/EmptyInputAndEmptyOutputCommandOutput/)

</details>
<details>
<summary>
EndpointOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/EndpointOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/EndpointOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/EndpointOperationCommandOutput/)

</details>
<details>
<summary>
EndpointWithHostLabelOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/EndpointWithHostLabelOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/EndpointWithHostLabelOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/EndpointWithHostLabelOperationCommandOutput/)

</details>
<details>
<summary>
FlattenedXmlMap
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/FlattenedXmlMapCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/FlattenedXmlMapCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/FlattenedXmlMapCommandOutput/)

</details>
<details>
<summary>
FlattenedXmlMapWithXmlName
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/FlattenedXmlMapWithXmlNameCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/FlattenedXmlMapWithXmlNameCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/FlattenedXmlMapWithXmlNameCommandOutput/)

</details>
<details>
<summary>
FlattenedXmlMapWithXmlNamespace
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/FlattenedXmlMapWithXmlNamespaceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/FlattenedXmlMapWithXmlNamespaceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/FlattenedXmlMapWithXmlNamespaceCommandOutput/)

</details>
<details>
<summary>
FractionalSeconds
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/FractionalSecondsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/FractionalSecondsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/FractionalSecondsCommandOutput/)

</details>
<details>
<summary>
GreetingWithErrors
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/GreetingWithErrorsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/GreetingWithErrorsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/GreetingWithErrorsCommandOutput/)

</details>
<details>
<summary>
HostWithPathOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/HostWithPathOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HostWithPathOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HostWithPathOperationCommandOutput/)

</details>
<details>
<summary>
IgnoresWrappingXmlName
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/IgnoresWrappingXmlNameCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/IgnoresWrappingXmlNameCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/IgnoresWrappingXmlNameCommandOutput/)

</details>
<details>
<summary>
NestedStructures
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/NestedStructuresCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/NestedStructuresCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/NestedStructuresCommandOutput/)

</details>
<details>
<summary>
NoInputAndNoOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/NoInputAndNoOutputCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/NoInputAndNoOutputCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/NoInputAndNoOutputCommandOutput/)

</details>
<details>
<summary>
NoInputAndOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/NoInputAndOutputCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/NoInputAndOutputCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/NoInputAndOutputCommandOutput/)

</details>
<details>
<summary>
PutWithContentEncoding
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/PutWithContentEncodingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/PutWithContentEncodingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/PutWithContentEncodingCommandOutput/)

</details>
<details>
<summary>
QueryIdempotencyTokenAutoFill
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/QueryIdempotencyTokenAutoFillCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/QueryIdempotencyTokenAutoFillCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/QueryIdempotencyTokenAutoFillCommandOutput/)

</details>
<details>
<summary>
QueryLists
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/QueryListsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/QueryListsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/QueryListsCommandOutput/)

</details>
<details>
<summary>
QueryMaps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/QueryMapsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/QueryMapsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/QueryMapsCommandOutput/)

</details>
<details>
<summary>
QueryTimestamps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/QueryTimestampsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/QueryTimestampsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/QueryTimestampsCommandOutput/)

</details>
<details>
<summary>
RecursiveXmlShapes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/RecursiveXmlShapesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/RecursiveXmlShapesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/RecursiveXmlShapesCommandOutput/)

</details>
<details>
<summary>
SimpleInputParams
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/SimpleInputParamsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/SimpleInputParamsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/SimpleInputParamsCommandOutput/)

</details>
<details>
<summary>
SimpleScalarXmlProperties
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/SimpleScalarXmlPropertiesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/SimpleScalarXmlPropertiesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/SimpleScalarXmlPropertiesCommandOutput/)

</details>
<details>
<summary>
XmlBlobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/XmlBlobsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/XmlBlobsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/XmlBlobsCommandOutput/)

</details>
<details>
<summary>
XmlEmptyBlobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/XmlEmptyBlobsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/XmlEmptyBlobsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/XmlEmptyBlobsCommandOutput/)

</details>
<details>
<summary>
XmlEmptyLists
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/XmlEmptyListsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/XmlEmptyListsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/XmlEmptyListsCommandOutput/)

</details>
<details>
<summary>
XmlEmptyMaps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/XmlEmptyMapsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/XmlEmptyMapsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/XmlEmptyMapsCommandOutput/)

</details>
<details>
<summary>
XmlEnums
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/XmlEnumsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/XmlEnumsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/XmlEnumsCommandOutput/)

</details>
<details>
<summary>
XmlIntEnums
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/XmlIntEnumsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/XmlIntEnumsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/XmlIntEnumsCommandOutput/)

</details>
<details>
<summary>
XmlLists
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/XmlListsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/XmlListsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/XmlListsCommandOutput/)

</details>
<details>
<summary>
XmlMaps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/XmlMapsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/XmlMapsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/XmlMapsCommandOutput/)

</details>
<details>
<summary>
XmlMapsXmlName
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/XmlMapsXmlNameCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/XmlMapsXmlNameCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/XmlMapsXmlNameCommandOutput/)

</details>
<details>
<summary>
XmlNamespaces
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/XmlNamespacesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/XmlNamespacesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/XmlNamespacesCommandOutput/)

</details>
<details>
<summary>
XmlTimestamps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/XmlTimestampsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/XmlTimestampsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/XmlTimestampsCommandOutput/)

</details>
<details>
<summary>
AllQueryStringTypes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/AllQueryStringTypesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/AllQueryStringTypesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/AllQueryStringTypesCommandOutput/)

</details>
<details>
<summary>
ConstantAndVariableQueryString
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/ConstantAndVariableQueryStringCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/ConstantAndVariableQueryStringCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/ConstantAndVariableQueryStringCommandOutput/)

</details>
<details>
<summary>
ConstantQueryString
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/ConstantQueryStringCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/ConstantQueryStringCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/ConstantQueryStringCommandOutput/)

</details>
<details>
<summary>
ContentTypeParameters
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/ContentTypeParametersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/ContentTypeParametersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/ContentTypeParametersCommandOutput/)

</details>
<details>
<summary>
DatetimeOffsets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/DatetimeOffsetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/DatetimeOffsetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/DatetimeOffsetsCommandOutput/)

</details>
<details>
<summary>
DocumentType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/DocumentTypeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/DocumentTypeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/DocumentTypeCommandOutput/)

</details>
<details>
<summary>
DocumentTypeAsMapValue
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/DocumentTypeAsMapValueCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/DocumentTypeAsMapValueCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/DocumentTypeAsMapValueCommandOutput/)

</details>
<details>
<summary>
DocumentTypeAsPayload
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/DocumentTypeAsPayloadCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/DocumentTypeAsPayloadCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/DocumentTypeAsPayloadCommandOutput/)

</details>
<details>
<summary>
EmptyInputAndEmptyOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/EmptyInputAndEmptyOutputCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/EmptyInputAndEmptyOutputCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/EmptyInputAndEmptyOutputCommandOutput/)

</details>
<details>
<summary>
EndpointOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/EndpointOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/EndpointOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/EndpointOperationCommandOutput/)

</details>
<details>
<summary>
EndpointWithHostLabelOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/EndpointWithHostLabelOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/EndpointWithHostLabelOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/EndpointWithHostLabelOperationCommandOutput/)

</details>
<details>
<summary>
FractionalSeconds
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/FractionalSecondsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/FractionalSecondsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/FractionalSecondsCommandOutput/)

</details>
<details>
<summary>
GreetingWithErrors
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/GreetingWithErrorsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/GreetingWithErrorsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/GreetingWithErrorsCommandOutput/)

</details>
<details>
<summary>
HostWithPathOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/HostWithPathOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HostWithPathOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HostWithPathOperationCommandOutput/)

</details>
<details>
<summary>
HttpChecksumRequired
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/HttpChecksumRequiredCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HttpChecksumRequiredCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HttpChecksumRequiredCommandOutput/)

</details>
<details>
<summary>
HttpEnumPayload
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/HttpEnumPayloadCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HttpEnumPayloadCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HttpEnumPayloadCommandOutput/)

</details>
<details>
<summary>
HttpPayloadTraits
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/HttpPayloadTraitsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HttpPayloadTraitsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HttpPayloadTraitsCommandOutput/)

</details>
<details>
<summary>
HttpPayloadTraitsWithMediaType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/HttpPayloadTraitsWithMediaTypeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HttpPayloadTraitsWithMediaTypeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HttpPayloadTraitsWithMediaTypeCommandOutput/)

</details>
<details>
<summary>
HttpPayloadWithStructure
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/HttpPayloadWithStructureCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HttpPayloadWithStructureCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HttpPayloadWithStructureCommandOutput/)

</details>
<details>
<summary>
HttpPayloadWithUnion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/HttpPayloadWithUnionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HttpPayloadWithUnionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HttpPayloadWithUnionCommandOutput/)

</details>
<details>
<summary>
HttpPrefixHeaders
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/HttpPrefixHeadersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HttpPrefixHeadersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HttpPrefixHeadersCommandOutput/)

</details>
<details>
<summary>
HttpPrefixHeadersInResponse
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/HttpPrefixHeadersInResponseCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HttpPrefixHeadersInResponseCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HttpPrefixHeadersInResponseCommandOutput/)

</details>
<details>
<summary>
HttpRequestWithFloatLabels
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/HttpRequestWithFloatLabelsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HttpRequestWithFloatLabelsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HttpRequestWithFloatLabelsCommandOutput/)

</details>
<details>
<summary>
HttpRequestWithGreedyLabelInPath
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/HttpRequestWithGreedyLabelInPathCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HttpRequestWithGreedyLabelInPathCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HttpRequestWithGreedyLabelInPathCommandOutput/)

</details>
<details>
<summary>
HttpRequestWithLabels
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/HttpRequestWithLabelsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HttpRequestWithLabelsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HttpRequestWithLabelsCommandOutput/)

</details>
<details>
<summary>
HttpRequestWithLabelsAndTimestampFormat
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/HttpRequestWithLabelsAndTimestampFormatCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HttpRequestWithLabelsAndTimestampFormatCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HttpRequestWithLabelsAndTimestampFormatCommandOutput/)

</details>
<details>
<summary>
HttpRequestWithRegexLiteral
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/HttpRequestWithRegexLiteralCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HttpRequestWithRegexLiteralCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HttpRequestWithRegexLiteralCommandOutput/)

</details>
<details>
<summary>
HttpResponseCode
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/HttpResponseCodeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HttpResponseCodeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HttpResponseCodeCommandOutput/)

</details>
<details>
<summary>
HttpStringPayload
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/HttpStringPayloadCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HttpStringPayloadCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HttpStringPayloadCommandOutput/)

</details>
<details>
<summary>
IgnoreQueryParamsInResponse
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/IgnoreQueryParamsInResponseCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/IgnoreQueryParamsInResponseCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/IgnoreQueryParamsInResponseCommandOutput/)

</details>
<details>
<summary>
InputAndOutputWithHeaders
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/InputAndOutputWithHeadersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/InputAndOutputWithHeadersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/InputAndOutputWithHeadersCommandOutput/)

</details>
<details>
<summary>
JsonBlobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/JsonBlobsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/JsonBlobsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/JsonBlobsCommandOutput/)

</details>
<details>
<summary>
JsonEnums
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/JsonEnumsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/JsonEnumsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/JsonEnumsCommandOutput/)

</details>
<details>
<summary>
JsonIntEnums
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/JsonIntEnumsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/JsonIntEnumsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/JsonIntEnumsCommandOutput/)

</details>
<details>
<summary>
JsonLists
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/JsonListsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/JsonListsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/JsonListsCommandOutput/)

</details>
<details>
<summary>
JsonMaps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/JsonMapsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/JsonMapsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/JsonMapsCommandOutput/)

</details>
<details>
<summary>
JsonTimestamps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/JsonTimestampsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/JsonTimestampsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/JsonTimestampsCommandOutput/)

</details>
<details>
<summary>
JsonUnions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/JsonUnionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/JsonUnionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/JsonUnionsCommandOutput/)

</details>
<details>
<summary>
MalformedAcceptWithBody
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/MalformedAcceptWithBodyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedAcceptWithBodyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedAcceptWithBodyCommandOutput/)

</details>
<details>
<summary>
MalformedAcceptWithGenericString
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/MalformedAcceptWithGenericStringCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedAcceptWithGenericStringCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedAcceptWithGenericStringCommandOutput/)

</details>
<details>
<summary>
MalformedAcceptWithPayload
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/MalformedAcceptWithPayloadCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedAcceptWithPayloadCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedAcceptWithPayloadCommandOutput/)

</details>
<details>
<summary>
MalformedBlob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/MalformedBlobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedBlobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedBlobCommandOutput/)

</details>
<details>
<summary>
MalformedBoolean
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/MalformedBooleanCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedBooleanCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedBooleanCommandOutput/)

</details>
<details>
<summary>
MalformedByte
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/MalformedByteCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedByteCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedByteCommandOutput/)

</details>
<details>
<summary>
MalformedContentTypeWithBody
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/MalformedContentTypeWithBodyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedContentTypeWithBodyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedContentTypeWithBodyCommandOutput/)

</details>
<details>
<summary>
MalformedContentTypeWithGenericString
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/MalformedContentTypeWithGenericStringCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedContentTypeWithGenericStringCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedContentTypeWithGenericStringCommandOutput/)

</details>
<details>
<summary>
MalformedContentTypeWithoutBody
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/MalformedContentTypeWithoutBodyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedContentTypeWithoutBodyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedContentTypeWithoutBodyCommandOutput/)

</details>
<details>
<summary>
MalformedContentTypeWithoutBodyEmptyInput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/MalformedContentTypeWithoutBodyEmptyInputCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedContentTypeWithoutBodyEmptyInputCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedContentTypeWithoutBodyEmptyInputCommandOutput/)

</details>
<details>
<summary>
MalformedContentTypeWithPayload
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/MalformedContentTypeWithPayloadCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedContentTypeWithPayloadCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedContentTypeWithPayloadCommandOutput/)

</details>
<details>
<summary>
MalformedDouble
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/MalformedDoubleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedDoubleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedDoubleCommandOutput/)

</details>
<details>
<summary>
MalformedFloat
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/MalformedFloatCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedFloatCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedFloatCommandOutput/)

</details>
<details>
<summary>
MalformedInteger
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/MalformedIntegerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedIntegerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedIntegerCommandOutput/)

</details>
<details>
<summary>
MalformedList
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/MalformedListCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedListCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedListCommandOutput/)

</details>
<details>
<summary>
MalformedLong
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/MalformedLongCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedLongCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedLongCommandOutput/)

</details>
<details>
<summary>
MalformedMap
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/MalformedMapCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedMapCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedMapCommandOutput/)

</details>
<details>
<summary>
MalformedRequestBody
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/MalformedRequestBodyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedRequestBodyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedRequestBodyCommandOutput/)

</details>
<details>
<summary>
MalformedShort
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/MalformedShortCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedShortCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedShortCommandOutput/)

</details>
<details>
<summary>
MalformedString
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/MalformedStringCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedStringCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedStringCommandOutput/)

</details>
<details>
<summary>
MalformedTimestampBodyDateTime
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/MalformedTimestampBodyDateTimeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedTimestampBodyDateTimeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedTimestampBodyDateTimeCommandOutput/)

</details>
<details>
<summary>
MalformedTimestampBodyDefault
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/MalformedTimestampBodyDefaultCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedTimestampBodyDefaultCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedTimestampBodyDefaultCommandOutput/)

</details>
<details>
<summary>
MalformedTimestampBodyHttpDate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/MalformedTimestampBodyHttpDateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedTimestampBodyHttpDateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedTimestampBodyHttpDateCommandOutput/)

</details>
<details>
<summary>
MalformedTimestampHeaderDateTime
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/MalformedTimestampHeaderDateTimeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedTimestampHeaderDateTimeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedTimestampHeaderDateTimeCommandOutput/)

</details>
<details>
<summary>
MalformedTimestampHeaderDefault
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/MalformedTimestampHeaderDefaultCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedTimestampHeaderDefaultCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedTimestampHeaderDefaultCommandOutput/)

</details>
<details>
<summary>
MalformedTimestampHeaderEpoch
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/MalformedTimestampHeaderEpochCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedTimestampHeaderEpochCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedTimestampHeaderEpochCommandOutput/)

</details>
<details>
<summary>
MalformedTimestampPathDefault
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/MalformedTimestampPathDefaultCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedTimestampPathDefaultCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedTimestampPathDefaultCommandOutput/)

</details>
<details>
<summary>
MalformedTimestampPathEpoch
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/MalformedTimestampPathEpochCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedTimestampPathEpochCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedTimestampPathEpochCommandOutput/)

</details>
<details>
<summary>
MalformedTimestampPathHttpDate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/MalformedTimestampPathHttpDateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedTimestampPathHttpDateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedTimestampPathHttpDateCommandOutput/)

</details>
<details>
<summary>
MalformedTimestampQueryDefault
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/MalformedTimestampQueryDefaultCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedTimestampQueryDefaultCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedTimestampQueryDefaultCommandOutput/)

</details>
<details>
<summary>
MalformedTimestampQueryEpoch
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/MalformedTimestampQueryEpochCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedTimestampQueryEpochCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedTimestampQueryEpochCommandOutput/)

</details>
<details>
<summary>
MalformedTimestampQueryHttpDate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/MalformedTimestampQueryHttpDateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedTimestampQueryHttpDateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedTimestampQueryHttpDateCommandOutput/)

</details>
<details>
<summary>
MalformedUnion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/MalformedUnionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedUnionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedUnionCommandOutput/)

</details>
<details>
<summary>
MediaTypeHeader
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/MediaTypeHeaderCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MediaTypeHeaderCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MediaTypeHeaderCommandOutput/)

</details>
<details>
<summary>
NoInputAndNoOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/NoInputAndNoOutputCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/NoInputAndNoOutputCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/NoInputAndNoOutputCommandOutput/)

</details>
<details>
<summary>
NoInputAndOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/NoInputAndOutputCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/NoInputAndOutputCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/NoInputAndOutputCommandOutput/)

</details>
<details>
<summary>
NullAndEmptyHeadersClient
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/NullAndEmptyHeadersClientCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/NullAndEmptyHeadersClientCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/NullAndEmptyHeadersClientCommandOutput/)

</details>
<details>
<summary>
NullAndEmptyHeadersServer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/NullAndEmptyHeadersServerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/NullAndEmptyHeadersServerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/NullAndEmptyHeadersServerCommandOutput/)

</details>
<details>
<summary>
OmitsNullSerializesEmptyString
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/OmitsNullSerializesEmptyStringCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/OmitsNullSerializesEmptyStringCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/OmitsNullSerializesEmptyStringCommandOutput/)

</details>
<details>
<summary>
OmitsSerializingEmptyLists
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/OmitsSerializingEmptyListsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/OmitsSerializingEmptyListsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/OmitsSerializingEmptyListsCommandOutput/)

</details>
<details>
<summary>
OperationWithDefaults
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/OperationWithDefaultsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/OperationWithDefaultsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/OperationWithDefaultsCommandOutput/)

</details>
<details>
<summary>
OperationWithNestedStructure
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/OperationWithNestedStructureCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/OperationWithNestedStructureCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/OperationWithNestedStructureCommandOutput/)

</details>
<details>
<summary>
PostPlayerAction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/PostPlayerActionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/PostPlayerActionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/PostPlayerActionCommandOutput/)

</details>
<details>
<summary>
PostUnionWithJsonName
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/PostUnionWithJsonNameCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/PostUnionWithJsonNameCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/PostUnionWithJsonNameCommandOutput/)

</details>
<details>
<summary>
PutWithContentEncoding
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/PutWithContentEncodingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/PutWithContentEncodingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/PutWithContentEncodingCommandOutput/)

</details>
<details>
<summary>
QueryIdempotencyTokenAutoFill
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/QueryIdempotencyTokenAutoFillCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/QueryIdempotencyTokenAutoFillCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/QueryIdempotencyTokenAutoFillCommandOutput/)

</details>
<details>
<summary>
QueryParamsAsStringListMap
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/QueryParamsAsStringListMapCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/QueryParamsAsStringListMapCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/QueryParamsAsStringListMapCommandOutput/)

</details>
<details>
<summary>
QueryPrecedence
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/QueryPrecedenceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/QueryPrecedenceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/QueryPrecedenceCommandOutput/)

</details>
<details>
<summary>
RecursiveShapes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/RecursiveShapesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/RecursiveShapesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/RecursiveShapesCommandOutput/)

</details>
<details>
<summary>
ResponseCodeHttpFallback
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/ResponseCodeHttpFallbackCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/ResponseCodeHttpFallbackCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/ResponseCodeHttpFallbackCommandOutput/)

</details>
<details>
<summary>
ResponseCodeRequired
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/ResponseCodeRequiredCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/ResponseCodeRequiredCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/ResponseCodeRequiredCommandOutput/)

</details>
<details>
<summary>
SimpleScalarProperties
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/SimpleScalarPropertiesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/SimpleScalarPropertiesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/SimpleScalarPropertiesCommandOutput/)

</details>
<details>
<summary>
SparseJsonLists
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/SparseJsonListsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/SparseJsonListsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/SparseJsonListsCommandOutput/)

</details>
<details>
<summary>
SparseJsonMaps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/SparseJsonMapsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/SparseJsonMapsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/SparseJsonMapsCommandOutput/)

</details>
<details>
<summary>
StreamingTraits
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/StreamingTraitsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/StreamingTraitsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/StreamingTraitsCommandOutput/)

</details>
<details>
<summary>
StreamingTraitsRequireLength
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/StreamingTraitsRequireLengthCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/StreamingTraitsRequireLengthCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/StreamingTraitsRequireLengthCommandOutput/)

</details>
<details>
<summary>
StreamingTraitsWithMediaType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/StreamingTraitsWithMediaTypeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/StreamingTraitsWithMediaTypeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/StreamingTraitsWithMediaTypeCommandOutput/)

</details>
<details>
<summary>
TestBodyStructure
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/TestBodyStructureCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/TestBodyStructureCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/TestBodyStructureCommandOutput/)

</details>
<details>
<summary>
TestGetNoInputNoPayload
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/TestGetNoInputNoPayloadCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/TestGetNoInputNoPayloadCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/TestGetNoInputNoPayloadCommandOutput/)

</details>
<details>
<summary>
TestGetNoPayload
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/TestGetNoPayloadCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/TestGetNoPayloadCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/TestGetNoPayloadCommandOutput/)

</details>
<details>
<summary>
TestPayloadBlob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/TestPayloadBlobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/TestPayloadBlobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/TestPayloadBlobCommandOutput/)

</details>
<details>
<summary>
TestPayloadStructure
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/TestPayloadStructureCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/TestPayloadStructureCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/TestPayloadStructureCommandOutput/)

</details>
<details>
<summary>
TestPostNoInputNoPayload
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/TestPostNoInputNoPayloadCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/TestPostNoInputNoPayloadCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/TestPostNoInputNoPayloadCommandOutput/)

</details>
<details>
<summary>
TestPostNoPayload
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/TestPostNoPayloadCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/TestPostNoPayloadCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/TestPostNoPayloadCommandOutput/)

</details>
<details>
<summary>
TimestampFormatHeaders
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/TimestampFormatHeadersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/TimestampFormatHeadersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/TimestampFormatHeadersCommandOutput/)

</details>
<details>
<summary>
UnitInputAndOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/UnitInputAndOutputCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/UnitInputAndOutputCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/UnitInputAndOutputCommandOutput/)

</details>
<details>
<summary>
MalformedEnum
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/MalformedEnumCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedEnumCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedEnumCommandOutput/)

</details>
<details>
<summary>
MalformedLength
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/MalformedLengthCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedLengthCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedLengthCommandOutput/)

</details>
<details>
<summary>
MalformedLengthOverride
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/MalformedLengthOverrideCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedLengthOverrideCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedLengthOverrideCommandOutput/)

</details>
<details>
<summary>
MalformedLengthQueryString
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/MalformedLengthQueryStringCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedLengthQueryStringCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedLengthQueryStringCommandOutput/)

</details>
<details>
<summary>
MalformedPattern
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/MalformedPatternCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedPatternCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedPatternCommandOutput/)

</details>
<details>
<summary>
MalformedPatternOverride
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/MalformedPatternOverrideCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedPatternOverrideCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedPatternOverrideCommandOutput/)

</details>
<details>
<summary>
MalformedRange
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/MalformedRangeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedRangeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedRangeCommandOutput/)

</details>
<details>
<summary>
MalformedRangeOverride
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/MalformedRangeOverrideCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedRangeOverrideCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedRangeOverrideCommandOutput/)

</details>
<details>
<summary>
MalformedRequired
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/MalformedRequiredCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedRequiredCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedRequiredCommandOutput/)

</details>
<details>
<summary>
MalformedUniqueItems
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/MalformedUniqueItemsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedUniqueItemsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/MalformedUniqueItemsCommandOutput/)

</details>
<details>
<summary>
RecursiveStructures
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/RecursiveStructuresCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/RecursiveStructuresCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/RecursiveStructuresCommandOutput/)

</details>
<details>
<summary>
SensitiveValidation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/SensitiveValidationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/SensitiveValidationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/SensitiveValidationCommandOutput/)

</details>
<details>
<summary>
AllQueryStringTypes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/AllQueryStringTypesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/AllQueryStringTypesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/AllQueryStringTypesCommandOutput/)

</details>
<details>
<summary>
BodyWithXmlName
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/BodyWithXmlNameCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/BodyWithXmlNameCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/BodyWithXmlNameCommandOutput/)

</details>
<details>
<summary>
ConstantAndVariableQueryString
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/ConstantAndVariableQueryStringCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/ConstantAndVariableQueryStringCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/ConstantAndVariableQueryStringCommandOutput/)

</details>
<details>
<summary>
ConstantQueryString
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/ConstantQueryStringCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/ConstantQueryStringCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/ConstantQueryStringCommandOutput/)

</details>
<details>
<summary>
ContentTypeParameters
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/ContentTypeParametersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/ContentTypeParametersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/ContentTypeParametersCommandOutput/)

</details>
<details>
<summary>
DatetimeOffsets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/DatetimeOffsetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/DatetimeOffsetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/DatetimeOffsetsCommandOutput/)

</details>
<details>
<summary>
EmptyInputAndEmptyOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/EmptyInputAndEmptyOutputCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/EmptyInputAndEmptyOutputCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/EmptyInputAndEmptyOutputCommandOutput/)

</details>
<details>
<summary>
EndpointOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/EndpointOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/EndpointOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/EndpointOperationCommandOutput/)

</details>
<details>
<summary>
EndpointWithHostLabelHeaderOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/EndpointWithHostLabelHeaderOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/EndpointWithHostLabelHeaderOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/EndpointWithHostLabelHeaderOperationCommandOutput/)

</details>
<details>
<summary>
EndpointWithHostLabelOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/EndpointWithHostLabelOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/EndpointWithHostLabelOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/EndpointWithHostLabelOperationCommandOutput/)

</details>
<details>
<summary>
FlattenedXmlMap
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/FlattenedXmlMapCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/FlattenedXmlMapCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/FlattenedXmlMapCommandOutput/)

</details>
<details>
<summary>
FlattenedXmlMapWithXmlName
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/FlattenedXmlMapWithXmlNameCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/FlattenedXmlMapWithXmlNameCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/FlattenedXmlMapWithXmlNameCommandOutput/)

</details>
<details>
<summary>
FlattenedXmlMapWithXmlNamespace
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/FlattenedXmlMapWithXmlNamespaceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/FlattenedXmlMapWithXmlNamespaceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/FlattenedXmlMapWithXmlNamespaceCommandOutput/)

</details>
<details>
<summary>
FractionalSeconds
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/FractionalSecondsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/FractionalSecondsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/FractionalSecondsCommandOutput/)

</details>
<details>
<summary>
GreetingWithErrors
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/GreetingWithErrorsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/GreetingWithErrorsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/GreetingWithErrorsCommandOutput/)

</details>
<details>
<summary>
HttpEnumPayload
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/HttpEnumPayloadCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HttpEnumPayloadCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HttpEnumPayloadCommandOutput/)

</details>
<details>
<summary>
HttpPayloadTraits
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/HttpPayloadTraitsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HttpPayloadTraitsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HttpPayloadTraitsCommandOutput/)

</details>
<details>
<summary>
HttpPayloadTraitsWithMediaType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/HttpPayloadTraitsWithMediaTypeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HttpPayloadTraitsWithMediaTypeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HttpPayloadTraitsWithMediaTypeCommandOutput/)

</details>
<details>
<summary>
HttpPayloadWithMemberXmlName
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/HttpPayloadWithMemberXmlNameCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HttpPayloadWithMemberXmlNameCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HttpPayloadWithMemberXmlNameCommandOutput/)

</details>
<details>
<summary>
HttpPayloadWithStructure
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/HttpPayloadWithStructureCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HttpPayloadWithStructureCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HttpPayloadWithStructureCommandOutput/)

</details>
<details>
<summary>
HttpPayloadWithUnion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/HttpPayloadWithUnionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HttpPayloadWithUnionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HttpPayloadWithUnionCommandOutput/)

</details>
<details>
<summary>
HttpPayloadWithXmlName
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/HttpPayloadWithXmlNameCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HttpPayloadWithXmlNameCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HttpPayloadWithXmlNameCommandOutput/)

</details>
<details>
<summary>
HttpPayloadWithXmlNamespace
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/HttpPayloadWithXmlNamespaceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HttpPayloadWithXmlNamespaceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HttpPayloadWithXmlNamespaceCommandOutput/)

</details>
<details>
<summary>
HttpPayloadWithXmlNamespaceAndPrefix
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/HttpPayloadWithXmlNamespaceAndPrefixCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HttpPayloadWithXmlNamespaceAndPrefixCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HttpPayloadWithXmlNamespaceAndPrefixCommandOutput/)

</details>
<details>
<summary>
HttpPrefixHeaders
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/HttpPrefixHeadersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HttpPrefixHeadersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HttpPrefixHeadersCommandOutput/)

</details>
<details>
<summary>
HttpRequestWithFloatLabels
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/HttpRequestWithFloatLabelsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HttpRequestWithFloatLabelsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HttpRequestWithFloatLabelsCommandOutput/)

</details>
<details>
<summary>
HttpRequestWithGreedyLabelInPath
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/HttpRequestWithGreedyLabelInPathCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HttpRequestWithGreedyLabelInPathCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HttpRequestWithGreedyLabelInPathCommandOutput/)

</details>
<details>
<summary>
HttpRequestWithLabels
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/HttpRequestWithLabelsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HttpRequestWithLabelsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HttpRequestWithLabelsCommandOutput/)

</details>
<details>
<summary>
HttpRequestWithLabelsAndTimestampFormat
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/HttpRequestWithLabelsAndTimestampFormatCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HttpRequestWithLabelsAndTimestampFormatCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HttpRequestWithLabelsAndTimestampFormatCommandOutput/)

</details>
<details>
<summary>
HttpResponseCode
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/HttpResponseCodeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HttpResponseCodeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HttpResponseCodeCommandOutput/)

</details>
<details>
<summary>
HttpStringPayload
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/HttpStringPayloadCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HttpStringPayloadCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/HttpStringPayloadCommandOutput/)

</details>
<details>
<summary>
IgnoreQueryParamsInResponse
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/IgnoreQueryParamsInResponseCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/IgnoreQueryParamsInResponseCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/IgnoreQueryParamsInResponseCommandOutput/)

</details>
<details>
<summary>
InputAndOutputWithHeaders
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/InputAndOutputWithHeadersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/InputAndOutputWithHeadersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/InputAndOutputWithHeadersCommandOutput/)

</details>
<details>
<summary>
NestedXmlMaps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/NestedXmlMapsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/NestedXmlMapsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/NestedXmlMapsCommandOutput/)

</details>
<details>
<summary>
NestedXmlMapWithXmlName
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/NestedXmlMapWithXmlNameCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/NestedXmlMapWithXmlNameCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/NestedXmlMapWithXmlNameCommandOutput/)

</details>
<details>
<summary>
NoInputAndNoOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/NoInputAndNoOutputCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/NoInputAndNoOutputCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/NoInputAndNoOutputCommandOutput/)

</details>
<details>
<summary>
NoInputAndOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/NoInputAndOutputCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/NoInputAndOutputCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/NoInputAndOutputCommandOutput/)

</details>
<details>
<summary>
NullAndEmptyHeadersClient
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/NullAndEmptyHeadersClientCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/NullAndEmptyHeadersClientCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/NullAndEmptyHeadersClientCommandOutput/)

</details>
<details>
<summary>
NullAndEmptyHeadersServer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/NullAndEmptyHeadersServerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/NullAndEmptyHeadersServerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/NullAndEmptyHeadersServerCommandOutput/)

</details>
<details>
<summary>
OmitsNullSerializesEmptyString
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/OmitsNullSerializesEmptyStringCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/OmitsNullSerializesEmptyStringCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/OmitsNullSerializesEmptyStringCommandOutput/)

</details>
<details>
<summary>
PutWithContentEncoding
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/PutWithContentEncodingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/PutWithContentEncodingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/PutWithContentEncodingCommandOutput/)

</details>
<details>
<summary>
QueryIdempotencyTokenAutoFill
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/QueryIdempotencyTokenAutoFillCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/QueryIdempotencyTokenAutoFillCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/QueryIdempotencyTokenAutoFillCommandOutput/)

</details>
<details>
<summary>
QueryParamsAsStringListMap
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/QueryParamsAsStringListMapCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/QueryParamsAsStringListMapCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/QueryParamsAsStringListMapCommandOutput/)

</details>
<details>
<summary>
QueryPrecedence
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/QueryPrecedenceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/QueryPrecedenceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/QueryPrecedenceCommandOutput/)

</details>
<details>
<summary>
RecursiveShapes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/RecursiveShapesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/RecursiveShapesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/RecursiveShapesCommandOutput/)

</details>
<details>
<summary>
SimpleScalarProperties
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/SimpleScalarPropertiesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/SimpleScalarPropertiesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/SimpleScalarPropertiesCommandOutput/)

</details>
<details>
<summary>
TimestampFormatHeaders
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/TimestampFormatHeadersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/TimestampFormatHeadersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/TimestampFormatHeadersCommandOutput/)

</details>
<details>
<summary>
XmlAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/XmlAttributesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/XmlAttributesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/XmlAttributesCommandOutput/)

</details>
<details>
<summary>
XmlAttributesOnPayload
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/XmlAttributesOnPayloadCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/XmlAttributesOnPayloadCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/XmlAttributesOnPayloadCommandOutput/)

</details>
<details>
<summary>
XmlBlobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/XmlBlobsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/XmlBlobsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/XmlBlobsCommandOutput/)

</details>
<details>
<summary>
XmlEmptyBlobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/XmlEmptyBlobsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/XmlEmptyBlobsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/XmlEmptyBlobsCommandOutput/)

</details>
<details>
<summary>
XmlEmptyLists
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/XmlEmptyListsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/XmlEmptyListsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/XmlEmptyListsCommandOutput/)

</details>
<details>
<summary>
XmlEmptyMaps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/XmlEmptyMapsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/XmlEmptyMapsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/XmlEmptyMapsCommandOutput/)

</details>
<details>
<summary>
XmlEmptyStrings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/XmlEmptyStringsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/XmlEmptyStringsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/XmlEmptyStringsCommandOutput/)

</details>
<details>
<summary>
XmlEnums
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/XmlEnumsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/XmlEnumsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/XmlEnumsCommandOutput/)

</details>
<details>
<summary>
XmlIntEnums
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/XmlIntEnumsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/XmlIntEnumsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/XmlIntEnumsCommandOutput/)

</details>
<details>
<summary>
XmlLists
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/XmlListsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/XmlListsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/XmlListsCommandOutput/)

</details>
<details>
<summary>
XmlMaps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/XmlMapsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/XmlMapsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/XmlMapsCommandOutput/)

</details>
<details>
<summary>
XmlMapsXmlName
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/XmlMapsXmlNameCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/XmlMapsXmlNameCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/XmlMapsXmlNameCommandOutput/)

</details>
<details>
<summary>
XmlMapWithXmlNamespace
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/XmlMapWithXmlNamespaceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/XmlMapWithXmlNamespaceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/XmlMapWithXmlNamespaceCommandOutput/)

</details>
<details>
<summary>
XmlNamespaces
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/XmlNamespacesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/XmlNamespacesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/XmlNamespacesCommandOutput/)

</details>
<details>
<summary>
XmlTimestamps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/XmlTimestampsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/XmlTimestampsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/XmlTimestampsCommandOutput/)

</details>
<details>
<summary>
XmlUnions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/XmlUnionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/XmlUnionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/XmlUnionsCommandOutput/)

</details>
<details>
<summary>
SimpleScalarProperties
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/SimpleScalarPropertiesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/SimpleScalarPropertiesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/SimpleScalarPropertiesCommandOutput/)

</details>
<details>
<summary>
GetRestApis
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/GetRestApisCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/GetRestApisCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/GetRestApisCommandOutput/)

</details>
<details>
<summary>
UploadArchive
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/UploadArchiveCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/UploadArchiveCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/UploadArchiveCommandOutput/)

</details>
<details>
<summary>
UploadMultipartPart
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/UploadMultipartPartCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/UploadMultipartPartCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/UploadMultipartPartCommandOutput/)

</details>
<details>
<summary>
Predict
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/PredictCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/PredictCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/PredictCommandOutput/)

</details>
<details>
<summary>
DeleteObjectTagging
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/DeleteObjectTaggingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/DeleteObjectTaggingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/DeleteObjectTaggingCommandOutput/)

</details>
<details>
<summary>
GetBucketLocation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/GetBucketLocationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/GetBucketLocationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/GetBucketLocationCommandOutput/)

</details>
<details>
<summary>
GetObject
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/GetObjectCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/GetObjectCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/GetObjectCommandOutput/)

</details>
<details>
<summary>
ListObjectsV2
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/ListObjectsV2Command/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/ListObjectsV2CommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/ListObjectsV2CommandOutput/)

</details>
<details>
<summary>
EmptyInputOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/EmptyInputOutputCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/EmptyInputOutputCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/EmptyInputOutputCommandOutput/)

</details>
<details>
<summary>
Float16
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/Float16Command/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/Float16CommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/Float16CommandOutput/)

</details>
<details>
<summary>
FractionalSeconds
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/FractionalSecondsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/FractionalSecondsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/FractionalSecondsCommandOutput/)

</details>
<details>
<summary>
GreetingWithErrors
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/GreetingWithErrorsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/GreetingWithErrorsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/GreetingWithErrorsCommandOutput/)

</details>
<details>
<summary>
NoInputOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/NoInputOutputCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/NoInputOutputCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/NoInputOutputCommandOutput/)

</details>
<details>
<summary>
OperationWithDefaults
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/OperationWithDefaultsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/OperationWithDefaultsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/OperationWithDefaultsCommandOutput/)

</details>
<details>
<summary>
OptionalInputOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/OptionalInputOutputCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/OptionalInputOutputCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/OptionalInputOutputCommandOutput/)

</details>
<details>
<summary>
RecursiveShapes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/RecursiveShapesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/RecursiveShapesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/RecursiveShapesCommandOutput/)

</details>
<details>
<summary>
RpcV2CborDenseMaps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/RpcV2CborDenseMapsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/RpcV2CborDenseMapsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/RpcV2CborDenseMapsCommandOutput/)

</details>
<details>
<summary>
RpcV2CborLists
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/RpcV2CborListsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/RpcV2CborListsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/RpcV2CborListsCommandOutput/)

</details>
<details>
<summary>
RpcV2CborSparseMaps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/RpcV2CborSparseMapsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/RpcV2CborSparseMapsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/RpcV2CborSparseMapsCommandOutput/)

</details>
<details>
<summary>
SimpleScalarProperties
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/SimpleScalarPropertiesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/SimpleScalarPropertiesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/SimpleScalarPropertiesCommandOutput/)

</details>
<details>
<summary>
SparseNullsOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rest-xml-protocol/command/SparseNullsOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/SparseNullsOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rest-xml-protocol/Interface/SparseNullsOperationCommandOutput/)

</details>
