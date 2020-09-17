import { AttributeValue } from "@aws-sdk/client-dynamodb";

import { NativeAttributeValue } from "./models";

export const convertToAttr = (data: NativeAttributeValue): AttributeValue => {
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
