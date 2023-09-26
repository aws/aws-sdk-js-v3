<!-- generated file, do not edit directly -->

# @aws-sdk/aws-protocoltests-query

## Description

AWS SDK for JavaScript QueryProtocol Client for Node.js, Browser and React Native.

A query service that sends query requests and XML responses.

## Installing

To install the this package, simply type add or install @aws-sdk/aws-protocoltests-query
using your favorite package manager:

- `npm install @aws-sdk/aws-protocoltests-query`
- `yarn add @aws-sdk/aws-protocoltests-query`
- `pnpm add @aws-sdk/aws-protocoltests-query`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `QueryProtocolClient` and
the commands you need, for example `QueryListsCommand`:

```js
// ES5 example
const { QueryProtocolClient, QueryListsCommand } = require("@aws-sdk/aws-protocoltests-query");
```

```ts
// ES6+ example
import { QueryProtocolClient, QueryListsCommand } from "@aws-sdk/aws-protocoltests-query";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new QueryProtocolClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new QueryListsCommand(params);
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
import * as AWS from "@aws-sdk/aws-protocoltests-query";
const client = new AWS.QueryProtocol({ region: "REGION" });

// async/await.
try {
  const data = await client.queryLists(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .queryLists(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.queryLists(params, (err, data) => {
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
  const { requestId, cfId, extendedRequestId } = error.$$metadata;
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/aws-protocoltests-query` package is updated.
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

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/datetimeoffsetscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/datetimeoffsetscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/datetimeoffsetscommandoutput.html)

</details>
<details>
<summary>
EmptyInputAndEmptyOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/emptyinputandemptyoutputcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/emptyinputandemptyoutputcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/emptyinputandemptyoutputcommandoutput.html)

</details>
<details>
<summary>
EndpointOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/endpointoperationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/endpointoperationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/endpointoperationcommandoutput.html)

</details>
<details>
<summary>
EndpointWithHostLabelOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/endpointwithhostlabeloperationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/endpointwithhostlabeloperationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/endpointwithhostlabeloperationcommandoutput.html)

</details>
<details>
<summary>
FractionalSeconds
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/fractionalsecondscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/fractionalsecondscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/fractionalsecondscommandoutput.html)

</details>
<details>
<summary>
GreetingWithErrors
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/greetingwitherrorscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/greetingwitherrorscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/greetingwitherrorscommandoutput.html)

</details>
<details>
<summary>
HostWithPathOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/hostwithpathoperationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/hostwithpathoperationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/hostwithpathoperationcommandoutput.html)

</details>
<details>
<summary>
IgnoresWrappingXmlName
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/ignoreswrappingxmlnamecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/ignoreswrappingxmlnamecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/ignoreswrappingxmlnamecommandoutput.html)

</details>
<details>
<summary>
NestedStructures
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/nestedstructurescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/nestedstructurescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/nestedstructurescommandoutput.html)

</details>
<details>
<summary>
NoInputAndOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/noinputandoutputcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/noinputandoutputcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/noinputandoutputcommandoutput.html)

</details>
<details>
<summary>
PutWithContentEncoding
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/putwithcontentencodingcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/putwithcontentencodingcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/putwithcontentencodingcommandoutput.html)

</details>
<details>
<summary>
QueryIdempotencyTokenAutoFill
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/queryidempotencytokenautofillcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/queryidempotencytokenautofillcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/queryidempotencytokenautofillcommandoutput.html)

</details>
<details>
<summary>
QueryLists
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/querylistscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/querylistscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/querylistscommandoutput.html)

</details>
<details>
<summary>
QueryTimestamps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/querytimestampscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/querytimestampscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/querytimestampscommandoutput.html)

</details>
<details>
<summary>
RecursiveXmlShapes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/recursivexmlshapescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/recursivexmlshapescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/recursivexmlshapescommandoutput.html)

</details>
<details>
<summary>
SimpleInputParams
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/simpleinputparamscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/simpleinputparamscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/simpleinputparamscommandoutput.html)

</details>
<details>
<summary>
SimpleScalarXmlProperties
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/simplescalarxmlpropertiescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/simplescalarxmlpropertiescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/simplescalarxmlpropertiescommandoutput.html)

</details>
<details>
<summary>
XmlBlobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/xmlblobscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/xmlblobscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/xmlblobscommandoutput.html)

</details>
<details>
<summary>
XmlEmptyBlobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/xmlemptyblobscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/xmlemptyblobscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/xmlemptyblobscommandoutput.html)

</details>
<details>
<summary>
XmlEmptyLists
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/xmlemptylistscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/xmlemptylistscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/xmlemptylistscommandoutput.html)

</details>
<details>
<summary>
XmlEnums
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/xmlenumscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/xmlenumscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/xmlenumscommandoutput.html)

</details>
<details>
<summary>
XmlIntEnums
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/xmlintenumscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/xmlintenumscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/xmlintenumscommandoutput.html)

</details>
<details>
<summary>
XmlLists
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/xmllistscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/xmllistscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/xmllistscommandoutput.html)

</details>
<details>
<summary>
XmlNamespaces
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/xmlnamespacescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/xmlnamespacescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/xmlnamespacescommandoutput.html)

</details>
<details>
<summary>
XmlTimestamps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/xmltimestampscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/xmltimestampscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/xmltimestampscommandoutput.html)

</details>
<details>
<summary>
DatetimeOffsets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/datetimeoffsetscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/datetimeoffsetscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/datetimeoffsetscommandoutput.html)

