import { getAttrPathList } from "./getAttrPathList";

/**
 * Returns value corresponding to pathing string for an array or object.
 */
export const getAttr = (value: Record<any, any> | Array<any>, path: string): unknown =>
  getAttrPathList(path).reduce((acc, index) => acc[index], value);
