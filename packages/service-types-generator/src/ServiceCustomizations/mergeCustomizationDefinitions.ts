import { ServiceCustomizationDefinition } from "@aws-sdk/build-types";

export function mergeCustomizationDefinitions(
  ...definitions: Array<ServiceCustomizationDefinition>
): ServiceCustomizationDefinition {
  const out: ServiceCustomizationDefinition = {
    client: [],
    commands: {}
  };

  for (const { client, commands } of definitions) {
    out.client.push(...client);
    for (const commandName of Object.keys(commands)) {
      if (commandName in out.commands) {
        out.commands[commandName].push(...commands[commandName]);
      } else {
        out.commands[commandName] = commands[commandName].slice(0);
      }
    }
  }

  return out;
}
