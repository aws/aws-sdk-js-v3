import { EndpointError } from "../EndpointError";
import { getAttrPathList } from "./getAttrPathList";

/**
 * Returns value corresponding to pathing string for an array or object.
 */
export const getAttr = (value: Record<any, any> | Array<any>, path: string): unknown =>
  getAttrPathList(path).reduce((acc, index) => {
    if (typeof acc !== "object") {
      throw new EndpointError(`Index '${index}' in '${path}' not found in '${JSON.stringify(value)}'`);
    }
    return acc[index];
  }, value);
