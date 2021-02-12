import { DynamoDB, PutItemCommand, PutItemCommandOutput } from "@aws-sdk/client-dynamodb";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { marshall } from "./marshall";
import { DocumentPutInput, DocumentPutOutput } from "./models";
import { unmarshall } from "./unmarshall";

/**
 * The document client simplifies working with items in Amazon DynamoDB
 * by abstracting away the notion of attribute values. This abstraction
 * annotates native JavaScript types supplied as input parameters, as well
 * as converts annotated response data to native JavaScript types.
 *
 * ## Marshalling Input and Unmarshalling Response Data
 *
 * The document client affords developers the use of native JavaScript types
 * instead of `AttributeValue`s to simplify the JavaScript development
 * experience with Amazon DynamoDB. JavaScript objects passed in as parameters
 * are marshalled into `AttributeValue` shapes required by Amazon DynamoDB.
 * Responses from DynamoDB are unmarshalled into plain JavaScript objects
 * by the `DocumentClient`. The `DocumentClient`, does not accept
 * `AttributeValue`s in favor of native JavaScript types.
 *
 * |                             JavaScript Type                            | DynamoDB AttributeValue |
 * |:----------------------------------------------------------------------:|-------------------------|
 * | String                                                                 | S                       |
 * | Number                                                                 | N                       |
 * | Boolean                                                                | BOOL                    |
 * | null                                                                   | NULL                    |
 * | Array                                                                  | L                       |
 * | Object                                                                 | M                       |
 * | Buffer, File, Blob, ArrayBuffer, DataView, and JavaScript typed arrays | B                       |
 *
 */
export class DocumentClient extends DynamoDB {
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
  public put(args: DocumentPutInput, options?: __HttpHandlerOptions): Promise<DocumentPutOutput>;
  public put(args: DocumentPutInput, cb: (err: any, data?: DocumentPutOutput) => void): void;
  public put(
    args: DocumentPutInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DocumentPutOutput) => void
  ): void;
  public put(
    args: DocumentPutInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DocumentPutOutput) => void),
    cb?: (err: any, data?: DocumentPutOutput) => void
  ): Promise<DocumentPutOutput> | void {
    // Do input translation on args, and send translated args to PutItemCommand
    // @ts-ignore: TypeScript throws "Property 'TableName' is missing"
    const command = new PutItemCommand({ ...args, Item: marshall(args.Item) });

    const getUnmarshalledResponse = (data: PutItemCommandOutput) => ({
      ...data,
      Attributes: unmarshall(data.Attributes),
    });

    const cbAfterUnmarshall = (callback: (err: any, data?: DocumentPutOutput) => void) => (
      err: any,
      data?: PutItemCommandOutput
    ) => {
      callback(err, getUnmarshalledResponse(data));
    };

    if (typeof optionsOrCb === "function") {
      this.send(command, cbAfterUnmarshall(optionsOrCb));
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cbAfterUnmarshall(cb));
    } else {
      return new Promise((resolve, reject) => {
        this.send(command, optionsOrCb)
          .then((data) => {
            resolve(getUnmarshalledResponse(data));
          })
          .catch((err) => {
            reject(err);
          });
      });
    }
  }
}