</details>
<details>
<summary>
EmptyOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/emptyoperationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/emptyoperationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/emptyoperationcommandoutput.html)

</details>
<details>
<summary>
EndpointOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/endpointoperationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/endpointoperationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/endpointoperationcommandoutput.html)

</details>
<details>
<summary>
EndpointWithHostLabelOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/endpointwithhostlabeloperationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/endpointwithhostlabeloperationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/endpointwithhostlabeloperationcommandoutput.html)

</details>
<details>
<summary>
FractionalSeconds
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/fractionalsecondscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/fractionalsecondscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/fractionalsecondscommandoutput.html)

</details>
<details>
<summary>
GreetingWithErrors
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/greetingwitherrorscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/greetingwitherrorscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/greetingwitherrorscommandoutput.html)

</details>
<details>
<summary>
HostWithPathOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/hostwithpathoperationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/hostwithpathoperationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/hostwithpathoperationcommandoutput.html)

</details>
<details>
<summary>
JsonEnums
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/jsonenumscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/jsonenumscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/jsonenumscommandoutput.html)

</details>
<details>
<summary>
JsonIntEnums
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/jsonintenumscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/jsonintenumscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/jsonintenumscommandoutput.html)

</details>
<details>
<summary>
JsonUnions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/jsonunionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/jsonunionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/jsonunionscommandoutput.html)

</details>
<details>
<summary>
KitchenSinkOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/kitchensinkoperationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/kitchensinkoperationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/kitchensinkoperationcommandoutput.html)

</details>
<details>
<summary>
NullOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/nulloperationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/nulloperationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/nulloperationcommandoutput.html)

</details>
<details>
<summary>
OperationWithOptionalInputOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/operationwithoptionalinputoutputcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/operationwithoptionalinputoutputcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/operationwithoptionalinputoutputcommandoutput.html)

</details>
<details>
<summary>
PutAndGetInlineDocuments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/putandgetinlinedocumentscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/putandgetinlinedocumentscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/putandgetinlinedocumentscommandoutput.html)

</details>
<details>
<summary>
PutWithContentEncoding
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/putwithcontentencodingcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/putwithcontentencodingcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/putwithcontentencodingcommandoutput.html)

</details>
<details>
<summary>
SimpleScalarProperties
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/simplescalarpropertiescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/simplescalarpropertiescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/simplescalarpropertiescommandoutput.html)

</details>
<details>
<summary>
EmptyInputAndEmptyOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/emptyinputandemptyoutputcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/emptyinputandemptyoutputcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/emptyinputandemptyoutputcommandoutput.html)

</details>
<details>
<summary>
EndpointOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/endpointoperationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/endpointoperationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/endpointoperationcommandoutput.html)

</details>
<details>
<summary>
EndpointWithHostLabelOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/endpointwithhostlabeloperationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/endpointwithhostlabeloperationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/endpointwithhostlabeloperationcommandoutput.html)

</details>
<details>
<summary>
GreetingWithErrors
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/greetingwitherrorscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/greetingwitherrorscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/greetingwitherrorscommandoutput.html)

</details>
<details>
<summary>
HostWithPathOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/hostwithpathoperationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/hostwithpathoperationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/hostwithpathoperationcommandoutput.html)

</details>
<details>
<summary>
JsonUnions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/jsonunionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/jsonunionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/jsonunionscommandoutput.html)

</details>
<details>
<summary>
NoInputAndNoOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/noinputandnooutputcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/noinputandnooutputcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/noinputandnooutputcommandoutput.html)

</details>
<details>
<summary>
NoInputAndOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/noinputandoutputcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/noinputandoutputcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/noinputandoutputcommandoutput.html)

</details>
<details>
<summary>
PutWithContentEncoding
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/putwithcontentencodingcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/putwithcontentencodingcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/putwithcontentencodingcommandoutput.html)

</details>
<details>
<summary>
SimpleScalarProperties
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/simplescalarpropertiescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/simplescalarpropertiescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/simplescalarpropertiescommandoutput.html)

</details>
<details>
<summary>
AcceptHeaderStarService
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/acceptheaderstarservicecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/acceptheaderstarservicecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/acceptheaderstarservicecommandoutput.html)

</details>
<details>
<summary>
DatetimeOffsets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/datetimeoffsetscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/datetimeoffsetscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/datetimeoffsetscommandoutput.html)

</details>
<details>
<summary>
EmptyInputAndEmptyOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/emptyinputandemptyoutputcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/emptyinputandemptyoutputcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/emptyinputandemptyoutputcommandoutput.html)

</details>
<details>
<summary>
EndpointOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/endpointoperationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/endpointoperationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/endpointoperationcommandoutput.html)

</details>
<details>
<summary>
EndpointWithHostLabelOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/endpointwithhostlabeloperationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/endpointwithhostlabeloperationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/endpointwithhostlabeloperationcommandoutput.html)

</details>
<details>
<summary>
FlattenedXmlMap
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/flattenedxmlmapcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/flattenedxmlmapcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/flattenedxmlmapcommandoutput.html)

</details>
<details>
<summary>
FlattenedXmlMapWithXmlName
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/flattenedxmlmapwithxmlnamecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/flattenedxmlmapwithxmlnamecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/flattenedxmlmapwithxmlnamecommandoutput.html)

</details>
<details>
<summary>
FlattenedXmlMapWithXmlNamespace
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/flattenedxmlmapwithxmlnamespacecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/flattenedxmlmapwithxmlnamespacecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/flattenedxmlmapwithxmlnamespacecommandoutput.html)

