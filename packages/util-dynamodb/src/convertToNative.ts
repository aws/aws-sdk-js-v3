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
      } else if (type === "B") {
        return data[type] as Uint8Array;
      } else if (type === "S") {
        return data[type] as string;
      } else if (type === "L") {
        return (data[type] as AttributeValue[]).map(convertToNative);
      } else if (type === "M") {
        return Object.entries(data[type] as { [key: string]: AttributeValue }).reduce(
          (acc: { [key: string]: NativeAttributeValue }, [key, value]: [string, AttributeValue]) => ({
            ...acc,
            [key]: convertToNative(value),
          }),
          {}
        );
      } else if (type === "NS") {
        return new Set((data[type] as string[]).map(convertNumber));
      } else if (type === "BS") {
        return new Set(data[type]);
      } else if (type === "SS") {
        return new Set(data[type]);
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
