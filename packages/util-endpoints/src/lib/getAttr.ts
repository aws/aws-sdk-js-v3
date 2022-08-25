import { EndpointError } from "../EndpointError";
import { getAttrPathList } from "./getAttrPathList";

export type GetAttrValue = string | boolean | { [key: string]: GetAttrValue } | Array<GetAttrValue>;

/**
 * Returns value corresponding to pathing string for an array or object.
 */
export const getAttr = (value: GetAttrValue, path: string): GetAttrValue =>
  getAttrPathList(path).reduce((acc, index) => {
    if (typeof acc !== "object") {
      throw new EndpointError(`Index '${index}' in '${path}' not found in '${JSON.stringify(value)}'`);
    } else if (Array.isArray(acc)) {
      return acc[parseInt(index)];
    }
    return acc[index];
  }, value);
