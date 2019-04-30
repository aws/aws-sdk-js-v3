import {
  ServiceCustomizationDefinition,
  TreeModel,
  MiddlewareCustomizationDefinition,
  CustomizationDefinition
} from "@aws-sdk/build-types";
import { packageNameToVariable } from "../../packageNameToVariable";
import { IMPORTS } from "../../internalImports";

const commandsToSourceIdentifierKeyMap: { [key: string]: string } = {
  CopyDBSnapshot: "SourceDBSnapshotIdentifier",
  CreateDBInstanceReadReplica: "SourceDBInstanceIdentifier",
  CreateDBCluster: "ReplicationSourceIdentifier",
  CopyDBClusterSnapshot: "SourceDBClusterSnapshotIdentifier"
};

function buildMiddleware(
  sourceIdentifierKeyName: string
): MiddlewareCustomizationDefinition {
  return {
    type: "Middleware",
    step: "initialize",
    priority: 0,
    tags: "{PRESIGNED_URL: true}",
    imports: [IMPORTS["middleware-rds-presignedurl"]],
    expression: `${packageNameToVariable(
      "@aws-sdk/middleware-rds-presignedurl"
    )}.buildCrossRegionPresignedUrl({
        sourceIdentifierKey: '${sourceIdentifierKeyName}',
        region: configuration.region,
        credentials: configuration.credentials,
        endpoint: configuration.endpoint,
        base64Encoder: configuration.base64Encoder,
        utf8Decoder: configuration.utf8Decoder,
        sha256: configuration.sha256,
        })`
  };
}

type CommandsCustomizations = {
  [commandName: string]: Array<CustomizationDefinition>;
};

export function rdsCustomizations(
  model: TreeModel
): ServiceCustomizationDefinition {
  return {
    client: [],
    commands: Object.keys(model.operations).reduce<CommandsCustomizations>(
      (commands, operationName) => {
        if (operationName in commandsToSourceIdentifierKeyMap) {
          const sourceIdentifierKey =
            commandsToSourceIdentifierKeyMap[operationName];
          commands[operationName] = [buildMiddleware(sourceIdentifierKey)];
        }
        return commands;
      },
      {} as CommandsCustomizations
    )
  };
}
