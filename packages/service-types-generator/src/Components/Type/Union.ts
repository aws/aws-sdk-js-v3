import {Import} from '../Import';

export class Union {
    constructor(
        private readonly constituentShapeNames: Array<string>,
        private readonly typeName: string
    ) {}

    toString(): string {
        return `${this.imports}

export type ${this.typeName} = ${this.constituentShapeNames.join(' |\n    ')};
`;
    }

    protected get imports(): string {
        return this.constituentShapeNames
            .map(shape => new Import(`./${shape}`, shape))
            .join('\n');
    }
}
