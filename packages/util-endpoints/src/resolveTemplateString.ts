import { getAttr } from "./functions/builtIns";
import { EndpointParametersAndAssignments } from "./types";

export const resolveTemplateString = (params: EndpointParametersAndAssignments, template: string): string => {
  // TODO(endpointsv2)
  // need implementation
  // This is wrong placeholder implementation. Need to handle "parameterName#foo" syntax
  Object.entries(params)
    .filter(([, value]) => typeof value === "string")
    .forEach(([key, value]) => {
      template = template.replace(`{${key}}`, value as string);
    });
  return template;
};
