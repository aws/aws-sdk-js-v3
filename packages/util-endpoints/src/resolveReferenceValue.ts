import { Reference } from "./RuleSet";
import { EndpointParametersAndAssignments } from "./types";

export const resolveReferenceValue = (params: EndpointParametersAndAssignments, referenceModel: Reference) => {
  const referedParamName = referenceModel.ref;
  if (params[referedParamName]) {
    return params[referedParamName];
  }
  throw new Error(`Cannot resolve reference "${referedParamName}" from parameters ${JSON.stringify(params)}`);
};
