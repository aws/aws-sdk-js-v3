import { handleFloat, parseBoolean } from "./parse-utils";
import { expectBoolean, expectNumber, expectString } from "./parse-utils";

describe("parseBoolean", () => {
  it('Returns true for "true"', () => {
    expect(parseBoolean("true")).toEqual(true);
  });

  it('Returns false for "false"', () => {
    expect(parseBoolean("false")).toEqual(false);
  });

  it("Throws an error on invalid input", () => {
    // These are valid booleans in YAML
    expect(() => parseBoolean("y" as any)).toThrowError();
    expect(() => parseBoolean("Y" as any)).toThrowError();
    expect(() => parseBoolean("yes" as any)).toThrowError();
    expect(() => parseBoolean("Yes" as any)).toThrowError();
    expect(() => parseBoolean("YES" as any)).toThrowError();
    expect(() => parseBoolean("n" as any)).toThrowError();
    expect(() => parseBoolean("N" as any)).toThrowError();
    expect(() => parseBoolean("no" as any)).toThrowError();
    expect(() => parseBoolean("No" as any)).toThrowError();
    expect(() => parseBoolean("NO" as any)).toThrowError();
    expect(() => parseBoolean("True" as any)).toThrowError();
    expect(() => parseBoolean("TRUE" as any)).toThrowError();
    expect(() => parseBoolean("False" as any)).toThrowError();
    expect(() => parseBoolean("FALSE" as any)).toThrowError();
    expect(() => parseBoolean("on" as any)).toThrowError();
    expect(() => parseBoolean("On" as any)).toThrowError();
    expect(() => parseBoolean("ON" as any)).toThrowError();
    expect(() => parseBoolean("off" as any)).toThrowError();
    expect(() => parseBoolean("Off" as any)).toThrowError();
    expect(() => parseBoolean("OFF" as any)).toThrowError();

    // These would be resolve to false using Boolean
    expect(() => parseBoolean(0 as any)).toThrowError();
    expect(() => parseBoolean(null as any)).toThrowError();
    expect(() => parseBoolean("" as any)).toThrowError();
    expect(() => parseBoolean(false as any)).toThrowError();

    // These would resolve to true using Boolean
    expect(() => parseBoolean(true as any)).toThrowError();
    expect(() => parseBoolean("Su Lin" as any)).toThrowError();
    expect(() => parseBoolean([] as any)).toThrowError();
    expect(() => parseBoolean({} as any)).toThrowError();
  });
});

describe("expectBoolean", () => {
  it("accepts booleans", () => {
    expect(expectBoolean(true)).toEqual(true);
    expect(expectBoolean(false)).toEqual(false);
    expect(expectBoolean(null)).toEqual(undefined);
    expect(expectBoolean(undefined)).toEqual(undefined);
  });

  it("rejects non-booleans", () => {
    expect(() => expectBoolean("true")).toThrowError();
    expect(() => expectBoolean("false")).toThrowError();
    expect(() => expectBoolean(0)).toThrowError();
    expect(() => expectBoolean(1)).toThrowError();
    expect(() => expectBoolean(1.1)).toThrowError();
    expect(() => expectBoolean(Infinity)).toThrowError();
    expect(() => expectBoolean(-Infinity)).toThrowError();
    expect(() => expectBoolean(NaN)).toThrowError();
    expect(() => expectBoolean({})).toThrowError();
    expect(() => expectBoolean([])).toThrowError();
  });
});

describe("expectNumber", () => {
  it("accepts numbers", () => {
    expect(expectNumber(1)).toEqual(1);
    expect(expectNumber(1.1)).toEqual(1.1);
    expect(expectNumber(Infinity)).toEqual(Infinity);
    expect(expectNumber(-Infinity)).toEqual(-Infinity);
    expect(expectNumber(NaN)).toEqual(NaN);
    expect(expectNumber(null)).toEqual(undefined);
    expect(expectNumber(undefined)).toEqual(undefined);
  });

  it("rejects non-numbers", () => {
    expect(() => expectNumber("1")).toThrowError();
    expect(() => expectNumber("1.1")).toThrowError();
    expect(() => expectNumber("Infinity")).toThrowError();
    expect(() => expectNumber("-Infinity")).toThrowError();
    expect(() => expectNumber("NaN")).toThrowError();
    expect(() => expectNumber(true)).toThrowError();
    expect(() => expectNumber(false)).toThrowError();
    expect(() => expectNumber([])).toThrowError();
    expect(() => expectNumber({})).toThrowError();
  });
});

describe("expectString", () => {
  it("accepts strings", () => {
    expect(expectString("foo")).toEqual("foo");
    expect(expectString(null)).toEqual(undefined);
    expect(expectString(undefined)).toEqual(undefined);
  });

  it("rejects non-strings", () => {
    expect(() => expectString(1)).toThrowError();
    expect(() => expectString(NaN)).toThrowError();
    expect(() => expectString(Infinity)).toThrowError();
    expect(() => expectString(-Infinity)).toThrowError();
    expect(() => expectString(true)).toThrowError();
    expect(() => expectString(false)).toThrowError();
    expect(() => expectString([])).toThrowError();
    expect(() => expectString({})).toThrowError();
  });
});

describe("handleFloat", () => {
  it("accepts non-numeric floats as strings", () => {
    expect(handleFloat("NaN")).toEqual(NaN);
    expect(handleFloat("Infinity")).toEqual(Infinity);
    expect(handleFloat("-Infinity")).toEqual(-Infinity);
  });

  it("rejects numeric strings", () => {
    expect(() => handleFloat("1")).toThrowError();
    expect(() => handleFloat("1.1")).toThrowError();
  });

  it("accepts numbers", () => {
    expect(expectNumber(1)).toEqual(1);
    expect(expectNumber(1.1)).toEqual(1.1);
    expect(expectNumber(Infinity)).toEqual(Infinity);
    expect(expectNumber(-Infinity)).toEqual(-Infinity);
    expect(expectNumber(NaN)).toEqual(NaN);
    expect(expectNumber(null)).toEqual(undefined);
    expect(expectNumber(undefined)).toEqual(undefined);
  });
});
