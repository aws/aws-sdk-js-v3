import { bodySigningCustomizations } from "./bodySigning";
import { bucketEndpointCustomizations } from "./bucketEndpoint";
import { expectContinueCustomizations } from "./expectContinue";
import { locationConstraintCustomization } from "./locationConstraint";
import { defaultContentTypeCustomization } from "./contentType";
import { ssecCustomizations } from "./ssec";
import { copySourceMiddlewareCustomization } from "./copySourceMiddleware";
import {
  CustomizationProvider,
  RuntimeTarget,
  ServiceCustomizationDefinition,
  TreeModel
} from "@aws-sdk/build-types";

export const s3Customizations: CustomizationProvider = (
  model: TreeModel,
  runtime: RuntimeTarget
) => {
  const s3Customizations: ServiceCustomizationDefinition = {
    commands: {},
    client: []
  };

  for (const { client, commands } of [
    bucketEndpointCustomizations(model, runtime),
    bodySigningCustomizations(model, runtime),
    locationConstraintCustomization,
    defaultContentTypeCustomization(model),
    ssecCustomizations(model),
    expectContinueCustomizations(model, runtime),
    copySourceMiddlewareCustomization
  ]) {
    s3Customizations.client.push(...client);
    for (const commandName of Object.keys(commands)) {
      if (commandName in s3Customizations.commands) {
        s3Customizations.commands[commandName].push(...commands[commandName]);
      } else {
        s3Customizations.commands[commandName] = commands[commandName];
      }
    }
  }

  return s3Customizations;
};