</details>
<details>
<summary>
FractionalSeconds
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/fractionalsecondscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/fractionalsecondscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/fractionalsecondscommandoutput.html)

</details>
<details>
<summary>
GreetingWithErrors
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/greetingwitherrorscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/greetingwitherrorscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/greetingwitherrorscommandoutput.html)

</details>
<details>
<summary>
HostWithPathOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/hostwithpathoperationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/hostwithpathoperationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/hostwithpathoperationcommandoutput.html)

</details>
<details>
<summary>
IgnoresWrappingXmlName
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/ignoreswrappingxmlnamecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/ignoreswrappingxmlnamecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/ignoreswrappingxmlnamecommandoutput.html)

</details>
<details>
<summary>
NestedStructures
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/nestedstructurescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/nestedstructurescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/nestedstructurescommandoutput.html)

</details>
<details>
<summary>
NoInputAndNoOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/noinputandnooutputcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/noinputandnooutputcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/noinputandnooutputcommandoutput.html)

</details>
<details>
<summary>
NoInputAndOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/noinputandoutputcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/noinputandoutputcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/noinputandoutputcommandoutput.html)

</details>
<details>
<summary>
PutWithContentEncoding
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/putwithcontentencodingcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/putwithcontentencodingcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/putwithcontentencodingcommandoutput.html)

</details>
<details>
<summary>
QueryIdempotencyTokenAutoFill
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/queryidempotencytokenautofillcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/queryidempotencytokenautofillcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/queryidempotencytokenautofillcommandoutput.html)

</details>
<details>
<summary>
QueryLists
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/querylistscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/querylistscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/querylistscommandoutput.html)

</details>
<details>
<summary>
QueryMaps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/querymapscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/querymapscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/querymapscommandoutput.html)

</details>
<details>
<summary>
QueryTimestamps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/querytimestampscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/querytimestampscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/querytimestampscommandoutput.html)

</details>
<details>
<summary>
RecursiveXmlShapes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/recursivexmlshapescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/recursivexmlshapescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/recursivexmlshapescommandoutput.html)

</details>
<details>
<summary>
SimpleInputParams
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/simpleinputparamscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/simpleinputparamscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/simpleinputparamscommandoutput.html)

</details>
<details>
<summary>
SimpleScalarXmlProperties
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/simplescalarxmlpropertiescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/simplescalarxmlpropertiescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/simplescalarxmlpropertiescommandoutput.html)

</details>
<details>
<summary>
XmlBlobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/xmlblobscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/xmlblobscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/xmlblobscommandoutput.html)

</details>
<details>
<summary>
XmlEmptyBlobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/xmlemptyblobscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/xmlemptyblobscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/xmlemptyblobscommandoutput.html)

</details>
<details>
<summary>
XmlEmptyLists
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/xmlemptylistscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/xmlemptylistscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/xmlemptylistscommandoutput.html)

</details>
<details>
<summary>
XmlEmptyMaps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/xmlemptymapscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/xmlemptymapscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/xmlemptymapscommandoutput.html)

</details>
<details>
<summary>
XmlEnums
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/xmlenumscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/xmlenumscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/xmlenumscommandoutput.html)

</details>
<details>
<summary>
XmlIntEnums
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/xmlintenumscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/xmlintenumscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/xmlintenumscommandoutput.html)

</details>
<details>
<summary>
XmlLists
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/xmllistscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/xmllistscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/xmllistscommandoutput.html)

</details>
<details>
<summary>
XmlMaps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/xmlmapscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/xmlmapscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/xmlmapscommandoutput.html)

</details>
<details>
<summary>
XmlMapsXmlName
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/xmlmapsxmlnamecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/xmlmapsxmlnamecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/xmlmapsxmlnamecommandoutput.html)

</details>
<details>
<summary>
XmlNamespaces
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/xmlnamespacescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/xmlnamespacescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/xmlnamespacescommandoutput.html)

</details>
<details>
<summary>
XmlTimestamps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/xmltimestampscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/xmltimestampscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/xmltimestampscommandoutput.html)

</details>
<details>
<summary>
AllQueryStringTypes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/allquerystringtypescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/allquerystringtypescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/allquerystringtypescommandoutput.html)

</details>
<details>
<summary>
ConstantAndVariableQueryString
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/constantandvariablequerystringcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/constantandvariablequerystringcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/constantandvariablequerystringcommandoutput.html)

</details>
<details>
<summary>
ConstantQueryString
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/constantquerystringcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/constantquerystringcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/constantquerystringcommandoutput.html)

</details>
<details>
<summary>
DatetimeOffsets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/datetimeoffsetscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/datetimeoffsetscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/datetimeoffsetscommandoutput.html)

</details>
<details>
<summary>
DocumentType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/documenttypecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/documenttypecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/documenttypecommandoutput.html)

</details>
<details>
<summary>
DocumentTypeAsPayload
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/documenttypeaspayloadcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/documenttypeaspayloadcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/documenttypeaspayloadcommandoutput.html)

</details>
<details>
<summary>
EmptyInputAndEmptyOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/emptyinputandemptyoutputcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/emptyinputandemptyoutputcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/emptyinputandemptyoutputcommandoutput.html)

</details>
<details>
<summary>
EndpointOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/endpointoperationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/endpointoperationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/endpointoperationcommandoutput.html)

</details>
<details>
<summary>
EndpointWithHostLabelOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/endpointwithhostlabeloperationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/endpointwithhostlabeloperationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/endpointwithhostlabeloperationcommandoutput.html)

