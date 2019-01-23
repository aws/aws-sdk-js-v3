import { serviceIdFromMetadata } from './serviceIdFromMetadata';
import { streamType } from './streamType';
import {
    ClassicClient,
    Client,
    Configuration,
} from './Components/Client';
import {
    ConfigurationDefinition,
    CustomizationDefinition,
    MiddlewareCustomizationDefinition,
    RuntimeTarget,
    TreeModel,
    Import,
    ServiceCustomizationDefinition
} from "@aws-sdk/build-types";
import { getServiceCustomizations } from './ServiceCustomizations';

export class ClientGenerator {
    private readonly client: Client;
    private readonly classicClient: ClassicClient;
    private readonly configuration: Configuration;

    constructor(
        model: TreeModel,
        target: RuntimeTarget,
        customizations: Array<CustomizationDefinition> = []
    ) {
        customizations = customizations
            .concat(getServiceCustomizations(model, target).client);

        this.client = new Client(model, target, customizations);
        this.classicClient = new ClassicClient(model, target, customizations);

        this.configuration = new Configuration(
            this.client.prefix,
            target,
            this.getConcattedConfig(customizations)
        );
    }

    get dependencies(): Array<Import> {
        return this.client.dependencies;
    }

    get clientName(): string {
        return this.client.className;
    }

    *[Symbol.iterator](): Iterator<[string, string]> {
        yield [this.client.className, this.client.toString()];

        yield [this.configuration.className, this.configuration.toString()];

        yield [this.classicClient.className, this.classicClient.toString()];
    }

    private getConcattedConfig(customizations: CustomizationDefinition[] = []): ConfigurationDefinition {
        const config: ConfigurationDefinition = {};
        for (const customization of customizations) {
            switch (customization.type) {
                case 'Configuration':
                case 'Middleware':
                case 'ParserDecorator':
                    if (customization.configuration) {
                        Object.assign(config, customization.configuration);
                    }
            }
        }
        return config;
    }
}
