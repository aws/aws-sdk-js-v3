import { calculateBodyLength } from "./calculateBodyLength";

const arrayBuffer = new ArrayBuffer(1);
const typedArray = new Uint8Array(1);

describe(calculateBodyLength.name, () => {
  it.each([
    { desc: "basic", input: "foo", output: 3 },
    { desc: "emoji", input: "foo 🥺", output: 8 },
    { desc: "multi-byte characters", input: "2。", output: 4 },
  ])("should handle string input: %s", ({ input, output }) => {
    expect(calculateBodyLength(input)).toEqual(output);
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

  it.each([true, 1, {}, []])("throws error if Body Length computation fails for: %s", (body) => {
    expect(() => {
      expect(calculateBodyLength(body));
    }).toThrowError(`Body Length computation failed for ${body}`);
  });
});
