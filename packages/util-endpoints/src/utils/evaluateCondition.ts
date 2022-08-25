import { ConditionObject, EndpointError, EvaluateOptions } from "../types";
import { evaluateFn } from "./evaluateFn";

export const evaluateCondition = ({ assign, ...fnArgs }: ConditionObject, options: EvaluateOptions) => {
  if (assign && options.referenceRecord[assign]) {
    throw new EndpointError(`'${assign}' is already defined in Reference Record.`);
  }
  const value = evaluateFn(fnArgs, options);
  return {
    result: !!value,
    ...(assign != null && { assigned: { name: assign, value } }),
  };
};
