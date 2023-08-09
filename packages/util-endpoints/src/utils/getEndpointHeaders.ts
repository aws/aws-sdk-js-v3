import { EndpointError, EndpointObjectHeaders, EvaluateOptions } from "../types";
import { evaluateExpression } from "./evaluateExpression";

export const getEndpointHeaders = (headers: EndpointObjectHeaders, options: EvaluateOptions) =>
  Object.entries(headers).reduce(
    (acc, [headerKey, headerVal]) => ({
      ...acc,
      [headerKey]: headerVal.map((headerValEntry) => {
        const processedExpr = evaluateExpression(headerValEntry, "Header value entry", options);
        if (typeof processedExpr !== "string") {
          throw new EndpointError(`Header '${headerKey}' value '${processedExpr}' is not a string`);
        }
        return processedExpr;
      }),
    }),
    {}
  );
