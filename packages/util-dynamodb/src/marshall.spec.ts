import { AttributeValue } from "@aws-sdk/client-dynamodb";

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

  it("should resolve signatures correctly", () => {
    // eslint-disable @typescript-eslint/no-unused-vars
    const ss: AttributeValue.SSMember = marshall(new Set(["a"]));
    const ns: AttributeValue.NSMember = marshall(new Set([0]));
    const bs: AttributeValue.BSMember = marshall(new Set([new Uint8Array()]));
    const s: AttributeValue.SMember = marshall("a");
    const n: AttributeValue.NMember = marshall(0);
    const nil: AttributeValue.NULLMember = marshall(null);
    const bool: AttributeValue.BOOLMember = marshall(false);
    const array: AttributeValue[] = marshall([]);
    const object: Record<string, AttributeValue> = marshall({
      pk: "abc",
      sk: "xyz",
    });
    const unrecognizedClassInstance1: Record<string, AttributeValue> = marshall(new Map());
    const unrecognizedClassInstance2: Record<string, AttributeValue> = marshall(new Date());
    const unrecognizedNonClassInstanceValue: AttributeValue.$UnknownMember = marshall(BigInt(0));
    // eslint-enable @typescript-eslint/no-unused-vars
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
