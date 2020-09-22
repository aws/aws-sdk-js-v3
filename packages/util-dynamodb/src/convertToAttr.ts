import { AttributeValue } from "@aws-sdk/client-dynamodb";

import { NativeAttributeBinary, NativeAttributeValue } from "./models";

/**
 * An optional configuration object for `convertToAttr`
 */
export interface convertToAttrOptions {
  /**
   * Whether to automatically convert empty strings, blobs, and sets to `null`
   */
  convertEmptyValues?: boolean;
}

/**
 * Convert a JavaScript value to its equivalent DynamoDB AttributeValue type
 *
 * @param {NativeAttributeValue} data - The data to convert to a DynamoDB AttributeValue
 * @param {convertToAttrOptions} options - An optional configuration object for `convertToAttr`
 */
export const convertToAttr = (data: NativeAttributeValue, options?: convertToAttrOptions): AttributeValue => {
  if (Array.isArray(data)) {
    return convertToListAttr(data, options);
  } else if (data?.constructor?.name === "Set") {
    return convertToSetAttr(data as Set<any>, options);
  } else if (data?.constructor?.name === "Object") {
    return converToMapAttr(data as { [key: string]: NativeAttributeValue }, options);
  } else {
    if (data === null && typeof data === "object") {
      return convertToNullAttr();
    } else if (typeof data === "boolean") {
      return { BOOL: data };
    } else if (typeof data === "number") {
      return convertToNumberAttr(data);
    } else if (typeof data === "bigint") {
      return { N: data.toString() };
    } else if (isBinary(data)) {
      // @ts-expect-error Property 'length' does not exist on type 'ArrayBuffer'.
      if (data.length === 0 && options?.convertEmptyValues) {
        return convertToNullAttr();
      }
      // Do not alter binary data passed https://github.com/aws/aws-sdk-js-v3/issues/1530
      // @ts-expect-error Type '{ B: NativeAttributeBinary; }' is not assignable to type 'AttributeValue'
      return convertToBinaryAttr(data);
    } else if (typeof data === "string") {
      if (data.length === 0 && options?.convertEmptyValues) {
        return convertToNullAttr();
      }
      return convertToStringAttr(data);
    }
    throw new Error(`Unsupported type passed: ${data}`);
  }
};

const convertToListAttr = (data: NativeAttributeValue[], options?: convertToAttrOptions): { L: AttributeValue[] } => ({
  L: data.map((item) => convertToAttr(item, options)),
});

const convertToSetAttr = (
  set: Set<any>,
  options?: convertToAttrOptions
): { NS: string[] } | { BS: Uint8Array[] } | { SS: string[] } | { NULL: true } => {
  if (set.size === 0) {
    if (options?.convertEmptyValues) {
      return convertToNullAttr();
    }
    throw new Error(`Please pass a non-empty set, or set convertEmptyValues to true.`);
  }

  const item = set.values().next().value;
  if (typeof item === "number" || typeof item === "bigint") {
    return {
      NS: Array.from(set)
        .map(convertToNumberAttr)
        .map((item) => item.N),
    };
  } else if (typeof item === "string") {
    return {
      SS: Array.from(set)
        .map(convertToStringAttr)
        .map((item) => item.S),
    };
  } else if (isBinary(item)) {
    return {
      // Do not alter binary data passed https://github.com/aws/aws-sdk-js-v3/issues/1530
      // @ts-expect-error Type 'ArrayBuffer' is not assignable to type 'Uint8Array'
      BS: Array.from(set)
        .map(convertToBinaryAttr)
        .map((item) => item.B),
    };
  } else {
    throw new Error(`Only Number Set (NS), Binary Set (BS) or String Set (SS) are allowed.`);
  }
};

const converToMapAttr = (
  data: { [key: string]: NativeAttributeValue },
  options?: convertToAttrOptions
): { M: { [key: string]: AttributeValue } } => ({
  M: Object.entries(data).reduce(
    (acc: { [key: string]: AttributeValue }, [key, value]: [string, NativeAttributeValue]) => ({
      ...acc,
      [key]: convertToAttr(value, options),
    }),
    {}
  ),
});

// For future-proofing: this functions are called from multiple places
const convertToNullAttr = (): { NULL: true } => ({ NULL: true });
const convertToBinaryAttr = (data: NativeAttributeBinary): { B: NativeAttributeBinary } => ({ B: data });
const convertToStringAttr = (data: string): { S: string } => ({ S: data });

const convertToNumberAttr = (num: number): { N: string } => {
  if ([Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY].includes(num)) {
    throw new Error(`Special numeric value ${num} is not allowed`);
  } else if (num > Number.MAX_SAFE_INTEGER) {
    throw new Error(`Number ${num} is greater than Number.MAX_SAFE_INTEGER. Use BigInt.`);
  } else if (num < Number.MIN_SAFE_INTEGER) {
    throw new Error(`Number ${num} is lesser than Number.MIN_SAFE_INTEGER. Use BigInt.`);
  }
  return { N: num.toString() };
};

const isBinary = (data: any): boolean => {
  const binaryTypes = [
    "ArrayBuffer",
    "Blob",
    "Buffer",
    "DataView",
    "File",
    "Int8Array",
    "Uint8Array",
    "Uint8ClampedArray",
    "Int16Array",
    "Uint16Array",
    "Int32Array",
    "Uint32Array",
    "Float32Array",
    "Float64Array",
    "BigInt64Array",
    "BigUint64Array",
  ];

  if (data?.constructor) {
    return binaryTypes.includes(data.constructor.name);
  }
  return false;
};
