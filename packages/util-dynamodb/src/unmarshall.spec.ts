import { convertToNative } from "./convertToNative";
import { unmarshall } from "./unmarshall";

jest.mock("./convertToNative");

describe("marshall", () => {
  const input = { a: "A" };

  beforeEach(() => {
    (convertToNative as jest.Mock).mockReturnValue(input);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("calls convertToNative", () => {
    // @ts-ignore output mocked for testing
    expect(unmarshall(input)).toEqual(input);
    expect(convertToNative).toHaveBeenCalledTimes(1);
    expect(convertToNative).toHaveBeenCalledWith({ M: input }, undefined);
  });

  [false, true].forEach((wrapNumbers) => {
    it(`passes wrapNumbers=${wrapNumbers} to convertToNative`, () => {
      // @ts-ignore output mocked for testing
      expect(unmarshall(input, { wrapNumbers })).toEqual(input);
      expect(convertToNative).toHaveBeenCalledTimes(1);
      expect(convertToNative).toHaveBeenCalledWith({ M: input }, { wrapNumbers });
    });
  });
});
