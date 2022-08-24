import { EndpointError } from "..";
import { getAttrPathList } from "./getAttrPathList";

describe(getAttrPathList.name, () => {
  const testSuccess = (input: string, output: Array<string>) => {
    expect(getAttrPathList(input)).toEqual(output);
  };

  const testFail = (input: string, errorMsg: string) => {
    expect(() => {
      getAttrPathList(input);
    }).toThrow(new EndpointError(errorMsg));
  };

  it("returns top level key", () => {
    testSuccess("foo", ["foo"]);
  });

  it("returns array with index", () => {
    testSuccess("foo[0]", ["foo", "0"]);
  });

  it("returns index", () => {
    testSuccess("[0]", ["0"]);
  });

  it("returns object key", () => {
    testSuccess("foo.bar", ["foo", "bar"]);
  });

  it("throws error if array brackets don't end", () => {
    const incompletePath = "foo[0";
    testFail(incompletePath, `Path: '${incompletePath}' does not end with ']'`);
  });

  it("throws error if array index is not integer", () => {
    const invalidIndex = "bar";
    const invalidPath = `foo[${invalidIndex}]`;
    testFail(invalidPath, `Invalid array index: '${invalidIndex}' in path: '${invalidPath}'`);
  });
});
