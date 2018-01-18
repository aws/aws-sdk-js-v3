import {
    ConfigurationDefinition,
    CustomizationDefinition,
    Import,
    RuntimeTarget,
    TreeModel
} from '@aws/build-types';
import {serviceIdFromMetadata} from './Components/Client/serviceIdFromMetadata';

import {Command} from './Components/Command/command';
import {join} from "path";
import {existsSync} from "fs";
import {MiddlewareCustomizationDefinition, ServiceCustomizationDefinition} from "../../build-types/build";

export class CommandGenerator {
    private readonly commandToCustomizations: Map<string, CustomizationDefinition[]>;

    constructor(
        private readonly model: TreeModel,
        private readonly target: RuntimeTarget
    ) {
        this.commandToCustomizations = this.getServiceCustomizations(model) || new Map();
    }

    private getServiceCustomizations(model: TreeModel): Map<string, MiddlewareCustomizationDefinition[]> {
        const serviceId = serviceIdFromMetadata(model.metadata);
        const normalizedServiceId = serviceId.split(/\s/g).join('-').toLowerCase();
        const serviceCustomizations: Map<string, MiddlewareCustomizationDefinition[]> = new Map();
        if (!existsSync(join(__dirname, 'ServiceCustomizations', normalizedServiceId, 'customizations.js'))) {
            return serviceCustomizations;
        }
        const customizations: ServiceCustomizationDefinition = require(`./ServiceCustomizations/${normalizedServiceId}/customizations`).customizations;
        if (customizations && customizations.middleware.commands) {
            for (const commandName of Object.keys(customizations.middleware.commands)) {
                serviceCustomizations.set(commandName.toLowerCase(), customizations.middleware.commands[commandName])
            }
        }
        return serviceCustomizations;
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