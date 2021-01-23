import { convertToAttr } from "./convertToAttr";
import { marshall } from "./marshall";
import { INativeAttributeValue, NativeAttributeValue } from "./models";

jest.mock("./convertToAttr");

describe("marshall", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("with object as an input", () => {
    const input = { a: "A", b: "B" };
    const output = { a: { S: "A" }, b: { S: "B" } };
    (convertToAttr as jest.Mock).mockReturnValue({ M: output });

    expect(marshall(input)).toEqual(output);
    expect(convertToAttr).toHaveBeenCalledTimes(1);
    expect(convertToAttr).toHaveBeenCalledWith(input, undefined);
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

  it("with type as an input", () => {
    type TestInputType = { a: string; b: string };
    const input: TestInputType = { a: "A", b: "B" };
    const output = { a: { S: "A" }, b: { S: "B" } };

    (convertToAttr as jest.Mock).mockReturnValue({ M: output });

    expect(marshall(input)).toEqual(output);
    expect(convertToAttr).toHaveBeenCalledTimes(1);
    expect(convertToAttr).toHaveBeenCalledWith(input, undefined);
  });

  it("with Interface as an input", () => {
    interface TestInputInterface extends INativeAttributeValue<NativeAttributeValue> {
      a: string;
      b: string;
    }
    const input: TestInputInterface = { a: "A", b: "B" };
    const output = { a: { S: "A" }, b: { S: "B" } };

    (convertToAttr as jest.Mock).mockReturnValue({ M: output });

    expect(marshall(input)).toEqual(output);
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
    const output = { a: { S: "A" }, b: { S: "B" } };

    (convertToAttr as jest.Mock).mockReturnValue({ M: output });

    expect(marshall(input)).toEqual(output);
    expect(convertToAttr).toHaveBeenCalledTimes(1);
    expect(convertToAttr).toHaveBeenCalledWith(input, undefined);
  });
});
