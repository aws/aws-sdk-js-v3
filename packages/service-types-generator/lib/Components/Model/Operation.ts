import {HttpTrait} from "./HttpTrait";
import {Import} from "../Import";
import {NormalizedOperation} from '@aws/service-model';

export class Operation {
    constructor(
        private readonly operation: NormalizedOperation
    ) {}

    toString(): string {
        const {
            errors = [],
            http,
            input,
            name,
            output
        } = this.operation;

        return `
${this.imports}

export const ${name}: _Operation_ = {
    http: ${new HttpTrait(http)},
    input: ${input.shape},
    output: ${output.shape},
    errors: [${errors.map(member => member.shape).join(', ')}],
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
            .map(shape => new Import(`../Model/${shape}`, shape))
            .concat([new Import('@aws/types/OperationModel', 'OperationModel as _Operation_')])
            .join('\n');
    }
}
