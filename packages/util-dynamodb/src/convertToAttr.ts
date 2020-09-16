import { AttributeValue } from "@aws-sdk/client-dynamodb";

import { NativeAttributeValue } from "./models";

export const convertToAttr = (inputVal: NativeAttributeValue): AttributeValue => {
  if (typeof inputVal === "boolean") {
    return { BOOL: inputVal };
  } else if (typeof inputVal === "number") {
    return { N: inputVal.toString() };
  } else {
    // @ts-ignore
    return { S: inputVal };
  }
};
