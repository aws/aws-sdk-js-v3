import { EndpointObjectProperties, EvaluateOptions } from "../types";
import { getEndpointProperty } from "./getEndpointProperty";

export const getEndpointProperties = (properties: EndpointObjectProperties, options: EvaluateOptions) =>
  Object.entries(properties).reduce(
    (acc, [propertyKey, propertyVal]) => ({
      ...acc,
      [propertyKey]: getEndpointProperty(propertyVal, options),
    }),
    {}
  );
