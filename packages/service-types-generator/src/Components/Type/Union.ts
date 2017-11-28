import {hasStreamingBody} from './helpers';
import {Import} from '../Import';
import {READABLE_STREAM} from './constants';
import {TreeModelStructure} from "@aws/build-types";


export class Union {
    constructor(
        private readonly constituentShapes: TreeModelStructure[],
        private readonly typeName: string
    ) {}

    toString(): string {
        return `${this.imports}

export type ${this.typeName} = ${this.taggedUnion.join(' |\n    ')};
`;
    }

    protected get imports(): string {
        return this.constituentShapes
            .map(shape => new Import(`./${shape.name}`, shape.name))
            .join('\n');
    }

    private get taggedUnion(): string[] {
        return this.constituentShapes
            .reduce<string[]>((prevs, shape) => {
                let shapeName = shape.name;
                shapeName = hasStreamingBody(shape) ? `${shapeName}<${READABLE_STREAM}>` : shapeName;
                prevs.push(shapeName);
                return prevs
            }, [])
    }
}
