import { EndpointError } from "../types";
import { getAttr } from "./getAttr";
import { getAttrPathList } from "./getAttrPathList";

jest.mock("./getAttrPathList");

describe(getAttr.name, () => {
  const testSuccess = (value: any, input: string, output: unknown, pathList: string[]) => {
    (getAttrPathList as jest.Mock).mockReturnValueOnce(pathList);
    expect(getAttr(value, input)).toEqual(output);
    expect(getAttrPathList).toHaveBeenCalledWith(input);
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("object", () => {
    const mockObj = { Thing1: "foo", Thing2: ["index0", "index1"], Thing3: { SubThing: 42 } };

    it.each([
      ["foo", "Thing1", ["Thing1"]],
      ["index0", "Thing2[0]", ["Thing2", "0"]],
      ["index1", "Thing2[1]", ["Thing2", "1"]],
      [42, "Thing3.SubThing", ["Thing3", "SubThing"]],
    ])("returns '%s' for '%s'", (output, input, pathList) => {
      testSuccess(mockObj, input, output, pathList);
    });
  });

  describe("array", () => {
    const mockArr = ["index0", "index1"];

    it.each([
      [mockArr[0], "[0]", ["0"]],
      [mockArr[1], "[1]", ["1"]],
    ])("returns '%s' for '%s'", (output, input, pathList) => {
      testSuccess(mockArr, input, output, pathList);
    });
  });

  it("rethrows error from getAttrPathList", () => {
    const mockPath = "mockPath";
    const mockError = new Error("test");
    (getAttrPathList as jest.Mock).mockImplementationOnce(() => {
      throw mockError;
    });
    expect(() => getAttr({}, mockPath)).toThrow(mockError);
    expect(getAttrPathList).toHaveBeenCalledWith(mockPath);
  });

  it("throws error if attribute parent is not defined", () => {
    const mockPath = "foo.bar";
    const mockObj = { foo: "bar" };
    (getAttrPathList as jest.Mock).mockReturnValueOnce(mockPath.split("."));
    expect(() => getAttr(mockObj, mockPath)).toThrow(
      new EndpointError(`Index 'bar' in '${mockPath}' not found in '${JSON.stringify(mockObj)}'`)
    );
    expect(getAttrPathList).toHaveBeenCalledWith(mockPath);
  });
});
