import {Exception} from "./Components/Type/Exception";
import {FORMATTER_OPTIONS} from './formatterOptions';
import {Input} from "./Components/Type/InputStructure";
import {Output} from "./Components/Type/OutputStructure";
import {ModeledStructure} from "./Components/Type/ModeledStructure";
import {Structure} from "./Components/Type/Structure";
import {processString} from 'typescript-formatter/lib';
import {ShapeMap, Structure as StructureShape} from "@aws/service-model";

export class TypeGenerator {
    constructor(private shapeMap: ShapeMap) {}

    generateTypeDefinition(
        shapeName: string,
        shape: StructureShape
    ): Promise<string> {
        let structure: Structure;
        if (shape.topLevel === 'input') {
            structure = new Input(shapeName, shape, this.shapeMap);
        } else if (shape.topLevel === 'output') {
            structure = new Output(shapeName, shape, this.shapeMap);
        } else if (shape.exception) {
            structure = new Exception(shapeName, shape, this.shapeMap);
        } else {
            structure = new ModeledStructure(shapeName, shape, this.shapeMap);
        }

        return processString(shapeName, structure.toString(), FORMATTER_OPTIONS)
            .then(result => result.message);
    }
}
