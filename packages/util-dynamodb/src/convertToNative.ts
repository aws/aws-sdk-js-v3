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
      } else if (type === "BOOL") {
        return Boolean(data[type]);
      } else if (type === "N") {
        return convertNumber(data[type] as string);
      } else if (type === "S") {
        return data[type] as string;
      }
      throw new Error(`Unsupported type passed: ${type}`);
    }
  }
  throw new Error(`No value defined: ${data}`);
};

const convertNumber = (numString: string): number | bigint => {
  if (
    [Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY].map((num) => num.toString()).includes(numString)
  ) {
    throw new Error(`Special numeric value ${numString} is not allowed`);
  }

  const num = Number(numString);
  if (num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER) {
    return BigInt(num);
  }
  return num;
};
