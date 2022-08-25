import { EndpointError, EndpointObjectProperty, EvaluateOptions } from "../types";
import { evaluateTemplate } from "./evaluateTemplate";
import { getEndpointProperties } from "./getEndpointProperties";

export const getEndpointProperty = (
  property: EndpointObjectProperty,
  options: EvaluateOptions
): EndpointObjectProperty => {
  if (Array.isArray(property)) {
    return property.map((propertyEntry) => getEndpointProperty(propertyEntry, options));
  }
  switch (typeof property) {
    case "string":
      return evaluateTemplate(property, options);
    case "object":
      return getEndpointProperties(property, options);
    case "boolean":
      return property;
    default:
      throw new EndpointError(`Unexpected endpoint property type: ${typeof property}`);
  }
};
