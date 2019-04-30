import { detectCircularModelDependency } from "./detectCircularModelDependency";
import { model } from "../../shapes.fixture";

describe("detectCircularModelDependency", () => {
  it("should detect circular dependency among models", () => {
    expect(detectCircularModelDependency(model)).toEqual({
      ComponentDescription: new Set(["ItemComponents"])
    });
  });
});
