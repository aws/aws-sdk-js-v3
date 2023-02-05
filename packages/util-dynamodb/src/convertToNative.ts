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
          return convertMap(value as Record<string, AttributeValue>, options);
        case "NS":
          return convertNumberSet(value as string[], options);
        case "BS":
          return convertBinarySet(value as Uint8Array[], options);
        case "SS":
          return convertStringSet(value as string[], options);
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
  map: Record<string, AttributeValue>,
  options?: unmarshallOptions
): Record<string, NativeAttributeValue> =>
  Object.entries(map).reduce(
    (acc: Record<string, NativeAttributeValue>, [key, value]: [string, AttributeValue]) => (
      (acc[key] = convertToNative(value, options)), acc
    ),
    {}
  );

const convertNumberSet = (
  set: string[],
  options?: unmarshallOptions
): Set<number | bigint | NumberValue> | number[] | bigint[] | NumberValue[] =>
  convertSet(
    set.map((item) => convertNumber(item, options)),
    options
  );

const convertBinarySet = (set: Uint8Array[], options?: unmarshallOptions): Set<Uint8Array> | Uint8Array[] =>
  convertSet(
    set.map((item) => convertBinary(item)),
    options
  );

const convertStringSet = (set: string[], options?: unmarshallOptions): Set<string> | string[] =>
  convertSet(
    set.map((item) => convertString(item)),
    options
  );

const convertSet = (
  set: NativeAttributeValue[],
  options?: unmarshallOptions
): Set<NativeAttributeValue> | NativeAttributeValue[] => (options?.returnSetsAsArrays ? set : new Set(set));
