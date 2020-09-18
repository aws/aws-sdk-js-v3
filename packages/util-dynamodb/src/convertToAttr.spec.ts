import { convertToAttr } from "./convertToAttr";

describe("convertToAttr", () => {
  describe("null", () => {
    it(`returns for null`, () => {
      expect(convertToAttr(null)).toEqual({ NULL: true });
    });
  });

  describe("boolean", () => {
    [true, false].forEach((bool) => {
      it(`returns for boolean: ${bool}`, () => {
        expect(convertToAttr(bool)).toEqual({ BOOL: bool });
      });
    });
  });

  describe("number", () => {
    [1, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER].forEach((num) => {
      it(`returns for number (integer): ${num}`, () => {
        expect(convertToAttr(num)).toEqual({ N: num.toString() });
      });
    });

    [1.01, Math.PI, Math.E, Number.MIN_VALUE, Number.EPSILON].forEach((num) => {
      it(`returns for number (floating point): ${num}`, () => {
        expect(convertToAttr(num)).toEqual({ N: num.toString() });
      });
    });

    [Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY].forEach((num) => {
      it(`throws for number (special numeric value): ${num}`, () => {
        expect(() => {
          convertToAttr(num);
        }).toThrowError(`Special numeric value ${num} is not allowed`);
      });
    });

    [Number.MAX_SAFE_INTEGER + 1, Number.MAX_VALUE].forEach((num) => {
      it(`throws for number greater than Number.MAX_SAFE_INTEGER: ${num}`, () => {
        expect(() => {
          convertToAttr(num);
        }).toThrowError(`Number ${num} is greater than Number.MAX_SAFE_INTEGER. Use BigInt.`);
      });
    });

    [Number.MIN_SAFE_INTEGER - 1].forEach((num) => {
      it(`throws for number lesser than Number.MIN_SAFE_INTEGER: ${num}`, () => {
        expect(() => {
          convertToAttr(num);
        }).toThrowError(`Number ${num} is lesser than Number.MIN_SAFE_INTEGER. Use BigInt.`);
      });
    });
  });

  describe("bigint", () => {
    const maxSafe = BigInt(Number.MAX_SAFE_INTEGER);
    [
      // @ts-expect-error BigInt literals are not available when targeting lower than ES2020.
      1n,
      // @ts-expect-error BigInt literals are not available when targeting lower than ES2020.
      maxSafe * 2n,
      // @ts-expect-error BigInt literals are not available when targeting lower than ES2020.
      maxSafe * -2n,
      BigInt(Number.MAX_VALUE),
      BigInt("0x1fffffffffffff"),
      BigInt("0b11111111111111111111111111111111111111111111111111111"),
    ].forEach((num) => {
      it(`returns for bigint: ${num}`, () => {
        expect(convertToAttr(num)).toEqual({ N: num.toString() });
      });
    });
  });

  describe("binary", () => {
    const buffer = new ArrayBuffer(64);
    const arr = [...Array(64).keys()];
    const addPointOne = (num: number) => num + 0.1;
    [
      buffer,
      new Blob([new Uint8Array(buffer)]),
      Buffer.from(buffer),
      new DataView(buffer),
      new Int8Array(arr),
      new Uint8Array(arr),
      new Uint8ClampedArray(arr),
      new Int16Array(arr),
      new Uint16Array(arr),
      new Int32Array(arr),
      new Uint32Array(arr),
      new Float32Array(arr.map(addPointOne)),
      new Float64Array(arr.map(addPointOne)),
      new BigInt64Array(arr.map(BigInt)),
      new BigUint64Array(arr.map(BigInt)),
    ].forEach((data) => {
      it(`returns for binary: ${data.constructor.name}`, () => {
        expect(convertToAttr(data)).toEqual({ B: data });
      });
    });
  });

  describe("list", () => {
    const arr = [...Array(4).keys()];
    const uint8Arr = new Uint32Array(arr);
    const biguintArr = new BigUint64Array(arr.map(BigInt));
    [
      [
        [null, false],
        [{ NULL: true }, { BOOL: false }],
      ],
      [
        [1.01, BigInt(1), "one"],
        [{ N: "1.01" }, { N: "1" }, { S: "one" }],
      ],
      [
        [uint8Arr, biguintArr],
        [{ B: uint8Arr }, { B: biguintArr }],
      ],
    ].forEach(([input, output]) => {
      it(`testing list: ${input}`, () => {
        // @ts-ignore
        expect(convertToAttr(input)).toEqual({ L: output });
      });
    });
  });

  describe("set", () => {
    it("number set", () => {
      const set = new Set([1, 2, 3]);
      expect(convertToAttr(set)).toEqual({ NS: Array.from(set).map((num) => num.toString()) });
    });

    it("bigint set", () => {
      // @ts-expect-error BigInt literals are not available when targeting lower than ES2020.
      const set = new Set([1n, 2n, 3n]);
      expect(convertToAttr(set)).toEqual({ NS: Array.from(set).map((num) => num.toString()) });
    });

    it("binary set", () => {
      const set = new Set([new ArrayBuffer(4), new ArrayBuffer(8), new ArrayBuffer(16)]);
      expect(convertToAttr(set)).toEqual({ BS: Array.from(set) });
    });

    it("string set", () => {
      const set = new Set(["one", "two", "three"]);
      expect(convertToAttr(set)).toEqual({ SS: Array.from(set) });
    });
  });

  describe("string", () => {
    it("returns for string", () => {
      const str = "str";
      expect(convertToAttr(str)).toEqual({ S: str });
    });
  });
});
