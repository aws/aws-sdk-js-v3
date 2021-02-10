import { AttributeValue } from "@aws-sdk/client-dynamodb";

import { NativeAttributeValue, NumberValue } from "./models";
import { unmarshallOptions } from "./unmarshall";

/**
 * Convert a DynamoDB AttributeValue object to its equivalent JavaScript type.
 *
 * @param {AttributeValue} data - The DynamoDB record to convert to JavaScript type.
 * @param {unmarshallOptions} options - An optional configuration object for `convertToNative`.
 */
export const convertToNative = (data: AttributeValue, options?: unmarshallOptions): NativeAttributeValue => {
  for (const [key, value] of Object.entries(data)) {
    if (value !== undefined) {
      switch (key) {
        case "NULL":
          return null;
        case "BOOL":
          return Boolean(value);
        case "N":
          return convertNumber(value as string, options);
        case "B":
          return convertBinary(value as Uint8Array);
        case "S":
          return convertString(value as string);
        case "L":
          return convertList(value as AttributeValue[], options);
        case "M":
          return convertMap(value as { [key: string]: AttributeValue }, options);
        case "NS":
          return new Set((value as string[]).map((item) => convertNumber(item, options)));
        case "BS":
          return new Set((value as Uint8Array[]).map(convertBinary));
        case "SS":
          return new Set((value as string[]).map(convertString));
        default:
          throw new Error(`Unsupported type passed: ${key}`);
      }
    }
  }
  throw new Error(`No value defined: ${JSON.stringify(data)}`);
};

const convertNumber = (numString: string, options?: unmarshallOptions): number | bigint | NumberValue => {
  if (options?.wrapNumbers) {
    return { value: numString };
  }

  const num = Number(numString);
  const infinityValues = [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY];
  if ((num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER) && !infinityValues.includes(num)) {
    if (typeof BigInt === "function") {
      try {
        return BigInt(numString);
      } catch (error) {
        throw new Error(`${numString} can't be converted to BigInt. Set options.wrapNumbers to get string value.`);
      }
    } else {
      throw new Error(`${numString} is outside SAFE_INTEGER bounds. Set options.wrapNumbers to get string value.`);
    }
  }
  return num;
};

// For future-proofing: Functions from scalar value as well as set value
const convertString = (stringValue: string): string => stringValue;
const convertBinary = (binaryValue: Uint8Array): Uint8Array => binaryValue;

const convertList = (list: AttributeValue[], options?: unmarshallOptions): NativeAttributeValue[] =>
  list.map((item) => convertToNative(item, options));

const convertMap = (
  map: { [key: string]: AttributeValue },
  options?: unmarshallOptions
): { [key: string]: NativeAttributeValue } =>
  Object.entries(map).reduce(
    (acc: { [key: string]: NativeAttributeValue }, [key, value]: [string, AttributeValue]) => ({
      ...acc,
      [key]: convertToNative(value, options),
    }),
    {}
  );
