import {serviceIdFromMetadata} from './serviceIdFromMetadata';
import {customizationsFromModel} from './customizationsFromModel';
import {Import} from '../Import';
import {IndentedSection} from '../IndentedSection';
import {Method} from './Method';
import {packageNameToVariable} from './packageNameToVariable';
import {
    ConfigurationDefinition,
    CustomizationDefinition,
    RuntimeTarget,
    TreeModel,
} from "@aws/build-types";

export class ClassicClient {
    readonly className: string;

    constructor(
        private readonly model: TreeModel,
        private readonly target: RuntimeTarget,
        private readonly customizations: Array<CustomizationDefinition> = []
    ) {
        this.className = serviceIdFromMetadata(this.model.metadata)
            .replace(/\s/g, '');
    }

    toString(): string {
        return `${this.imports()}

export class ${this.className} extends ${this.className}Client {
${new IndentedSection(
    Object.keys(this.model.operations)
        .map(operationName => new Method(this.model.operations[operationName]))
        .join('\n\n')
)}
}
`;
    }

    private imports(): string {
        const serviceId = serviceIdFromMetadata(this.model.metadata);
        const imports: Array<Import> = [
            new Import(`./${this.className}Client`, `${this.className}Client`),
        ];

        const typeImportsFromModel = new Set<string>();
        for (const key of Object.keys(this.model.operations)) {
            const {input, output, errors} = this.model.operations[key];
            for (const shape of [input, output, ...errors]) {
                typeImportsFromModel.add(shape.shape.name);
            }
        }

        const commandImportsFromModel = new Set<string>();
        for (const key of Object.keys(this.model.operations)) {
            commandImportsFromModel.add(`${key}Command`);
        }

        return imports.concat(
            [...typeImportsFromModel]
                .sort()
                .map(name => new Import(`./types/${name}`, name)),
            [...commandImportsFromModel]
                .sort()
                .map(name => new Import(`./commands/${name}`, name))
        ).join('\n');
    }
}
