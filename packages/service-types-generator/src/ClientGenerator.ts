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
    RuntimeTarget,
    TreeModel,
    Import,
} from "@aws/build-types";
import {customizationsFromModel} from './Components/Client/customizationsFromModel';

export class ClientGenerator {
    private readonly client: Client;
    private readonly classicClient: ClassicClient;
    private readonly configuration: Configuration;

    constructor(
        model: TreeModel,
        target: RuntimeTarget,
        customizations?: Array<CustomizationDefinition>
    ) {
        this.client = new Client(model, target, customizations);
        this.classicClient = new ClassicClient(model, target, customizations);
        
        this.configuration = new Configuration(
            this.client.prefix,
            target,
            this.getConcattedConfig(
                customizationsFromModel(model, streamType(target))
                    .concat(customizations || [])
            ));
    }

    get dependencies(): Array<Import> {
        return this.client.dependencies;
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
