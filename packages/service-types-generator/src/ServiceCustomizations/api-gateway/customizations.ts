import { ServiceCustomizationDefinition } from '@aws-sdk/build-types';
import { packageNameToVariable } from '../../packageNameToVariable';
import { IMPORTS } from '../../internalImports';

const customizations: ServiceCustomizationDefinition = {
    commands: {},
    client: [
        {
            imports: [IMPORTS['middleware-sdk-api-gateway']],
            step: 'build',
            priority: 50,
            type: 'Middleware',
            tags: `{SET_ACCEPTS_HEADER: true}`,
            expression: `${packageNameToVariable('@aws-sdk/middleware-sdk-api-gateway')}.acceptsHeader`
        }
    ]
};

export function apiGatewayCustomizations() {
    return customizations;
}
