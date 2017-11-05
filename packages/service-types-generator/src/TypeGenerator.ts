import {
    Exception,
    Input,
    ModeledStructure,
    Output,
} from "./Components/Type";
import {TreeModel} from "@aws/build-types";

export class TypeGenerator {
    constructor(private readonly model: TreeModel) {}

    *[Symbol.iterator](): Iterator<[string, string]> {
        const {shapes} = this.model;
        for (let shapeName of Object.keys(shapes)) {
            const shape = shapes[shapeName];
            if (shape.type === 'structure') {
                if (shape.topLevel === 'input') {
                    yield [
                        shapeName,
                        new Input(shape).toString(),
                    ];
                } else if (shape.topLevel === 'output') {
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
    }
}
