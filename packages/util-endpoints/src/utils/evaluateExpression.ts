import { EndpointError, EvaluateOptions, FunctionObject, ReferenceObject } from "../types";
import { evaluateFn } from "./evaluateFn";
import { evaluateRef } from "./evaluateRef";
import { evaluateTemplate } from "./evaluateTemplate";

export const evaluateExpression = (
  obj: string | FunctionObject | ReferenceObject,
  keyName: string,
  options: EvaluateOptions
) => {
  if (typeof obj === "string") {
    return evaluateTemplate(obj, options);
  } else if ((obj as FunctionObject)["fn"]) {
    return evaluateFn(obj as FunctionObject, options);
  } else if ((obj as ReferenceObject)["ref"]) {
    return evaluateRef(obj as ReferenceObject, options);
  }
  throw new EndpointError(`'${keyName}': ${String(obj)} is not a string, function or reference.`);
};
