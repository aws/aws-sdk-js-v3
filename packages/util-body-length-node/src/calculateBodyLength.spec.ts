import { lstatSync } from "fs";

import { calculateBodyLength } from "./calculateBodyLength";

jest.mock("fs");

describe(calculateBodyLength.name, () => {
  const arrayBuffer = new ArrayBuffer(1);
  const typedArray = new Uint8Array(1);
  const view = new DataView(arrayBuffer);

  afterEach(() => {
    jest.clearAllMocks();
  });

  it.each([
    [0, null],
    [0, undefined],
  ])("should return %s for %s", (output, input) => {
    expect(calculateBodyLength(input)).toEqual(output);
  });

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

  it("should handle DataView inputs", () => {
    expect(calculateBodyLength(view)).toEqual(1);
  });

  it("should handle stream created using fs.createReadStream", () => {
    const mockSize = { size: 10 };
    (lstatSync as jest.Mock).mockReturnValue(mockSize);

    // Populate path as string to mock body created from fs.createReadStream
    const mockBody = { path: "mockPath" };
    expect(calculateBodyLength(mockBody)).toEqual(mockSize.size);
  });
});
