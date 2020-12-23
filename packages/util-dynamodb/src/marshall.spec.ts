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
    expect(marshall(input)).toEqual(input);
    expect(convertToAttr).toHaveBeenCalledTimes(1);
    expect(convertToAttr).toHaveBeenCalledWith(input, undefined);
  });

  ["convertEmptyValues", "removeUndefinedValues"].forEach((option) => {
    describe(`options.${option}`, () => {
      [false, true].forEach((value) => {
        it(`passes ${value} to convertToAttr`, () => {
          expect(marshall(input, { [option]: value })).toEqual(input);
          expect(convertToAttr).toHaveBeenCalledTimes(1);
          expect(convertToAttr).toHaveBeenCalledWith(input, { [option]: value });
        });
      });
    });
  });
});
