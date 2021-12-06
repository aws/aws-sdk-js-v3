import {
  expectByte,
  expectFloat32,
  expectInt32,
  expectLong,
  expectNonNull,
  expectObject,
  expectShort,
  expectUnion,
  limitedParseDouble,
  limitedParseFloat32,
  parseBoolean,
  strictParseByte,
  strictParseDouble,
  strictParseFloat32,
  strictParseInt32,
  strictParseLong,
  strictParseShort,
} from "./parse-utils";
import { expectBoolean, expectNumber, expectString } from "./parse-utils";

describe("parseBoolean", () => {
  it('Returns true for "true"', () => {
    expect(parseBoolean("true")).toEqual(true);
  });

  it('Returns false for "false"', () => {
    expect(parseBoolean("false")).toEqual(false);
  });

  describe("Throws an error on invalid input", () => {
    it.each([
      // These are valid booleans in YAML
      "y",
      "Y",
      "yes",
      "Yes",
      "YES",
      "n",
      "N",
      "no",
      "No",
      "NO",
      "True",
      "TRUE",
      "False",
      "FALSE",
      "on",
      "On",
      "ON",
      "off",
      "Off",
      "OFF",
      // These would be resolve to false using Boolean
      0,
      null,
      "",
      false,
      // These would resolve to true using Boolean
      true,
      "Su Lin",
      [],
      {},
    ])("rejects %s", (value) => {
      expect(() => parseBoolean(value as any)).toThrowError();
    });
  });
});

describe("expectBoolean", () => {
  it.each([true, false])("accepts %s", (value) => {
    expect(expectBoolean(value)).toEqual(value);
  });

  it.each([null, undefined])("accepts %s", (value) => {
    expect(expectBoolean(value)).toEqual(undefined);
  });

  describe("rejects non-booleans", () => {
    it.each(["true", "false", 0, 1, 1.1, Infinity, -Infinity, NaN, {}, []])("rejects %s", (value) => {
      expect(() => expectBoolean(value)).toThrowError();
    });
  });
});

describe("expectNumber", () => {
  describe("accepts numbers", () => {
    it.each([1, 1.1, Infinity, -Infinity])("accepts %s", (value) => {
      expect(expectNumber(value)).toEqual(value);
    });
  });

  it.each([null, undefined])("accepts %s", (value) => {
    expect(expectNumber(value)).toEqual(undefined);
  });

  describe("rejects non-numbers", () => {
    it.each(["1", "1.1", "Infinity", "-Infinity", "NaN", true, false, [], {}])("rejects %s", (value) => {
      expect(() => expectNumber(value)).toThrowError();
    });
  });
});

describe("expectFloat32", () => {
  describe("accepts numbers", () => {
    it.each([
      1,
      1.1,
      Infinity,
      -Infinity,
      // Smallest positive subnormal number
      2 ** -149,
      // Largest subnormal number
      2 ** -126 * (1 - 2 ** -23),
      // Smallest positive normal number
      2 ** -126,
      // Largest normal number
      2 ** 127 * (2 - 2 ** -23),
      // Largest number less than one
      1 - 2 ** -24,
      // Smallest number larger than one
      1 + 2 ** -23,
    ])("accepts %s", (value) => {
      expect(expectNumber(value)).toEqual(value);
    });
  });

  it.each([null, undefined])("accepts %s", (value) => {
    expect(expectNumber(value)).toEqual(undefined);
  });

  describe("rejects non-numbers", () => {
    it.each(["1", "1.1", "Infinity", "-Infinity", "NaN", true, false, [], {}])("rejects %s", (value) => {
      expect(() => expectNumber(value)).toThrowError();
    });
  });

  describe("rejects doubles", () => {
    it.each([2 ** 128, -(2 ** 128)])("rejects %s", (value) => {
      expect(() => expectFloat32(value)).toThrowError();
    });
  });
});

