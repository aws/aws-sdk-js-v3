import { ApiModel } from "@aws-sdk/build-types";
import { JS_RESERVED_WORDS, TS_RESERVED_WORDS } from "./ReservedWords";
import { renameShape } from "./renameShape";

export function prependUnderscoreToShapeNames(model: ApiModel): ApiModel {
  prependUnderscoreToReservedWords(model);
  prependUnderscoreToCapitonyms(model);
  return model;
}

function prependUnderscoreToReservedWords(model: ApiModel) {
  for (let shapeName of Object.keys(model.shapes)) {
    const shape = model.shapes[shapeName];

    // exceptions are a public interface and should not be renamed
    if (shape.type === "structure" && shape.exception) {
      continue;
    }

    let newName = shapeName;
    do {
      newName = `_${newName}`;
    } while (
      JS_RESERVED_WORDS.has(newName) ||
      TS_RESERVED_WORDS.has(newName) ||
      newName in global
    );

    renameShape(model, shapeName, newName);
  }
}

/**
 * When generating different models with only difference of casing
 * (e.g. event VS Event), the generated file will overwrite each
 * other on case-insensitive file systems(like Mac). So we prepend
 * underscores to avoid overwriting.
 */
function prependUnderscoreToCapitonyms(model: ApiModel) {
  const shapeNames = Object.keys(model.shapes);
  for (let index = 0; index < shapeNames.length; index++) {
    const shapeName = shapeNames[index];
    const shape = model.shapes[shapeName];

    // exceptions are a public interface and should not be renamed
    if (shape.type === "structure" && shape.exception) {
      continue;
    }

    let capitonymsCount = 0;
    for (let i = 0; i < index; i++) {
      if (shapeNames[i].toLowerCase() === shapeName.toLowerCase())
        capitonymsCount++;
    }
    if (capitonymsCount === 0) continue;
    let newName = `${shapeName}`;
    while (capitonymsCount > 0) {
      newName = `_${shapeName}`;
      capitonymsCount--;
    }
    renameShape(model, shapeName, newName);
  }
}
