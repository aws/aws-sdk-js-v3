import {FORMATTER_OPTIONS} from './formatterOptions';
import {List} from "./Components/Model/List";
import {Map} from "./Components/Model/Map";
import {Operation} from "./Components/Model/Operation";
import {Structure} from "./Components/Model/Structure";
import {processString} from 'typescript-formatter/lib';
import {
    ComplexShape,
    NormalizedOperation,
    ShapeMap,
} from "@aws/service-model";

export class ModelGenerator {
    constructor(private readonly shapeMap: ShapeMap) {}

    generateOperationModel(operation: NormalizedOperation): Promise<string> {
        return processString(
            operation.name,
            new Operation(operation).toString(),
            FORMATTER_OPTIONS
        ).then(result => result.message);
    }

    generateSerializationModel(shapeName: string, shape: ComplexShape): Promise<string> {
        switch (shape.type) {
            case 'list':
                return processString(
                    shapeName,
                    new List(shapeName, shape, this.shapeMap).toString(),
                    FORMATTER_OPTIONS
                ).then(result => result.message);
            case 'map':
                return processString(
                    shapeName,
                    new Map(shapeName, shape, this.shapeMap).toString(),
                    FORMATTER_OPTIONS
                ).then(result => result.message);
            case 'structure':
                return processString(
                    shapeName,
                    new Structure(shapeName, shape, this.shapeMap).toString(),
                    FORMATTER_OPTIONS
                ).then(result => result.message);
        }
    }
}
