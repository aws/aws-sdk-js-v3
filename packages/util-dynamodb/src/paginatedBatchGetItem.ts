import { BatchGetItemCommand, BatchGetItemCommandInput, DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { type DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

/**
 * Async generator that issues {@link BatchGetItemCommand}s repeatedly until all keys are processed or an error response is received.
 *
 * @public
 *
 * @see {@link paginatedBatchGetItem} for a variant that uses the {@link DynamoDBDocumentClient | DynamoDB document client}.
 *
 * @example
 *
 * ```typescript
 * const client = new DynamoDBClient();
 * const input: BatchGetCommandInput = {
 *   RequestItems: {
 *     table1: Keys: [...],
 *     table2: Keys: [...],
 *   }
 * };
 *
 * let pageNumber = 1;
 * for await (const page of paginateBatchGetItem({ client }, input)) {
 *   console.log("page:", pageNumber++);
 *   console.log("items:", page.Responses);
 *   console.log("unprocessed:", page.UnprocessedKeys); // will be returned in the next page(s)
 * }
 * ```
 */
export async function* paginatedBatchGetItem(config: { client: DynamoDBClient }, input: BatchGetItemCommandInput) {
  let RequestItems = input.RequestItems;

  while (RequestItems && Object.keys(RequestItems).length > 0) {
    const cmd = new BatchGetItemCommand({ ...input, RequestItems });
    const response = await config.client.send(cmd);
    RequestItems = { ...response.UnprocessedKeys };

    yield response;
  }
}
