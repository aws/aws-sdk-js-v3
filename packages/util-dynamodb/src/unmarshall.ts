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
}

/**
 * Convert a DynamoDB record into a JavaScript object.
 *
 * @param {any} data - The DynamoDB record
 * @param {unmarshallOptions} options - An optional configuration object for `unmarshall`
 */
export const unmarshall = (
  data: { [key: string]: AttributeValue },
  options?: unmarshallOptions
): { [key: string]: NativeAttributeValue } =>
  convertToNative({ M: data }, options) as { [key: string]: NativeAttributeValue };
