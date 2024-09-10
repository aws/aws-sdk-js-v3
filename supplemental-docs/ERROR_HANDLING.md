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
// example package.json
{
  "dependencies": {
    "@aws-sdk/client-s3": "<=3.600.0",
    "@aws-sdk/client-dynamodb": "<=3.600.0",
    "@aws-sdk/client-lambda": "<=3.600.0",
  }
}
```

The `<=` version prefix means to install the greatest version number below or at the given value. This is helpful because the `@aws-sdk/*` namespace
only releases package version updates when there are changes, but the version number in the monorepo increments every day. Not every minor version number exists for each package.

## Local 
