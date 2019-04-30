import { getStringDeclaration } from "./getStringDeclaration";

describe("getStringDeclaration", () => {
  it('should return "string" for simple strings', () => {
    expect(
      getStringDeclaration({
        type: "string",
        name: "string",
        documentation: "string"
      })
    ).toEqual("string");
  });

  it("should include enum values when present", () => {
    expect(
      getStringDeclaration({
        type: "string",
        name: "string",
        documentation: "string",
        enum: ["foo", "bar", "baz"]
      })
    ).toEqual("'foo'|'bar'|'baz'|string");
  });
});
