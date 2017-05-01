import {HttpTrait} from "./HttpTrait";
import {Import} from "../Import";
import {NormalizedOperation} from '@aws/service-model';
import {IndentedSection} from "../IndentedSection";

export class Operation {
    constructor(
        private readonly operation: NormalizedOperation,
        private readonly modelsDir: string
    ) {}

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
            [input.shape, output.shape]
                .concat(errors.map(member => member.shape))
        )];

        return shapes
            .map(shape => new Import(`${this.modelsDir}/${shape}`, shape))
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
input: ${input.shape},
output: ${output.shape},
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
${new IndentedSection(errors.map(member => member.shape).join(',\n'))},
]
        `.trim();
    }
}
