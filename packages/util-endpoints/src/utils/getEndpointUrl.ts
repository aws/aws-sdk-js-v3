import { EvaluateOptions, Expression } from "../types";
import { EndpointError } from "../types";
import { evaluateExpression } from "./evaluateExpression";

export const getEndpointUrl = (endpointUrl: Expression, options: EvaluateOptions): URL => {
  const expression = evaluateExpression(endpointUrl, "Endpoint URL", options);
  if (typeof expression === "string") {
    return new URL(expression);
  }
  throw new EndpointError(`Endpoint URL must be a string, got ${typeof expression}`);
};
