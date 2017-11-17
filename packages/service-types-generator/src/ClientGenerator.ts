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
} from "@aws/build-types";

export class ClientGenerator {

    constructor(
        private readonly model: TreeModel,
        private readonly target: RuntimeTarget,
        private readonly customizations: Array<CustomizationDefinition> = []
    ) {}

    *[Symbol.iterator](): Iterator<[string, string]> {
        const {model, target, customizations} = this;
        const client = new Client(model, target, customizations);
        const classicClient = new ClassicClient(model, target, customizations);
        const className = serviceIdFromMetadata(model.metadata)
            .replace(/\s/g, '');

        yield [client.className, client.toString()];

        // yield a command object for every operation

        yield [classicClient.className, classicClient.toString()];
    }
}