</details>
<details>
<summary>
FractionalSeconds
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/fractionalsecondscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/fractionalsecondscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/fractionalsecondscommandoutput.html)

</details>
<details>
<summary>
GreetingWithErrors
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/greetingwitherrorscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/greetingwitherrorscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/greetingwitherrorscommandoutput.html)

</details>
<details>
<summary>
HostWithPathOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/hostwithpathoperationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/hostwithpathoperationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/hostwithpathoperationcommandoutput.html)

</details>
<details>
<summary>
HttpChecksumRequired
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/httpchecksumrequiredcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/httpchecksumrequiredcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/httpchecksumrequiredcommandoutput.html)

</details>
<details>
<summary>
HttpEnumPayload
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/httpenumpayloadcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/httpenumpayloadcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/httpenumpayloadcommandoutput.html)

</details>
<details>
<summary>
HttpPayloadTraits
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/httppayloadtraitscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/httppayloadtraitscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/httppayloadtraitscommandoutput.html)

</details>
<details>
<summary>
HttpPayloadTraitsWithMediaType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/httppayloadtraitswithmediatypecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/httppayloadtraitswithmediatypecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/httppayloadtraitswithmediatypecommandoutput.html)

</details>
<details>
<summary>
HttpPayloadWithStructure
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/httppayloadwithstructurecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/httppayloadwithstructurecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/httppayloadwithstructurecommandoutput.html)

</details>
<details>
<summary>
HttpPrefixHeaders
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/httpprefixheaderscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/httpprefixheaderscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/httpprefixheaderscommandoutput.html)

</details>
<details>
<summary>
HttpPrefixHeadersInResponse
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/httpprefixheadersinresponsecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/httpprefixheadersinresponsecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/httpprefixheadersinresponsecommandoutput.html)

</details>
<details>
<summary>
HttpRequestWithFloatLabels
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/httprequestwithfloatlabelscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/httprequestwithfloatlabelscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/httprequestwithfloatlabelscommandoutput.html)

</details>
<details>
<summary>
HttpRequestWithGreedyLabelInPath
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/httprequestwithgreedylabelinpathcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/httprequestwithgreedylabelinpathcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/httprequestwithgreedylabelinpathcommandoutput.html)

</details>
<details>
<summary>
HttpRequestWithLabels
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/httprequestwithlabelscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/httprequestwithlabelscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/httprequestwithlabelscommandoutput.html)

</details>
<details>
<summary>
HttpRequestWithLabelsAndTimestampFormat
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/httprequestwithlabelsandtimestampformatcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/httprequestwithlabelsandtimestampformatcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/httprequestwithlabelsandtimestampformatcommandoutput.html)

</details>
<details>
<summary>
HttpRequestWithRegexLiteral
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/httprequestwithregexliteralcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/httprequestwithregexliteralcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/httprequestwithregexliteralcommandoutput.html)

</details>
<details>
<summary>
HttpResponseCode
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/httpresponsecodecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/httpresponsecodecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/httpresponsecodecommandoutput.html)

</details>
<details>
<summary>
HttpStringPayload
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/httpstringpayloadcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/httpstringpayloadcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/httpstringpayloadcommandoutput.html)

</details>
<details>
<summary>
IgnoreQueryParamsInResponse
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/ignorequeryparamsinresponsecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/ignorequeryparamsinresponsecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/ignorequeryparamsinresponsecommandoutput.html)

</details>
<details>
<summary>
InputAndOutputWithHeaders
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/inputandoutputwithheaderscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/inputandoutputwithheaderscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/inputandoutputwithheaderscommandoutput.html)

</details>
<details>
<summary>
JsonBlobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/jsonblobscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/jsonblobscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/jsonblobscommandoutput.html)

</details>
<details>
<summary>
JsonEnums
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/jsonenumscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/jsonenumscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/jsonenumscommandoutput.html)

</details>
<details>
<summary>
JsonIntEnums
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/jsonintenumscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/jsonintenumscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/jsonintenumscommandoutput.html)

</details>
<details>
<summary>
JsonLists
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/jsonlistscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/jsonlistscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/jsonlistscommandoutput.html)

</details>
<details>
<summary>
JsonMaps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/jsonmapscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/jsonmapscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/jsonmapscommandoutput.html)

</details>
<details>
<summary>
JsonTimestamps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/jsontimestampscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/jsontimestampscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/jsontimestampscommandoutput.html)

</details>
<details>
<summary>
JsonUnions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/jsonunionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/jsonunionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/jsonunionscommandoutput.html)

</details>
<details>
<summary>
MalformedAcceptWithBody
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/malformedacceptwithbodycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedacceptwithbodycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedacceptwithbodycommandoutput.html)

</details>
<details>
<summary>
MalformedAcceptWithGenericString
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/malformedacceptwithgenericstringcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedacceptwithgenericstringcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedacceptwithgenericstringcommandoutput.html)

</details>
<details>
<summary>
MalformedAcceptWithPayload
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/malformedacceptwithpayloadcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedacceptwithpayloadcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedacceptwithpayloadcommandoutput.html)

</details>
<details>
<summary>
MalformedBlob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/malformedblobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedblobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedblobcommandoutput.html)

</details>
<details>
<summary>
MalformedBoolean
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/malformedbooleancommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedbooleancommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedbooleancommandoutput.html)

</details>
<details>
<summary>
MalformedByte
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/malformedbytecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedbytecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedbytecommandoutput.html)

</details>
<details>
<summary>
MalformedContentTypeWithBody
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/malformedcontenttypewithbodycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedcontenttypewithbodycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedcontenttypewithbodycommandoutput.html)

