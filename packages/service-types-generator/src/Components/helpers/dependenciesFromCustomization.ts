import {
    CustomizationDefinition,
    Import,
    RuntimeTarget
} from '@aws/build-types';

import {dependenciesFromConfiguration} from './dependenciesFromConfiguration';

export function dependenciesFromCustomization(
    customization: CustomizationDefinition,
    target: RuntimeTarget
): Array<Import> {
    switch (customization.type) {
        case 'Middleware':
        case 'ParserDecorator':
            const {configuration, imports = []} = customization;
            return configuration
                ? imports.concat(dependenciesFromConfiguration(configuration, target))
                : imports;
        case 'SyntheticParameter':
            return customization.imports || [];
        case 'ParameterSuppression':
            return [];
        case 'Configuration':
            return dependenciesFromConfiguration(
                customization.configuration,
                target
            );
        default:
            throw new Error(
                `Unrecognized customization type encountered: ${(customization as any).type}`
            );
    }
}
