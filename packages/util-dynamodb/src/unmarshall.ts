import { AttributeValue } from "@aws-sdk/client-dynamodb";

import { convertToNative } from "./convertToNative";
import { NativeAttributeValue } from "./models";

/**
 * An optional configuration object for `convertToNative`
 */
export interface unmarshallOptions {
  /**
   * Whether to return numbers as a string instead of converting them to native JavaScript numbers.
   * This allows for the safe round-trip transport of numbers of arbitrary size.
   *
   * @deprecated set useDynamoDBNumberWrapper option instead.
   * If useDynamoDBNumberWrapper option is set, the value of wrapNumbers will be ignored.
   */
  wrapNumbers?: boolean;

  /**
   * When true, skip wrapping the data in `{ M: data }` before converting.
   *
   * Default is true when using the DynamoDBDocumentClient,
   * but false if directly using the unmarshall function (backwards compatibility).
   */
  convertWithoutMapWrapper?: boolean;

  /**
   * When to use the DynamoDBNumber wrapper class for numbers.
   * Default="never". An error will be thrown for large numbers.
   *
   * "bigNumbersOnly": only numbers exceeding MAX_SAFE_INTEGER in absolute terms
   * will be wrapped. Your application code must handle the divergent result
   * types of `number | DynamoDBNumber`.
   *
   * "allNumbers": all numbers will be wrapped with the DynamoDBNumber class.
   */
  useDynamoDBNumberWrapper?: "never" | "bigNumbersOnly" | "allNumbers";
}

/**
 * Convert a DynamoDB record into a JavaScript object.
 *
 * @param data - The DynamoDB record
 * @param options - An optional configuration object for `unmarshall`
 */
export const unmarshall = (
  data: Record<string, AttributeValue> | AttributeValue,
  options?: unmarshallOptions
): Record<string, NativeAttributeValue> => {
  if (options?.convertWithoutMapWrapper) {
    return convertToNative(data as AttributeValue, options);
  }
  return convertToNative({ M: data as Record<string, AttributeValue> }, options) as Record<
    string,
    NativeAttributeValue
  >;
};
