import { ConditionObject, EndpointError, EvaluateOptions } from "../types";
import { callFunction } from "./callFunction";

export const evaluateCondition = ({ assign, ...fnArgs }: ConditionObject, options: EvaluateOptions) => {
  if (assign && assign in options.referenceRecord) {
    throw new EndpointError(`'${assign}' is already defined in Reference Record.`);
  }
  const value = callFunction(fnArgs, options);
  const output = {
    result: value === "" ? true : !!value,
    ...(assign != null && { toAssign: { name: assign, value } }),
  };

  // console.log("evaluateCondition", {
  //   args: JSON.stringify(fnArgs),
  //   references: options.referenceRecord,
  //   output,
  // });

  return output;
};
