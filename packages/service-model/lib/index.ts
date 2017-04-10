import {ApiModel, isApiModel, NormalizedModel} from "./ApiModel";
import {RESERVED_WORDS} from './JsReservedWords';
import {Operation} from "./Operation";
import {NormalizedOperationMap} from "./OperationMap";
import {ServiceMetadata} from "./ServiceMetadata";
import {Shape, Structure, StructureMember} from "./Shape";
import {ShapeMap} from "./ShapeMap";

const EMPTY_STRUCTURE: Structure = {
    type: 'structure',
    required: [],
    members: {},
};

export class ApiDefinition implements NormalizedModel {
    private model: NormalizedModel;

    /**
     * @param modelJson A string containing a JSON AWS service definition.
     */
    constructor(modelJson: string) {
        const parsed: any = JSON.parse(modelJson);
        if (!isApiModel(parsed)) {
            throw new Error('Invalid service model');
        }

        this.model = this.standardizeOperationIoShapes(parsed);
        this.sanitizeNames();
    }

    get documentation(): string|undefined {
        return this.model.documentation;
    }

    get metadata(): ServiceMetadata {
        return this.model.metadata;
    }

    get operations(): NormalizedOperationMap {
        return this.model.operations;
    }

    get shapes(): ShapeMap {
        return this.model.shapes;
    }

    private getIoShapeName(
        model: ApiModel,
        operationName: string,
        ioType: 'input'|'output'
    ): string {
        const suffixes = {
            input: 'Input',
            output: 'Output',
        };
        const ioShapeName = `${operationName}${suffixes[ioType]}`;
        if (ioShapeName in model.shapes) {
            throw new Error(
                `Unable to find suitable ioShapeName for ${operationName} ${ioType}`
            );
        }

        return ioShapeName;
    }

    private isMember(model: ApiModel, name: string): boolean {
        return Object.keys(model.shapes)
            .map(shapeName => {
                const shape: Shape = model.shapes[shapeName];
                switch (shape.type) {
                    case 'list':
                        return shape.member.shape === name;
                    case 'map':
                        return shape.key.shape === name ||
                            shape.value.shape === name;
                    case 'structure':
                        for (let member in shape.members) {
                            if (shape.members.hasOwnProperty(member)) {
                                if (shape.members[member].shape === name) {
                                    return true;
                                }
                            }
                        }
                        return false;
                    default:
                        return false;
                }
            }).filter(isMember => isMember)
            .length > 0;
    }

    private isReferencedByOperation(model: ApiModel, name: string): boolean {
        return Object.keys(model.operations)
            .map<boolean>(operationName => {
                const operation = model.operations[operationName];
                if (operation.input && operation.input.shape === name) {
                    return true;
                }
                if (operation.output && operation.output.shape === name) {
                    return true;
                }
                for (let error of operation.errors || []) {
                    if (error.shape === name) {
                        return true;
                    }
                }
                return false;
            }).filter(isReferenced => isReferenced)
            .length > 0;
    }

    private renameShape(model: ApiModel, currentName: string, newName: string): void {
        Object.keys(model.shapes).forEach(shapeName => {
            const shape = model.shapes[shapeName];
            if (shape.type === 'list') {
                if (shape.member.shape === currentName) {
                    shape.member.shape = newName;
                }
            } else if (shape.type === 'map') {
                for (let part of <Array<'key'|'value'>>['key', 'value']) {
                    if (shape[part].shape === currentName) {
                        shape[part].shape = currentName;
                    }
                }
            } else if (shape.type === 'structure') {
                for (let member in shape.members) {
                    if (
                        shape.members.hasOwnProperty(member) &&
                        shape.members[member].shape === currentName
                    ) {
                        shape.members[member].shape = newName;
                    }
                }
            }
        });

        model.shapes[newName] = model.shapes[currentName];
        delete model.shapes[currentName];

        Object.keys(model.operations).forEach(operationName => {
            const operation = model.operations[operationName];
            if (operation.input && operation.input.shape === currentName) {
                operation.input.shape = newName;
            }
            if (operation.output && operation.output.shape === currentName) {
                operation.output.shape = newName;
            }
            for (let error of operation.errors || []) {
                if (error.shape === currentName) {
                    error.shape = newName;
                }
            }
        });
    }

    private sanitizeNames(): void {
        for (let shapeName in this.model.shapes) {
            if (!this.model.shapes.hasOwnProperty(shapeName)) continue;
            if (RESERVED_WORDS.has(shapeName) || (shapeName in global)) {
                this.renameShape(this.model, shapeName, `_${shapeName}`);
            }
        }
    }

    private standardizeOperationIoShapes(model: ApiModel): NormalizedModel {
        const potentiallyOrphaned: Array<string> = [];
        Object.keys(model.operations).forEach(operationName => {
            const operation: Operation = model.operations[operationName];

            for (let ioShapeId of <Array<'input'|'output'>>['input', 'output']) {
                const ioShape: StructureMember|undefined = operation[ioShapeId];
                const shape: Structure = JSON.parse(JSON.stringify(
                    ioShape ? model.shapes[ioShape.shape] : EMPTY_STRUCTURE
                ));
                shape.topLevel = ioShapeId;

                if (ioShape) {
                    const originalName = ioShape.shape;
                    const shapeAlias = `${originalName}Shape`;
                    this.renameShape(model, originalName, shapeAlias);
                    potentiallyOrphaned.push(shapeAlias);
                }

                const ioShapeName = this.getIoShapeName(
                    model,
                    operationName,
                    ioShapeId
                );

                model.shapes[ioShapeName] = shape;
                model.operations[operationName][ioShapeId] = Object.assign(
                    {},
                    ioShape || {},
                    {shape: ioShapeName},
                );
            }
        });

        for (let maybeOrphan of potentiallyOrphaned) {
            if (
                !this.isMember(model, maybeOrphan) &&
                !this.isReferencedByOperation(model, maybeOrphan)
            ) {
                delete model.shapes[maybeOrphan];
            }

        }

        return <NormalizedModel>model;
    }
}
