// smithy-typescript generated code
import { BinaryDecisionDiagram } from "@smithy/core/endpoints";

const a={"ref":"endpoint"};
const _data={
  conditions: [
    ["isSet",[a]]
  ],
  results: [
    [-1],
    [a,{}],
    [-1,"(default endpointRuleSet) endpoint is not set - you must configure an endpoint."]
  ]
};

const root = 2;
const r = 100_000_000;
const nodes = new Int32Array([
  -1, 1, -1,
  0, r + 1, r + 2,
]);
export const bdd = BinaryDecisionDiagram.from(
  nodes, root, _data.conditions, _data.results
);
