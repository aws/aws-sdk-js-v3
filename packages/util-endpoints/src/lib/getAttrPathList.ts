import { EndpointError } from "../";

/**
 * Parses path as a getAttr expression, returning a list of strings.
 */
export const getAttrPathList = (path: string): Array<string> => {
  const parts = path.split(".");
  const pathList = [];

  for (const part of parts) {
    const squareBracketIndex = part.indexOf("[");
    if (squareBracketIndex !== -1) {
      if (part.indexOf("]") !== part.length - 1) {
        throw new EndpointError(`Path: '${path}' does not end with ']'`);
      }

      // Take the entire slice except for the last character (which is `]`)
      const arrayIndex = part.slice(squareBracketIndex + 1, -1);
      if (Number.isNaN(parseInt(arrayIndex))) {
        throw new EndpointError(`Invalid array index: '${arrayIndex}' in path: '${path}'`);
      }

      if (squareBracketIndex !== 0) {
        pathList.push(part.slice(0, squareBracketIndex));
      }
      pathList.push(arrayIndex);
    } else {
      pathList.push(part);
    }
  }

  return pathList;
};
