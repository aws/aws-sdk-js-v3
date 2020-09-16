import { AttributeValue } from "@aws-sdk/client-dynamodb";

import { NativeAttributeValue } from "./models";

export const convertToAttr = (inputVal: NativeAttributeValue): AttributeValue => {
  if (typeof inputVal === "boolean") {
    return { BOOL: inputVal };
  } else if (typeof inputVal === "number") {
    return convertToNumber(inputVal);
  } else {
    // @ts-ignore
    return { S: inputVal };
  }
};

const convertToNumber = (num: number): { N: string } => {
  if ([NaN, Infinity, -Infinity].includes(num)) {
    throw new Error(`Special numeric value ${num} is not allowed`);
  }
  return { N: num.toString() };
};