</details>
<details>
<summary>
MalformedContentTypeWithGenericString
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/malformedcontenttypewithgenericstringcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedcontenttypewithgenericstringcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedcontenttypewithgenericstringcommandoutput.html)

</details>
<details>
<summary>
MalformedContentTypeWithoutBody
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/malformedcontenttypewithoutbodycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedcontenttypewithoutbodycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedcontenttypewithoutbodycommandoutput.html)

</details>
<details>
<summary>
MalformedContentTypeWithoutBodyEmptyInput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/malformedcontenttypewithoutbodyemptyinputcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedcontenttypewithoutbodyemptyinputcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedcontenttypewithoutbodyemptyinputcommandoutput.html)

</details>
<details>
<summary>
MalformedContentTypeWithPayload
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/malformedcontenttypewithpayloadcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedcontenttypewithpayloadcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedcontenttypewithpayloadcommandoutput.html)

</details>
<details>
<summary>
MalformedDouble
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/malformeddoublecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformeddoublecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformeddoublecommandoutput.html)

</details>
<details>
<summary>
MalformedFloat
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/malformedfloatcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedfloatcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedfloatcommandoutput.html)

</details>
<details>
<summary>
MalformedInteger
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/malformedintegercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedintegercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedintegercommandoutput.html)

</details>
<details>
<summary>
MalformedList
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/malformedlistcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedlistcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedlistcommandoutput.html)

</details>
<details>
<summary>
MalformedLong
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/malformedlongcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedlongcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedlongcommandoutput.html)

</details>
<details>
<summary>
MalformedMap
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/malformedmapcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedmapcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedmapcommandoutput.html)

</details>
<details>
<summary>
MalformedRequestBody
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/malformedrequestbodycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedrequestbodycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedrequestbodycommandoutput.html)

</details>
<details>
<summary>
MalformedShort
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/malformedshortcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedshortcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedshortcommandoutput.html)

</details>
<details>
<summary>
MalformedString
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/malformedstringcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedstringcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedstringcommandoutput.html)

</details>
<details>
<summary>
MalformedTimestampBodyDateTime
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/malformedtimestampbodydatetimecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedtimestampbodydatetimecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedtimestampbodydatetimecommandoutput.html)

</details>
<details>
<summary>
MalformedTimestampBodyDefault
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/malformedtimestampbodydefaultcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedtimestampbodydefaultcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedtimestampbodydefaultcommandoutput.html)

</details>
<details>
<summary>
MalformedTimestampBodyHttpDate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/malformedtimestampbodyhttpdatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedtimestampbodyhttpdatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedtimestampbodyhttpdatecommandoutput.html)

</details>
<details>
<summary>
MalformedTimestampHeaderDateTime
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/malformedtimestampheaderdatetimecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedtimestampheaderdatetimecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedtimestampheaderdatetimecommandoutput.html)

</details>
<details>
<summary>
MalformedTimestampHeaderDefault
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/malformedtimestampheaderdefaultcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedtimestampheaderdefaultcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedtimestampheaderdefaultcommandoutput.html)

</details>
<details>
<summary>
MalformedTimestampHeaderEpoch
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/malformedtimestampheaderepochcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedtimestampheaderepochcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedtimestampheaderepochcommandoutput.html)

</details>
<details>
<summary>
MalformedTimestampPathDefault
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/malformedtimestamppathdefaultcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedtimestamppathdefaultcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedtimestamppathdefaultcommandoutput.html)

</details>
<details>
<summary>
MalformedTimestampPathEpoch
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/malformedtimestamppathepochcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedtimestamppathepochcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedtimestamppathepochcommandoutput.html)

</details>
<details>
<summary>
MalformedTimestampPathHttpDate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/malformedtimestamppathhttpdatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedtimestamppathhttpdatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedtimestamppathhttpdatecommandoutput.html)

</details>
<details>
<summary>
MalformedTimestampQueryDefault
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/malformedtimestampquerydefaultcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedtimestampquerydefaultcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedtimestampquerydefaultcommandoutput.html)

</details>
<details>
<summary>
MalformedTimestampQueryEpoch
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/malformedtimestampqueryepochcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedtimestampqueryepochcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedtimestampqueryepochcommandoutput.html)

</details>
<details>
<summary>
MalformedTimestampQueryHttpDate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/malformedtimestampqueryhttpdatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedtimestampqueryhttpdatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedtimestampqueryhttpdatecommandoutput.html)

</details>
<details>
<summary>
MalformedUnion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/malformedunioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedunioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedunioncommandoutput.html)

</details>
<details>
<summary>
MediaTypeHeader
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/mediatypeheadercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/mediatypeheadercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/mediatypeheadercommandoutput.html)

</details>
<details>
<summary>
NoInputAndNoOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/noinputandnooutputcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/noinputandnooutputcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/noinputandnooutputcommandoutput.html)

</details>
<details>
<summary>
NoInputAndOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/noinputandoutputcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/noinputandoutputcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/noinputandoutputcommandoutput.html)

</details>
<details>
<summary>
NullAndEmptyHeadersClient
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/nullandemptyheadersclientcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/nullandemptyheadersclientcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/nullandemptyheadersclientcommandoutput.html)

</details>
<details>
<summary>
NullAndEmptyHeadersServer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/nullandemptyheadersservercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/nullandemptyheadersservercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/nullandemptyheadersservercommandoutput.html)

</details>
<details>
<summary>
OmitsNullSerializesEmptyString
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/omitsnullserializesemptystringcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/omitsnullserializesemptystringcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/omitsnullserializesemptystringcommandoutput.html)

