import {
    Exception,
    Input,
    ModeledStructure,
    Output,
    Union,
    ExceptionUnion
} from "./Components/Type";
import {
    RuntimeTarget,
    TreeModel
} from "@aws/build-types";
import {streamType} from './Components/Client/stream-type';
import {UNKNOWN_EXCEPTION} from './constants';

export class TypeGenerator {
    constructor(
        private readonly model: TreeModel,
        private readonly runtime?: RuntimeTarget
    ) {}

    *[Symbol.iterator](): Iterator<[string, string]> {
        const ioShapes: {[key: string]: Array<string>} = {
            InputTypesUnion: [],
            OutputTypesUnion: []
        };
        const {shapes, operations} = this.model;

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

        for (let operationName of Object.keys(operations)) {
            const deduplicatedErrorNames = operations[operationName].errors.reduce<Set<string>>(
                (rest, currentError): Set<string> => {
                    return rest.add(currentError.shape.name)
                }, new Set<string>()
            );
            yield [
                this.exceptionTypesUnion(operationName),
                new ExceptionUnion(Array.from(deduplicatedErrorNames), this.exceptionTypesUnion(operationName)).toString()
            ];
        }
    }

    private exceptionTypesUnion(operationName: string) {
        return `${operationName}ExceptionsUnion`;
    }
}
