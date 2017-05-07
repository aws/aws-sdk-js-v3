import {ApiModel} from "../ApiModel";
import {NormalizedModel} from "./NormalizedModel";
import {Structure, StructureMember} from "../Shape";
import {Operation} from "../Operation";
import {Structure as SerializationStructure} from '@aws/types';
import {isMember} from "./isMember";
import {isReferencedByOperation} from "./isReferencedByOperation";

const EMPTY_STRUCTURE: Structure & SerializationStructure = {
    type: 'structure',
    required: [],
    members: {},
};

export function standardizeOperationIoShapes(model: ApiModel): NormalizedModel {
    const potentiallyOrphaned = new Set<string>();
    Object.keys(model.operations).forEach(operationName => {
        const operation: Operation = model.operations[operationName];
        operation.errors = operation.errors || [];

        for (let ioShapeId of <Array<'input'|'output'>>['input', 'output']) {
            const ioShape: StructureMember|undefined = operation[ioShapeId];
            const shape: Structure = JSON.parse(JSON.stringify(
                ioShape ? model.shapes[ioShape.shape] : EMPTY_STRUCTURE
            ));
            shape.topLevel = ioShapeId;

            if (ioShape) {
                potentiallyOrphaned.add(ioShape.shape);
            }



            const ioShapeName = `${operationName}${ioShapeId === 'input' ? 'Input' : 'Output'}`;
            model.shapes[ioShapeName] = shape;
            operation[ioShapeId] = Object.assign(
                {},
                ioShape || {},
                {shape: ioShapeName},
            );
        }
    });

    for (let maybeOrphan of potentiallyOrphaned) {
        if (
            !isMember(model, maybeOrphan) &&
            !isReferencedByOperation(model, maybeOrphan)
        ) {
            delete model.shapes[maybeOrphan];
        }

    }

    return <NormalizedModel>model;
}