describe("expectLong", () => {
  describe("accepts 64-bit integers", () => {
    it.each([
      1,
      Number.MAX_SAFE_INTEGER,
      Number.MIN_SAFE_INTEGER,
      2 ** 31 - 1,
      -(2 ** 31),
      2 ** 15 - 1,
      -(2 ** 15),
      127,
      -128,
    ])("accepts %s", (value) => {
      expect(expectLong(value)).toEqual(value);
    });
  });

  it.each([null, undefined])("accepts %s", (value) => {
    expect(expectLong(value)).toEqual(undefined);
  });

  describe("rejects non-integers", () => {
    it.each([1.1, "1", "1.1", NaN, true, [], {}])("rejects %s", (value) => {
      expect(() => expectLong(value)).toThrowError();
    });
  });
});

describe("expectInt32", () => {
  describe("accepts 32-bit integers", () => {
    it.each([1, 2 ** 31 - 1, -(2 ** 31), 2 ** 15 - 1, -(2 ** 15), 127, -128])("accepts %s", (value) => {
      expect(expectInt32(value)).toEqual(value);
    });
  });

  it.each([null, undefined])("accepts %s", (value) => {
    expect(expectInt32(value)).toEqual(undefined);
  });

  describe("rejects non-integers", () => {
    it.each([
      1.1,
      "1",
      "1.1",
      NaN,
      true,
      [],
      {},
      Number.MAX_SAFE_INTEGER,
      Number.MIN_SAFE_INTEGER,
      2 ** 31,
      -(2 ** 31 + 1),
    ])("rejects %s", (value) => {
      expect(() => expectInt32(value)).toThrowError();
    });
  });
});

describe("expectShort", () => {
  describe("accepts 16-bit integers", () => {
    it.each([1, 2 ** 15 - 1, -(2 ** 15), 127, -128])("accepts %s", (value) => {
      expect(expectShort(value)).toEqual(value);
    });
  });

  it.each([null, undefined])("accepts %s", (value) => {
    expect(expectShort(value)).toEqual(undefined);
  });

  describe("rejects non-integers", () => {
    it.each([
      1.1,
      "1",
      "1.1",
      NaN,
      true,
      [],
      {},
      2 ** 63 - 1,
      -(2 ** 63 + 1),
      2 ** 31 - 1,
      -(2 ** 31 + 1),
      2 ** 15,
      -(2 ** 15 + 1),
    ])("rejects %s", (value) => {
      expect(() => expectShort(value)).toThrowError();
    });
  });
});

describe("expectByte", () => {
  describe("accepts 8-bit integers", () => {
    it.each([1, 127, -128])("accepts %s", (value) => {
      expect(expectByte(value)).toEqual(value);
    });
  });

  it.each([null, undefined])("accepts %s", (value) => {
    expect(expectByte(value)).toEqual(undefined);
  });

  describe("rejects non-integers", () => {
    it.each([
      1.1,
      "1",
      "1.1",
      NaN,
      true,
      [],
      {},
      Number.MAX_SAFE_INTEGER,
      Number.MIN_SAFE_INTEGER,
      2 ** 31 - 1,
      -(2 ** 31 + 1),
      2 ** 15 - 1,
      -(2 ** 15 + 1),
      128,
      -129,
    ])("rejects %s", (value) => {
      expect(() => expectByte(value)).toThrowError();
    });
  });
});

describe("expectNonNull", () => {
  it.each([1, 1.1, "1", NaN, true, [], ["a", 123], { a: 123 }, [{ a: 123 }], "{ a : 123 }", '{"a":123}'])(
    "accepts %s",
    (value) => {
      expect(expectNonNull(value)).toEqual(value);
    }
  );

  it.each([null, undefined])("rejects %s", (value) => {
    expect(() => expectNonNull(value)).toThrowError();
  });
});

describe("expectObject", () => {
  it("accepts objects", () => {
    expect(expectObject({ a: 123 })).toEqual({ a: 123 });
  });

  it.each([null, undefined])("accepts %s", (value) => {
    expect(expectObject(value)).toEqual(undefined);
  });

  describe("rejects non-objects", () => {
    it.each([1, 1.1, "1", NaN, true, [], ["a", 123], [{ a: 123 }], "{ a : 123 }", '{"a":123}'])(
      "rejects %s",
      (value) => {
        expect(() => expectObject(value)).toThrowError();
      }
    );
  });
});

