import { AttributeValue } from "@aws-sdk/client-dynamodb";

import { convertToAttr } from "./convertToAttr";
import { NativeAttributeValue } from "./models";

/**
 * An optional configuration object for `marshall`
 */
export interface marshallOptions {
  /**
   * Whether to automatically convert empty strings, blobs, and sets to `null`
   */
  convertEmptyValues?: boolean;
  /**
   * Whether to remove undefined values while marshalling.
   */
  removeUndefinedValues?: boolean;
}

/**
 * Convert a JavaScript object into a DynamoDB record.
 *
 * @param {any} data - The data to convert to a DynamoDB record
 * @param {marshallOptions} options - An optional configuration object for `marshall`
 */
export const marshall = (
  data: { [key: string]: NativeAttributeValue },
  options?: marshallOptions
): { [key: string]: AttributeValue } => convertToAttr(data, options).M as { [key: string]: AttributeValue };
