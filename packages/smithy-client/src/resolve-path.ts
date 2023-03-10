import { extendedEncodeURIComponent } from "./extended-encode-uri-component";

/**
 * @internal
 */
export const resolvedPath = (
  resolvedPath: string,
  input: unknown,
  memberName: string,
  labelValueProvider: () => string | undefined,
  uriLabel: string,
  isGreedyLabel: boolean
): string => {
  if (input != null && (input as Record<string, unknown>)[memberName] !== undefined) {
    const labelValue = labelValueProvider() as string;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: " + memberName + ".");
    }
    resolvedPath = resolvedPath.replace(
      uriLabel,
      isGreedyLabel
        ? labelValue
            .split("/")
            .map((segment) => extendedEncodeURIComponent(segment))
            .join("/")
        : extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: " + memberName + ".");
  }
  return resolvedPath;
};
