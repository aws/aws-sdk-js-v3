import { convertToAttr } from "./convertToAttr";
import { marshall } from "./marshall";
import { INativeAttributeValue, NativeAttributeValue } from "./models";

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
      const input = { a: "A", b: "B" };

      [false, true].forEach((value) => {
        it(`passes ${value} to convertToAttr`, () => {
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
    interface TestInputInterface extends INativeAttributeValue<NativeAttributeValue> {
      a: string;
      b: string;
    }
    const input: TestInputInterface = { a: "A", b: "B" };

    expect(marshall(input)).toEqual(mockOutput);
    expect(convertToAttr).toHaveBeenCalledTimes(1);
    expect(convertToAttr).toHaveBeenCalledWith(input, undefined);
  });

  it("with nested interfaces as an input", () => {
    interface IPersonName extends INativeAttributeValue<NativeAttributeValue> {
      firstname: string;
      lastname: string;
    }
    interface IPerson extends INativeAttributeValue<NativeAttributeValue> {
      id: string;
      name: IPersonName;
    }
    const input: IPerson = { id: "id", name: { firstname: "John", lastname: "Doe" } };

    expect(marshall(input)).toEqual(mockOutput);
    expect(convertToAttr).toHaveBeenCalledTimes(1);
    expect(convertToAttr).toHaveBeenCalledWith(input, undefined);
  });
});
