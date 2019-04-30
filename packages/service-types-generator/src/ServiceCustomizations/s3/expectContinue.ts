import {
  CustomizationProvider,
  RuntimeTarget,
  ServiceCustomizationDefinition,
  TreeModel
} from "@aws-sdk/build-types";
import { IMPORTS } from "../../internalImports";
import { packageNameToVariable } from "../../packageNameToVariable";

export const expectContinueCustomizations: CustomizationProvider = (
  _: TreeModel,
  runtime: RuntimeTarget
) => {
  if (runtime === "node") {
    return nodeCustomizations;
  }
  return {
    commands: {},
    client: []
  };
};

const nodeCustomizations: ServiceCustomizationDefinition = {
  commands: {},
  client: [
    {
      imports: [IMPORTS["middleware-expect-continue"]],
      step: "build",
      priority: 0,
      type: "Middleware",
      tags: `{EXPECT_100_CONTINUE: true}`,
      expression: `${packageNameToVariable(
        "@aws-sdk/middleware-expect-continue"
      )}.addExpectContinue`
    }
  ]
};
