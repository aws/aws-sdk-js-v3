import {HttpTrait} from "./HttpTrait";
import {Import} from "../Import";
import {IndentedSection} from "../IndentedSection";
import {TreeModelOperation} from '@aws/service-model';

export class Operation {
    constructor(private readonly operation: TreeModelOperation) {}

    toString(): string {
        return `
${this.imports}

export const ${this.operation.name}: _Operation_ = {
${this.getOperationDefinition()}
};
        `.trim();
    }

    private get imports(): string {
        const {errors = [], input, output} = this.operation;
        const shapes: Array<string> = [...new Set(
            [input.name, output.name]
                .concat(errors.map(member => member.name))
        )];

        return shapes
            .map(shape => new Import(`./${shape}`, shape))
            .concat([new Import('@aws/types', 'OperationModel as _Operation_')])
            .join('\n');
    }

    private getOperationDefinition(): {toString(): string} {
        const {
            errors = [],
            http,
            input,
            output
        } = this.operation;

        return new IndentedSection(`
http: ${new HttpTrait(http)},
input: ${input.name},
output: ${output.name},
errors: ${this.getErrors()},
        `.trim());
    }

    private getErrors(): string {
        const {errors = []} = this.operation;
        if (errors.length === 0) {
            return '[]';
        }

        return `
[
${new IndentedSection(errors.map(member => member.name).join(',\n'))},
]
        `.trim();
    }
}
