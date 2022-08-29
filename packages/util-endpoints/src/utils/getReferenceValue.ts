import { EndpointError, EvaluateOptions, ReferenceObject } from "../types";

export const getReferenceValue = ({ ref }: ReferenceObject, options: EvaluateOptions) => {
  const referenceRecord = {
    ...options.endpointParams,
    ...options.referenceRecord,
  };
  if (referenceRecord[ref] == undefined) {
    throw new EndpointError(`Reference '${ref}' not defined`);
  }
  return referenceRecord[ref];
};
