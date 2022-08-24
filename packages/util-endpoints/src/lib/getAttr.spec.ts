import { getAttr } from "./getAttr";

describe(getAttr.name, () => {
  describe("object", () => {
    const mockObj = { Thing1: "foo", Thing2: ["index0", "index1"], Thing3: { SubThing: 42 } };

    it.each([
      ["foo", "Thing1"],
      ["index0", "Thing2[0]"],
      ["index1", "Thing2[1]"],
      [42, "Thing3.SubThing"],
    ])("returns '%s' for '%s'", (output, input) => {
      expect(getAttr(mockObj, input)).toEqual(output);
    });
  });

  describe("array", () => {
    const mockArr = ["index0", "index1"];

    it.each([
      [mockArr[0], "[0]"],
      [mockArr[1], "[1]"],
    ])("returns '%s' for '%s'", (output, input) => {
      expect(getAttr(mockArr, input)).toEqual(output);
    });
  });
});
