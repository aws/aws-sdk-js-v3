import {ApiModel} from "../ApiModel";
import {JS_RESERVED_WORDS, TS_RESERVED_WORDS} from "../ReservedWords";
import {renameShape} from "./renameShape";

export function prependUnderscoreToShapeNames(model: ApiModel): ApiModel {
    for (let shapeName of Object.keys(model.shapes)) {
        let newName = shapeName;
        do {
            newName = `_${newName}`;
        } while (
            JS_RESERVED_WORDS.has(newName)
            || TS_RESERVED_WORDS.has(newName)
            || (newName in global)
        );

        renameShape(model, shapeName, `_${shapeName}`);
    }

    return model;
}
