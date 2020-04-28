import { calculateBodyLength } from "./";

const arrayBuffer = new ArrayBuffer(1);
const typedArray = new Uint8Array(1);
const view = new DataView(arrayBuffer);

describe("caclulateBodyLength", () => {
  it("should handle string inputs", () => {
    expect(calculateBodyLength("foo")).toEqual(3);
  });

  it("should handle string inputs with multi-byte characters", () => {
    expect(calculateBodyLength("2。")).toEqual(4);
  });

  it("should handle inputs with byteLengths", () => {
    expect(calculateBodyLength(arrayBuffer)).toEqual(1);
  });

  it("should handle TypedArray inputs", () => {
    expect(calculateBodyLength(typedArray)).toEqual(1);
  });
});
