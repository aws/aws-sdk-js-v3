import { parseBoolean } from "./parse-utils";

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
