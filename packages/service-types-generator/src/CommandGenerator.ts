import {
    ConfigurationDefinition,
    CustomizationDefinition,
    Import,
    RuntimeTarget,
    ServiceCustomizationDefinition,
    TreeModel,
} from '@aws/build-types';
import { serviceIdFromMetadata } from './serviceIdFromMetadata';
import { Command } from './Components/Command/command';
import { getServiceCustomizations } from './ServiceCustomizations';

export class CommandGenerator {
    private readonly commandToCustomizations: Map<string, CustomizationDefinition[]>;

    constructor(
        private readonly model: TreeModel,
        private readonly target: RuntimeTarget
    ) {
        this.commandToCustomizations = this.getServiceCustomizations(model);
    }

    private getServiceCustomizations(
        model: TreeModel
    ): Map<string, CustomizationDefinition[]> {
        const customizations: Map<string, CustomizationDefinition[]> = new Map();

        const { commands } = getServiceCustomizations(model, this.target);
        for (const commandName of Object.keys(commands)) {
            customizations.set(commandName.toLowerCase(), commands[commandName])
        }
        return customizations;
    }

    get dependencies(): Array<Import> {
        const dependencies: Import[] = [];

        // determine the dependencies for each command so they can be added to this package's package.json
        for (const [_, customizations] of this.commandToCustomizations) {
            customizations.forEach(customization => {
                dependencies.push(...this.dependenciesFromCustomization(customization))
            });
        }

        return dependencies;
    }

    private dependenciesFromConfiguration(
        configuration: ConfigurationDefinition
    ): Array<Import> {
        const allImports: Array<Import> = [];
        for (const key of Object.keys(configuration)) {
            const {imports = [], ...property} = configuration[key];
            allImports.push(...imports);
            if (property.type === 'forked') {
                allImports.push(...(property[this.target].imports || []));
            }
        }

        return allImports;
    }

    private dependenciesFromCustomization(
        customization: CustomizationDefinition
    ): Array<Import> {
        switch (customization.type) {
            case 'Middleware':
            case 'ParserDecorator':
                const {configuration, imports = []} = customization;
                return configuration
                    ? imports.concat(this.dependenciesFromConfiguration(configuration))
                    : imports;
            case 'Configuration':
                return this.dependenciesFromConfiguration(
                    customization.configuration
                );
            default:
                throw new Error(
                    `Unrecognized customization type encountered: ${(customization as any).type}`
                );
        }
    }

    *[Symbol.iterator](): Iterator<[string, string]> {
        const {
            operations
        } = this.model;

        for (let operationName of Object.keys(operations)) {
            const operation = operations[operationName];

            const command = new Command(operation, this.target, this.commandToCustomizations.get(operationName.toLowerCase()));

            yield [command.className, command.toString()];
        }
    }
}
