import {ApiModel} from "../ApiModel";

/**
 * Updates the name of a shape and remaps all references thereto.
 *
 * @internal
 */
export function renameShape(
    model: ApiModel,
    currentName: string,
    newName: string
): void {
    if (model.shapes[currentName]) {
        renameObjectReferences(model, currentName, newName);
        renameShapeMembers(model, currentName, newName);

        model.shapes[newName] = model.shapes[currentName];
        delete model.shapes[currentName];
    }

}

function renameObjectReferences(
    model: ApiModel,
    currentName: string,
    newName: string
): void {
    Object.keys(model.operations).forEach(operationName => {
        const {
            errors = [],
            input,
            output
        } = model.operations[operationName];
        if (input && input.shape === currentName) {
            input.shape = newName;
        }
        if (output && output.shape === currentName) {
            output.shape = newName;
        }
        for (let error of errors) {
            if (error.shape === currentName) {
                error.shape = newName;
            }
        }
    });
}

function renameShapeMembers(
    model: ApiModel,
    currentName: string,
    newName: string
): void {
    Object.keys(model.shapes).forEach(shapeName => {
        const shape = model.shapes[shapeName];
        if (shape.type === 'list') {
            if (shape.member.shape === currentName) {
                shape.member.shape = newName;
            }
        } else if (shape.type === 'map') {
            for (let part of <Array<'key'|'value'>>['key', 'value']) {
                if (shape[part].shape === currentName) {
                    shape[part].shape = newName;
                }
            }
        } else if (shape.type === 'structure') {
            for (let member of Object.keys(shape.members)) {
                if (shape.members[member].shape === currentName) {
                    shape.members[member].shape = newName;
                }
            }
        }
    });
}
