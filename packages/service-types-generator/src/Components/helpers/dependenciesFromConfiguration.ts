import {
    ConfigurationDefinition,
    Import,
    RuntimeTarget
} from '@aws-sdk/build-types';

export function dependenciesFromConfiguration(
    configuration: ConfigurationDefinition,
    target: RuntimeTarget
): Array<Import> {
    const allImports: Array<Import> = [];
    for (const key of Object.keys(configuration)) {
        const {imports = [], ...property} = configuration[key];
        allImports.push(...imports);
        if (property.type === 'forked') {
            allImports.push(...(property[target].imports || []));
        }
    }

    return allImports;
}