import { calculateBodyLength } from "./calculateBodyLength";

describe(calculateBodyLength.name, () => {
  describe("should handle string input", () => {
    it.each([
      { desc: "basic", input: "foo", output: 3 },
      { desc: "emoji", input: "foo 🥺", output: 8 },
      { desc: "multi-byte characters", input: "2。", output: 4 },
    ])("%s", ({ input, output }) => {
      expect(calculateBodyLength(input)).toEqual(output);
    });
  });

  describe("should handle input with byteLength", () => {
    const sizes = [1, 256, 65536];

    describe("ArrayBuffer", () => {
      it.each(sizes)("size: %s", (size) => {
        expect(calculateBodyLength(new ArrayBuffer(size))).toEqual(size);
      });
    });

    describe("TypedArray", () => {
      it.each(sizes)("size: %s", (size) => {
        expect(calculateBodyLength(new Uint8Array(size))).toEqual(size);
      });
    });
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

  describe("throws error if Body Length computation fails", () => {
    it.each([true, 1, {}, []])("%s", (body) => {
      expect(() => {
        expect(calculateBodyLength(body));
      }).toThrowError(`Body Length computation failed for ${body}`);
    });
  });
});