describe("expectString", () => {
  it("accepts strings", () => {
    expect(expectString("foo")).toEqual("foo");
  });

  it.each([null, undefined])("accepts %s", (value) => {
    expect(expectString(value)).toEqual(undefined);
  });

  describe("rejects non-strings", () => {
    it.each([1, NaN, Infinity, -Infinity, true, false, [], {}])("rejects %s", (value) => {
      expect(() => expectString(value)).toThrowError();
    });
  });
});

describe("expectUnion", () => {
  it.each([null, undefined])("accepts %s", (value) => {
    expect(expectUnion(value)).toEqual(undefined);
  });
  describe("rejects non-objects", () => {
    it.each([1, NaN, Infinity, -Infinity, true, false, [], "abc"])("%s", (value) => {
      expect(() => expectUnion(value)).toThrowError();
    });
  });
  describe("rejects malformed unions", () => {
    it.each([{}, { a: null }, { a: undefined }, { a: 1, b: 2 }])("%s", (value) => {
      expect(() => expectUnion(value)).toThrowError();
    });
  });
  describe("accepts unions", () => {
    it.each([{ a: 1 }, { a: 1, b: null }])("%s", (value) => {
      expect(expectUnion(value)).toEqual(value);
    });
  });
});

describe("strictParseDouble", () => {
  describe("accepts non-numeric floats as strings", () => {
    expect(strictParseDouble("Infinity")).toEqual(Infinity);
    expect(strictParseDouble("-Infinity")).toEqual(-Infinity);
    expect(strictParseDouble("NaN")).toEqual(NaN);
  });

  describe("rejects implicit NaN", () => {
    it.each([
      "foo",
      "123ABC",
      "ABC123",
      "12AB3C",
      "1.A",
      "1.1A",
      "1.1A1",
      "0xFF",
      "0XFF",
      "0b1111",
      "0B1111",
      "0777",
      "0o777",
      "0O777",
      "1n",
      "1N",
      "1_000",
      "e",
      "e1",
      ".1",
    ])("rejects %s", (value) => {
      expect(() => strictParseDouble(value)).toThrowError();
    });
  });

  it("accepts numeric strings", () => {
    expect(strictParseDouble("1")).toEqual(1);
    expect(strictParseDouble("-1")).toEqual(-1);
    expect(strictParseDouble("1.1")).toEqual(1.1);
    expect(strictParseDouble("1e1")).toEqual(10);
    expect(strictParseDouble("-1e1")).toEqual(-10);
    expect(strictParseDouble("1e+1")).toEqual(10);
    expect(strictParseDouble("1e-1")).toEqual(0.1);
    expect(strictParseDouble("1E1")).toEqual(10);
    expect(strictParseDouble("1E+1")).toEqual(10);
    expect(strictParseDouble("1E-1")).toEqual(0.1);
  });

  describe("accepts numbers", () => {
    it.each([1, 1.1, Infinity, -Infinity, NaN])("accepts %s", (value) => {
      expect(strictParseDouble(value)).toEqual(value);
    });
  });

  it.each([null, undefined])("accepts %s", (value) => {
    expect(strictParseDouble(value)).toEqual(undefined);
  });
});

describe("strictParseFloat32", () => {
  describe("accepts non-numeric floats as strings", () => {
    expect(strictParseFloat32("Infinity")).toEqual(Infinity);
    expect(strictParseFloat32("-Infinity")).toEqual(-Infinity);
    expect(strictParseFloat32("NaN")).toEqual(NaN);
  });

  describe("rejects implicit NaN", () => {
    it.each([
      "foo",
      "123ABC",
      "ABC123",
      "12AB3C",
      "1.A",
      "1.1A",
      "1.1A1",
      "0xFF",
      "0XFF",
      "0b1111",
      "0B1111",
      "0777",
      "0o777",
      "0O777",
      "1n",
      "1N",
      "1_000",
      "e",
      "e1",
      ".1",
    ])("rejects %s", (value) => {
      expect(() => strictParseFloat32(value)).toThrowError();
    });
  });

  describe("rejects doubles", () => {
    it.each([2 ** 128, -(2 ** 128)])("rejects %s", (value) => {
      expect(() => strictParseFloat32(value)).toThrowError();
    });
  });

  it("accepts numeric strings", () => {
    expect(strictParseFloat32("1")).toEqual(1);
    expect(strictParseFloat32("-1")).toEqual(-1);
    expect(strictParseFloat32("1.1")).toEqual(1.1);
    expect(strictParseFloat32("1e1")).toEqual(10);
    expect(strictParseFloat32("-1e1")).toEqual(-10);
    expect(strictParseFloat32("1e+1")).toEqual(10);
    expect(strictParseFloat32("1e-1")).toEqual(0.1);
    expect(strictParseFloat32("1E1")).toEqual(10);
    expect(strictParseFloat32("1E+1")).toEqual(10);
    expect(strictParseFloat32("1E-1")).toEqual(0.1);
  });

  describe("accepts numbers", () => {
    it.each([1, 1.1, Infinity, -Infinity, NaN])("accepts %s", (value) => {
      expect(strictParseFloat32(value)).toEqual(value);
    });
  });

  it.each([null, undefined])("accepts %s", (value) => {
    expect(strictParseFloat32(value)).toEqual(undefined);
  });
});

