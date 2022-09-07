import { ConditionObject, EndpointError, EvaluateOptions } from "../types";
import { callFunction } from "./callFunction";

export const evaluateCondition = ({ assign, ...fnArgs }: ConditionObject, options: EvaluateOptions) => {
  if (assign && assign in options.referenceRecord) {
    throw new EndpointError(`'${assign}' is already defined in Reference Record.`);
  }
  const value = callFunction(fnArgs, options);
  return {
    result: !!value,
    ...(assign != null && { toAssign: { name: assign, value } }),
  };
};
