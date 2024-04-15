# TypeScript

The AWS SDK for JavaScript v3 is written in TypeScript. This allows easier generation of [API documentation](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/), and provides type hints and autocompletion to code editors, whether you are 
using JavaScript or TypeScript.

### Minimum supported TypeScript version

The SDK does not have an official minimum supported TypeScript version. We recommend using a recent version of TypeScript. 
The current version of TypeScript used in development of the AWS SDK can be seen in the root `package.json` file.

## Common TypeScript-related questions in the AWS SDK for JavaScript (v3)

#### Why are operation request and response structures unions with `| undefined`?

This allows more flexibility when it comes to AWS service APIs changing over time without needing to update your SDK client version, and encourages defensive checking of API responses. 
If you acknowledge the risks of not runtime-checking response object structures and would like to skip that, there is a `@smithy/types` type transform that can be applied to AWS SDK clients.

For usage, see https://github.com/smithy-lang/smithy-typescript/tree/main/packages/types#scenario-removing--undefined-from-input-and-output-structures.

#### Why are streaming output values a union type?

The AWS SDK clients accept an optional runtime-provided value for `requestHandler` (see [requestHandler](https://github.com/aws/aws-sdk-js-v3/blob/main/supplemental-docs/CLIENTS.md#request-handler-requesthandler)).
Because the implementation of the requestHandler varies both by platform (`node:https`-based for Node.js and `fetch`-based for browsers) and by service, and
due to constraints from historical design decisions, the streaming response implementation is not precisely known at compile time.

The type union describes why each member of the union exists ([source code](https://github.com/aws/aws-sdk-js-v3/blob/main/supplemental-docs/CLIENTS.md#request-handler-requesthandler) comments). 

If you would like to narrow the type of streaming responses, for example for AWS S3 getObject, there is another type transform that can be applied to clients, with instructions at 
`@smithy/types` https://github.com/smithy-lang/smithy-typescript/tree/main/packages/types#scenario-narrowing-a-smithy-typescript-generated-clients-output-payload-blob-types.
