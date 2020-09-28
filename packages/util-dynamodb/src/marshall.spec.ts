import { convertToAttr } from "./convertToAttr";
import { marshall } from "./marshall";

jest.mock("./convertToAttr");

describe("marshall", () => {
  const input = { a: "A", b: "B" };

  beforeEach(() => {
    (convertToAttr as jest.Mock).mockReturnValue({ M: input });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("calls convertToAttr", () => {
    // @ts-ignore output mocked for testing
    expect(marshall(input)).toEqual(input);
    expect(convertToAttr).toHaveBeenCalledTimes(1);
    expect(convertToAttr).toHaveBeenCalledWith(input, undefined);
  });

  [false, true].forEach((convertEmptyValues) => {
    it(`passes convertEmptyValues=${convertEmptyValues} to convertToAttr`, () => {
      // @ts-ignore output mocked for testing
      expect(marshall(input, { convertEmptyValues })).toEqual(input);
      expect(convertToAttr).toHaveBeenCalledTimes(1);
      expect(convertToAttr).toHaveBeenCalledWith(input, { convertEmptyValues });
    });
  });
});
