import { calculateBodyLength } from "./calculateBodyLength";

const arrayBuffer = new ArrayBuffer(1);
const typedArray = new Uint8Array(1);

describe(calculateBodyLength.name, () => {
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

  it("should handle File object", () => {
    // Mock File Object https://developer.mozilla.org/en-US/docs/Web/API/File/File#example
    const lastModifiedDate = new Date();
    const mockFileObject = {
      lastModified: lastModifiedDate.getTime(),
      lastModifiedDate,
      name: "foo.txt",
      size: 3,
      type: "text/plain",
      webkitRelativePath: "",
    };
    expect(calculateBodyLength(mockFileObject)).toEqual(mockFileObject.size);
  });
});
