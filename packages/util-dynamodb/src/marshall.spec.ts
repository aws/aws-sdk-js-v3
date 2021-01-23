import { convertToAttr } from "./convertToAttr";
import { marshall } from "./marshall";

jest.mock("./convertToAttr");

describe("marshall", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("with object as an input", () => {
    const input = { a: "A", b: "B" };
    const output = { a: { S: "A" }, b: { S: "B" } };

    beforeEach(() => {
      (convertToAttr as jest.Mock).mockReturnValue({ M: output });
    });

    it("calls convertToAttr with object input", () => {
      expect(marshall(input)).toEqual(output);
      expect(convertToAttr).toHaveBeenCalledTimes(1);
      expect(convertToAttr).toHaveBeenCalledWith(input, undefined);
    });
  });

  ["convertEmptyValues", "removeUndefinedValues"].forEach((option) => {
    describe(`options.${option}`, () => {
      const input = { a: "A", b: "B" };
      const output = { a: { S: "A" }, b: { S: "B" } };

      beforeEach(() => {
        (convertToAttr as jest.Mock).mockReturnValue({ M: output });
      });

      [false, true].forEach((value) => {
        it(`passes ${value} to convertToAttr`, () => {
          expect(marshall(input, { [option]: value })).toEqual(output);
          expect(convertToAttr).toHaveBeenCalledTimes(1);
          expect(convertToAttr).toHaveBeenCalledWith(input, { [option]: value });
        });
      });
    });
  });

  describe("with type as an input", () => {
    type TestInputType = { a: string; b: string };
    const input: TestInputType = { a: "A", b: "B" };
    const output = { a: { S: "A" }, b: { S: "B" } };

    beforeEach(() => {
      (convertToAttr as jest.Mock).mockReturnValue({ M: output });
    });

    it("calls convertToAttr with object input", () => {
      expect(marshall(input)).toEqual(output);
      expect(convertToAttr).toHaveBeenCalledTimes(1);
      expect(convertToAttr).toHaveBeenCalledWith(input, undefined);
    });
  });

  describe("with Interface as an input", () => {
    interface TestInputInterface {
      a: string;
      b: string;
    }
    const input: TestInputInterface = { a: "A", b: "B" };
    const output = { a: { S: "A" }, b: { S: "B" } };

    beforeEach(() => {
      (convertToAttr as jest.Mock).mockReturnValue({ M: output });
    });

    it("calls convertToAttr with object input", () => {
      expect(marshall(input)).toEqual(output);
      expect(convertToAttr).toHaveBeenCalledTimes(1);
      expect(convertToAttr).toHaveBeenCalledWith(input, undefined);
    });
  });
});
