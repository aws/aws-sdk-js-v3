import { isMember } from "./isMember";
import { model } from "./normalizedModel.fixture";

describe("isMember", () => {
  const { operations, shapes } = model;

  it("should report true if a shape is a member of a structure", () => {
    for (let shapeName of Object.keys(shapes)) {
      const shape = shapes[shapeName];
      if (shape.type === "structure") {
        for (let memberName of Object.keys(shape.members)) {
          expect(isMember(model, shape.members[memberName].shape)).toBe(true);
        }
      }
    }
  });

  it("should report true if a shape is an element of a list", () => {
    for (let shapeName of Object.keys(shapes)) {
      const shape = shapes[shapeName];
      if (shape.type === "list") {
        expect(isMember(model, shape.member.shape)).toBe(true);
      }
    }
  });

  it("should report true if a shape is a key or value of a map", () => {
    for (let shapeName of Object.keys(shapes)) {
      const shape = shapes[shapeName];
      if (shape.type === "map") {
        expect(isMember(model, shape.key.shape)).toBe(true);
        expect(isMember(model, shape.value.shape)).toBe(true);
      }
    }
  });

  it("should report false if a shape is not a structure member, list element, or map key or value", () => {
    for (let operationName of Object.keys(operations)) {
      // input and output shapes in this model are not used as members
      const { input, output } = operations[operationName];
      expect(isMember(model, input.shape)).toBe(false);
      expect(isMember(model, output.shape)).toBe(false);
    }
  });

  it("should report false if a shape is not in the provided model", () => {
    expect(isMember(model, "fshjkashjksa")).toBe(false);
  });
});
