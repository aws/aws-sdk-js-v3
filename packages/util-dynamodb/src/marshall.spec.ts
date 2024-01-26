import { convertToAttr } from "./convertToAttr";
import { marshall } from "./marshall";

jest.mock("./convertToAttr");

describe("marshall", () => {
  const mockOutput = { S: "mockOutput" };
  (convertToAttr as jest.Mock).mockReturnValue({ M: mockOutput });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("with object as an input", () => {
    const input = { a: "A", b: "B" };
    expect(marshall(input)).toEqual(mockOutput);
    expect(convertToAttr).toHaveBeenCalledTimes(1);
    expect(convertToAttr).toHaveBeenCalledWith(input, undefined);
  });

  ["convertEmptyValues", "removeUndefinedValues"].forEach((option) => {
    describe(`options.${option}`, () => {
      [false, true].forEach((value) => {
        it(`passes ${value} to convertToAttr`, () => {
          const input = { a: "A", b: "B" };
          expect(marshall(input, { [option]: value })).toEqual(mockOutput);
          expect(convertToAttr).toHaveBeenCalledTimes(1);
          expect(convertToAttr).toHaveBeenCalledWith(input, { [option]: value });
        });
      });
    });
  });

  it("with type as an input", () => {
    type TestInputType = { a: string; b: string };
    const input: TestInputType = { a: "A", b: "B" };

    expect(marshall(input)).toEqual(mockOutput);
    expect(convertToAttr).toHaveBeenCalledTimes(1);
    expect(convertToAttr).toHaveBeenCalledWith(input, undefined);
  });

  it("with Interface as an input", () => {
    interface TestInputInterface {
      a: string;
      b: string;
    }
    const input: TestInputInterface = { a: "A", b: "B" };

    expect(marshall(input)).toEqual(mockOutput);
    expect(convertToAttr).toHaveBeenCalledTimes(1);
    expect(convertToAttr).toHaveBeenCalledWith(input, undefined);
  });

  it("with class instance as an input", () => {
    class TestInputClass {
      constructor(private readonly a: string, private readonly b: string) {}
    }
    const input = new TestInputClass("A", "B");

    expect(marshall(input)).toEqual(mockOutput);
    expect(convertToAttr).toHaveBeenCalledTimes(1);
    expect(convertToAttr).toHaveBeenCalledWith(input, undefined);
  });
});
