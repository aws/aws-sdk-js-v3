import { ConditionObject, Expression } from "./shared";

export type EndpointObjectProperty =
  | string
  | boolean
  | { [key: string]: EndpointObjectProperty }
  | EndpointObjectProperty[];

export type EndpointObjectProperties = Record<string, EndpointObjectProperty>;
export type EndpointObjectHeaders = Record<string, Expression[]>;
export type EndpointObject = {
  url: Expression;
  properties?: EndpointObjectProperties;
  headers?: EndpointObjectHeaders;
};

export type EndpointRuleObject = {
  type: "endpoint";
  conditions?: ConditionObject[];
  endpoint: EndpointObject;
  documentation?: string;
};

export type Endpoint = {
  url: URL;
  properties?: Record<string, EndpointObjectProperty>;
  headers?: Record<string, string[]>;
};
