import {
    ClassicClient,
    Client,
    serviceIdFromMetadata,
} from './Components/Client';
import {
    ConfigurationDefinition,
    CustomizationDefinition,
    RuntimeTarget,
    TreeModel,
    Import,
} from "@aws/build-types";

export class ClientGenerator {
    private readonly client: Client;
    private readonly classicClient: ClassicClient;

    constructor(
        model: TreeModel,
        target: RuntimeTarget,
        customizations?: Array<CustomizationDefinition>
    ) {
        this.client = new Client(model, target, customizations);
        this.classicClient = new ClassicClient(model, target, customizations);
    }

    get dependencies(): Array<Import> {
        return this.client.dependencies;
    }

    *[Symbol.iterator](): Iterator<[string, string]> {
        yield [this.client.className, this.client.toString()];

        // yield a command object for every operation

        yield [this.classicClient.className, this.classicClient.toString()];
    }
}
