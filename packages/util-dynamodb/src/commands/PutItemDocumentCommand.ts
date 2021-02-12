import {
  DynamoDBClientResolvedConfig,
  PutItemCommand,
  PutItemCommandInput,
  PutItemCommandOutput,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "@aws-sdk/client-dynamodb";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions, MiddlewareStack } from "@aws-sdk/types";

import { marshall } from "../marshall";
import { NativeAttributeValue } from "../models";
import { unmarshall } from "../unmarshall";

export type PutItemDocumentCommandInput = Omit<PutItemCommandInput, "Item"> & {
  Item: { [key: string]: NativeAttributeValue } | undefined;
};

export type PutItemDocumentCommandOutput = Omit<PutItemCommandOutput, "Attributes"> & {
  Attributes: { [key: string]: NativeAttributeValue };
};

/**
 * Creates a new item, or replaces an old item with a new item by
 * delegating to `DynamoDB.putItem()`.
 *
 * Supply the same parameters as {DynamoDB.putItem} with
 * `AttributeValue`s substituted by native JavaScript types.
 *
 * @see DynamoDB.putItem
 * @example Create a new item in a table
 *  var params = {
 *    TableName : 'Table',
 *    Item: {
 *       HashKey: 'haskey',
 *       NumAttribute: 1,
 *       BoolAttribute: true,
 *       ListAttribute: [1, 'two', false],
 *       MapAttribute: { foo: 'bar'},
 *       NullAttribute: null
 *    }
 *  };
 *
 *  var documentClient = new DocumentClient();
 *
 *  try {
 *   const data = await documentClient.put(params);
 *   console.log(data);
 *  } catch(err) {
 *   console.log(err);
 *  }
 *
 */
export class PutItemDocumentCommand extends $Command<
  PutItemDocumentCommandInput,
  PutItemDocumentCommandOutput,
  DynamoDBClientResolvedConfig
> {
  private command: PutItemCommand;

  constructor(readonly input: PutItemDocumentCommandInput) {
    super();
    this.command = new PutItemCommand({ ...input, Item: marshall(input.Item) });
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBClientResolvedConfig,
    options?: HttpHandlerOptions
  ): Handler<PutItemDocumentCommandInput, PutItemDocumentCommandOutput> {
    const handler = this.command.resolveMiddleware(clientStack, configuration, options);

    return () =>
      new Promise((resolve, reject) => {
        handler(this.command)
          .then((data) => {
            resolve({
              ...data,
              output: {
                ...data.output,
                ...(data.output.Attributes && { Attributes: unmarshall(data.output.Attributes) }),
              } as PutItemDocumentCommandOutput,
            });
          })
          .catch((err) => {
            reject(err);
          });
      });
  }
}
