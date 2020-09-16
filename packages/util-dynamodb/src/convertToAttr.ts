import { AttributeValue } from "@aws-sdk/client-dynamodb";

import { NativeAttributeValue } from "./models";

export const convertToAttr = (data: NativeAttributeValue): AttributeValue => {
  if (data === null && typeof data === "object") {
    return { NULL: true };
  } else if (typeof data === "boolean") {
    return { BOOL: data };
  } else if (typeof data === "number") {
    return convertToNumberAttr(data);
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
