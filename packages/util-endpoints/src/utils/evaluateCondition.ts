import { ConditionObject, EndpointError, EvaluateOptions } from "../types";
import { callFunction } from "./callFunction";
import { toDebugString } from "./toDebugString";

export const evaluateCondition = ({ assign, ...fnArgs }: ConditionObject, options: EvaluateOptions) => {
  const { decisionLog } = options;

  if (assign && assign in options.referenceRecord) {
    throw new EndpointError(`'${assign}' is already defined in Reference Record.`);
  }
  const value = callFunction(fnArgs, options);

  decisionLog.push(`evaluateCondition: ${toDebugString(fnArgs)} = ${toDebugString(value)}`);

  return {
    result: value === "" ? true : !!value,
    ...(assign != null && { toAssign: { name: assign, value } }),
  };
};