describe("limitedParseDouble", () => {
  it("accepts non-numeric floats as strings", () => {
    expect(limitedParseDouble("Infinity")).toEqual(Infinity);
    expect(limitedParseDouble("-Infinity")).toEqual(-Infinity);
    expect(limitedParseDouble("NaN")).toEqual(NaN);
  });

  it("rejects implicit NaN", () => {
    expect(() => limitedParseDouble("foo")).toThrowError();
  });

  describe("rejects numeric strings", () => {
    it.each(["1", "1.1"])("rejects %s", (value) => {
      expect(() => limitedParseDouble(value)).toThrowError();
    });
  });

  describe("accepts numbers", () => {
    it.each([
      1,
      1.1,
      Infinity,
      -Infinity,
      NaN,
      // Smallest positive subnormal number
      2 ** -1074,
      // Largest subnormal number
      2 ** -1022 * (1 - 2 ** -52),
      // Smallest positive normal number
      2 ** -1022,
      // Largest number
      2 ** 1023 * (1 + (1 - 2 ** -52)),
      // Largest number less than one
      1 - 2 ** -53,
      // Smallest number larger than one
      1 + 2 ** -52,
    ])("accepts %s", (value) => {
      expect(limitedParseDouble(value)).toEqual(value);
    });
  });

  it.each([null, undefined])("accepts %s", (value) => {
    expect(limitedParseDouble(value)).toEqual(undefined);
  });
});

describe("limitedParseFloat32", () => {
  it("accepts non-numeric floats as strings", () => {
    expect(limitedParseFloat32("Infinity")).toEqual(Infinity);
    expect(limitedParseFloat32("-Infinity")).toEqual(-Infinity);
    expect(limitedParseFloat32("NaN")).toEqual(NaN);
  });

  it("rejects implicit NaN", () => {
    expect(() => limitedParseFloat32("foo")).toThrowError();
  });

  describe("rejects numeric strings", () => {
    it.each(["1", "1.1"])("rejects %s", (value) => {
      expect(() => limitedParseFloat32(value)).toThrowError();
    });
  });

  describe("accepts numbers", () => {
    it.each([
      1,
      1.1,
      Infinity,
      -Infinity,
      NaN,
      // Smallest positive subnormal number
      2 ** -149,
      // Largest subnormal number
      2 ** -126 * (1 - 2 ** -23),
      // Smallest positive normal number
      2 ** -126,
      // Largest normal number
      2 ** 127 * (2 - 2 ** -23),
      // Largest number less than one
      1 - 2 ** -24,
      // Smallest number larger than one
      1 + 2 ** -23,
    ])("accepts %s", (value) => {
      expect(limitedParseFloat32(value)).toEqual(value);
    });
  });

  describe("rejects doubles", () => {
    it.each([2 ** 128, -(2 ** 128)])("rejects %s", (value) => {
      expect(() => limitedParseFloat32(value)).toThrowError();
    });
  });

  it.each([null, undefined])("accepts %s", (value) => {
    expect(limitedParseFloat32(value)).toEqual(undefined);
  });
});