</details>
<details>
<summary>
OmitsSerializingEmptyLists
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/omitsserializingemptylistscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/omitsserializingemptylistscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/omitsserializingemptylistscommandoutput.html)

</details>
<details>
<summary>
PostPlayerAction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/postplayeractioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/postplayeractioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/postplayeractioncommandoutput.html)

</details>
<details>
<summary>
PostUnionWithJsonName
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/postunionwithjsonnamecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/postunionwithjsonnamecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/postunionwithjsonnamecommandoutput.html)

</details>
<details>
<summary>
PutWithContentEncoding
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/putwithcontentencodingcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/putwithcontentencodingcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/putwithcontentencodingcommandoutput.html)

</details>
<details>
<summary>
QueryIdempotencyTokenAutoFill
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/queryidempotencytokenautofillcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/queryidempotencytokenautofillcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/queryidempotencytokenautofillcommandoutput.html)

</details>
<details>
<summary>
QueryParamsAsStringListMap
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/queryparamsasstringlistmapcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/queryparamsasstringlistmapcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/queryparamsasstringlistmapcommandoutput.html)

</details>
<details>
<summary>
QueryPrecedence
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/queryprecedencecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/queryprecedencecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/queryprecedencecommandoutput.html)

</details>
<details>
<summary>
RecursiveShapes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/recursiveshapescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/recursiveshapescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/recursiveshapescommandoutput.html)

</details>
<details>
<summary>
ResponseCodeHttpFallback
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/responsecodehttpfallbackcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/responsecodehttpfallbackcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/responsecodehttpfallbackcommandoutput.html)

</details>
<details>
<summary>
ResponseCodeRequired
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/responsecoderequiredcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/responsecoderequiredcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/responsecoderequiredcommandoutput.html)

</details>
<details>
<summary>
SimpleScalarProperties
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/simplescalarpropertiescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/simplescalarpropertiescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/simplescalarpropertiescommandoutput.html)

</details>
<details>
<summary>
StreamingTraits
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/streamingtraitscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/streamingtraitscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/streamingtraitscommandoutput.html)

</details>
<details>
<summary>
StreamingTraitsRequireLength
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/streamingtraitsrequirelengthcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/streamingtraitsrequirelengthcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/streamingtraitsrequirelengthcommandoutput.html)

</details>
<details>
<summary>
StreamingTraitsWithMediaType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/streamingtraitswithmediatypecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/streamingtraitswithmediatypecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/streamingtraitswithmediatypecommandoutput.html)

</details>
<details>
<summary>
TestBodyStructure
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/testbodystructurecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/testbodystructurecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/testbodystructurecommandoutput.html)

</details>
<details>
<summary>
TestNoPayload
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/testnopayloadcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/testnopayloadcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/testnopayloadcommandoutput.html)

</details>
<details>
<summary>
TestPayloadBlob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/testpayloadblobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/testpayloadblobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/testpayloadblobcommandoutput.html)

</details>
<details>
<summary>
TestPayloadStructure
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/testpayloadstructurecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/testpayloadstructurecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/testpayloadstructurecommandoutput.html)

</details>
<details>
<summary>
TimestampFormatHeaders
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/timestampformatheaderscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/timestampformatheaderscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/timestampformatheaderscommandoutput.html)

</details>
<details>
<summary>
UnitInputAndOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/unitinputandoutputcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/unitinputandoutputcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/unitinputandoutputcommandoutput.html)

</details>
<details>
<summary>
MalformedEnum
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/malformedenumcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedenumcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedenumcommandoutput.html)

</details>
<details>
<summary>
MalformedLength
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/malformedlengthcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedlengthcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedlengthcommandoutput.html)

</details>
<details>
<summary>
MalformedLengthOverride
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/malformedlengthoverridecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedlengthoverridecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedlengthoverridecommandoutput.html)

</details>
<details>
<summary>
MalformedLengthQueryString
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/malformedlengthquerystringcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedlengthquerystringcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedlengthquerystringcommandoutput.html)

</details>
<details>
<summary>
MalformedPattern
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/malformedpatterncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedpatterncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedpatterncommandoutput.html)

</details>
<details>
<summary>
MalformedPatternOverride
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/malformedpatternoverridecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedpatternoverridecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedpatternoverridecommandoutput.html)

</details>
<details>
<summary>
MalformedRange
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/malformedrangecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedrangecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedrangecommandoutput.html)

</details>
<details>
<summary>
MalformedRangeOverride
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/malformedrangeoverridecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedrangeoverridecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedrangeoverridecommandoutput.html)

</details>
<details>
<summary>
MalformedRequired
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/malformedrequiredcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedrequiredcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformedrequiredcommandoutput.html)

</details>
<details>
<summary>
MalformedUniqueItems
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/malformeduniqueitemscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformeduniqueitemscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/malformeduniqueitemscommandoutput.html)

</details>
<details>
<summary>
RecursiveStructures
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/recursivestructurescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/recursivestructurescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/recursivestructurescommandoutput.html)

</details>
<details>
<summary>
SensitiveValidation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/sensitivevalidationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/sensitivevalidationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/sensitivevalidationcommandoutput.html)

</details>
<details>
<summary>
AllQueryStringTypes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/allquerystringtypescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/allquerystringtypescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/allquerystringtypescommandoutput.html)

</details>
<details>
<summary>
BodyWithXmlName
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/bodywithxmlnamecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/bodywithxmlnamecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/bodywithxmlnamecommandoutput.html)

