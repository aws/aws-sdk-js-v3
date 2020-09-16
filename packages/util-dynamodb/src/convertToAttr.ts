import { AttributeValue } from "@aws-sdk/client-dynamodb";

import { NativeAttributeValue } from "./models";

export const convertToAttr = (inputVal: NativeAttributeValue): AttributeValue => {
  if (typeof inputVal === "boolean") {
    return { BOOL: inputVal };
  } else if (typeof inputVal === "number") {
    return convertToNumberAttr(inputVal);
  } else {
    // @ts-ignore
    return { S: inputVal };
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
