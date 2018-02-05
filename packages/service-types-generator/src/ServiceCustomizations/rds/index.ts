import { ServiceCustomizationDefinition, TreeModel, MiddlewareCustomizationDefinition, CustomizationDefinition } from '@aws/build-types';
import { packageNameToVariable } from '../../packageNameToVariable';
import { IMPORTS } from '../../internalImports';

const commandsToSourceIdentifierKeyMap: {[key: string]: string} = {
    CopyDBSnapshot: 'SourceDBSnapshotIdentifier',
    CreateDBInstanceReadReplica: 'SourceDBInstanceIdentifier',
    CreateDBCluster: 'ReplicationSourceIdentifier',
    CopyDBClusterSnapshot: 'SourceDBClusterSnapshotIdentifier',
}

function buildMiddleware(sourceIdentifierKeyName: string): MiddlewareCustomizationDefinition {
    return {
        type: 'Middleware',
        step: 'initialize',
        priority: 0,
        tags: '{PRESIGNED_URL: true}',
        imports: [IMPORTS['middleware-rds-presignedurl']],
        expression: `${packageNameToVariable('@aws/middleware-rds-presignedurl')}.buildCrossRegionPresignedUrl(
        '${sourceIdentifierKeyName}',
        configuration.region,
        configuration.credentials,
        configuration.endpoint,
        configuration.base64Encoder,
        configuration.utf8Decoder,
        configuration.sha256,
        )`
    } 
}

type CommandsCustomizations = {[commandName: string]: Array<CustomizationDefinition>}

export function rdsCustomizations(model: TreeModel): ServiceCustomizationDefinition {
    return {
        client: [],
        commands: Object.keys(model.operations).reduce<CommandsCustomizations>(
            (commands, operationName) => {
                if (operationName in commandsToSourceIdentifierKeyMap) {
                    const sourceIdentifierKey = commandsToSourceIdentifierKeyMap[operationName];
                    commands[operationName] = [
                        buildMiddleware(sourceIdentifierKey)
                    ]
                }
                return commands
            }, 
            {} as CommandsCustomizations
        ),
    }
}
