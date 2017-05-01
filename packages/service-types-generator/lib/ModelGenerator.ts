import {
    List,
    Map,
    Structure,
} from "./Components/Model";
import {NormalizedModel} from "@aws/service-model";

export class ModelGenerator {
    constructor(private readonly model: NormalizedModel) {}

    *[Symbol.iterator](): Iterator<[string, string]> {
        const {shapes} = this.model;
        for (let shapeName of Object.keys(shapes)) {
            const shape = shapes[shapeName];
            if (shape.type === 'list') {
                yield [
                    shapeName,
                    new List(shapeName, shapes).toString(),
                ];
            } else if (shape.type === 'map') {
                yield [
                    shapeName,
                    new Map(shapeName, shapes).toString(),
                ];
            } else if (shape.type === 'structure') {
                yield [
                    shapeName,
                    new Structure(shapeName, shapes).toString(),
                ];
            }
        }
    }
}
