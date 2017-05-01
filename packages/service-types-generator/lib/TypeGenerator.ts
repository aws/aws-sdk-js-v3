import {
    Exception,
    Input,
    ModeledStructure,
    Output,
} from "./Components/Type";
import {NormalizedModel} from "@aws/service-model";

export class TypeGenerator {
    constructor(private readonly model: NormalizedModel) {}

    *[Symbol.iterator](): Iterator<[string, string]> {
        const {shapes} = this.model;
        for (let shapeName of Object.keys(shapes)) {
            const shape = shapes[shapeName];
            if (shape.type === 'structure') {
                if (shape.topLevel === 'input') {
                    yield [
                        shapeName,
                        new Input(shapeName, shapes).toString(),
                    ];
                } else if (shape.topLevel === 'output') {
                    yield [
                        shapeName,
                        new Output(shapeName, shapes).toString(),
                    ];
                } else if (shape.exception) {
                    yield [
                        shapeName,
                        new Exception(shapeName, shapes).toString(),
                    ];
                } else {
                    yield [
                        shapeName,
                        new ModeledStructure(shapeName, shapes).toString(),
                    ];
                }
            }
        }
    }
}