</details>
<details>
<summary>
ConstantAndVariableQueryString
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/constantandvariablequerystringcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/constantandvariablequerystringcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/constantandvariablequerystringcommandoutput.html)

</details>
<details>
<summary>
ConstantQueryString
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/constantquerystringcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/constantquerystringcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/constantquerystringcommandoutput.html)

</details>
<details>
<summary>
DatetimeOffsets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/datetimeoffsetscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/datetimeoffsetscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/datetimeoffsetscommandoutput.html)

</details>
<details>
<summary>
EmptyInputAndEmptyOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/emptyinputandemptyoutputcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/emptyinputandemptyoutputcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/emptyinputandemptyoutputcommandoutput.html)

</details>
<details>
<summary>
EndpointOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/endpointoperationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/endpointoperationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/endpointoperationcommandoutput.html)

</details>
<details>
<summary>
EndpointWithHostLabelHeaderOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/endpointwithhostlabelheaderoperationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/endpointwithhostlabelheaderoperationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/endpointwithhostlabelheaderoperationcommandoutput.html)

</details>
<details>
<summary>
EndpointWithHostLabelOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/endpointwithhostlabeloperationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/endpointwithhostlabeloperationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/endpointwithhostlabeloperationcommandoutput.html)

</details>
<details>
<summary>
FlattenedXmlMap
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/flattenedxmlmapcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/flattenedxmlmapcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/flattenedxmlmapcommandoutput.html)

</details>
<details>
<summary>
FlattenedXmlMapWithXmlName
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/flattenedxmlmapwithxmlnamecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/flattenedxmlmapwithxmlnamecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/flattenedxmlmapwithxmlnamecommandoutput.html)

</details>
<details>
<summary>
FlattenedXmlMapWithXmlNamespace
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/flattenedxmlmapwithxmlnamespacecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/flattenedxmlmapwithxmlnamespacecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/flattenedxmlmapwithxmlnamespacecommandoutput.html)

</details>
<details>
<summary>
FractionalSeconds
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/fractionalsecondscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/fractionalsecondscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/fractionalsecondscommandoutput.html)

</details>
<details>
<summary>
GreetingWithErrors
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/greetingwitherrorscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/greetingwitherrorscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/greetingwitherrorscommandoutput.html)

</details>
<details>
<summary>
HttpPayloadTraits
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/httppayloadtraitscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/httppayloadtraitscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/httppayloadtraitscommandoutput.html)

</details>
<details>
<summary>
HttpPayloadTraitsWithMediaType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/httppayloadtraitswithmediatypecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/httppayloadtraitswithmediatypecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/httppayloadtraitswithmediatypecommandoutput.html)

</details>
<details>
<summary>
HttpPayloadWithMemberXmlName
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/httppayloadwithmemberxmlnamecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/httppayloadwithmemberxmlnamecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/httppayloadwithmemberxmlnamecommandoutput.html)

</details>
<details>
<summary>
HttpPayloadWithStructure
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/httppayloadwithstructurecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/httppayloadwithstructurecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/httppayloadwithstructurecommandoutput.html)

</details>
<details>
<summary>
HttpPayloadWithXmlName
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/httppayloadwithxmlnamecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/httppayloadwithxmlnamecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/httppayloadwithxmlnamecommandoutput.html)

</details>
<details>
<summary>
HttpPayloadWithXmlNamespace
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/httppayloadwithxmlnamespacecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/httppayloadwithxmlnamespacecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/httppayloadwithxmlnamespacecommandoutput.html)

</details>
<details>
<summary>
HttpPayloadWithXmlNamespaceAndPrefix
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/httppayloadwithxmlnamespaceandprefixcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/httppayloadwithxmlnamespaceandprefixcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/httppayloadwithxmlnamespaceandprefixcommandoutput.html)

</details>
<details>
<summary>
HttpPrefixHeaders
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/httpprefixheaderscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/httpprefixheaderscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/httpprefixheaderscommandoutput.html)

</details>
<details>
<summary>
HttpRequestWithFloatLabels
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/httprequestwithfloatlabelscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/httprequestwithfloatlabelscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/httprequestwithfloatlabelscommandoutput.html)

</details>
<details>
<summary>
HttpRequestWithGreedyLabelInPath
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/httprequestwithgreedylabelinpathcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/httprequestwithgreedylabelinpathcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/httprequestwithgreedylabelinpathcommandoutput.html)

</details>
<details>
<summary>
HttpRequestWithLabels
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/httprequestwithlabelscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/httprequestwithlabelscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/httprequestwithlabelscommandoutput.html)

</details>
<details>
<summary>
HttpRequestWithLabelsAndTimestampFormat
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/httprequestwithlabelsandtimestampformatcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/httprequestwithlabelsandtimestampformatcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/httprequestwithlabelsandtimestampformatcommandoutput.html)

</details>
<details>
<summary>
HttpResponseCode
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/httpresponsecodecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/httpresponsecodecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/httpresponsecodecommandoutput.html)

</details>
<details>
<summary>
IgnoreQueryParamsInResponse
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/ignorequeryparamsinresponsecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/ignorequeryparamsinresponsecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/ignorequeryparamsinresponsecommandoutput.html)

</details>
<details>
<summary>
InputAndOutputWithHeaders
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/inputandoutputwithheaderscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/inputandoutputwithheaderscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/inputandoutputwithheaderscommandoutput.html)

</details>
<details>
<summary>
NestedXmlMaps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/nestedxmlmapscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/nestedxmlmapscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/nestedxmlmapscommandoutput.html)

