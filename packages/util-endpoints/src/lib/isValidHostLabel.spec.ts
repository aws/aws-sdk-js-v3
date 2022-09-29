import { isValidHostLabel } from "./isValidHostLabel";

describe(isValidHostLabel.name, () => {
  const testCases: Array<[boolean, string]> = [
    [true, "01010"],
    [true, "abc"],
    [true, "A0c"],
    [false, "A0c-"],
    [false, "-A0c"],
    [true, "A-0c"],
    [false, "a".repeat(64)],
    [true, "a".repeat(63)],
    [false, ""],
    [true, "a"],
    [true, "0--0"],
  ];

  describe("test without allowSubDomains", () => {
    it.each(testCases)("returns %s for host label '%s'", (output: boolean, input: string) => {
      expect(isValidHostLabel(input)).toBe(output);
    });
  });

  describe("test with allowSubDomains", () => {
    it.each([true, false])("tests for output: %s", (output: boolean) => {
      const hostLabelToTest = testCases
        .filter(([outputEntry]) => outputEntry === output)
        .map(([, value]) => value)
        .join(".");
      expect(isValidHostLabel(hostLabelToTest, true)).toBe(output);
    });

    describe("returns false is any subdomain is invalid", () => {
      const validHostLabel = testCases
        .filter(([outputEntry]) => outputEntry === true)
        .map(([, value]) => value)
        .join(".");

      it.each(testCases.filter(([outputEntry]) => outputEntry === false).map(([, value]) => value))(
        "subdomain: %s",
        (invalidSubDomain: string) => {
          expect(isValidHostLabel([validHostLabel, invalidSubDomain].join("."), true)).toBe(false);
        }
      );
    });
  });
});
