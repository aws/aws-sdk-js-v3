import {
    RuntimeTarget,
    ServiceCustomizationDefinition,
    TreeModel
} from '@aws/build-types';
import { packageNameToVariable } from '../../packageNameToVariable';
import { IMPORTS } from '../../internalImports';
import {
    sha256,
    utf8Decoder
} from '../customizationsFromModel/standardConfigurationProperties';

function mergeCustomizations(
    a: ServiceCustomizationDefinition,
    b: ServiceCustomizationDefinition
): ServiceCustomizationDefinition {
    return {
        commands: {
            ...a.commands,
            ...b.commands
        },
        client: [
            ...a.client,
            ...b.client
        ]
    };
}

const browserCustomizations: ServiceCustomizationDefinition = {
    commands: {},
    client: [
        {
            imports: [IMPORTS['add-glacier-checksum-headers-browser']],
            step: 'build',
            priority: 0,
            type: 'Middleware',
            tags: `{ADD_CHECKSUM_HEADERS: true}`,
            expression: `${packageNameToVariable('@aws/add-glacier-checksum-headers-browser')}.addChecksumHeaders(
    this.config.sha256,
    this.config.utf8Decoder
)`,
            configuration: {
                sha256,
                utf8Decoder
            }
        }
    ]
};

const universalCustomizations: ServiceCustomizationDefinition = {
    commands: {},
    client: [
        {
            imports: [IMPORTS['add-glacier-checksum-headers-universal']],
            step: 'build',
            priority: 0,
            type: 'Middleware',
            tags: `{ADD_CHECKSUM_HEADERS: true}`,
            expression: `${packageNameToVariable('@aws/add-glacier-checksum-headers-universal')}.addChecksumHeaders(
    this.config.sha256,
    this.config.utf8Decoder
)`,
            configuration: {
                sha256,
                utf8Decoder
            }
        }
    ]
};

const nodeCustomizations: ServiceCustomizationDefinition = {
    commands: {},
    client: [
        {
            imports: [IMPORTS['add-glacier-checksum-headers-node']],
            step: 'build',
            priority: 0,
            type: 'Middleware',
            tags: `{ADD_CHECKSUM_HEADERS: true}`,
            expression: `${packageNameToVariable('@aws/add-glacier-checksum-headers-node')}.addChecksumHeaders(
    this.config.sha256,
    this.config.utf8Decoder
)`,
            configuration: {
                sha256,
                utf8Decoder
            }
        }
    ]
};

const customizations: ServiceCustomizationDefinition = {
    commands: {},
    client: [
        {
            imports: [IMPORTS['middleware-sdk-glacier']],
            step: 'initialize',
            priority: 0,
            type: 'Middleware',
            tags: `{VALIDATE_ACCOUNT_ID: true}`,
            expression: `${packageNameToVariable('@aws/middleware-sdk-glacier')}.validateAccountId`
        },
        {
            imports: [IMPORTS['middleware-sdk-glacier']],
            step: 'build',
            priority: 0,
            type: 'Middleware',
            tags: `{ADD_GLACIER_API_VERSION: true}`,
            expression: `${packageNameToVariable('@aws/middleware-sdk-glacier')}.addGlacierApiVersion`
        }
    ]
};

export function glacierCustomizations(_: TreeModel, target: RuntimeTarget) {
    switch (target) {
        case 'browser':
            return mergeCustomizations(customizations, browserCustomizations);
        case 'node':
            return mergeCustomizations(customizations, nodeCustomizations);
        case 'universal':
            return mergeCustomizations(customizations, universalCustomizations);
    }
}