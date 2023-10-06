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
   */
  wrapNumbers?: boolean;
  /**
   * When true, skip wrapping the data in `{ M: data }` before converting.
   *
   * Default is true when using the DynamoDBDocumentClient,
   * but false if directly using the unmarshall function (backwards compatibility).
   */
  convertWithoutMapWrapper?: boolean;
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
