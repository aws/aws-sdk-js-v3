import {
    Exception,
    Input,
    ModeledStructure,
    Output,
    Union,
} from "./Components/Type";
import {
    TreeModel,
    TreeModelStructure
} from "@aws/build-types";

export class TypeGenerator {
    constructor(private readonly model: TreeModel) {}

    *[Symbol.iterator](): Iterator<[string, string]> {
        const ioShapes: {[key: string]: TreeModelStructure[]} = {
            InputTypesUnion: [],
            OutputTypesUnion: [],
        };
        const {shapes} = this.model;

        for (let shapeName of Object.keys(shapes)) {
            const shape = shapes[shapeName];
            if (shape.type === 'structure') {
                if (shape.topLevel === 'input') {
                    ioShapes.InputTypesUnion.push(shape);
                    yield [
                        shapeName,
                        new Input(shape).toString(),
                    ];
                } else if (shape.topLevel === 'output') {
                    ioShapes.OutputTypesUnion.push(shape);
                    yield [
                        shapeName,
                        new Output(shape).toString(),
                    ];
                } else if (shape.exception) {
                    yield [
                        shapeName,
                        new Exception(shape).toString(),
                    ];
                } else {
                    yield [
                        shapeName,
                        new ModeledStructure(shape).toString(),
                    ];
                }
            }
        }

        for (const name of Object.keys(ioShapes)) {
            yield [name, new Union(ioShapes[name], name).toString()];
        }
    }
}
