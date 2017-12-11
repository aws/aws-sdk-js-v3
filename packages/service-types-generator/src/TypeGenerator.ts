import {
    Exception,
    Input,
    ModeledStructure,
    Output,
    Union,
    ExceptionUnion
} from "./Components/Type";
import {TreeModel} from "@aws/build-types";
import {UNKNOWN_EXCEPTION} from './constants';

export class TypeGenerator {
    constructor(private readonly model: TreeModel) {}

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
                        new Input(shape).toString(),
                    ];
                } else if (shape.topLevel === 'output') {
                    ioShapes.OutputTypesUnion.push(shapeName);
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

        for (let operationName of Object.keys(operations)) {
            const errorNames = operations[operationName].errors.map(serviceException => serviceException.shape.name)
            errorNames.push(UNKNOWN_EXCEPTION);
            yield [
                this.exceptionTypesUnion(operationName),
                new ExceptionUnion(errorNames, this.exceptionTypesUnion(operationName)).toString()
            ];
        }
    }

    private exceptionTypesUnion(operationName: string) {
        return `${operationName}ExceptionsUnion`;
    }
}
