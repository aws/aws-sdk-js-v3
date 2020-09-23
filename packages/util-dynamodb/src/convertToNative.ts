import { AttributeValue } from "@aws-sdk/client-dynamodb";

import { NativeAttributeValue } from "./models";

/**
 * An optional configuration object for `convertToNative`
 */
export interface convertToNativeOptions {
  /**
   * Whether to return numbers as a string instead of converting them to native JavaScript numbers.
   * This allows for the safe round-trip transport of numbers of arbitrary size.
   */
  wrapNumbers?: boolean;
}

/**
 * Convert a DynamoDB AttributeValue object to its equivalent JavaScript type.
 *
 * @param {AttributeValue} data - The DynamoDB record to convert to JavaScript type.
 * @param {convertToNativeOptions} options - An optional configuration object for `convertToNative`.
 */
export const convertToNative = (data: AttributeValue, options?: convertToNativeOptions): NativeAttributeValue => {
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
  throw new Error(`No value defined: ${data}`);
};

const convertNumber = (numString: string, options?: convertToNativeOptions): number | bigint | string => {
  const specialNumericValues = [Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY];
  if (specialNumericValues.map((num) => num.toString()).includes(numString)) {
    throw new Error(`Special numeric value ${numString} is not allowed`);
  }

  if (options?.wrapNumbers) {
    return numString;
  }

  const num = Number(numString);
  if (num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER) {
    if (typeof BigInt === "function") {
      return BigInt(num);
    } else {
      throw new Error(`${numString} is outside SAFE_INTEGER bounds. Set options.wrapNumbers to get string value.`);
    }
  } else if (num.toString() !== numString) {
    throw new Error(
      `Value ${numString} is outside IEEE 754 Floating-Point Arithmetic. Set options.wrapNumbers to get string value.`
    );
  }
  return num;
};

// For future-proofing: Functions from scalar value as well as set value
const convertString = (stringValue: string): string => stringValue;
const convertBinary = (binaryValue: Uint8Array): Uint8Array => binaryValue;

const convertList = (list: AttributeValue[], options?: convertToNativeOptions): NativeAttributeValue[] =>
  list.map((item) => convertToNative(item, options));

const convertMap = (
  map: { [key: string]: AttributeValue },
  options?: convertToNativeOptions
): { [key: string]: NativeAttributeValue } =>
  Object.entries(map).reduce(
    (acc: { [key: string]: NativeAttributeValue }, [key, value]: [string, AttributeValue]) => ({
      ...acc,
      [key]: convertToNative(value, options),
    }),
    {}
  );
