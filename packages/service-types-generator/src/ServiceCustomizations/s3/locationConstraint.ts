import {
  CustomizationDefinition,
  ConfigurationPropertyDefinition,
  MiddlewareCustomizationDefinition,
  ServiceCustomizationDefinition,
  SyntheticParameterCustomizationDefinition,
  TreeModel
} from "@aws-sdk/build-types";
import { packageNameToVariable } from "../../packageNameToVariable";
import { IMPORTS } from "../../internalImports";

export const locationConstraintCustomization: ServiceCustomizationDefinition = {
  client: [],
  commands: {
    CreateBucket: [
      {
        type: "Middleware",
        step: "initialize",
        priority: 0,
        expression: `${packageNameToVariable(
          "@aws-sdk/location-constraint-middleware"
        )}.locationConstraintMiddleware(configuration.region)`,
        imports: [IMPORTS["location-constraint-middleware"]]
      }
    ]
  }
};