</details>
<details>
<summary>
NoInputAndNoOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/noinputandnooutputcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/noinputandnooutputcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/noinputandnooutputcommandoutput.html)

</details>
<details>
<summary>
NoInputAndOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/noinputandoutputcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/noinputandoutputcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/noinputandoutputcommandoutput.html)

</details>
<details>
<summary>
NullAndEmptyHeadersClient
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/nullandemptyheadersclientcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/nullandemptyheadersclientcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/nullandemptyheadersclientcommandoutput.html)

</details>
<details>
<summary>
NullAndEmptyHeadersServer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/nullandemptyheadersservercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/nullandemptyheadersservercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/nullandemptyheadersservercommandoutput.html)

</details>
<details>
<summary>
OmitsNullSerializesEmptyString
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/omitsnullserializesemptystringcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/omitsnullserializesemptystringcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/omitsnullserializesemptystringcommandoutput.html)

</details>
<details>
<summary>
PutWithContentEncoding
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/putwithcontentencodingcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/putwithcontentencodingcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/putwithcontentencodingcommandoutput.html)

</details>
<details>
<summary>
QueryIdempotencyTokenAutoFill
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/queryidempotencytokenautofillcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/queryidempotencytokenautofillcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/queryidempotencytokenautofillcommandoutput.html)

</details>
<details>
<summary>
QueryParamsAsStringListMap
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/queryparamsasstringlistmapcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/queryparamsasstringlistmapcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/queryparamsasstringlistmapcommandoutput.html)

</details>
<details>
<summary>
QueryPrecedence
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/queryprecedencecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/queryprecedencecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/queryprecedencecommandoutput.html)

</details>
<details>
<summary>
RecursiveShapes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/recursiveshapescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/recursiveshapescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/recursiveshapescommandoutput.html)

</details>
<details>
<summary>
SimpleScalarProperties
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/simplescalarpropertiescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/simplescalarpropertiescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/simplescalarpropertiescommandoutput.html)

</details>
<details>
<summary>
TimestampFormatHeaders
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/timestampformatheaderscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/timestampformatheaderscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/timestampformatheaderscommandoutput.html)

</details>
<details>
<summary>
XmlAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/xmlattributescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/xmlattributescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/xmlattributescommandoutput.html)

</details>
<details>
<summary>
XmlAttributesOnPayload
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/xmlattributesonpayloadcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/xmlattributesonpayloadcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/xmlattributesonpayloadcommandoutput.html)

</details>
<details>
<summary>
XmlBlobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/xmlblobscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/xmlblobscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/xmlblobscommandoutput.html)

</details>
<details>
<summary>
XmlEmptyBlobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/xmlemptyblobscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/xmlemptyblobscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/xmlemptyblobscommandoutput.html)

</details>
<details>
<summary>
XmlEmptyLists
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/xmlemptylistscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/xmlemptylistscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/xmlemptylistscommandoutput.html)

</details>
<details>
<summary>
XmlEmptyMaps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/xmlemptymapscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/xmlemptymapscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/xmlemptymapscommandoutput.html)

</details>
<details>
<summary>
XmlEmptyStrings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/xmlemptystringscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/xmlemptystringscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/xmlemptystringscommandoutput.html)

</details>
<details>
<summary>
XmlEnums
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/xmlenumscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/xmlenumscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/xmlenumscommandoutput.html)

</details>
<details>
<summary>
XmlIntEnums
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/xmlintenumscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/xmlintenumscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/xmlintenumscommandoutput.html)

</details>
<details>
<summary>
XmlLists
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/xmllistscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/xmllistscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/xmllistscommandoutput.html)

</details>
<details>
<summary>
XmlMaps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/xmlmapscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/xmlmapscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/xmlmapscommandoutput.html)

</details>
<details>
<summary>
XmlMapsXmlName
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/xmlmapsxmlnamecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/xmlmapsxmlnamecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/xmlmapsxmlnamecommandoutput.html)

</details>
<details>
<summary>
XmlNamespaces
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/xmlnamespacescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/xmlnamespacescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/xmlnamespacescommandoutput.html)

</details>
<details>
<summary>
XmlTimestamps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/xmltimestampscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/xmltimestampscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/xmltimestampscommandoutput.html)

</details>
<details>
<summary>
XmlUnions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/xmlunionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/xmlunionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/xmlunionscommandoutput.html)

</details>
<details>
<summary>
SimpleScalarProperties
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/simplescalarpropertiescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/simplescalarpropertiescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/simplescalarpropertiescommandoutput.html)

</details>
<details>
<summary>
GetRestApis
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/getrestapiscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/getrestapiscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/getrestapiscommandoutput.html)

</details>
<details>
<summary>
UploadArchive
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/uploadarchivecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/uploadarchivecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/uploadarchivecommandoutput.html)

</details>
<details>
<summary>
UploadMultipartPart
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/uploadmultipartpartcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/uploadmultipartpartcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/uploadmultipartpartcommandoutput.html)

</details>
<details>
<summary>
Predict
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/predictcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/predictcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/predictcommandoutput.html)

</details>
<details>
<summary>
DeleteObjectTagging
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/deleteobjecttaggingcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/deleteobjecttaggingcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/deleteobjecttaggingcommandoutput.html)

</details>
<details>
<summary>
GetBucketLocation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/getbucketlocationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/getbucketlocationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/getbucketlocationcommandoutput.html)

</details>
<details>
<summary>
ListObjectsV2
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/classes/listobjectsv2command.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/listobjectsv2commandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-query-protocol/interfaces/listobjectsv2commandoutput.html)

</details>
