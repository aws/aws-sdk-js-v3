import { isApiModel } from "./ApiModel";
import { minimalValidServiceMetadata } from "./serviceMetadata.fixture";
import { ApiModel } from "@aws-sdk/build-types";

describe("isApiModel", () => {
  const minimalValidApiModel: ApiModel = {
    metadata: minimalValidServiceMetadata,
    operations: {},
    shapes: {}
  };

  it("should accept a valid ApiModel", () => {
    expect(isApiModel(minimalValidApiModel)).toBe(true);
  });

  it('should reject objects where "metadata" is not a valid ServiceMetadata object', () => {
    expect(isApiModel({ ...minimalValidApiModel, metadata: "string" })).toBe(
      false
    );
  });

  it('should reject objects where "operations" is not a valid OperationMap', () => {
    expect(isApiModel({ ...minimalValidApiModel, operations: "string" })).toBe(
      false
    );
  });

  it('should reject objects where "shapes" is not a valid ShapeMap', () => {
    expect(isApiModel({ ...minimalValidApiModel, shapes: "string" })).toBe(
      false
    );
  });

  it('should accept an ApiModel where "documentation" is present and a string', () => {
    expect(isApiModel({ ...minimalValidApiModel, documentation: "foo" })).toBe(
      true
    );
  });

  it('should reject objects where a "documentation" property is present and not a string', () => {
    expect(isApiModel({ ...minimalValidApiModel, documentation: {} })).toBe(
      false
    );
  });

  it("should reject scalar values", () => {
    for (let scalar of [null, void 0, 1, "string", true]) {
      expect(isApiModel(scalar)).toBe(false);
    }
  });
});
