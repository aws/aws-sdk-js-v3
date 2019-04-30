import { isNode } from "@aws-sdk/is-node";
import {
  fromUtf8 as browserFromUtf8,
  toUtf8 as browserToUtf8
} from "@aws-sdk/util-utf8-browser";
import {
  fromUtf8 as nodeFromUtf8,
  toUtf8 as nodeToUtf8
} from "@aws-sdk/util-utf8-node";

export function fromUtf8(input: string): Uint8Array {
  if (isNode()) {
    return nodeFromUtf8(input);
  }

  return browserFromUtf8(input);
}

export function toUtf8(input: Uint8Array): string {
  if (isNode()) {
    return nodeToUtf8(input);
  }

  return browserToUtf8(input);
}
