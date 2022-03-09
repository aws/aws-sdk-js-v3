import { createReadStream, lstatSync, promises } from "fs";

import { calculateBodyLength } from "./calculateBodyLength";

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

  describe("fs.ReadStream", () => {
    const fileSize = lstatSync(__filename).size;

    describe("should handle stream created using fs.createReadStream", () => {
      it("when path is a string", () => {
        const fsReadStream = createReadStream(__filename);
        expect(calculateBodyLength(fsReadStream)).toEqual(fileSize);
      });

      it("when path is a Buffer", () => {
        const fsReadStream = createReadStream(Buffer.from(__filename));
        expect(calculateBodyLength(fsReadStream)).toEqual(fileSize);
      });
    });

    it("should handle stream created using fd.createReadStream", async () => {
      const fd = await promises.open(__filename, "r");
      if ((fd as any).createReadStream) {
        const fdReadStream = (fd as any).createReadStream();
        expect(calculateBodyLength(fdReadStream)).toEqual(fileSize);
      }
    });
  });

  it.each([true, 1, {}, []])("throws error if Body Length computation fails for: %s", (body) => {
    expect(() => {
      expect(calculateBodyLength(body));
    }).toThrowError(`Body Length computation failed for ${body}`);
  });
});
