import { EndpointParameters, EndpointV2 } from "@aws-sdk/types";

import { GetAttrValue } from "../lib";
import { EndpointObject, FunctionObject, FunctionReturn } from "../types";

export function toDebugString(input: EndpointParameters): string;
export function toDebugString(input: EndpointV2): string;
export function toDebugString(input: GetAttrValue): string;
export function toDebugString(input: FunctionObject): string;
export function toDebugString(input: FunctionReturn): string;
export function toDebugString(input: EndpointObject): string;
export function toDebugString(input: any): string {
  if (typeof input !== 'object' || input == null) {
    return input;
  }

  if ('ref' in input) {
    return `$${toDebugString(input.ref)}`
  }

  if ('fn' in input) {
    return `${input.fn}(${(input.argv || []).map(toDebugString)})`;
  }

  return JSON.stringify(input, null, 2);
}