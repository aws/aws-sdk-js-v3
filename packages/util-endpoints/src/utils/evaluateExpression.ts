import { EndpointError, EvaluateOptions, Expression, FunctionObject, ReferenceObject } from "../types";
import { callFunction } from "./callFunction";
import { evaluateTemplate } from "./evaluateTemplate";
import { getReferenceValue } from "./getReferenceValue";

export const evaluateExpression = (obj: Expression, keyName: string, options: EvaluateOptions) => {
  if (typeof obj === "string") {
    return evaluateTemplate(obj, options);
  } else if ((obj as FunctionObject)["fn"]) {
    return callFunction(obj as FunctionObject, options);
  } else if ((obj as ReferenceObject)["ref"]) {
    return getReferenceValue(obj as ReferenceObject, options);
  }
  throw new EndpointError(`'${keyName}': ${String(obj)} is not a string, function or reference.`);
};
