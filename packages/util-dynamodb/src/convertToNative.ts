import { AttributeValue } from "@aws-sdk/client-dynamodb";

import { NativeAttributeValue } from "./models";

/**
 * Convert a DynamoDB AttributeValue object to its equivalent JavaScript type.
 *
 */
export const convertToNative = (data: AttributeValue): NativeAttributeValue => {
  for (const [key, value] of Object.entries(data)) {
    if (value !== undefined) {
      switch (key) {
        case "NULL":
          return null;
        case "BOOL":
          return Boolean(value);
        case "N":
          return convertNumber(value as string);
        case "B":
          return convertBinary(value as Uint8Array);
        case "S":
          return convertString(value as string);
        case "L":
          return convertList(value as AttributeValue[]);
        case "M":
          return convertMap(value as { [key: string]: AttributeValue });
        case "NS":
          return new Set((value as string[]).map(convertNumber));
        case "BS":
          return new Set((value as Uint8Array[]).map(convertBinary));
        case "SS":
          return new Set((value as string[]).map(convertString));
        default:
          throw new Error(`Unsupported type passed: ${key}`);
      }
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

// For future-proofing: Functions from scalar value as well as set value
const convertString = (stringValue: string): string => stringValue;
const convertBinary = (binaryValue: Uint8Array): Uint8Array => binaryValue;

const convertList = (list: AttributeValue[]): NativeAttributeValue[] => list.map(convertToNative);

const convertMap = (map: { [key: string]: AttributeValue }): { [key: string]: NativeAttributeValue } =>
  Object.entries(map).reduce(
    (acc: { [key: string]: NativeAttributeValue }, [key, value]: [string, AttributeValue]) => ({
      ...acc,
      [key]: convertToNative(value),
    }),
    {}
  );
