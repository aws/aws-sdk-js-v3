import { expectInt, limitedParseFloat, parseBoolean, strictParseFloat, strictParseInt } from "./parse-utils";
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

describe("expectInt", () => {
  it("accepts integers", () => {
    expect(expectInt(1)).toEqual(1);
  });

  it.each([null, undefined])("accepts %s", (value) => {
    expect(expectInt(value)).toEqual(undefined);
  });

  describe("rejects non-integers", () => {
    it.each([1.1, "1", "1.1", NaN, true, [], {}])("rejects %s", (value) => {
      expect(() => expectInt(value)).toThrowError();
    });
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

describe("strictParseFloat", () => {
  describe("accepts non-numeric floats as strings", () => {
    expect(strictParseFloat("Infinity")).toEqual(Infinity);
    expect(strictParseFloat("-Infinity")).toEqual(-Infinity);
    expect(strictParseFloat("NaN")).toEqual(NaN);
  });

  it("rejects implicit NaN", () => {
    expect(() => strictParseFloat("foo")).toThrowError();
  });

  it("accepts numeric strings", () => {
    expect(strictParseFloat("1")).toEqual(1);
    expect(strictParseFloat("1.1")).toEqual(1.1);
  });

  describe("accepts numbers", () => {
    it.each([1, 1.1, Infinity, -Infinity, NaN])("accepts %s", (value) => {
      expect(strictParseFloat(value)).toEqual(value);
    });
  });

  it.each([null, undefined])("accepts %s", (value) => {
    expect(strictParseFloat(value)).toEqual(undefined);
  });
});

describe("limitedParseFloat", () => {
  it("accepts non-numeric floats as strings", () => {
    expect(limitedParseFloat("Infinity")).toEqual(Infinity);
    expect(limitedParseFloat("-Infinity")).toEqual(-Infinity);
    expect(limitedParseFloat("NaN")).toEqual(NaN);
  });

  it("rejects implicit NaN", () => {
    expect(() => limitedParseFloat("foo")).toThrowError();
  });

  describe("rejects numeric strings", () => {
    it.each(["1", "1.1"])("rejects %s", (value) => {
      expect(() => limitedParseFloat(value)).toThrowError();
    });
  });

  describe("accepts numbers", () => {
    it.each([1, 1.1, Infinity, -Infinity, NaN])("accepts %s", (value) => {
      expect(limitedParseFloat(value)).toEqual(value);
    });
  });

  it.each([null, undefined])("accepts %s", (value) => {
    expect(limitedParseFloat(value)).toEqual(undefined);
  });
});

describe("strictParseInt", () => {
  it("accepts integers", () => {
    expect(strictParseInt(1)).toEqual(1);
    expect(strictParseInt("1")).toEqual(1);
  });

  it.each([null, undefined])("accepts %s", (value) => {
    expect(strictParseInt(value)).toEqual(undefined);
  });

  describe("rejects non-integers", () => {
    it.each([1.1, "1.1", "NaN", "Infinity", "-Infinity", NaN, Infinity, -Infinity, true, false, [], {}])(
      "rejects %s",
      (value) => {
        expect(() => strictParseInt(value as any)).toThrowError();
      }
    );
  });
});
