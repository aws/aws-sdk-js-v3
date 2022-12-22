import testCases from "./__mocks__/testCases.json";
import { fromBase64 } from "./fromBase64";

describe(fromBase64.name, () => {
  it.each(testCases as Array<[string, string, number[]]>)("%s", (desc, encoded, decoded) => {
    expect(fromBase64(encoded)).toEqual(new Uint8Array(decoded));
  });

  it("should throw when given a number", () => {
    expect(() => fromBase64(0xdeadbeefface as any)).toThrow();
  });

  describe("should reject invalid base64 strings", () => {
    it.each(["Rg", "Rg=", "[][]", "-_=="])("rejects '%s'", (value) => {
      expect(() => fromBase64(value)).toThrowError();
    });
  });
});
