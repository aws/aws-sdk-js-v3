import { serializeFloat } from "./ser-utils";

describe("serializeFloat", () => {
  it("handles non-numerics", () => {
    expect(serializeFloat(NaN)).toEqual("NaN");
    expect(serializeFloat(Infinity)).toEqual("Infinity");
    expect(serializeFloat(-Infinity)).toEqual("-Infinity");
  });

  it("handles normal numbers", () => {
    expect(serializeFloat(1)).toEqual(1);
    expect(serializeFloat(1.1)).toEqual(1.1);
  });
});
