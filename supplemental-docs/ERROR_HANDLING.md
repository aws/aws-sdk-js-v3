# Error Handling

## Compilation errors

The most common compilation error related to this SDK is the following:

```
 error TS2345: Argument of type 'X' is not assignable to parameter of type 'Y'.
  The types of 'Z' are incompatible between these types.
    ... many lines of tracing ...
      'A' is assignable to the constraint of type 'B', but 'B' could be instantiated with a different subtype of constraint 'C'.
```

This is due to `node_modules` nesting and duplication when handling transitive dependencies that exist at multiple different versions within a single workspace. 
Most commonly, this is caused by an application installing different versions of various SDK clients that all depend on `@smithy/types` or `@aws-sdk/types`, but at different versions.

To remedy this, install every `@aws-sdk/client-*` package at or around the same version. 

```json
{
  "name": "your-app",
  "dependencies": {
    "@aws-sdk/client-s3": "<=3.600.0",
    "@aws-sdk/client-dynamodb": "<=3.600.0",
    "@aws-sdk/client-lambda": "<=3.600.0",
  }
}
```

The `<=` version prefix means to install the greatest version number below or at the given value. This is helpful because the `@aws-sdk/*` namespace
only releases package version updates when there are changes, but the version number in the monorepo increments every day. Not every minor version number exists for each package.

## Runtime errors not related to AWS service responses

You may encounter SDK errors before a request is made. Since we provide a TypeScript API, we do not runtime typecheck every value, since that would increase application size. 

```ts
// Example runtime error prior to request
import { S3 } from "@aws-sdk/client-s3";

const s3 = new S3();

await s3.getObject({
  Bucket: "georgfu-us-west-2",
  Key: 5 as any, // since this should be a string, the resulting error is thrown even prior to the request being sent.
                 // TypeError: labelValue.split is not a function
});
```

In such cases, refer to the API documentation or TypeScript declarations, or create an [issue report](https://github.com/aws/aws-sdk-js-v3/issues) for additional assistance. 

## Errors returned by AWS services

Non-2xx responses from AWS services are surfaced to the user as thrown JavaScript `Error`s. 

Since this SDK is generated from Smithy models, there is a conceptual notion of "unmodeled" and "modeled" errors. 
- A modeled error or exception is an error that is declared by the service model. For example, at the bottom of the page
https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda/command/CreateFunctionCommand/, there is a list of named
exceptions. These are the modeled exceptions for this Command or operation.
- An unmodeled error is one that does not appear in the list, but is thrown at runtime by the service. Some errors are unmodeled
because of incomplete modeling by the service, or because of routing layers, load balancers, security etc. that sit in front
of the service. 

Unmodeled errors are grouped into the default ServiceException class that exists for each AWS service. In the AWS Lambda example, it is
the one at the bottom that reads: 
```
LambdaServiceException	- Base exception class for all service exceptions from Lambda service.
```

### Example of handling service returned errors.

As seen in the example below, SDK error handling best-practices involve the following points:
- cast the initial unknown error to the service base exception type to have type-access to the `$metadata` and `$response` fields.
- 

```ts
// Example: service error handling
import { Lambda } from "@aws-sdk/client-lambda";
import { CodeStorageExceededException, LambdaServiceException, TooManyRequestsException } from "@aws-sdk/client-lambda";

const lambda = new Lambda({});

// function to check and typecast the thrown
// error to the service base error type.
function isSdkServiceError(e: unknown): e is LambdaServiceException {
  return !!(e as LambdaServiceException)?.$metadata;
}

try {
  await lambda.createFunction({
    /* ... */
  });
} catch (e: unknown) {
  if (isSdkServiceError(e)) {
    // checking the name of the error.
    switch (e.name) {
      case CodeStorageExceededException.name:
        break;
      case TooManyRequestsException.name:
        break;
      case LambdaServiceException.name:
      default:
        break;
    }

    // checking the response status code.
    switch (e.$metadata.httpStatusCode) {
    }

    // checking additional fields of
    // the raw HTTP response.
    switch (e.$response?.headers["header-name"]) {
    }
  }
}
```
