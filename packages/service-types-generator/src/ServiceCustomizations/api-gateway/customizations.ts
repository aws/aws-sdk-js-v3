import {ServiceCustomizationDefinition} from '@aws/build-types';
import {packageNameToVariable} from '../../Components/Client/packageNameToVariable';
import {IMPORTS} from '../../Components/Client/internalImports';

export const customizations: ServiceCustomizationDefinition = {
    middleware: {
        commands: {},
        client: [
            {
                imports: [IMPORTS['middleware-sdk-api-gateway']],
                step: 'build',
                priority: 50,
                type: 'Middleware',
                tags: `{SET_ACCEPTS_HEADER: true}`,
                expression: `${packageNameToVariable('@aws/middleware-sdk-api-gateway')}.acceptsHeader`
            }
        ]
    }
};