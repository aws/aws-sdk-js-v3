# Schemas

> Available only in [v3.953.0](https://github.com/aws/aws-sdk-js-v3/releases/tag/v3.953.0)
> and later.

In the context of AWS SDK for JavaScript v3 (and Smithy) clients,
schemas are runtime objects that describe the data structures of modeled shapes.

They are used internally by the SDK to serialize from and deserialize to
JavaScript objects making up the input and output of SDK-to-service operations.

You do not need to know about schemas in order to use the basic input/output functions of
the SDK, but they allow add-on functionality such as
runtime type validation or serialization to non-default formats.

## How does one import a Schema?

As you may already know, usage of the SDK involves importing
and instantiating clients and commands (a.k.a. operations).

```ts
// example: importing a client and operation.
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
```

In TypeScript, each client also exports interfaces describing various
data structures from the same client.

```ts
// example: importing an interface.
import type { PutBucketAclRequest } from "@aws-sdk/client-s3";
```

Schemas are new runtime objects that accompany most exported interfaces.
They are suffixed with the `$` symbol.

```ts
// example: importing both an interface and its schema.
import { type PutBucketAclRequest, PutBucketAclRequest$ } from "@aws-sdk/client-s3";
```

Although the schema object _describes_ its corresponding interface type,
a schema does not _have_ the type of that interface. Schema objects
have their own common type described below.

## What does the SDK do with Schemas internally?

As described in [CLIENTS.md](./CLIENTS.md), the `protocol` configuration
field of any SDK client constructor allows the selection of a client's
AWS protocol, which includes a serialization format, such as JSON, XML, or CBOR.

Schema objects contain information on the structure of shapes in a service model,
without being tied to any specific format.

This information is then used by those protocol implementations to, for example,
serialize the JavaScript object you provide into the XML format needed to transmit
a request to Amazon S3. In the case of CloudWatch, schemas are shared
among all supported protocols.

The SDK uses a hierarchy of interfaces involving schemas as the building block,
and resulting in a `ClientProtocol` as the overall orchestrator.

The following type interfaces in [smithy-typescript](https://github.com/smithy-lang/smithy-typescript/blob/main/packages/types/src/schema/schema.ts)
explain the hierarchy.

```ts
// example: public interfaces relating to schemas and protocols.
import type { $Schema, $ShapeSerializer, $ShapeDeserializer, $Codec, $ClientProtocol } from "@smithy/types";
```

The full explanation can be read in the link above, but in summary:

- schemas describe the structural and serialization characteristics of
  modeled shapes
- shape serializers and deserializers convert objects
  into formats like strings, JSON, XML, CBOR etc. by using schemas
- codecs group a serializer + deserializer pair for a shared format
- client protocols utilize codecs and (de)serializers to convert data
  into transport messages (e.g. HTTP). This is at a higher level than codecs,
  since HTTP messages contain more than a direct serialization of some object.

## What applications exist for Schemas?

The applications of schema objects are open-ended. We outline two examples below.

### Example application 1 - object validation at runtime

Prior to the release of the schemas as a feature, an SDK package relied
solely on its exported types and API reference documentation for compile-time validation.

With schemas, a degree of runtime type validation can be performed.

```ts
// example: a validator function accepting a schema and data object.
import { NormalizedSchema } from "@smithy/core/schema";

/**
 * @param $ - NormalizedSchema.of() wrapping the schema object.
 * @param object - data to validate.
 * @param path - recursion path.
 *
 * @returns list of errors.
 */
function validate($: NormalizedSchema, object: unknown, path = "object"): string[] {
  const errors: string[] = [];
  if (object === undefined) {
    return errors;
  }
  if ($.isStringSchema()) {
    if (typeof object !== "string") {
      errors.push(`${path}: expected string, got ${typeof object}`);
    }
  } else if ($.isNumericSchema()) {
    if (typeof object !== "number") {
      errors.push(`${path}: expected number, got ${typeof object}`);
    }
  } else if ($.isBigIntegerSchema()) {
    if (typeof object !== "bigint") {
      errors.push(`${path}: expected bigint, got ${typeof object}`);
    }
  } else if ($.isBigDecimalSchema()) {
    if (!(object instanceof NumericValue)) {
      errors.push(`${path}: expected NumericValue, got ${typeof object}`);
    }
  } else if ($.isBooleanSchema()) {
    if (typeof object !== "boolean") {
      errors.push(`${path}: expected boolean, got ${typeof object}`);
    }
  } else if ($.isBlobSchema()) {
    if ($.isStreaming()) {
      // many types are allowed for streaming payloads.
    } else {
      if (!(object instanceof Uint8Array)) {
        errors.push(`${path}: expected Uint8Array, got ${typeof object}`);
      }
    }
  } else if ($.isTimestampSchema()) {
    if (!(object instanceof Date)) {
      errors.push(`${path}: expected Date, got ${typeof object}`);
    }
  } else if ($.isMapSchema()) {
    if (typeof object !== "object") {
      errors.push(`expected map object, got ${typeof object}`);
    } else {
      const map$ = $.getValueSchema();
      for (const [key, value] of Object.entries(object)) {
        errors.push(...validate(map$, value, path + `["${key}"]`));
      }
    }
  } else if ($.isListSchema()) {
    if (!Array.isArray(object)) {
      errors.push(`expected array (list), got ${typeof object}`);
    } else {
      const list$ = $.getValueSchema();
      for (let i = 0; i < object.length; ++i) {
        const value = object[i];
        errors.push(...validate(list$, value, path + `[${i}]`));
      }
    }
  } else if ($.isStructSchema()) {
    if (typeof object !== "object") {
      errors.push(`${path}: expected struct of type ${$.getName()}, got ${typeof object}`);
    } else {
      const keys = new Set(Object.keys(object));
      for (const [member, member$] of $.structIterator()) {
        keys.delete(member);
        errors.push(...validate(member$, object[member], path + `.${member}`));
      }
      if (keys.size > 0) {
        errors.unshift(`${path}: unmatched keys: ${Array.from(keys).join(", ")}`);
      }
    }
  }

  return errors;
}
```

```ts
// example: type interface for compile time check,
//          schema for runtime check.
import { type PutBucketAclRequest, PutBucketAclRequest$ } from "@aws-sdk/client-s3";

const putBucketAclRequest = {
  BucketRegion: "us-west-2",
  AccessControlPolicy: {
    Grants: [
      {
        Grantee: {
          ID: 1,
          Type: "unknown",
          DisplayName: "user name",
          EmailAddres: "___@___",
        },
      },
    ],
    Owner: {
      DisplayName: "owner",
      ID: 1,
    },
  },
} satisfies PutBucketAclRequest;

const errors = validate(NormalizedSchema.of(PutBucketAclRequest$), putBucketAclRequest);
```

As shown above, existing compile-time validation can already catch most errors.
However, if for example accepting an unknown user input, runtime validation would be
a useful augmentation.

```shell
{
  errors: [
    'object: unmatched keys: BucketRegion',
    'object.AccessControlPolicy.Grants[0].Grantee: unmatched keys: EmailAddres',
    'object.AccessControlPolicy.Grants[0].Grantee.ID: expected string, got number',
    'object.AccessControlPolicy.Owner.ID: expected string, got number'
  ]
}
```

While we don't recommend any specific runtime validation library,
schemas can be mapped to such systems.

#### Limitations

- At this time, schemas do not contain "required member" information, and will not be able to tell
  you whether a required field is missing.
- Schemas also do not include numeric-range and regex-based constraints that may exist on Smithy models.

These limitations are due to the AWS SDK for JavaScript's architectural design decision
to favor server-side error validation. Strong client-side validation for SDKs, which are released as
static code packages, would limit the ability of SDKs to react to changes in
constraints on the server-side, which are commonplace.

These additional constraint information may be introduced in the future, but rollout will be dependent
on evaluating the impact of additional schema information on the size of the SDK.

### Example application 2 - object serialization & deserialization

In AWS and in general, there are service operations with structured inputs/outputs, and
operations which are essentially arbitrary in structure.

When you call Amazon S3's `GetBucketAcl`, the response type is static, only varying
on optional fields and the length of lists etc.

There is another class of operations that deal in unstructured data. For example:

- S3 Objects can contain arbitrary data.
- DynamoDB items, while having a defined AttributeValue structure, are nearly arbitrary.
- SQS types messages as `string`s, but these can in reality be serializations of structural types.

In the below code example, we take an object which happens to be a `PutItemInput` from DynamoDB, but
can be replaced with any structural schema, and show how it can be serialized to different formats
unrelated to the default format of the schema's service.

```ts
// example: JavaScript data object and its schema.
import { PutItemInput$ } from "@aws-sdk/client-dynamodb";

const myData = {
  TableName: "",
  Item: {
    id: {
      S: "1",
    },
    binaryData: {
      B: new Uint8Array([0, 1, 2, 3]),
    },
  },
};
```

The JSON serialization is a string, which can be written to disk or transmitted to
services that store arbitrary strings.

```ts
// example: serialization to and deserialization from JSON.
import { JsonCodec } from "@aws-sdk/core/protocols";

const jsonCodec = new JsonCodec({
  timestampFormat: {
    useTrait: true,
    default: 7 as const satisfies TimestampEpochSecondsSchema,
  },
  jsonName: false,
});
const serializer = jsonCodec.createSerializer();
serializer.write(PutItemInput$, myData);
const serialization = serializer.flush();
expect(serialization).toEqual(`{"TableName":"","Item":{"id":{"S":"1"},"binaryData":{"B":"AAECAw=="}}}`);

const deserializer = jsonCodec.createDeserializer();
const deserialization = await deserializer.read(PutItemInput$, serialization);
expect(deserialization).toEqual(myData);
```

The same idea applies to the CBOR format, but this format favors binary storage.
For the byte printer code, refer to [smithy-typescript](https://github.com/smithy-lang/smithy-typescript/blob/main/packages/core/src/submodules/cbor/byte-printer.ts).

```ts
// example: serialization to and deserialization from CBOR.
import { CborCodec } from "@smithy/core/cbor";

const cborCodec = new CborCodec();
const serializer = cborCodec.createSerializer();
serializer.write(PutItemInput$, myData);
const serialization = serializer.flush();
expect(printBytes(serialization)).toEqual([
  "101_00010 (5 - map, 2)",
  "011_01001 (3 - utf8 string, 9)",
  "010_10100 (2 - unstructured bytestring, 20)",
  "011_00001 (3 - utf8 string, 1)",
  "011_00010 (3 - utf8 string, 2)",
  "011_01100 (3 - utf8 string, 12)",
  "011_00101 (3 - utf8 string, 5)",
  "010_01110 (2 - unstructured bytestring, 14)",
  "011_00001 (3 - utf8 string, 1)",
  "011_01101 (3 - utf8 string, 13)",
  "011_00101 (3 - utf8 string, 5)",
  "011_00000 (3 - utf8 string, 0)",
  "011_00100 (3 - utf8 string, 4)",
  "010_01001 (2 - unstructured bytestring, 9)",
  "011_10100 (3 - utf8 string, 20)",
  "011_00101 (3 - utf8 string, 5)",
  "011_01101 (3 - utf8 string, 13)",
  "101_00010 (5 - map, 2)",
  "011_00010 (3 - utf8 string, 2)",
  "011_01001 (3 - utf8 string, 9)",
  "011_00100 (3 - utf8 string, 4)",
  "101_00001 (5 - map, 1)",
  "011_00001 (3 - utf8 string, 1)",
  "010_10011 (2 - unstructured bytestring, 19)",
  "011_00001 (3 - utf8 string, 1)",
  "001_10001 (1 - Neg Uint64, 17)",
  "011_01010 (3 - utf8 string, 10)",
  "011_00010 (3 - utf8 string, 2)",
  "011_01001 (3 - utf8 string, 9)",
  "011_01110 (3 - utf8 string, 14)",
  "011_00001 (3 - utf8 string, 1)",
  "011_10010 (3 - utf8 string, 18)",
  "011_11001 (3 - utf8 string, 25)",
  "010_00100 (2 - unstructured bytestring, 4)",
  "011_00001 (3 - utf8 string, 1)",
  "011_10100 (3 - utf8 string, 20)",
  "011_00001 (3 - utf8 string, 1)",
  "101_00001 (5 - map, 1)",
  "011_00001 (3 - utf8 string, 1)",
  "010_00010 (2 - unstructured bytestring, 2)",
  "010_00100 (2 - unstructured bytestring, 4)",
  "000_00000 (0 - Uint64, 0)",
  "000_00001 (0 - Uint64, 1)",
  "000_00010 (0 - Uint64, 2)",
  "000_00011 (0 - Uint64, 3)",
]);
const deserializer = cborCodec.createDeserializer();
const deserialization = await deserializer.read(PutItemInput$, serialization);
```

#### Why is a schema necessary to serialize/deserialize data?

The schema is a necessary component, rather than serializing dynamically
with a set of heuristic behaviors. This is because some serialized
representations can be ambiguous without an associated schema.

```ts
// example: ambiguous data structure when not accompanied by schema.
const ambiguousData = {
  created: 1765909365,
  updated: 1765909365,
  data: "AAECAw==",
};
```

Without a schema, it is unclear whether the data above contains
two numbers and a string, or in fact two timestamps and a byte array,
which need to be converted to `Date` and `Uint8Array` respectively.
