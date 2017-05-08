import {ApiModel} from "../ApiModel";
import {NormalizedModel} from "./types";
import {Structure, StructureMember} from "../Shape";
import {Operation} from "../Operation";
import {Structure as SerializationStructure} from '@aws/types';
import {isMember} from "./isMember";
import {isReferencedByOperation} from "./isReferencedByOperation";
import {JS_RESERVED_WORDS, TS_RESERVED_WORDS} from "../ReservedWords";
import {renameShape} from "./renameShape";

const EMPTY_STRUCTURE: Structure & SerializationStructure = {
    type: 'structure',
    required: [],
    members: {},
};

export function normalizeModel(model: ApiModel): NormalizedModel {
    model = prependUnderscoreToShapeNames(model);

    Object.keys(model.operations).forEach(operationName => {
        const operation: Operation = model.operations[operationName];
        operation.errors = operation.errors || [];

        for (let ioShapeId of <Array<'input'|'output'>>['input', 'output']) {
            const ioShape: StructureMember|undefined = operation[ioShapeId];
            const shape: Structure = JSON.parse(JSON.stringify(
                ioShape ? model.shapes[ioShape.shape] : EMPTY_STRUCTURE
            ));
            shape.topLevel = ioShapeId;

            const ioShapeName = `${operationName}${ioShapeId === 'input' ? 'Input' : 'Output'}`;
            model.shapes[ioShapeName] = shape;
            operation[ioShapeId] = Object.assign(
                {},
                ioShape || {},
                {shape: ioShapeName},
            );
        }
    });

    return pruneShapes(<NormalizedModel>model);
}

function prependUnderscoreToShapeNames(model: ApiModel): ApiModel {
    for (let shapeName of Object.keys(model.shapes)) {
        const shape = model.shapes[shapeName];

        // exceptions are a public interface and should not be renamed
        if (shape.type === 'structure' && shape.exception) {
            continue;
        }

        let newName = shapeName;
        do {
            newName = `_${newName}`;
        } while (
            JS_RESERVED_WORDS.has(newName)
            || TS_RESERVED_WORDS.has(newName)
            || (newName in global)
        );

        renameShape(model, shapeName, newName);
    }

    return model;
}

function pruneShapes(model: NormalizedModel): NormalizedModel {
    for (let maybeOrphan of Object.keys(model.shapes)) {
        if (
            !isMember(model, maybeOrphan) &&
            !isReferencedByOperation(model, maybeOrphan)
        ) {
            delete model.shapes[maybeOrphan];
        }
    }

    return model;
}
