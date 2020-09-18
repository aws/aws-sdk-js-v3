import { AttributeValue } from "@aws-sdk/client-dynamodb";

import { NativeAttributeValue } from "./models";

export const convertToAttr = (data: NativeAttributeValue): AttributeValue => {
  if (Array.isArray(data)) {
    return { L: data.map(convertToAttr) };
  } else if (data?.constructor?.name === "Set") {
    return convertToSetAttr(data as Set<any>);
  } else {
    if (data === null && typeof data === "object") {
      return { NULL: true };
    } else if (typeof data === "boolean") {
      return { BOOL: data };
    } else if (typeof data === "number") {
      return convertToNumberAttr(data);
    } else if (typeof data === "bigint") {
      return { N: data.toString() };
    } else if (isBinary(data)) {
      // @ts-ignore Do not alter binary data passed https://github.com/aws/aws-sdk-js-v3/issues/1530
      return { B: data };
    } else {
      // @ts-ignore
      return { S: data };
    }
  }
};

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

  if (data.constructor) {
    return binaryTypes.includes(data.constructor.name);
  }
  return false;
};

const convertToSetAttr = (set: Set<any>): { NS?: string[]; BS?: Uint8Array[]; SS?: string[] } => {
  if (set.size === 0) {
    throw new Error(`Please pass non-empty set`);
  }
  const item = set.values().next().value;
  if (typeof item === "number" || typeof item === "bigint") {
    return { NS: Array.from(set).map((num) => num.toString()) };
  } else if (typeof item === "string") {
    return { SS: Array.from(set).map((str) => str.toString()) };
  } else if (isBinary(item)) {
    // @ts-ignore Do not alter binary data passed https://github.com/aws/aws-sdk-js-v3/issues/1530
    return { BS: Array.from(set) };
  } else {
    throw new Error(`Only Number Set (NS), Binary Set (BS) or String Set (SS) are allowed`);
  }
};
