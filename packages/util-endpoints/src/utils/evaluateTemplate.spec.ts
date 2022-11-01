import { getAttr } from "../lib";
import { evaluateTemplate } from "./evaluateTemplate";

jest.mock("../lib");

describe(evaluateTemplate.name, () => {
  const mockOptions = {
    endpointParams: {},
    referenceRecord: {},
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should not escape template without braces", () => {
    const templateWithoutBraces = "foo bar baz";
    expect(evaluateTemplate(templateWithoutBraces, mockOptions)).toEqual(templateWithoutBraces);
  });

  describe("should replace `{parameterName}` with value", () => {
    const parameterName = "bar";
    const template = "foo {parameterName} baz";

    afterEach(() => {
      expect(getAttr).not.toHaveBeenCalled();
    });

    it.each(["endpointParams", "referenceRecord"])("from %s", (key: string) => {
      expect(evaluateTemplate(template, { ...mockOptions, [key]: { parameterName } })).toBe(`foo ${parameterName} baz`);
    });
  });

  it("should escape values within double braces like {{value}}", () => {
    const value = "bar";
    expect(evaluateTemplate("foo {{value1}} bar {{value2}} baz", { ...mockOptions, endpointParams: { value } })).toBe(
      "foo {value1} bar {value2} baz"
    );
    expect(getAttr).not.toHaveBeenCalled();
  });

  it("should call getAttr for short-hand getAttr function", () => {
    const ref1 = { key1: "value1" };
    const ref2 = { key2: "value2" };

    (getAttr as jest.Mock).mockReturnValueOnce(ref1["key1"]);
    (getAttr as jest.Mock).mockReturnValueOnce(ref2["key2"]);

    expect(
      evaluateTemplate("foo {ref1#key1} bar {ref2#key2} baz", { ...mockOptions, referenceRecord: { ref1, ref2 } })
    ).toBe(`foo ${ref1["key1"]} bar ${ref2["key2"]} baz`);

    expect(getAttr).toHaveBeenCalledTimes(2);
    expect(getAttr).toHaveBeenNthCalledWith(1, ref1, "key1");
    expect(getAttr).toHaveBeenNthCalledWith(2, ref2, "key2");
  });

  describe("should not change template with incomplete braces", () => {
    it.each([
      "incomplete opening bracket '{' in template",
      "incomplete closing bracket '}' in template",
      "incomplete opening escape '{{' in template",
      "incomplete closing escape '}}' in template",
    ])("%s", (template) => {
      expect(evaluateTemplate(template, mockOptions)).toEqual(template);
    });
  });
});
