import { AttributeValue } from "@aws-sdk/client-dynamodb";

import { NativeAttributeValue } from "./models";

/**
 * Convert a DynamoDB AttributeValue object to its equivalent JavaScript type.
 *
 */
export const convertToNative = (data: AttributeValue): NativeAttributeValue => {
  for (const type in data) {
    // @ts-expect-error Element implicitly has an 'any' type
    if (data[type] !== undefined) {
      if (type === "NULL") {
        return null;
      } else if (type === "N") {
        return Number(data[type]);
      } else if (type === "S") {
        return data[type] as string;
      }
      throw new Error(`Unsupported type passed: ${type}`);
    }
  }
  throw new Error(`No value defined: ${data}`);
};
