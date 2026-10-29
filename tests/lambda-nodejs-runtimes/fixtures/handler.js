"use strict";

// Ships no node_modules, so every require resolves through the layer at
// /opt/nodejs/node_modules. A MODULE_NOT_FOUND means the tree is not self-contained.
const { DynamoDB } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocument, NumberValue } = require("@aws-sdk/lib-dynamodb");

exports.handler = async (event) => {
  const { TableName, id } = event;

  const doc = DynamoDBDocument.from(new DynamoDB({ maxAttempts: 10 }), {
    unmarshallOptions: { wrapNumbers: true },
  });

  await doc.put({
    TableName,
    Item: {
      id,
      string: "myString",
      number: NumberValue.from("3210000000000000000.0000000000000123"),
      stringSet: new Set(["my", "string", "set"]),
      map: { nested: { deep: true } },
    },
  });

  const read = await doc.get({ TableName, Key: { id }, ConsistentRead: true });
  await doc.delete({ TableName, Key: { id } });
  const afterDelete = await doc.get({ TableName, Key: { id }, ConsistentRead: true });

  return {
    resolved: {
      libDynamodb: require.resolve("@aws-sdk/lib-dynamodb"),
      clientDynamodb: require.resolve("@aws-sdk/client-dynamodb"),
      // Reachable only through the root @smithy symlink.
      smithyCore: require.resolve("@smithy/core"),
      deprecatedForwarder: require.resolve("@aws-sdk/abort-controller"),
    },
    // Loaded, not just resolved: the forwarder's __exportStar has to run.
    forwarderExports: Object.keys(require("@aws-sdk/abort-controller")).sort(),
    sdkVersion: require("@aws-sdk/lib-dynamodb/package.json").version,
    // NumberValue and Set cannot cross the JSON boundary.
    item: {
      id: read.Item?.id,
      string: read.Item?.string,
      number: String(read.Item?.number),
      stringSet: [...(read.Item?.stringSet ?? [])].sort(),
      map: read.Item?.map,
    },
    deletedItemAbsent: afterDelete.Item === undefined,
  };
};
