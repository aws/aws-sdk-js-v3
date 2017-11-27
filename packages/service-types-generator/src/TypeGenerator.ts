import {
    Exception,
    Input,
    ModeledStructure,
    Output,
    Union,
} from "./Components/Type";
import {
    RuntimeTarget,
    TreeModel
} from "@aws/build-types";
import {streamType} from './Components/Client/stream-type';

export class TypeGenerator {
    constructor(
        private readonly model: TreeModel,
        private readonly runtime?: RuntimeTarget
    ) {}

    *[Symbol.iterator](): Iterator<[string, string]> {
        const ioShapes: {[key: string]: Array<string>} = {
            InputTypesUnion: [],
            OutputTypesUnion: [],
        };
        const {shapes} = this.model;

        for (let shapeName of Object.keys(shapes)) {
            const shape = shapes[shapeName];
            if (shape.type === 'structure') {
                
                if (shape.topLevel === 'input') {
                    ioShapes.InputTypesUnion.push(shapeName);
                    yield [
                        shapeName,
                        new Input(shape, this.runtime).toString(),
                    ];
                } else if (shape.topLevel === 'output') {
                    ioShapes.OutputTypesUnion.push(shapeName);
                    yield [
                        shapeName,
                        new Output(shape, this.runtime).toString(),
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
