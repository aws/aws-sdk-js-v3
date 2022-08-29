import * as lib from "../lib";
import { EvaluateOptions, FunctionObject, FunctionReturn } from "../types";
import { evaluateExpression } from "./evaluateExpression";

export const callFunction = ({ fn, argv }: FunctionObject, options: EvaluateOptions): FunctionReturn => {
  const argvArray = argv.map((arg) => (typeof arg === "boolean" ? arg : evaluateExpression(arg, "arg", options)));
  // @ts-ignore Element implicitly has an 'any' type
  return lib[fn](...argvArray);
};
