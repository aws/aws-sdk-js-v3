# @aws-sdk/util-dynamodb

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/util-dynamodb/beta.svg)](https://www.npmjs.com/package/@aws-sdk/util-dynamodb)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/util-dynamodb.svg)](https://www.npmjs.com/package/@aws-sdk/util-dynamodb)

This package provides utilities to be used with `@aws-sdk/client-dynamodb`

## Convert JavaScript object into DynamoDB Record

```js
const { DynamoDB } = require("@aws-sdk/client-dynamodb");
const { marshall } = require("@aws-sdk/util-dynamodb");

const client = new DynamoDB(clientParams);
const params = {
  TableName: "Table",
  Item: marshall({
    HashKey: "hashKey",
    NumAttribute: 1,
    BoolAttribute: true,
    ListAttribute: [1, "two", false],
    MapAttribute: { foo: "bar" },
    NullAttribute: null,
  }),
};

await client.putItem(params);
```
