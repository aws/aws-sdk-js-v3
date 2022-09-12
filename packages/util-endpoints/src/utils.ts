import { EndpointFunction, Reference } from "./RuleSet";

export const isEndpointFunction = (rule: unknown): rule is EndpointFunction =>
  rule != null && typeof (rule as Record<string, unknown>).fn === "string";

export const isReference = (model: unknown): model is Reference =>
  model != null && typeof (model as Record<string, unknown>).ref === "string";
