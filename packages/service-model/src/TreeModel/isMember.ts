import { ApiModel, Shape } from "@aws-sdk/build-types";

/**
 * Determines if a shape is referenced as a member of another shape. This checks
 * if it is the element of a list type, the key or value of a map type, or one
 * or more of a structure's members.
 *
 * @internal
 */
export function isMember(model: ApiModel, name: string): boolean {
  return (
    Object.keys(model.shapes)
      .map(shapeName => {
        const shape: Shape = model.shapes[shapeName];
        switch (shape.type) {
          case "list":
            return shape.member.shape === name;
          case "map":
            return shape.key.shape === name || shape.value.shape === name;
          case "structure":
            for (let member of Object.keys(shape.members)) {
              if (shape.members[member].shape === name) {
                return true;
              }
            }
            return false;
          default:
            return false;
        }
      })
      .filter(isMember => isMember).length > 0
  );
}
