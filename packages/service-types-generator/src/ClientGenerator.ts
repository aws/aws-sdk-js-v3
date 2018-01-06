import {existsSync} from 'fs';
import {join} from 'path';
import {
    ClassicClient,
    Client,
    Configuration,
    serviceIdFromMetadata,
    streamType
} from './Components/Client';
import {
    ConfigurationDefinition,
    CustomizationDefinition,
    MiddlewareCustomizationDefinition,
    RuntimeTarget,
    TreeModel,
    Import,
    ServiceCustomizationDefinition
} from "@aws/build-types";
import {customizationsFromModel} from './Components/Client/customizationsFromModel';
import {middlewareFromModel} from './Components/Client/middlewareFromModel';

export class ClientGenerator {
    private readonly client: Client;
    private readonly classicClient: ClassicClient;
    private readonly configuration: Configuration;

    constructor(
        model: TreeModel,
        target: RuntimeTarget,
        customizations?: Array<CustomizationDefinition>
    ) {
        const serviceMiddlewareCustomizations = this.getServiceCustomizations(model);
        customizations = customizations || [];
        customizations = customizations.concat(serviceMiddlewareCustomizations || []);

        this.client = new Client(model, target, customizations);
        this.classicClient = new ClassicClient(model, target, customizations);

        this.configuration = new Configuration(
            this.client.prefix,
            target,
            this.getConcattedConfig(
                customizationsFromModel(model, streamType(target))
                    .concat(customizations || [])
                    .concat(serviceMiddlewareCustomizations || [])
                    .concat(middlewareFromModel(model))
            ));
    }

    get dependencies(): Array<Import> {
        return this.client.dependencies;
    }

    private getServiceCustomizations(model: TreeModel): MiddlewareCustomizationDefinition[] {
        const serviceId = serviceIdFromMetadata(model.metadata);
        const normalizedServiceId = serviceId.split(/\s/g).join('-').toLowerCase();
        const serviceCustomizations: MiddlewareCustomizationDefinition[] = [];
        if (!existsSync(join(__dirname, 'ServiceCustomizations', normalizedServiceId, 'customizations.js'))) {
            return serviceCustomizations;
        }
        const customizations: ServiceCustomizationDefinition = require(`./ServiceCustomizations/${normalizedServiceId}/customizations`).customizations;
        if (customizations && customizations.middleware.client) {
            serviceCustomizations.push(...customizations.middleware.client);
        }
        return serviceCustomizations;
    }

    *[Symbol.iterator](): Iterator<[string, string]> {
        yield [this.client.className, this.client.toString()];

        yield [this.configuration.className, this.configuration.toString()];

        yield [this.classicClient.className, this.classicClient.toString()];
    }

    private getConcattedConfig(customizations: CustomizationDefinition[] = []): ConfigurationDefinition {
        const config: ConfigurationDefinition = {};
        for (const customization of customizations) {
            if (customization.configuration) {
                Object.assign(config, customization.configuration);
            }
        }
        return config;
    }
}
