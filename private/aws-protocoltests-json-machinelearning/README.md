<!-- generated file, do not edit directly -->

# @aws-sdk/aws-protocoltests-json-machinelearning

## Description

AWS SDK for JavaScript MachineLearning Client for Node.js, Browser and React Native.

## Installing
To install this package, simply type add or install @aws-sdk/aws-protocoltests-json-machinelearning
using your favorite package manager:
- `npm install @aws-sdk/aws-protocoltests-json-machinelearning`
- `yarn add @aws-sdk/aws-protocoltests-json-machinelearning`
- `pnpm add @aws-sdk/aws-protocoltests-json-machinelearning`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `MachineLearningClient` and
the commands you need, for example `PredictCommand`:

```js
// ES5 example
const { MachineLearningClient, PredictCommand } = require("@aws-sdk/aws-protocoltests-json-machinelearning");
```

```ts
// ES6+ example
import { MachineLearningClient, PredictCommand } from "@aws-sdk/aws-protocoltests-json-machinelearning";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new MachineLearningClient({ region: "REGION" });

const params = { /** input parameters */ };
const command = new PredictCommand(params);
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
import * as AWS from "@aws-sdk/aws-protocoltests-json-machinelearning";
const client = new AWS.MachineLearning({ region: "REGION" });

// async/await.
try {
  const data = await client.predict(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .predict(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.predict(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/aws-protocoltests-json-machinelearning` package is updated.
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

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/DatetimeOffsetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/DatetimeOffsetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/DatetimeOffsetsCommandOutput/)
</details>
<details>
<summary>
EmptyInputAndEmptyOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/EmptyInputAndEmptyOutputCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/EmptyInputAndEmptyOutputCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/EmptyInputAndEmptyOutputCommandOutput/)
</details>
<details>
<summary>
EndpointOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/EndpointOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/EndpointOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/EndpointOperationCommandOutput/)
</details>
<details>
<summary>
EndpointWithHostLabelOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/EndpointWithHostLabelOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/EndpointWithHostLabelOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/EndpointWithHostLabelOperationCommandOutput/)
</details>
<details>
<summary>
FractionalSeconds
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/FractionalSecondsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/FractionalSecondsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/FractionalSecondsCommandOutput/)
</details>
<details>
<summary>
GreetingWithErrors
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/GreetingWithErrorsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/GreetingWithErrorsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/GreetingWithErrorsCommandOutput/)
</details>
<details>
<summary>
HostWithPathOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/HostWithPathOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HostWithPathOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HostWithPathOperationCommandOutput/)
</details>
<details>
<summary>
IgnoresWrappingXmlName
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/IgnoresWrappingXmlNameCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/IgnoresWrappingXmlNameCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/IgnoresWrappingXmlNameCommandOutput/)
</details>
<details>
<summary>
NestedStructures
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/NestedStructuresCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/NestedStructuresCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/NestedStructuresCommandOutput/)
</details>
<details>
<summary>
NoInputAndOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/NoInputAndOutputCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/NoInputAndOutputCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/NoInputAndOutputCommandOutput/)
</details>
<details>
<summary>
PutWithContentEncoding
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/PutWithContentEncodingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/PutWithContentEncodingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/PutWithContentEncodingCommandOutput/)
</details>
<details>
<summary>
QueryIdempotencyTokenAutoFill
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/QueryIdempotencyTokenAutoFillCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/QueryIdempotencyTokenAutoFillCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/QueryIdempotencyTokenAutoFillCommandOutput/)
</details>
<details>
<summary>
QueryLists
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/QueryListsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/QueryListsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/QueryListsCommandOutput/)
</details>
<details>
<summary>
QueryTimestamps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/QueryTimestampsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/QueryTimestampsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/QueryTimestampsCommandOutput/)
</details>
<details>
<summary>
RecursiveXmlShapes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/RecursiveXmlShapesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/RecursiveXmlShapesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/RecursiveXmlShapesCommandOutput/)
</details>
<details>
<summary>
SimpleInputParams
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/SimpleInputParamsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/SimpleInputParamsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/SimpleInputParamsCommandOutput/)
</details>
<details>
<summary>
SimpleScalarXmlProperties
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/SimpleScalarXmlPropertiesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/SimpleScalarXmlPropertiesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/SimpleScalarXmlPropertiesCommandOutput/)
</details>
<details>
<summary>
XmlBlobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/XmlBlobsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/XmlBlobsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/XmlBlobsCommandOutput/)
</details>
<details>
<summary>
XmlEmptyBlobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/XmlEmptyBlobsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/XmlEmptyBlobsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/XmlEmptyBlobsCommandOutput/)
</details>
<details>
<summary>
XmlEmptyLists
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/XmlEmptyListsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/XmlEmptyListsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/XmlEmptyListsCommandOutput/)
</details>
<details>
<summary>
XmlEnums
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/XmlEnumsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/XmlEnumsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/XmlEnumsCommandOutput/)
</details>
<details>
<summary>
XmlIntEnums
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/XmlIntEnumsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/XmlIntEnumsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/XmlIntEnumsCommandOutput/)
</details>
<details>
<summary>
XmlLists
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/XmlListsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/XmlListsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/XmlListsCommandOutput/)
</details>
<details>
<summary>
XmlNamespaces
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/XmlNamespacesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/XmlNamespacesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/XmlNamespacesCommandOutput/)
</details>
<details>
<summary>
XmlTimestamps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/XmlTimestampsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/XmlTimestampsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/XmlTimestampsCommandOutput/)
</details>
<details>
<summary>
ContentTypeParameters
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/ContentTypeParametersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/ContentTypeParametersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/ContentTypeParametersCommandOutput/)
</details>
<details>
<summary>
DatetimeOffsets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/DatetimeOffsetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/DatetimeOffsetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/DatetimeOffsetsCommandOutput/)
</details>
<details>
<summary>
EmptyOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/EmptyOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/EmptyOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/EmptyOperationCommandOutput/)
</details>
<details>
<summary>
EndpointOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/EndpointOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/EndpointOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/EndpointOperationCommandOutput/)
</details>
<details>
<summary>
EndpointWithHostLabelOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/EndpointWithHostLabelOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/EndpointWithHostLabelOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/EndpointWithHostLabelOperationCommandOutput/)
</details>
<details>
<summary>
FractionalSeconds
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/FractionalSecondsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/FractionalSecondsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/FractionalSecondsCommandOutput/)
</details>
<details>
<summary>
GreetingWithErrors
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/GreetingWithErrorsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/GreetingWithErrorsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/GreetingWithErrorsCommandOutput/)
</details>
<details>
<summary>
HostWithPathOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/HostWithPathOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HostWithPathOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HostWithPathOperationCommandOutput/)
</details>
<details>
<summary>
JsonEnums
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/JsonEnumsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/JsonEnumsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/JsonEnumsCommandOutput/)
</details>
<details>
<summary>
JsonIntEnums
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/JsonIntEnumsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/JsonIntEnumsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/JsonIntEnumsCommandOutput/)
</details>
<details>
<summary>
JsonUnions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/JsonUnionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/JsonUnionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/JsonUnionsCommandOutput/)
</details>
<details>
<summary>
KitchenSinkOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/KitchenSinkOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/KitchenSinkOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/KitchenSinkOperationCommandOutput/)
</details>
<details>
<summary>
NullOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/NullOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/NullOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/NullOperationCommandOutput/)
</details>
<details>
<summary>
OperationWithOptionalInputOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/OperationWithOptionalInputOutputCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/OperationWithOptionalInputOutputCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/OperationWithOptionalInputOutputCommandOutput/)
</details>
<details>
<summary>
PutAndGetInlineDocuments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/PutAndGetInlineDocumentsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/PutAndGetInlineDocumentsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/PutAndGetInlineDocumentsCommandOutput/)
</details>
<details>
<summary>
PutWithContentEncoding
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/PutWithContentEncodingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/PutWithContentEncodingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/PutWithContentEncodingCommandOutput/)
</details>
<details>
<summary>
SimpleScalarProperties
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/SimpleScalarPropertiesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/SimpleScalarPropertiesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/SimpleScalarPropertiesCommandOutput/)
</details>
<details>
<summary>
SparseNullsOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/SparseNullsOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/SparseNullsOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/SparseNullsOperationCommandOutput/)
</details>
<details>
<summary>
ContentTypeParameters
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/ContentTypeParametersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/ContentTypeParametersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/ContentTypeParametersCommandOutput/)
</details>
<details>
<summary>
EmptyInputAndEmptyOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/EmptyInputAndEmptyOutputCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/EmptyInputAndEmptyOutputCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/EmptyInputAndEmptyOutputCommandOutput/)
</details>
<details>
<summary>
EndpointOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/EndpointOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/EndpointOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/EndpointOperationCommandOutput/)
</details>
<details>
<summary>
EndpointWithHostLabelOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/EndpointWithHostLabelOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/EndpointWithHostLabelOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/EndpointWithHostLabelOperationCommandOutput/)
</details>
<details>
<summary>
GreetingWithErrors
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/GreetingWithErrorsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/GreetingWithErrorsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/GreetingWithErrorsCommandOutput/)
</details>
<details>
<summary>
HostWithPathOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/HostWithPathOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HostWithPathOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HostWithPathOperationCommandOutput/)
</details>
<details>
<summary>
JsonUnions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/JsonUnionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/JsonUnionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/JsonUnionsCommandOutput/)
</details>
<details>
<summary>
NoInputAndNoOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/NoInputAndNoOutputCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/NoInputAndNoOutputCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/NoInputAndNoOutputCommandOutput/)
</details>
<details>
<summary>
NoInputAndOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/NoInputAndOutputCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/NoInputAndOutputCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/NoInputAndOutputCommandOutput/)
</details>
<details>
<summary>
OperationWithDefaults
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/OperationWithDefaultsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/OperationWithDefaultsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/OperationWithDefaultsCommandOutput/)
</details>
<details>
<summary>
OperationWithNestedStructure
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/OperationWithNestedStructureCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/OperationWithNestedStructureCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/OperationWithNestedStructureCommandOutput/)
</details>
<details>
<summary>
OperationWithRequiredMembers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/OperationWithRequiredMembersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/OperationWithRequiredMembersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/OperationWithRequiredMembersCommandOutput/)
</details>
<details>
<summary>
OperationWithRequiredMembersWithDefaults
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/OperationWithRequiredMembersWithDefaultsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/OperationWithRequiredMembersWithDefaultsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/OperationWithRequiredMembersWithDefaultsCommandOutput/)
</details>
<details>
<summary>
PutWithContentEncoding
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/PutWithContentEncodingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/PutWithContentEncodingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/PutWithContentEncodingCommandOutput/)
</details>
<details>
<summary>
QueryCompatibleOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/QueryCompatibleOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/QueryCompatibleOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/QueryCompatibleOperationCommandOutput/)
</details>
<details>
<summary>
QueryIncompatibleOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/QueryIncompatibleOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/QueryIncompatibleOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/QueryIncompatibleOperationCommandOutput/)
</details>
<details>
<summary>
SimpleScalarProperties
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/SimpleScalarPropertiesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/SimpleScalarPropertiesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/SimpleScalarPropertiesCommandOutput/)
</details>
<details>
<summary>
AcceptHeaderStarService
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/AcceptHeaderStarServiceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/AcceptHeaderStarServiceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/AcceptHeaderStarServiceCommandOutput/)
</details>
<details>
<summary>
DatetimeOffsets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/DatetimeOffsetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/DatetimeOffsetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/DatetimeOffsetsCommandOutput/)
</details>
<details>
<summary>
EmptyInputAndEmptyOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/EmptyInputAndEmptyOutputCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/EmptyInputAndEmptyOutputCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/EmptyInputAndEmptyOutputCommandOutput/)
</details>
<details>
<summary>
EndpointOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/EndpointOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/EndpointOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/EndpointOperationCommandOutput/)
</details>
<details>
<summary>
EndpointWithHostLabelOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/EndpointWithHostLabelOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/EndpointWithHostLabelOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/EndpointWithHostLabelOperationCommandOutput/)
</details>
<details>
<summary>
FlattenedXmlMap
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/FlattenedXmlMapCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/FlattenedXmlMapCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/FlattenedXmlMapCommandOutput/)
</details>
<details>
<summary>
FlattenedXmlMapWithXmlName
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/FlattenedXmlMapWithXmlNameCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/FlattenedXmlMapWithXmlNameCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/FlattenedXmlMapWithXmlNameCommandOutput/)
</details>
<details>
<summary>
FlattenedXmlMapWithXmlNamespace
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/FlattenedXmlMapWithXmlNamespaceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/FlattenedXmlMapWithXmlNamespaceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/FlattenedXmlMapWithXmlNamespaceCommandOutput/)
</details>
<details>
<summary>
FractionalSeconds
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/FractionalSecondsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/FractionalSecondsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/FractionalSecondsCommandOutput/)
</details>
<details>
<summary>
GreetingWithErrors
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/GreetingWithErrorsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/GreetingWithErrorsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/GreetingWithErrorsCommandOutput/)
</details>
<details>
<summary>
HostWithPathOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/HostWithPathOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HostWithPathOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HostWithPathOperationCommandOutput/)
</details>
<details>
<summary>
IgnoresWrappingXmlName
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/IgnoresWrappingXmlNameCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/IgnoresWrappingXmlNameCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/IgnoresWrappingXmlNameCommandOutput/)
</details>
<details>
<summary>
NestedStructures
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/NestedStructuresCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/NestedStructuresCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/NestedStructuresCommandOutput/)
</details>
<details>
<summary>
NoInputAndNoOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/NoInputAndNoOutputCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/NoInputAndNoOutputCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/NoInputAndNoOutputCommandOutput/)
</details>
<details>
<summary>
NoInputAndOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/NoInputAndOutputCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/NoInputAndOutputCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/NoInputAndOutputCommandOutput/)
</details>
<details>
<summary>
PutWithContentEncoding
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/PutWithContentEncodingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/PutWithContentEncodingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/PutWithContentEncodingCommandOutput/)
</details>
<details>
<summary>
QueryIdempotencyTokenAutoFill
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/QueryIdempotencyTokenAutoFillCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/QueryIdempotencyTokenAutoFillCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/QueryIdempotencyTokenAutoFillCommandOutput/)
</details>
<details>
<summary>
QueryLists
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/QueryListsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/QueryListsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/QueryListsCommandOutput/)
</details>
<details>
<summary>
QueryMaps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/QueryMapsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/QueryMapsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/QueryMapsCommandOutput/)
</details>
<details>
<summary>
QueryTimestamps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/QueryTimestampsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/QueryTimestampsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/QueryTimestampsCommandOutput/)
</details>
<details>
<summary>
RecursiveXmlShapes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/RecursiveXmlShapesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/RecursiveXmlShapesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/RecursiveXmlShapesCommandOutput/)
</details>
<details>
<summary>
SimpleInputParams
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/SimpleInputParamsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/SimpleInputParamsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/SimpleInputParamsCommandOutput/)
</details>
<details>
<summary>
SimpleScalarXmlProperties
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/SimpleScalarXmlPropertiesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/SimpleScalarXmlPropertiesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/SimpleScalarXmlPropertiesCommandOutput/)
</details>
<details>
<summary>
XmlBlobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/XmlBlobsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/XmlBlobsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/XmlBlobsCommandOutput/)
</details>
<details>
<summary>
XmlEmptyBlobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/XmlEmptyBlobsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/XmlEmptyBlobsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/XmlEmptyBlobsCommandOutput/)
</details>
<details>
<summary>
XmlEmptyLists
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/XmlEmptyListsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/XmlEmptyListsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/XmlEmptyListsCommandOutput/)
</details>
<details>
<summary>
XmlEmptyMaps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/XmlEmptyMapsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/XmlEmptyMapsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/XmlEmptyMapsCommandOutput/)
</details>
<details>
<summary>
XmlEnums
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/XmlEnumsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/XmlEnumsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/XmlEnumsCommandOutput/)
</details>
<details>
<summary>
XmlIntEnums
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/XmlIntEnumsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/XmlIntEnumsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/XmlIntEnumsCommandOutput/)
</details>
<details>
<summary>
XmlLists
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/XmlListsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/XmlListsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/XmlListsCommandOutput/)
</details>
<details>
<summary>
XmlMaps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/XmlMapsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/XmlMapsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/XmlMapsCommandOutput/)
</details>
<details>
<summary>
XmlMapsXmlName
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/XmlMapsXmlNameCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/XmlMapsXmlNameCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/XmlMapsXmlNameCommandOutput/)
</details>
<details>
<summary>
XmlNamespaces
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/XmlNamespacesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/XmlNamespacesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/XmlNamespacesCommandOutput/)
</details>
<details>
<summary>
XmlTimestamps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/XmlTimestampsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/XmlTimestampsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/XmlTimestampsCommandOutput/)
</details>
<details>
<summary>
AllQueryStringTypes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/AllQueryStringTypesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/AllQueryStringTypesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/AllQueryStringTypesCommandOutput/)
</details>
<details>
<summary>
ConstantAndVariableQueryString
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/ConstantAndVariableQueryStringCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/ConstantAndVariableQueryStringCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/ConstantAndVariableQueryStringCommandOutput/)
</details>
<details>
<summary>
ConstantQueryString
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/ConstantQueryStringCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/ConstantQueryStringCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/ConstantQueryStringCommandOutput/)
</details>
<details>
<summary>
ContentTypeParameters
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/ContentTypeParametersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/ContentTypeParametersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/ContentTypeParametersCommandOutput/)
</details>
<details>
<summary>
DatetimeOffsets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/DatetimeOffsetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/DatetimeOffsetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/DatetimeOffsetsCommandOutput/)
</details>
<details>
<summary>
DocumentType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/DocumentTypeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/DocumentTypeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/DocumentTypeCommandOutput/)
</details>
<details>
<summary>
DocumentTypeAsMapValue
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/DocumentTypeAsMapValueCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/DocumentTypeAsMapValueCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/DocumentTypeAsMapValueCommandOutput/)
</details>
<details>
<summary>
DocumentTypeAsPayload
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/DocumentTypeAsPayloadCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/DocumentTypeAsPayloadCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/DocumentTypeAsPayloadCommandOutput/)
</details>
<details>
<summary>
DuplexStream
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/DuplexStreamCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/DuplexStreamCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/DuplexStreamCommandOutput/)
</details>
<details>
<summary>
DuplexStreamWithDistinctStreams
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/DuplexStreamWithDistinctStreamsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/DuplexStreamWithDistinctStreamsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/DuplexStreamWithDistinctStreamsCommandOutput/)
</details>
<details>
<summary>
DuplexStreamWithInitialMessages
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/DuplexStreamWithInitialMessagesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/DuplexStreamWithInitialMessagesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/DuplexStreamWithInitialMessagesCommandOutput/)
</details>
<details>
<summary>
EmptyInputAndEmptyOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/EmptyInputAndEmptyOutputCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/EmptyInputAndEmptyOutputCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/EmptyInputAndEmptyOutputCommandOutput/)
</details>
<details>
<summary>
EndpointOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/EndpointOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/EndpointOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/EndpointOperationCommandOutput/)
</details>
<details>
<summary>
EndpointWithHostLabelOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/EndpointWithHostLabelOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/EndpointWithHostLabelOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/EndpointWithHostLabelOperationCommandOutput/)
</details>
<details>
<summary>
FractionalSeconds
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/FractionalSecondsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/FractionalSecondsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/FractionalSecondsCommandOutput/)
</details>
<details>
<summary>
GreetingWithErrors
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/GreetingWithErrorsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/GreetingWithErrorsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/GreetingWithErrorsCommandOutput/)
</details>
<details>
<summary>
HostWithPathOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/HostWithPathOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HostWithPathOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HostWithPathOperationCommandOutput/)
</details>
<details>
<summary>
HttpChecksumRequired
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/HttpChecksumRequiredCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HttpChecksumRequiredCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HttpChecksumRequiredCommandOutput/)
</details>
<details>
<summary>
HttpEmptyPrefixHeaders
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/HttpEmptyPrefixHeadersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HttpEmptyPrefixHeadersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HttpEmptyPrefixHeadersCommandOutput/)
</details>
<details>
<summary>
HttpEnumPayload
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/HttpEnumPayloadCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HttpEnumPayloadCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HttpEnumPayloadCommandOutput/)
</details>
<details>
<summary>
HttpPayloadTraits
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/HttpPayloadTraitsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HttpPayloadTraitsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HttpPayloadTraitsCommandOutput/)
</details>
<details>
<summary>
HttpPayloadTraitsWithMediaType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/HttpPayloadTraitsWithMediaTypeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HttpPayloadTraitsWithMediaTypeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HttpPayloadTraitsWithMediaTypeCommandOutput/)
</details>
<details>
<summary>
HttpPayloadWithStructure
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/HttpPayloadWithStructureCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HttpPayloadWithStructureCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HttpPayloadWithStructureCommandOutput/)
</details>
<details>
<summary>
HttpPayloadWithUnion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/HttpPayloadWithUnionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HttpPayloadWithUnionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HttpPayloadWithUnionCommandOutput/)
</details>
<details>
<summary>
HttpPrefixHeaders
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/HttpPrefixHeadersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HttpPrefixHeadersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HttpPrefixHeadersCommandOutput/)
</details>
<details>
<summary>
HttpPrefixHeadersInResponse
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/HttpPrefixHeadersInResponseCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HttpPrefixHeadersInResponseCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HttpPrefixHeadersInResponseCommandOutput/)
</details>
<details>
<summary>
HttpQueryParamsOnlyOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/HttpQueryParamsOnlyOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HttpQueryParamsOnlyOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HttpQueryParamsOnlyOperationCommandOutput/)
</details>
<details>
<summary>
HttpRequestWithFloatLabels
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/HttpRequestWithFloatLabelsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HttpRequestWithFloatLabelsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HttpRequestWithFloatLabelsCommandOutput/)
</details>
<details>
<summary>
HttpRequestWithGreedyLabelInPath
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/HttpRequestWithGreedyLabelInPathCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HttpRequestWithGreedyLabelInPathCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HttpRequestWithGreedyLabelInPathCommandOutput/)
</details>
<details>
<summary>
HttpRequestWithLabels
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/HttpRequestWithLabelsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HttpRequestWithLabelsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HttpRequestWithLabelsCommandOutput/)
</details>
<details>
<summary>
HttpRequestWithLabelsAndTimestampFormat
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/HttpRequestWithLabelsAndTimestampFormatCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HttpRequestWithLabelsAndTimestampFormatCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HttpRequestWithLabelsAndTimestampFormatCommandOutput/)
</details>
<details>
<summary>
HttpRequestWithRegexLiteral
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/HttpRequestWithRegexLiteralCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HttpRequestWithRegexLiteralCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HttpRequestWithRegexLiteralCommandOutput/)
</details>
<details>
<summary>
HttpResponseCode
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/HttpResponseCodeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HttpResponseCodeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HttpResponseCodeCommandOutput/)
</details>
<details>
<summary>
HttpStringPayload
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/HttpStringPayloadCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HttpStringPayloadCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HttpStringPayloadCommandOutput/)
</details>
<details>
<summary>
IgnoreQueryParamsInResponse
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/IgnoreQueryParamsInResponseCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/IgnoreQueryParamsInResponseCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/IgnoreQueryParamsInResponseCommandOutput/)
</details>
<details>
<summary>
InputAndOutputWithHeaders
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/InputAndOutputWithHeadersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/InputAndOutputWithHeadersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/InputAndOutputWithHeadersCommandOutput/)
</details>
<details>
<summary>
InputStream
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/InputStreamCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/InputStreamCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/InputStreamCommandOutput/)
</details>
<details>
<summary>
InputStreamWithInitialRequest
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/InputStreamWithInitialRequestCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/InputStreamWithInitialRequestCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/InputStreamWithInitialRequestCommandOutput/)
</details>
<details>
<summary>
JsonBlobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/JsonBlobsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/JsonBlobsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/JsonBlobsCommandOutput/)
</details>
<details>
<summary>
JsonEnums
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/JsonEnumsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/JsonEnumsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/JsonEnumsCommandOutput/)
</details>
<details>
<summary>
JsonIntEnums
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/JsonIntEnumsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/JsonIntEnumsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/JsonIntEnumsCommandOutput/)
</details>
<details>
<summary>
JsonLists
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/JsonListsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/JsonListsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/JsonListsCommandOutput/)
</details>
<details>
<summary>
JsonMaps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/JsonMapsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/JsonMapsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/JsonMapsCommandOutput/)
</details>
<details>
<summary>
JsonTimestamps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/JsonTimestampsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/JsonTimestampsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/JsonTimestampsCommandOutput/)
</details>
<details>
<summary>
JsonUnions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/JsonUnionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/JsonUnionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/JsonUnionsCommandOutput/)
</details>
<details>
<summary>
MalformedAcceptWithBody
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/MalformedAcceptWithBodyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedAcceptWithBodyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedAcceptWithBodyCommandOutput/)
</details>
<details>
<summary>
MalformedAcceptWithGenericString
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/MalformedAcceptWithGenericStringCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedAcceptWithGenericStringCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedAcceptWithGenericStringCommandOutput/)
</details>
<details>
<summary>
MalformedAcceptWithPayload
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/MalformedAcceptWithPayloadCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedAcceptWithPayloadCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedAcceptWithPayloadCommandOutput/)
</details>
<details>
<summary>
MalformedBlob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/MalformedBlobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedBlobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedBlobCommandOutput/)
</details>
<details>
<summary>
MalformedBoolean
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/MalformedBooleanCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedBooleanCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedBooleanCommandOutput/)
</details>
<details>
<summary>
MalformedByte
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/MalformedByteCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedByteCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedByteCommandOutput/)
</details>
<details>
<summary>
MalformedContentTypeWithBody
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/MalformedContentTypeWithBodyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedContentTypeWithBodyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedContentTypeWithBodyCommandOutput/)
</details>
<details>
<summary>
MalformedContentTypeWithGenericString
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/MalformedContentTypeWithGenericStringCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedContentTypeWithGenericStringCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedContentTypeWithGenericStringCommandOutput/)
</details>
<details>
<summary>
MalformedContentTypeWithoutBody
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/MalformedContentTypeWithoutBodyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedContentTypeWithoutBodyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedContentTypeWithoutBodyCommandOutput/)
</details>
<details>
<summary>
MalformedContentTypeWithoutBodyEmptyInput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/MalformedContentTypeWithoutBodyEmptyInputCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedContentTypeWithoutBodyEmptyInputCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedContentTypeWithoutBodyEmptyInputCommandOutput/)
</details>
<details>
<summary>
MalformedContentTypeWithPayload
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/MalformedContentTypeWithPayloadCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedContentTypeWithPayloadCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedContentTypeWithPayloadCommandOutput/)
</details>
<details>
<summary>
MalformedDouble
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/MalformedDoubleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedDoubleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedDoubleCommandOutput/)
</details>
<details>
<summary>
MalformedFloat
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/MalformedFloatCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedFloatCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedFloatCommandOutput/)
</details>
<details>
<summary>
MalformedInteger
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/MalformedIntegerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedIntegerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedIntegerCommandOutput/)
</details>
<details>
<summary>
MalformedList
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/MalformedListCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedListCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedListCommandOutput/)
</details>
<details>
<summary>
MalformedLong
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/MalformedLongCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedLongCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedLongCommandOutput/)
</details>
<details>
<summary>
MalformedMap
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/MalformedMapCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedMapCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedMapCommandOutput/)
</details>
<details>
<summary>
MalformedRequestBody
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/MalformedRequestBodyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedRequestBodyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedRequestBodyCommandOutput/)
</details>
<details>
<summary>
MalformedShort
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/MalformedShortCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedShortCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedShortCommandOutput/)
</details>
<details>
<summary>
MalformedString
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/MalformedStringCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedStringCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedStringCommandOutput/)
</details>
<details>
<summary>
MalformedTimestampBodyDateTime
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/MalformedTimestampBodyDateTimeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedTimestampBodyDateTimeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedTimestampBodyDateTimeCommandOutput/)
</details>
<details>
<summary>
MalformedTimestampBodyDefault
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/MalformedTimestampBodyDefaultCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedTimestampBodyDefaultCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedTimestampBodyDefaultCommandOutput/)
</details>
<details>
<summary>
MalformedTimestampBodyHttpDate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/MalformedTimestampBodyHttpDateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedTimestampBodyHttpDateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedTimestampBodyHttpDateCommandOutput/)
</details>
<details>
<summary>
MalformedTimestampHeaderDateTime
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/MalformedTimestampHeaderDateTimeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedTimestampHeaderDateTimeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedTimestampHeaderDateTimeCommandOutput/)
</details>
<details>
<summary>
MalformedTimestampHeaderDefault
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/MalformedTimestampHeaderDefaultCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedTimestampHeaderDefaultCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedTimestampHeaderDefaultCommandOutput/)
</details>
<details>
<summary>
MalformedTimestampHeaderEpoch
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/MalformedTimestampHeaderEpochCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedTimestampHeaderEpochCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedTimestampHeaderEpochCommandOutput/)
</details>
<details>
<summary>
MalformedTimestampPathDefault
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/MalformedTimestampPathDefaultCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedTimestampPathDefaultCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedTimestampPathDefaultCommandOutput/)
</details>
<details>
<summary>
MalformedTimestampPathEpoch
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/MalformedTimestampPathEpochCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedTimestampPathEpochCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedTimestampPathEpochCommandOutput/)
</details>
<details>
<summary>
MalformedTimestampPathHttpDate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/MalformedTimestampPathHttpDateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedTimestampPathHttpDateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedTimestampPathHttpDateCommandOutput/)
</details>
<details>
<summary>
MalformedTimestampQueryDefault
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/MalformedTimestampQueryDefaultCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedTimestampQueryDefaultCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedTimestampQueryDefaultCommandOutput/)
</details>
<details>
<summary>
MalformedTimestampQueryEpoch
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/MalformedTimestampQueryEpochCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedTimestampQueryEpochCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedTimestampQueryEpochCommandOutput/)
</details>
<details>
<summary>
MalformedTimestampQueryHttpDate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/MalformedTimestampQueryHttpDateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedTimestampQueryHttpDateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedTimestampQueryHttpDateCommandOutput/)
</details>
<details>
<summary>
MalformedUnion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/MalformedUnionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedUnionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedUnionCommandOutput/)
</details>
<details>
<summary>
MediaTypeHeader
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/MediaTypeHeaderCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MediaTypeHeaderCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MediaTypeHeaderCommandOutput/)
</details>
<details>
<summary>
NoInputAndNoOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/NoInputAndNoOutputCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/NoInputAndNoOutputCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/NoInputAndNoOutputCommandOutput/)
</details>
<details>
<summary>
NoInputAndOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/NoInputAndOutputCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/NoInputAndOutputCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/NoInputAndOutputCommandOutput/)
</details>
<details>
<summary>
NullAndEmptyHeadersClient
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/NullAndEmptyHeadersClientCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/NullAndEmptyHeadersClientCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/NullAndEmptyHeadersClientCommandOutput/)
</details>
<details>
<summary>
NullAndEmptyHeadersServer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/NullAndEmptyHeadersServerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/NullAndEmptyHeadersServerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/NullAndEmptyHeadersServerCommandOutput/)
</details>
<details>
<summary>
OmitsNullSerializesEmptyString
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/OmitsNullSerializesEmptyStringCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/OmitsNullSerializesEmptyStringCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/OmitsNullSerializesEmptyStringCommandOutput/)
</details>
<details>
<summary>
OmitsSerializingEmptyLists
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/OmitsSerializingEmptyListsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/OmitsSerializingEmptyListsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/OmitsSerializingEmptyListsCommandOutput/)
</details>
<details>
<summary>
OperationWithDefaults
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/OperationWithDefaultsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/OperationWithDefaultsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/OperationWithDefaultsCommandOutput/)
</details>
<details>
<summary>
OperationWithNestedStructure
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/OperationWithNestedStructureCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/OperationWithNestedStructureCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/OperationWithNestedStructureCommandOutput/)
</details>
<details>
<summary>
OutputStream
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/OutputStreamCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/OutputStreamCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/OutputStreamCommandOutput/)
</details>
<details>
<summary>
OutputStreamWithInitialResponse
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/OutputStreamWithInitialResponseCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/OutputStreamWithInitialResponseCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/OutputStreamWithInitialResponseCommandOutput/)
</details>
<details>
<summary>
PostPlayerAction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/PostPlayerActionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/PostPlayerActionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/PostPlayerActionCommandOutput/)
</details>
<details>
<summary>
PostUnionWithJsonName
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/PostUnionWithJsonNameCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/PostUnionWithJsonNameCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/PostUnionWithJsonNameCommandOutput/)
</details>
<details>
<summary>
PutWithContentEncoding
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/PutWithContentEncodingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/PutWithContentEncodingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/PutWithContentEncodingCommandOutput/)
</details>
<details>
<summary>
QueryIdempotencyTokenAutoFill
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/QueryIdempotencyTokenAutoFillCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/QueryIdempotencyTokenAutoFillCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/QueryIdempotencyTokenAutoFillCommandOutput/)
</details>
<details>
<summary>
QueryParamsAsStringListMap
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/QueryParamsAsStringListMapCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/QueryParamsAsStringListMapCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/QueryParamsAsStringListMapCommandOutput/)
</details>
<details>
<summary>
QueryPrecedence
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/QueryPrecedenceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/QueryPrecedenceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/QueryPrecedenceCommandOutput/)
</details>
<details>
<summary>
RecursiveShapes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/RecursiveShapesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/RecursiveShapesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/RecursiveShapesCommandOutput/)
</details>
<details>
<summary>
ResponseCodeHttpFallback
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/ResponseCodeHttpFallbackCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/ResponseCodeHttpFallbackCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/ResponseCodeHttpFallbackCommandOutput/)
</details>
<details>
<summary>
ResponseCodeRequired
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/ResponseCodeRequiredCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/ResponseCodeRequiredCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/ResponseCodeRequiredCommandOutput/)
</details>
<details>
<summary>
SimpleScalarProperties
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/SimpleScalarPropertiesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/SimpleScalarPropertiesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/SimpleScalarPropertiesCommandOutput/)
</details>
<details>
<summary>
SparseJsonLists
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/SparseJsonListsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/SparseJsonListsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/SparseJsonListsCommandOutput/)
</details>
<details>
<summary>
SparseJsonMaps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/SparseJsonMapsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/SparseJsonMapsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/SparseJsonMapsCommandOutput/)
</details>
<details>
<summary>
StreamingTraits
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/StreamingTraitsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/StreamingTraitsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/StreamingTraitsCommandOutput/)
</details>
<details>
<summary>
StreamingTraitsRequireLength
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/StreamingTraitsRequireLengthCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/StreamingTraitsRequireLengthCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/StreamingTraitsRequireLengthCommandOutput/)
</details>
<details>
<summary>
StreamingTraitsWithMediaType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/StreamingTraitsWithMediaTypeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/StreamingTraitsWithMediaTypeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/StreamingTraitsWithMediaTypeCommandOutput/)
</details>
<details>
<summary>
TestBodyStructure
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/TestBodyStructureCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/TestBodyStructureCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/TestBodyStructureCommandOutput/)
</details>
<details>
<summary>
TestGetNoInputNoPayload
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/TestGetNoInputNoPayloadCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/TestGetNoInputNoPayloadCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/TestGetNoInputNoPayloadCommandOutput/)
</details>
<details>
<summary>
TestGetNoPayload
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/TestGetNoPayloadCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/TestGetNoPayloadCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/TestGetNoPayloadCommandOutput/)
</details>
<details>
<summary>
TestPayloadBlob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/TestPayloadBlobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/TestPayloadBlobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/TestPayloadBlobCommandOutput/)
</details>
<details>
<summary>
TestPayloadStructure
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/TestPayloadStructureCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/TestPayloadStructureCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/TestPayloadStructureCommandOutput/)
</details>
<details>
<summary>
TestPostNoInputNoPayload
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/TestPostNoInputNoPayloadCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/TestPostNoInputNoPayloadCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/TestPostNoInputNoPayloadCommandOutput/)
</details>
<details>
<summary>
TestPostNoPayload
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/TestPostNoPayloadCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/TestPostNoPayloadCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/TestPostNoPayloadCommandOutput/)
</details>
<details>
<summary>
TimestampFormatHeaders
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/TimestampFormatHeadersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/TimestampFormatHeadersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/TimestampFormatHeadersCommandOutput/)
</details>
<details>
<summary>
UnitInputAndOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/UnitInputAndOutputCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/UnitInputAndOutputCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/UnitInputAndOutputCommandOutput/)
</details>
<details>
<summary>
MalformedEnum
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/MalformedEnumCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedEnumCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedEnumCommandOutput/)
</details>
<details>
<summary>
MalformedLength
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/MalformedLengthCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedLengthCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedLengthCommandOutput/)
</details>
<details>
<summary>
MalformedLengthOverride
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/MalformedLengthOverrideCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedLengthOverrideCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedLengthOverrideCommandOutput/)
</details>
<details>
<summary>
MalformedLengthQueryString
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/MalformedLengthQueryStringCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedLengthQueryStringCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedLengthQueryStringCommandOutput/)
</details>
<details>
<summary>
MalformedPattern
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/MalformedPatternCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedPatternCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedPatternCommandOutput/)
</details>
<details>
<summary>
MalformedPatternOverride
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/MalformedPatternOverrideCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedPatternOverrideCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedPatternOverrideCommandOutput/)
</details>
<details>
<summary>
MalformedRange
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/MalformedRangeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedRangeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedRangeCommandOutput/)
</details>
<details>
<summary>
MalformedRangeOverride
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/MalformedRangeOverrideCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedRangeOverrideCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedRangeOverrideCommandOutput/)
</details>
<details>
<summary>
MalformedRequired
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/MalformedRequiredCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedRequiredCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedRequiredCommandOutput/)
</details>
<details>
<summary>
MalformedUniqueItems
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/MalformedUniqueItemsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedUniqueItemsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/MalformedUniqueItemsCommandOutput/)
</details>
<details>
<summary>
RecursiveStructures
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/RecursiveStructuresCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/RecursiveStructuresCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/RecursiveStructuresCommandOutput/)
</details>
<details>
<summary>
SensitiveValidation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/SensitiveValidationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/SensitiveValidationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/SensitiveValidationCommandOutput/)
</details>
<details>
<summary>
AllQueryStringTypes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/AllQueryStringTypesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/AllQueryStringTypesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/AllQueryStringTypesCommandOutput/)
</details>
<details>
<summary>
BodyWithXmlName
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/BodyWithXmlNameCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/BodyWithXmlNameCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/BodyWithXmlNameCommandOutput/)
</details>
<details>
<summary>
ConstantAndVariableQueryString
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/ConstantAndVariableQueryStringCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/ConstantAndVariableQueryStringCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/ConstantAndVariableQueryStringCommandOutput/)
</details>
<details>
<summary>
ConstantQueryString
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/ConstantQueryStringCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/ConstantQueryStringCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/ConstantQueryStringCommandOutput/)
</details>
<details>
<summary>
ContentTypeParameters
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/ContentTypeParametersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/ContentTypeParametersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/ContentTypeParametersCommandOutput/)
</details>
<details>
<summary>
DatetimeOffsets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/DatetimeOffsetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/DatetimeOffsetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/DatetimeOffsetsCommandOutput/)
</details>
<details>
<summary>
EmptyInputAndEmptyOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/EmptyInputAndEmptyOutputCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/EmptyInputAndEmptyOutputCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/EmptyInputAndEmptyOutputCommandOutput/)
</details>
<details>
<summary>
EndpointOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/EndpointOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/EndpointOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/EndpointOperationCommandOutput/)
</details>
<details>
<summary>
EndpointWithHostLabelHeaderOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/EndpointWithHostLabelHeaderOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/EndpointWithHostLabelHeaderOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/EndpointWithHostLabelHeaderOperationCommandOutput/)
</details>
<details>
<summary>
EndpointWithHostLabelOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/EndpointWithHostLabelOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/EndpointWithHostLabelOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/EndpointWithHostLabelOperationCommandOutput/)
</details>
<details>
<summary>
FlattenedXmlMap
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/FlattenedXmlMapCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/FlattenedXmlMapCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/FlattenedXmlMapCommandOutput/)
</details>
<details>
<summary>
FlattenedXmlMapWithXmlName
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/FlattenedXmlMapWithXmlNameCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/FlattenedXmlMapWithXmlNameCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/FlattenedXmlMapWithXmlNameCommandOutput/)
</details>
<details>
<summary>
FlattenedXmlMapWithXmlNamespace
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/FlattenedXmlMapWithXmlNamespaceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/FlattenedXmlMapWithXmlNamespaceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/FlattenedXmlMapWithXmlNamespaceCommandOutput/)
</details>
<details>
<summary>
FractionalSeconds
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/FractionalSecondsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/FractionalSecondsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/FractionalSecondsCommandOutput/)
</details>
<details>
<summary>
GreetingWithErrors
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/GreetingWithErrorsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/GreetingWithErrorsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/GreetingWithErrorsCommandOutput/)
</details>
<details>
<summary>
HttpEmptyPrefixHeaders
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/HttpEmptyPrefixHeadersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HttpEmptyPrefixHeadersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HttpEmptyPrefixHeadersCommandOutput/)
</details>
<details>
<summary>
HttpEnumPayload
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/HttpEnumPayloadCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HttpEnumPayloadCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HttpEnumPayloadCommandOutput/)
</details>
<details>
<summary>
HttpPayloadTraits
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/HttpPayloadTraitsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HttpPayloadTraitsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HttpPayloadTraitsCommandOutput/)
</details>
<details>
<summary>
HttpPayloadTraitsWithMediaType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/HttpPayloadTraitsWithMediaTypeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HttpPayloadTraitsWithMediaTypeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HttpPayloadTraitsWithMediaTypeCommandOutput/)
</details>
<details>
<summary>
HttpPayloadWithMemberXmlName
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/HttpPayloadWithMemberXmlNameCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HttpPayloadWithMemberXmlNameCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HttpPayloadWithMemberXmlNameCommandOutput/)
</details>
<details>
<summary>
HttpPayloadWithStructure
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/HttpPayloadWithStructureCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HttpPayloadWithStructureCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HttpPayloadWithStructureCommandOutput/)
</details>
<details>
<summary>
HttpPayloadWithUnion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/HttpPayloadWithUnionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HttpPayloadWithUnionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HttpPayloadWithUnionCommandOutput/)
</details>
<details>
<summary>
HttpPayloadWithXmlName
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/HttpPayloadWithXmlNameCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HttpPayloadWithXmlNameCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HttpPayloadWithXmlNameCommandOutput/)
</details>
<details>
<summary>
HttpPayloadWithXmlNamespace
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/HttpPayloadWithXmlNamespaceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HttpPayloadWithXmlNamespaceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HttpPayloadWithXmlNamespaceCommandOutput/)
</details>
<details>
<summary>
HttpPayloadWithXmlNamespaceAndPrefix
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/HttpPayloadWithXmlNamespaceAndPrefixCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HttpPayloadWithXmlNamespaceAndPrefixCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HttpPayloadWithXmlNamespaceAndPrefixCommandOutput/)
</details>
<details>
<summary>
HttpPrefixHeaders
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/HttpPrefixHeadersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HttpPrefixHeadersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HttpPrefixHeadersCommandOutput/)
</details>
<details>
<summary>
HttpRequestWithFloatLabels
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/HttpRequestWithFloatLabelsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HttpRequestWithFloatLabelsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HttpRequestWithFloatLabelsCommandOutput/)
</details>
<details>
<summary>
HttpRequestWithGreedyLabelInPath
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/HttpRequestWithGreedyLabelInPathCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HttpRequestWithGreedyLabelInPathCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HttpRequestWithGreedyLabelInPathCommandOutput/)
</details>
<details>
<summary>
HttpRequestWithLabels
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/HttpRequestWithLabelsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HttpRequestWithLabelsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HttpRequestWithLabelsCommandOutput/)
</details>
<details>
<summary>
HttpRequestWithLabelsAndTimestampFormat
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/HttpRequestWithLabelsAndTimestampFormatCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HttpRequestWithLabelsAndTimestampFormatCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HttpRequestWithLabelsAndTimestampFormatCommandOutput/)
</details>
<details>
<summary>
HttpResponseCode
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/HttpResponseCodeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HttpResponseCodeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HttpResponseCodeCommandOutput/)
</details>
<details>
<summary>
HttpStringPayload
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/HttpStringPayloadCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HttpStringPayloadCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/HttpStringPayloadCommandOutput/)
</details>
<details>
<summary>
IgnoreQueryParamsInResponse
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/IgnoreQueryParamsInResponseCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/IgnoreQueryParamsInResponseCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/IgnoreQueryParamsInResponseCommandOutput/)
</details>
<details>
<summary>
InputAndOutputWithHeaders
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/InputAndOutputWithHeadersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/InputAndOutputWithHeadersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/InputAndOutputWithHeadersCommandOutput/)
</details>
<details>
<summary>
NestedXmlMaps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/NestedXmlMapsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/NestedXmlMapsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/NestedXmlMapsCommandOutput/)
</details>
<details>
<summary>
NestedXmlMapWithXmlName
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/NestedXmlMapWithXmlNameCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/NestedXmlMapWithXmlNameCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/NestedXmlMapWithXmlNameCommandOutput/)
</details>
<details>
<summary>
NoInputAndNoOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/NoInputAndNoOutputCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/NoInputAndNoOutputCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/NoInputAndNoOutputCommandOutput/)
</details>
<details>
<summary>
NoInputAndOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/NoInputAndOutputCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/NoInputAndOutputCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/NoInputAndOutputCommandOutput/)
</details>
<details>
<summary>
NullAndEmptyHeadersClient
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/NullAndEmptyHeadersClientCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/NullAndEmptyHeadersClientCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/NullAndEmptyHeadersClientCommandOutput/)
</details>
<details>
<summary>
NullAndEmptyHeadersServer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/NullAndEmptyHeadersServerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/NullAndEmptyHeadersServerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/NullAndEmptyHeadersServerCommandOutput/)
</details>
<details>
<summary>
OmitsNullSerializesEmptyString
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/OmitsNullSerializesEmptyStringCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/OmitsNullSerializesEmptyStringCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/OmitsNullSerializesEmptyStringCommandOutput/)
</details>
<details>
<summary>
PutWithContentEncoding
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/PutWithContentEncodingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/PutWithContentEncodingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/PutWithContentEncodingCommandOutput/)
</details>
<details>
<summary>
QueryIdempotencyTokenAutoFill
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/QueryIdempotencyTokenAutoFillCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/QueryIdempotencyTokenAutoFillCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/QueryIdempotencyTokenAutoFillCommandOutput/)
</details>
<details>
<summary>
QueryParamsAsStringListMap
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/QueryParamsAsStringListMapCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/QueryParamsAsStringListMapCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/QueryParamsAsStringListMapCommandOutput/)
</details>
<details>
<summary>
QueryPrecedence
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/QueryPrecedenceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/QueryPrecedenceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/QueryPrecedenceCommandOutput/)
</details>
<details>
<summary>
RecursiveShapes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/RecursiveShapesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/RecursiveShapesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/RecursiveShapesCommandOutput/)
</details>
<details>
<summary>
SimpleScalarProperties
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/SimpleScalarPropertiesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/SimpleScalarPropertiesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/SimpleScalarPropertiesCommandOutput/)
</details>
<details>
<summary>
TimestampFormatHeaders
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/TimestampFormatHeadersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/TimestampFormatHeadersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/TimestampFormatHeadersCommandOutput/)
</details>
<details>
<summary>
XmlAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/XmlAttributesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/XmlAttributesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/XmlAttributesCommandOutput/)
</details>
<details>
<summary>
XmlAttributesOnPayload
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/XmlAttributesOnPayloadCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/XmlAttributesOnPayloadCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/XmlAttributesOnPayloadCommandOutput/)
</details>
<details>
<summary>
XmlBlobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/XmlBlobsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/XmlBlobsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/XmlBlobsCommandOutput/)
</details>
<details>
<summary>
XmlEmptyBlobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/XmlEmptyBlobsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/XmlEmptyBlobsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/XmlEmptyBlobsCommandOutput/)
</details>
<details>
<summary>
XmlEmptyLists
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/XmlEmptyListsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/XmlEmptyListsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/XmlEmptyListsCommandOutput/)
</details>
<details>
<summary>
XmlEmptyMaps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/XmlEmptyMapsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/XmlEmptyMapsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/XmlEmptyMapsCommandOutput/)
</details>
<details>
<summary>
XmlEmptyStrings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/XmlEmptyStringsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/XmlEmptyStringsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/XmlEmptyStringsCommandOutput/)
</details>
<details>
<summary>
XmlEnums
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/XmlEnumsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/XmlEnumsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/XmlEnumsCommandOutput/)
</details>
<details>
<summary>
XmlIntEnums
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/XmlIntEnumsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/XmlIntEnumsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/XmlIntEnumsCommandOutput/)
</details>
<details>
<summary>
XmlLists
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/XmlListsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/XmlListsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/XmlListsCommandOutput/)
</details>
<details>
<summary>
XmlMaps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/XmlMapsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/XmlMapsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/XmlMapsCommandOutput/)
</details>
<details>
<summary>
XmlMapsXmlName
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/XmlMapsXmlNameCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/XmlMapsXmlNameCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/XmlMapsXmlNameCommandOutput/)
</details>
<details>
<summary>
XmlMapWithXmlNamespace
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/XmlMapWithXmlNamespaceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/XmlMapWithXmlNamespaceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/XmlMapWithXmlNamespaceCommandOutput/)
</details>
<details>
<summary>
XmlNamespaces
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/XmlNamespacesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/XmlNamespacesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/XmlNamespacesCommandOutput/)
</details>
<details>
<summary>
XmlTimestamps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/XmlTimestampsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/XmlTimestampsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/XmlTimestampsCommandOutput/)
</details>
<details>
<summary>
XmlUnions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/XmlUnionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/XmlUnionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/XmlUnionsCommandOutput/)
</details>
<details>
<summary>
SimpleScalarProperties
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/SimpleScalarPropertiesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/SimpleScalarPropertiesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/SimpleScalarPropertiesCommandOutput/)
</details>
<details>
<summary>
NonQueryCompatibleOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/NonQueryCompatibleOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/NonQueryCompatibleOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/NonQueryCompatibleOperationCommandOutput/)
</details>
<details>
<summary>
QueryCompatibleOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/QueryCompatibleOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/QueryCompatibleOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/QueryCompatibleOperationCommandOutput/)
</details>
<details>
<summary>
GetRestApis
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/GetRestApisCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/GetRestApisCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/GetRestApisCommandOutput/)
</details>
<details>
<summary>
UploadArchive
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/UploadArchiveCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/UploadArchiveCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/UploadArchiveCommandOutput/)
</details>
<details>
<summary>
UploadMultipartPart
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/UploadMultipartPartCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/UploadMultipartPartCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/UploadMultipartPartCommandOutput/)
</details>
<details>
<summary>
Predict
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/PredictCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/PredictCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/PredictCommandOutput/)
</details>
<details>
<summary>
DeleteObjectTagging
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/DeleteObjectTaggingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/DeleteObjectTaggingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/DeleteObjectTaggingCommandOutput/)
</details>
<details>
<summary>
GetBucketLocation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/GetBucketLocationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/GetBucketLocationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/GetBucketLocationCommandOutput/)
</details>
<details>
<summary>
GetObject
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/GetObjectCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/GetObjectCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/GetObjectCommandOutput/)
</details>
<details>
<summary>
ListObjectsV2
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/ListObjectsV2Command/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/ListObjectsV2CommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/ListObjectsV2CommandOutput/)
</details>
<details>
<summary>
EmptyInputOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/EmptyInputOutputCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/EmptyInputOutputCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/EmptyInputOutputCommandOutput/)
</details>
<details>
<summary>
Float16
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/Float16Command/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/Float16CommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/Float16CommandOutput/)
</details>
<details>
<summary>
FractionalSeconds
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/FractionalSecondsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/FractionalSecondsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/FractionalSecondsCommandOutput/)
</details>
<details>
<summary>
GreetingWithErrors
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/GreetingWithErrorsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/GreetingWithErrorsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/GreetingWithErrorsCommandOutput/)
</details>
<details>
<summary>
NoInputOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/NoInputOutputCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/NoInputOutputCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/NoInputOutputCommandOutput/)
</details>
<details>
<summary>
OperationWithDefaults
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/OperationWithDefaultsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/OperationWithDefaultsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/OperationWithDefaultsCommandOutput/)
</details>
<details>
<summary>
OptionalInputOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/OptionalInputOutputCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/OptionalInputOutputCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/OptionalInputOutputCommandOutput/)
</details>
<details>
<summary>
RecursiveShapes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/RecursiveShapesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/RecursiveShapesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/RecursiveShapesCommandOutput/)
</details>
<details>
<summary>
RpcV2CborDenseMaps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/RpcV2CborDenseMapsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/RpcV2CborDenseMapsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/RpcV2CborDenseMapsCommandOutput/)
</details>
<details>
<summary>
RpcV2CborLists
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/RpcV2CborListsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/RpcV2CborListsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/RpcV2CborListsCommandOutput/)
</details>
<details>
<summary>
RpcV2CborSparseMaps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/RpcV2CborSparseMapsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/RpcV2CborSparseMapsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/RpcV2CborSparseMapsCommandOutput/)
</details>
<details>
<summary>
SimpleScalarProperties
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/SimpleScalarPropertiesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/SimpleScalarPropertiesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/SimpleScalarPropertiesCommandOutput/)
</details>
<details>
<summary>
SparseNullsOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/SparseNullsOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/SparseNullsOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/SparseNullsOperationCommandOutput/)
</details>
