import { EvaluateOptions, ReferenceObject } from "../types";

export const getReferenceValue = ({ ref }: ReferenceObject, options: EvaluateOptions) => {
  const referenceRecord = {
    ...options.endpointParams,
    ...options.referenceRecord,
  };
  return referenceRecord[ref];
};
