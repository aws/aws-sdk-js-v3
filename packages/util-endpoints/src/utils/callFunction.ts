import * as lib from "../lib";
import { EvaluateOptions, Expression, FunctionObject, FunctionReturn } from "../types";
import { evaluateExpression } from "./evaluateExpression";

export const callFunction = ({ fn, argv }: FunctionObject, options: EvaluateOptions): FunctionReturn => {
  const evaluatedArgs = argv.map((arg) =>
    ["boolean", "number"].includes(typeof arg) ? arg : evaluateExpression(arg as Expression, "arg", options)
  );
  // @ts-ignore Element implicitly has an 'any' type
  return fn.split(".").reduce((acc, key) => acc[key], lib)(...evaluatedArgs);
};
