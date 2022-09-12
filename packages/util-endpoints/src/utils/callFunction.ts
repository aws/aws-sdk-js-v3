import * as lib from "../lib";
import { EvaluateOptions, FunctionObject, FunctionReturn } from "../types";
import { evaluateExpression } from "./evaluateExpression";

export const callFunction = ({ fn, argv }: FunctionObject, options: EvaluateOptions): FunctionReturn => {
  const evaluatedArgs = argv.map((arg) => (typeof arg === "boolean" ? arg : evaluateExpression(arg, "arg", options)));
  // @ts-ignore Element implicitly has an 'any' type
  return fn.split(".").reduce((acc, key) => acc[key], lib)(...evaluatedArgs);
};