describe("strictParseLong", () => {
  describe("accepts integers", () => {
    describe("accepts 64-bit integers", () => {
      it.each([1, 2 ** 63 - 1, -(2 ** 63), 2 ** 31 - 1, -(2 ** 31), 2 ** 15 - 1, -(2 ** 15), 127, -128])(
        "accepts %s",
        (value) => {
          expect(strictParseLong(value)).toEqual(value);
        }
      );
    });
    expect(strictParseLong("1")).toEqual(1);
  });

  it.each([null, undefined])("accepts %s", (value) => {
    expect(strictParseLong(value)).toEqual(undefined);
  });

  describe("rejects non-integers", () => {
    it.each([
      1.1,
      "1.1",
      "NaN",
      "Infinity",
      "-Infinity",
      NaN,
      Infinity,
      -Infinity,
      true,
      false,
      [],
      {},
      "foo",
      "123ABC",
      "ABC123",
      "12AB3C",
    ])("rejects %s", (value) => {
      expect(() => strictParseLong(value as any)).toThrowError();
    });
  });
});

describe("strictParseInt32", () => {
  describe("accepts integers", () => {
    describe("accepts 32-bit integers", () => {
      it.each([1, 2 ** 31 - 1, -(2 ** 31), 2 ** 15 - 1, -(2 ** 15), 127, -128])("accepts %s", (value) => {
        expect(strictParseInt32(value)).toEqual(value);
      });
    });
    expect(strictParseInt32("1")).toEqual(1);
  });

  it.each([null, undefined])("accepts %s", (value) => {
    expect(strictParseInt32(value)).toEqual(undefined);
  });

  describe("rejects non-integers", () => {
    it.each([
      1.1,
      "1.1",
      "NaN",
      "Infinity",
      "-Infinity",
      NaN,
      Infinity,
      -Infinity,
      true,
      false,
      [],
      {},
      2 ** 63 - 1,
      -(2 ** 63 + 1),
      2 ** 31,
      -(2 ** 31 + 1),
      "foo",
      "123ABC",
      "ABC123",
      "12AB3C",
    ])("rejects %s", (value) => {
      expect(() => strictParseInt32(value as any)).toThrowError();
    });
  });
});

describe("strictParseShort", () => {
  describe("accepts integers", () => {
    describe("accepts 16-bit integers", () => {
      it.each([1, 2 ** 15 - 1, -(2 ** 15), 127, -128])("accepts %s", (value) => {
        expect(strictParseShort(value)).toEqual(value);
      });
    });
    expect(strictParseShort("1")).toEqual(1);
  });

  it.each([null, undefined])("accepts %s", (value) => {
    expect(strictParseShort(value)).toEqual(undefined);
  });

  describe("rejects non-integers", () => {
    it.each([
      1.1,
      "1.1",
      "NaN",
      "Infinity",
      "-Infinity",
      NaN,
      Infinity,
      -Infinity,
      true,
      false,
      [],
      {},
      2 ** 63 - 1,
      -(2 ** 63 + 1),
      2 ** 31 - 1,
      -(2 ** 31 + 1),
      2 ** 15,
      -(2 ** 15 + 1),
      "foo",
      "123ABC",
      "ABC123",
      "12AB3C",
    ])("rejects %s", (value) => {
      expect(() => strictParseShort(value as any)).toThrowError();
    });
  });
});

describe("strictParseByte", () => {
  describe("accepts integers", () => {
    describe("accepts 8-bit integers", () => {
      it.each([1, 127, -128])("accepts %s", (value) => {
        expect(strictParseByte(value)).toEqual(value);
      });
    });
    expect(strictParseByte("1")).toEqual(1);
  });

  it.each([null, undefined])("accepts %s", (value) => {
    expect(strictParseByte(value)).toEqual(undefined);
  });

  describe("rejects non-integers", () => {
    it.each([
      1.1,
      "1.1",
      "NaN",
      "Infinity",
      "-Infinity",
      NaN,
      Infinity,
      -Infinity,
      true,
      false,
      [],
      {},
      2 ** 63 - 1,
      -(2 ** 63 + 1),
      2 ** 31 - 1,
      -(2 ** 31 + 1),
      2 ** 15,
      -(2 ** 15 + 1),
      128,
      -129,
      "foo",
      "123ABC",
      "ABC123",
      "12AB3C",
    ])("rejects %s", (value) => {
      expect(() => strictParseByte(value as any)).toThrowError();
    });
  });
});
